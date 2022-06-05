import React , { useState , useEffect} from 'react';
import { Container , HeaderAreaSaldo, HeaderText, HeaderTextGreen , Scroller , AreaNameList , AreaNameText , HeaderAreaIcon , HeaderAreaText,  AreaTotal ,AreaTotalText, Rows, RowStyled, AreaCard , Wrapper, ContainerCenter , LoadingIcon, HeaderRow , CustomButton ,CustomButtonText , ContainerInput} from './styles';
import CardItem from '../../components/lista/CardItem';
import { useNavigation } from '@react-navigation/native';
import Item from '../../classes/Item';
import Lista from '../../classes/Lista';
import ListaIcon from '../../assets/img/salvar.svg'
import AsyncStorage from '@react-native-community/async-storage';
import InputItem from  '../../components/InputItem';
import Icon from '../../assets/img/lapis.svg'


export default ({}) => { 
    var arrayList = [];
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

        get = setInterval(() => {
            if(arrayList == null){
                goTo('CreateList')
            }else{
            if (arrayList[indexList] != null) {

                console.log(arrayList);
                
                setList(arrayList[indexList].items)
                setLoading(true)
                setNameField(arrayList[indexList].name)

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
    

useEffect(()=>{
    renderTela();
}, []);
   

    return(
        <Container>
            <ContainerCenter>
                <HeaderAreaSaldo>
                    <HeaderAreaText>
                        <HeaderRow>
                            <HeaderText>Saldo:</HeaderText>
                            <HeaderTextGreen>R$ {balanceField}</HeaderTextGreen>
                        </HeaderRow>
                        <AreaNameList>
                            <AreaNameText>Lista : {nameField}</AreaNameText>
                        </AreaNameList>
                    </HeaderAreaText>
                    <HeaderAreaIcon  onPress={()=>saveList(indexList)}>
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
                <AreaTotalText>Total:</AreaTotalText><AreaTotalText>R$ {(totalField).toFixed(2)}</AreaTotalText>
            </Rows>
            </AreaTotal>
            <RowStyled></RowStyled>
            <AreaTotal style={{backgroundColor: trocoField<0? '#fff' : '#F96C00' , borderBottomRightRadius: 14 , borderBottomLeftRadius: 14}}>
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