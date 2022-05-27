import React , { useState , useEffect} from 'react';
import { Container , HeaderAreaSaldo, HeaderText, HeaderTextGreen , Scroller , AreaNameList , AreaNameText , HeaderAreaIcon , HeaderAreaText,  AreaTotal ,AreaTotalText, Rows, RowStyled, AreaCard , Wrapper, ContainerCenter , LoadingIcon, HeaderRow , CustomButton ,CustomButtonText , ContainerInput} from './styles';
import CardItem from '../../components/lista/CardItem';
import { useNavigation } from '@react-navigation/native';
import Item from '../../classes/Item';
import Lista from '../../classes/Lista';
import ListaIcon from '../../assets/img/add.svg'
import AsyncStorage from '@react-native-community/async-storage';
import InputItem from  '../../components/InputItem';
import Icon from '../../assets/img/lapis.svg'


    // const lista = new Lista('Compra Maio',400,0);
    // const item = new Item('Arroz',10,1);
    // const item2 = new Item('Frango',20,5);
    // const item3 = new Item('Batata',10,5);
    // const item4 = new Item('lalala',10,5);
    // const item5 = new Item('lalala',10,5);
    // const item6 = new Item('lalala',10,5);
    // const item7 = new Item('lalala',10,5);
    // const item8 = new Item('lalala',10,5);
    // lista.setItem(item);
    // lista.setItem(item2);
    // lista.setItem(item3);
    // lista.setItem(item4);
    // lista.setItem(item5);
    // lista.setItem(item6);
    // lista.setItem(item7);
    // lista.setItem(item8);

export default ({}) => {   
    var teste =  {};
    const navigation = useNavigation();
    const [nameField, setNameField] = useState('');
    const [balanceField, setBalanceField] = useState(0);
    const [totalField, setTotalField] = useState(0);
    const [trocoField, setTrocoField] = useState(0);
    const [loading, setLoading] = useState(true);
    const [list, setList] = useState([]);
    const [showTotal, setShowTotal] = useState(true);
    const [nameItem, setNameItem] = useState('');
    const [priceItem, setPriceItem] = useState('');
    const [showAddArea, setShowAddArea] = useState(false);

    const storageList = async (value) => {
        try {
        await AsyncStorage.setItem("lista", JSON.stringify(value));
        } catch (error) {
        console.log(error);
        }
    }
    //storageList(lista);
    const getList = async () => {
        setLoading(true);
        setList([]);
        try {
            teste = JSON.parse(await AsyncStorage.getItem("lista"));

        } catch (error) {
        console.log(error); 
        }
        setLoading(false);

    }

    const saveList = async () => {
        render();
        var listTeste = new Lista(nameField , balanceField , totalField);
        listTeste.items = list;
        storageList(listTeste)
        console.log('Lista Salva!');
    }
    const render = () => { 
        setTotalField(total())
        setTrocoField(balanceField - total())
    }

    const total = () => {
        var totalTemp = 0;
            list.map(item => {
                totalTemp = totalTemp + (item.price*item.quantity)
            })
            // if(totalTemp > balanceField){
            //     alert('Saldo Insuficiente')
            // }
    return totalTemp;    
    }

    const removeItem = (id) => {

        for(var i = 0 ; i  < list.length ; i++){
            if(list[i].id == id){
                list.splice(i,1);
            }
        }
        setTotalField(total())
        setTrocoField(balanceField - total())
        render();

    }
    const addItem = () => { 
        
         if( showAddArea == true && nameItem != ''  && priceItem != ''){
             const item = new Item(nameItem,parseFloat(priceItem));
             list.push(item);
             setTotalField(total())
             setTrocoField(balanceField - total())
             render();
             console.log('Item Adicionado' + item);
             setNameItem('');
             setPriceItem('')
         }else{
            if(nameItem == '' && priceItem == ''){
                setShowAddArea(!showAddArea)
            }else{
                alert('Preencha os campos')
                setShowAddArea(true)
            }
         }
         
    
        
    }
    
    const renderTela = () => {
        getList();
            get = setInterval(() => {
                if (teste!={}) {
                setList(teste.items)
                console.log(teste);
                setLoading(true)
                setNameField(teste.name)

                setBalanceField(teste.balance)
                setTotalField(teste.total)
                setTrocoField(teste.balance - teste.total)

                clearInterval(get)

                }else{
                setLoading(false)
                }
            }, 10)
    }
    
//   React.useEffect(() => {
//     const unsubscribe = navigation.addListener('focus', () => {

//     });      
//             getList();
//              get = setInterval(() => {
//                  if (teste!={}) {
//                     setList(teste.items)
//                     setLoading(true)
//                     setNameField(teste.name)
//                     setBalanceField(teste.balance)
//                     setTotalField(total())
//                     setTrocoField(balanceField - totalField)

//                     clearInterval(get)

//                  }else{
//                     setLoading(false)
//                  }
//                }, 10)

              

//     return unsubscribe;
//   }, [navigation]);

useEffect(()=>{
    renderTela();
}, []);
   

    return(
        <Container>
            <ContainerCenter>
                <HeaderAreaSaldo>
                    <HeaderAreaText>
                        <HeaderRow>
                            <HeaderText onPress={()=>saveList()}>Saldo:</HeaderText>
                            <HeaderTextGreen>R$ {balanceField}</HeaderTextGreen>
                        </HeaderRow>
                        <AreaNameList>
                            <AreaNameText>Lista : {nameField}</AreaNameText>
                        </AreaNameList>
                    </HeaderAreaText>
                    <HeaderAreaIcon  onPress={()=>setShowAddArea(!showAddArea)}>
                        <ListaIcon width="35" height="35" fill="#F96C00"/>
                    </HeaderAreaIcon>
                </HeaderAreaSaldo>
            </ContainerCenter>

                
                <ContainerInput>
               
                    {showAddArea==true? 
                    <>
                        <InputItem 
                        IconSvg={Icon}
                        placeholder="Nome do Produto"
                        value={nameItem}
                        onChangeText={t=>setNameItem(t)}
                        />
                        <InputItem 
                        IconSvg={Icon}
                        placeholder="Preco do Produto"
                        value={priceItem}
                        onChangeText={t=>setPriceItem(t)}
                        keyboardType = 'number-pad'
                        textContentType = {'telephoneNumber'} /> 
                    </>
                    : <></> }
                        
                    <CustomButton onPress={addItem}>
                        <CustomButtonText>Adicionar</CustomButtonText>
                    </CustomButton>
                </ContainerInput>
            
            <Scroller endFillColor="#fff" indicatorStyle="white">

                <AreaCard>
                {loading===false?  <LoadingIcon size="large" color="#F96C00" /> : 
                list.map(item => ( <CardItem item={item} key={item.id} clickFnAdd={render} remove={removeItem}></CardItem> ))
                }
                </AreaCard>

            </Scroller>
                
            {loading===false? 
            <></>
            : <Wrapper style={{position: 'absolute' , bottom: 0 , opacity: showTotal == true? 1 : 0}}>
            <AreaTotal style={{borderTopRightRadius: 14 , borderTopLeftRadius: 14}}>
            <Rows>
                <AreaTotalText>Total:</AreaTotalText><AreaTotalText>R$ {totalField}</AreaTotalText>
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
                
            }
        </Container>
    );
}