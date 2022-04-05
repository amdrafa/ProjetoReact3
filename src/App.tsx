import { useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';
import { GlobalStyle } from './styles/globals';
import { TransactionsContext, TransactionsProvider } from './TransactionsContext';

Modal.setAppElement('#root')

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handreOpenNewTransactionModal(){
    setIsNewTransactionModalOpen(true);  
  }

  function handleCloseNewTransactionModal(){
    setIsNewTransactionModalOpen(false);
  }
  
  return (
    <TransactionsProvider>
      <Header onNewTransactionModalOpen={handreOpenNewTransactionModal}/>


      <Dashboard/>

      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </TransactionsProvider>
    
  );
}

