import React from 'react';
import logo from '../../assets/logo.svg'
import {Container, Content} from './styles'

interface HeaderProps{
    onOpenModal : ()=> void
}

export function Header({onOpenModal}: HeaderProps){


    return (
        <Container>
            <Content>
                <img src={logo} alt="dtmoney" />
                <button onClick={onOpenModal} type="button">Nova Transação</button>
            </Content>
        </Container>
    )
}