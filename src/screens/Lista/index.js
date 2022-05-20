import React , { useState } from 'react';
import { Container , HeaderAreaSaldo, HeaderText, HeaderTextGreen , Scroller , AreaNameList , AreaNameText} from './styles';
import SingInput from '../../components/SingInput'
import Icon from '../../assets/img/email.svg';
import CardItem from '../../components/lista/CardItem';
import { useNavigation } from '@react-navigation/native';
import Item from '../../classes/Item';
import Lista from '../../classes/Lista';

export default ({route}) => {    
    const navigation = useNavigation();
    const lista = new Lista(route.params?.name,route.params?.balance);
    // var item1 = new Item('Arroz',10,1);
    // var item2 = new Item('Batata',3,4);
    // var item3 = new Item('Cenoura',1,6);
    // var item4 = new Item('Leite',2,5);
    // var item5 = new Item('Leite',2,5);
    // var lista1 = new Lista('Maio',1200);
    // lista1.setItem(item1);
    // lista1.setItem(item2);
    // lista1.setItem(item3);
    // lista1.setItem(item4);
    // lista1.setItem(item5);
    
    const [nameField, setNameField] = useState(lista.name);
    const [balance, setBalance] = useState(lista.balance);
    
    // const teste = () => {
    //     setBalance(route.params?.name);
    //     setNameField(route.params?.balance);
    // }
    return(
        <Container>
            <Scroller endFillColor="#fff" indicatorStyle="white">
            <HeaderAreaSaldo>
                <HeaderText onPress={()=>teste()}>Saldo:</HeaderText>
                <HeaderTextGreen>R$ {balance}</HeaderTextGreen>
            </HeaderAreaSaldo>
            <AreaNameList>
                <AreaNameText>Lista : {nameField}</AreaNameText>
            </AreaNameList>

                {lista.items.map(item => (  
                    <CardItem item={item} ></CardItem> 
                ))}  
            </Scroller>
        </Container>
    );
}