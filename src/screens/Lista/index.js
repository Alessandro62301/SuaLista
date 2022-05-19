import React , { useState } from 'react';
import { Container , HeaderAreaSaldo, HeaderText, HeaderTextGreen , Scroller} from './styles';
import SingInput from '../../components/SingInput'
import Icon from '../../assets/img/email.svg';
import CardItem from '../../components/lista/CardItem';

export default () => {
    const [nameField, setNameField] = useState('Compra do Mes');

    return(
        <Container>
            <Scroller>
            <HeaderAreaSaldo>
                <HeaderText>Saldo:</HeaderText>
                <HeaderTextGreen>R$ 1200</HeaderTextGreen>
            </HeaderAreaSaldo>
            <SingInput 
                IconSvg={Icon}
                placeholder="Nome da Lista"
                value={nameField}
                onChangeText={t=>setNameField(t)}
                />
                <CardItem></CardItem>
            </Scroller>
        </Container>
    );
}