import { useContext } from 'react'
import arrowUp from '../../assets/arrow-up.svg'
import arrowDown from '../../assets/arrow-down.svg'
import total from '../../assets/total.svg'
import { Container } from './styles'
import  {TransactionsContext} from './../../TransactionsContext'


export function Summary(){

  const {transactions} =  useContext( TransactionsContext)

  const summary = transactions.reduce( (acc, transaction)=>{
    if( transaction.type === 'deposit'){
        acc.deposits +=   transaction.amount
        acc.total +=   transaction.amount
    } else{
        acc.withdraws +=   transaction.amount
        acc.total -= transaction.amount
    }
    return acc

  }, {
    deposits: 0,
    withdraws:0,
    total: 0,
  } )

  const formatSummary = ( value: number)=>{
   
    const result =  new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
        }).format(value)

        return result 
  }

    return (
        <Container>
                
                <div> 
                    <header>
                        <p>Entradas</p>
                        <img src={arrowUp} alt="entradas" />
                    </header>
                    <strong> {formatSummary(summary.deposits)}</strong>
                </div>

                <div> 
                    <header>
                        <p>Saídas</p>
                        <img src={arrowDown} alt="saídas" />
                    </header>
                    <strong> {formatSummary(summary.withdraws)}</strong>
                </div>

                <div className="highLightGreen"> 
                    <header>
                        <p>Total</p>
                        <img src={total} alt="total" />
                    </header>
                    <strong>{formatSummary(summary.total)}</strong>
                </div>

           
        </Container>
    )
}