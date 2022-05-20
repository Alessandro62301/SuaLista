import React , {useState , useEffect} from 'react';
import { Container, Wrapper , AreaText , AreaContent , AreaInput , AreaButton, ButtonVoltar, ButtonCriar, ButtonTextWhite, ButtonTextOrange} from './styles';
import { useNavigation } from '@react-navigation/native';
import HeaderArea from '../../components/HeaderArea';
import SingInput from '../../components/SingInput';
import Icon from '../../assets/img/nav_next.svg'


export default ({}) => {
    const navigation = useNavigation();
    const [nameField, setNameField] = useState('');
    const [valueField, setValueField] = useState();
    
    const goTo = (screenName) => {
        navigation.navigate(screenName , {name : nameField , balance : valueField});
    }
    const CreateList = () => {
        if(nameField != '' & valueField != null){
            goTo('Lista');
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