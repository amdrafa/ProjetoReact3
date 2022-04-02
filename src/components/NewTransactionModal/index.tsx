import Modal from 'react-modal';
import { Container, RadioBox, TransactionTypeContainer } from './styles';
import CloseImg from '../../assets/Close.svg';
import IncomeImg from '../../assets/Entradas.svg';
import OutcomeImg from '../../assets/Saídas.svg';
import { FormEvent, useState } from 'react';
import { api } from '../../services/api'

interface newTransactionModalProps {
    isOpen: boolean,
    onRequestClose: () => void,
}

export function NewTransactionModal({ isOpen, onRequestClose }:newTransactionModalProps){

    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState('');


    const [type, setType] = useState('deposit');

    function handleCreateNewTransaction(event: FormEvent){
        event.preventDefault();

        const data = {
            title,
            value,
            category,
            type,
        };

        api.post('/transactions', data)
        

    }

    return (
        <Modal 
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName='react-modal-overlay'
        className='react-modal-content'
        >

            <button
                type='button' 
                onClick={onRequestClose} 
                className='react-modal-close'
                >
                    <img src={CloseImg} alt="Fechar" />
            </button>

            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar transação</h2>

                <input 
                    placeholder='Título'
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />

                <input 
                    placeholder='Valor'
                    type='number'
                    value={value}
                    onChange={event => setValue(Number(event.target.value))}
                />   

                <TransactionTypeContainer>
                    <RadioBox
                    type='button'
                    onClick={() => {setType('deposit');}}
                    isActive= {type === 'deposit'}
                    activeColor= 'green'
                    >
                        <img src={IncomeImg} alt="Entradas" />
                        <span>Entradas</span>
                    </RadioBox>
                    <RadioBox
                    type='button'
                    onClick={() => {setType('withdraw');}}
                    isActive= {type === 'withdraw'}
                    activeColor= 'red'
                    >
                        <img src={OutcomeImg} alt="Saídas" />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input 
                    placeholder='Categoria'
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                />   

                <button type="submit">
                    Cadastrar
                </button>
            </Container>    

        </Modal>
    );
}