import { Container, Content } from "./styles";
import LogoImg from '../../assets/Logo.svg'
import { useState } from "react";
import Modal from 'react-modal'

interface HeaderProps {
    onNewTransactionModalOpen: () => void;
}

export function Header({ onNewTransactionModalOpen }:HeaderProps){

    return (
        <Container>
            <Content>
                <img src={LogoImg} alt="dtmoney" />
                <button type="button" onClick={onNewTransactionModalOpen}>
                    Nova transação
                </button>
            </Content>
            
        </Container>
    )
}