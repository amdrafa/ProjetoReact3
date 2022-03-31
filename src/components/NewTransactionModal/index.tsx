import Modal from 'react-modal';
import { Container, RadioBox, TransactionTypeContainer } from './styles';
import CloseImg from '../../assets/Close.svg';
import IncomeImg from '../../assets/Entradas.svg';
import OutcomeImg from '../../assets/Saídas.svg';
import { FormEvent, useState } from 'react';

interface newTransactionModalProps {
    isOpen: boolean,
    onRequestClose: () => void,
}

export function NewTransactionModal({ isOpen, onRequestClose }:newTransactionModalProps){

    const [type, setType] = useState('deposit');

    function handleCreateNewTransaction(event: FormEvent){
        event.preventDefault();
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
                />

                <input 
                    placeholder='Valor'
                    type='number'
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
                />   

                <button type="submit">
                    Cadastrar
                </button>
            </Container>    

        </Modal>
    );
}