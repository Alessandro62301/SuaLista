import React , { useState , useEffect} from 'react';
import { Keyboard , StatusBar } from 'react-native';
import { Container , HeaderAreaSaldo, HeaderText, HeaderTextGreen , Scroller , AreaNameList , AreaNameText , HeaderAreaIcon , HeaderAreaText,  AreaTotal ,AreaTotalText, Rows, RowStyled, AreaCard , Wrapper, ContainerCenter , LoadingIcon, HeaderRow , CustomButton ,CustomButtonText , ContainerInput} from './styles';
import CardItem from '../../components/lista/CardItem';
import { useNavigation } from '@react-navigation/native';
import Item from '../../classes/Item';
import Lista from '../../classes/Lista';
import ListaIcon from '../../assets/img/salvar.svg'
import AsyncStorage from '@react-native-community/async-storage';
import InputItem from  '../../components/InputItem';
import Icon from '../../assets/img/lapis.svg'
import InputBalance from '../../components/InputBalance';
import Colors from '../../components/Function'
import { selectItem } from '../Menu/Sqlite.js';

export default ({}) => { 
    var arrayList = [];
    const navigation = useNavigation();
    const [nameField, setNameField] = useState('');
    const [balanceField, setBalanceField] = useState(0);
    const [totalField, setTotalField] = useState(0);
    const [trocoField, setTrocoField] = useState(0);
    const [loading, setLoading] = useState(true);
    const [list, setList] = useState([]);
    const [showTotal, setShowTotal] = useState(false);
    const [nameItem, setNameItem] = useState('');
    const [priceItem, setPriceItem] = useState('');
    const [showAddArea, setShowAddArea] = useState(false);
    const indexList = 0;

    const goTo = (screenName) => {
        navigation.navigate(screenName);
    }

    const storageList = async (value) => {
        try {
        await AsyncStorage.setItem("arrayLista", JSON.stringify(value));
        } catch (error) {
        console.log(error);
        }
    }
    //storageList(listas);
    const getList = async () => {
        setLoading(true);
        setList([]);
        try {
            arrayList = JSON.parse(await AsyncStorage.getItem("arrayLista"));
        } catch (error) {
            console.log(error); 
        }
        setLoading(false);

    }

    const saveList = async (id) => {
        render();
        var listTeste = new Lista(nameField , balanceField , totalField);
        listTeste.items = list;

        arrayList[id] = listTeste;
        storageList(arrayList)
        console.log('Lista Salva!');
        alert('Lista Salva!');
    }

    const render = () => { 
        setTotalField(total())
        setTrocoField((balanceField - total()))
    }

    const total = () => {
        var totalTemp = 0;
            list.map(item => {
                totalTemp = totalTemp + (item.price*item.quantity)
            })
            totalTemp;
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
            
            if(isNaN(parseFloat(priceItem))){
                alert('Preco Invalido');
                setPriceItem('')
            }else{
                
            const item = new Item(nameItem,parseFloat(priceItem));
            list.push(item);
            setTotalField(total())
            setTrocoField(balanceField - total())
            render();
            console.log('Item Adicionado' + item);
            setNameItem('');
            setPriceItem('')
            }

            
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
        // var testeSqlite =  selectItem(1);


        get = setInterval(() => {
            if(arrayList == null){
                goTo('CreateList')
            }else{
            if (arrayList[indexList] != null) {
                setLoading(true)
                console.log(arrayList);
                
                setList(arrayList[indexList].items)
                
                setNameField(arrayList[indexList].name)
                setShowTotal(true);
                setBalanceField((arrayList[indexList].balance))
                setTotalField(arrayList[indexList].total)
                setTrocoField(arrayList[indexList].balance - arrayList[indexList].total)

                clearInterval(get)

                }else{
                    setLoading(false)
                }
            }
        
    }, 10)

    }

    // const changeBalance = (t) => {
    //     if(t === ''|| t == null){
    //         setBalanceField(0)
    //     }else{
    //         setBalanceField(parseFloat(t))
    //     }
    //     console.log(t);   
    // }

    const changePriceItem = (t) => {
        if(t[0] == '.' || t[0] == ','){
            return;
        }
        t = (t).replace(',','.');
        setPriceItem(t)
    }

    const keyboardView = () => {
        const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
            setShowTotal(false);
        });
        const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
            setShowTotal(true);
        });

        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };
    }
    

useEffect(()=>{
    renderTela();
    keyboardView();
}, []);
   

    return(
        <Container>
            {loading&&
            <>
            <ContainerCenter>
                <HeaderAreaSaldo>
                    <HeaderAreaText>
                        <HeaderRow>
                            <HeaderText>Saldo: <HeaderTextGreen>R$</HeaderTextGreen></HeaderText>
                            <InputBalance
                                value={String(balanceField)}
                                onChangeText={t=>setBalanceField(parseFloat(t))}
                                Icon={Icon}
                                />
                        </HeaderRow>
                        <AreaNameList>
                            <AreaNameText>Lista : {nameField}</AreaNameText>
                        </AreaNameList>
                    </HeaderAreaText>
                    <HeaderAreaIcon  onPress={()=>saveList(indexList)}>
                        <ListaIcon width="35" height="35" fill="#2FA776"/>
                    </HeaderAreaIcon>
                </HeaderAreaSaldo>
            </ContainerCenter>
                
                <ContainerInput>
               
                    {showAddArea&& 
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
                        onChangeText={t=>changePriceItem(t)}
                        keyboardType="numeric"
                        maxLength={4}
                       /> 
                    </>
                    }
                        
                    <CustomButton onPress={addItem}>
                        <CustomButtonText>Adicionar</CustomButtonText>
                    </CustomButton>
                </ContainerInput>
                </>
            }
            <Scroller endFillColor="#fff" indicatorStyle="white">

                <AreaCard>
                {loading===false?  <LoadingIcon size="large" color="#006CF9" /> : 
                list.map(item => ( <CardItem item={item} key={item.id} clickFnAdd={render} remove={removeItem}></CardItem> ))
                }
                </AreaCard>
            

            </Scroller>
                
            {loading&& 
            showTotal&&<Wrapper style={{position: 'absolute' , bottom: 0}}>
            <AreaTotal style={{borderTopRightRadius: 14 , borderTopLeftRadius: 14}}>
            <Rows>
                <AreaTotalText>Total:</AreaTotalText><AreaTotalText>R$ {(totalField).toFixed(2)}</AreaTotalText>
            </Rows>
            </AreaTotal>
            <RowStyled></RowStyled>
            <AreaTotal style={{backgroundColor: trocoField<0? '#fff' : '#006CF9' , borderBottomRightRadius: 14 , borderBottomLeftRadius: 14}}>
            <Rows>
                <AreaTotalText style={{color: trocoField<0? '#f00' : '#fff'}}>Saldo de Troco:</AreaTotalText>
                    <AreaTotalText style={{color: trocoField<0? '#f00' : '#fff'}}>R$ {(trocoField).toFixed(2)}</AreaTotalText> 
            </Rows>
            </AreaTotal>
            </Wrapper>
            }
        </Container>
    );
}