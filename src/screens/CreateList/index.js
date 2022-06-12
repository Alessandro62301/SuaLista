import React , {useState , useEffect} from 'react';
import { Container, Wrapper , AreaText , AreaContent , AreaInput , AreaButton, ButtonVoltar, ButtonCriar, ButtonTextWhite, ButtonTextOrange} from './styles';
import { useNavigation } from '@react-navigation/native';
import HeaderArea from '../../components/HeaderArea';
import SingInput from '../../components/SingInput';
import Icon from '../../assets/img/nav_next.svg'
import AsyncStorage from '@react-native-community/async-storage';
import Lista from '../../services/Lista'
// import {insertList} from  './Sqlite.js';


export default ({}) => {
    var arrayList = [];
    const navigation = useNavigation();
    const [nameField, setNameField] = useState('');
    const [valueField, setValueField] = useState();

    const goTo = (screenName) => {
        navigation.navigate(screenName);
    }

    const setCurrentList = async (value) => {
        try {
        await AsyncStorage.setItem("CurrentList", JSON.stringify(value));
        } catch (error) {
        console.log(error);
        }
    }

    const CreateList = () => {
        if(nameField != '' & valueField != null){
            Lista.create( {name:nameField, balance:valueField, total:0} )
            .then( id => console.log('List created with id: '+ id))
            .catch( err => console.log(err))

            setNameField('')
            setValueField('')
            goTo('Rascunho');
        }else{
            alert('Preencha os Campos')
        }
    }


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