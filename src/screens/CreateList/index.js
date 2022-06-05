import React , {useState , useEffect} from 'react';
import { Container, Wrapper , AreaText , AreaContent , AreaInput , AreaButton, ButtonVoltar, ButtonCriar, ButtonTextWhite, ButtonTextOrange} from './styles';
import { useNavigation } from '@react-navigation/native';
import HeaderArea from '../../components/HeaderArea';
import SingInput from '../../components/SingInput';
import Icon from '../../assets/img/nav_next.svg'
import AsyncStorage from '@react-native-community/async-storage';
import Lista from '../../classes/Lista'

export default ({}) => {
    var arrayList = [];
    const navigation = useNavigation();
    const [nameField, setNameField] = useState('');
    const [valueField, setValueField] = useState();
    //AsyncStorage.clear('arraylist')
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

    const CreateList = () => {
        if(nameField != '' & valueField != null){
            var listTeste = new Lista(nameField , valueField , 0);
            listTeste.items = [];
    
            arrayList.push(listTeste);
            storageList(arrayList)
            console.log('Lista Salva!');
            goTo('Lista');
        }else{
            alert('Preencha os Campos')
        }
    }
    const getList = async () => {
        try {
            arrayList = JSON.parse(await AsyncStorage.getItem("arrayLista"));
        } catch (error) {
            console.log(error); 
        }
    }

    const renderTela = () => {
        getList();
             get = setInterval(() => {
                if (arrayList != null) {
                    goTo('Lista');
                    clearInterval(get)
                }else{
                    clearInterval(get)
                }
            }, 10)
    }

    React.useEffect(() => {
     const unsubscribe = navigation.addListener('focus', () => {
        renderTela()
     });          
     return unsubscribe;
   }, [navigation]);

    return(
        <Container>
            <Wrapper>
                <HeaderArea showName={false} showList={false}>
                </HeaderArea>
            </Wrapper>
            <AreaContent>
                <AreaText>Digite no campo abaixo, e clique em "criar lista" para criar.</AreaText>
            </AreaContent>
            <AreaInput>
                <SingInput 
                    IconSvg={Icon}
                    placeholder="Digite o Nome da Lista"
                    value={nameField}
                    onChangeText={t=>setNameField(t)}
                /> 
                <SingInput 
                    IconSvg={Icon}
                    placeholder="Digite o Saldo"
                    value={valueField}
                    onChangeText={t=>setValueField(t)}
                /> 
            </AreaInput>
            <AreaButton>
                    <ButtonVoltar  onPress={()=>goTo('Home')}>
                        <ButtonTextOrange>Voltar</ButtonTextOrange>
                    </ButtonVoltar>
                    <ButtonCriar onPress={()=>CreateList()}>
                        <ButtonTextWhite>Criar Lista</ButtonTextWhite>
                        <Icon fill="#fff"></Icon>
                    </ButtonCriar>
                </AreaButton>
        </Container>
    );
}