import { Container } from "./styles";
import IncomeImg from '../../assets/Entradas.svg'
import OutcomeImg from '../../assets/Saídas.svg'
import TotalImg from '../../assets/Total.svg'
import { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";
import { access } from "fs";


export function Summary() {

    const {transactions} = useContext(TransactionsContext)

    const summary = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'deposit') {
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;
        } else {
            acc.withdraws += transaction.amount;
            acc.total -= transaction.amount;
        }

        return acc;
    }, {
        deposits: 0, 
        withdraws: 0,
        total: 0,
    })


    return ( 
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={IncomeImg} alt="Entradas" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-br', {
                        style: 'currency',
                        currency: 'brl'
                    }).format(summary.deposits)}
                </strong>
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <img src={OutcomeImg} alt="Saidas" />
                </header>
                <strong>
                    -
                {new Intl.NumberFormat('pt-br', {
                        style: 'currency',
                        currency: 'brl'
                    }).format(summary.withdraws)}
                </strong>
            </div>

            <div className="greenTotal">
                <header>
                    <p>Total</p>
                    <img src={TotalImg} alt="Total" />
                </header>
                <strong>
                {new Intl.NumberFormat('pt-br', {
                        style: 'currency',
                        currency: 'brl'
                    }).format(summary.total)}
                </strong>
            </div>
        </Container>
    );
}