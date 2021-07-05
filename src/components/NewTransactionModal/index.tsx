
import {useState, FormEvent, useContext } from 'react';
import Modal from 'react-modal';
import {Container} from './styles'
import close from '../../assets/close.svg'
import arrowUp from '../../assets/arrow-up.svg'
import arrowDown from '../../assets/arrow-down.svg'
import {TransactionTypeContainer,RadioBox} from './styles'
import {TransactionsContext} from './../../TransactionsContext'

interface ModalProps{
   isOpen: boolean;
   onRequestClose : ()=>void;
}

Modal.setAppElement('#root');

export function NewTransactionModal({isOpen,onRequestClose}:ModalProps) {

    const{createTransaction} = useContext(TransactionsContext)

    const [type, setType] = useState('deposit');
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');
  
   async function handleCreateNewTransaction(event:FormEvent){
        event.preventDefault();
        const data = {
            title,
            amount,
            category, 
            type,
        }

        await createTransaction(data)
        setType('deposit')
        setTitle('')
        setAmount(0)
        setCategory('')
        onRequestClose()
    }

    return (
        <Modal 
          overlayClassName="react-modal-overlay"
          className="react-modal-content"
          isOpen={isOpen} 
          onRequestClose={onRequestClose}
          contentLabel="Example Modal">

            <button
            type="button"
            onClick={onRequestClose}
            className="react-modal-close"
        >
            <img src={close} alt="Fechar modal" />
        </button>
            
            <Container onSubmit={handleCreateNewTransaction}>
                 <h2>Cadastrar transação</h2>
                 <input value={title} onChange={event => setTitle(event.target.value)} placeholder="Título"/>
                 <input value={amount} onChange={event => setAmount(Number(event.target.value))} type="number" placeholder="Valor"/>


                 <TransactionTypeContainer>
                        <RadioBox
                            type="button"
                            onClick={() => { setType('deposit') }}
                            isActive={type === 'deposit'}
                            activeColor="green"
                        >
                            <img src={arrowUp} alt="Entrada" />
                            <span>Entrada</span>
                        </RadioBox>

                        <RadioBox
                            type="button"
                            onClick={() => { setType('withdraw') }}
                            isActive={type === 'withdraw'}
                            activeColor="red"
                        >
                            <img src={arrowDown} alt="Saída" />
                            <span>Saída</span>
                        </RadioBox>
                </TransactionTypeContainer>


                 <input value={category} onChange={event => setCategory(event.target.value)} placeholder="Categoria"/>
                 <button type="submit">Cadastrar </button>
            </Container>
         
        </Modal>
    )

}