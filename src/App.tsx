import React, {useState} from 'react';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from './components/NewTransactionModal';
import {TransactionsProvider} from './TransactionsContext'


export function App() {
  
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }


  function handleCloseModal() {
    setIsOpen(false);
  }


  return (
      <TransactionsProvider> 
        <GlobalStyle />
        <Header onOpenModal={openModal}/>
        <Dashboard/>
        <NewTransactionModal isOpen={modalIsOpen} onRequestClose={ handleCloseModal} />
       </TransactionsProvider>

  );
}


