import React , { useState , useEffect} from 'react';
import { Container , HeaderAreaSaldo, HeaderText, HeaderTextGreen , Scroller , AreaNameList , AreaNameText , HeaderAreaIcon , HeaderAreaText,  AreaTotal ,AreaTotalText, Rows, RowStyled, AreaCard , Wrapper, ContainerCenter , BackText} from './styles';
import CardItem from '../../components/lista/CardItem';
import { useNavigation } from '@react-navigation/native';
import Lista from '../../classes/Lista';
import Item from '../../classes/Item';
import ListaIcon from '../../assets/img/add.svg'
import CreateList from '../../screens/CreateList'
import Icon from '../../assets/img/nav_next.svg'
import SingInput from '../../components/SingInput';
import DropShadow from "react-native-drop-shadow";


const lista = new Lista('Compra Maio',100);
const item = new Item('Arroz',10,1);
const item2 = new Item('Frango',20,5);
const item3 = new Item('Batata',10,5);
const item4 = new Item('Leite',8,5);
const item5 = new Item('Cenoura',3,5);
lista.setItem(item);
lista.setItem(item2);
lista.setItem(item3);



export default ({}) => {   

    const navigation = useNavigation();
    const balance = lista.balance;
    const [nameField, setNameField] = useState(lista.name);
    const [balanceField, setBalanceField] = useState(total());
    const [trocoField, setTrocoField] = useState(balance - total());
    const [nameFieldItem, setNameFieldItem] = useState('');
    const [valueField, setValueField] = useState();


    const render = () => { 
        setBalanceField(total())
        setTrocoField(balance - total())
        console.log('balance = ' + lista.balance +  ' total = ' +  total());
        console.log(lista.items);

    }
    function total(){
        var total = 0;
        lista.items.forEach(item => {
            total = total +  Math.round(item.price*item.quantity)
        })
        return total;
    }


  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {


    });
    return unsubscribe;
  }, [navigation]);

    return(
        <Container>
            <ContainerCenter>
                <HeaderAreaSaldo>
                    <HeaderAreaText>
                        <HeaderText onPress={()=>render()}>Saldo:</HeaderText>
                        <HeaderTextGreen >R$ {lista.balance}</HeaderTextGreen>
                    </HeaderAreaText>
                    <HeaderAreaIcon>
                        <ListaIcon width="35" height="35" fill="#F96C00"/>
                    </HeaderAreaIcon>
                </HeaderAreaSaldo>
                <AreaNameList>
                    <AreaNameText>Lista : {nameField}</AreaNameText>
                </AreaNameList>
            </ContainerCenter>

            <Scroller endFillColor="#fff" indicatorStyle="white">

                <AreaCard>
                    {lista.items.map(item => (  
                        <CardItem item={item} key={item.id} clickFnAdd={render}></CardItem> 
                        ))}
                </AreaCard>
                </Scroller>

            <Wrapper style={{position: 'absolute' , bottom: 20 , opacity: lista.items.length > 1? 1 : 0}}>
                <AreaTotal style={{borderTopRightRadius: 14 , borderTopLeftRadius: 14}}>
                <Rows>
                    <AreaTotalText>Total:</AreaTotalText><AreaTotalText>R$ {balanceField}</AreaTotalText>
                </Rows>
                </AreaTotal>
                <RowStyled></RowStyled>
                <AreaTotal style={{backgroundColor: trocoField<0? '#fff' : '#F96C00' , borderBottomRightRadius: 14 , borderBottomLeftRadius: 14}}>
                <Rows>
                    <AreaTotalText style={{color: trocoField<0? '#f00' : '#fff'}}>Saldo de Troco:</AreaTotalText>
                        <AreaTotalText style={{color: trocoField<0? '#f00' : '#fff'}}>R$ {trocoField}</AreaTotalText> 
                </Rows>
                </AreaTotal>
            </Wrapper>
        </Container>
    );
}