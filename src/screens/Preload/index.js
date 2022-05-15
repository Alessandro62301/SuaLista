import React , {useEffect} from 'react';
import PreloadSvg from '../../assets/img/preloadSvg.svg';
import { Container , TextTitle , TextParagraph , LoadingIcon} from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';
const Dicas = [
    {title:'Crie Suas Listas',paragraph:'Faça suas listas de forma fácil, adicione preços, quantidades..'},
    {title:'Compartilhe com a Familia',paragraph:'Utilize sua lista compartilhada com facilidade'},
    {title:'Saiba o total de gasto',paragraph:'Com a sua lista você consegue saber o total que ira gastar sem precisar de calculadora.'},
]


export default () => {

    const navigation = useNavigation();

    useEffect(()=>{
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token');
            if(token){
                //Validar Token
            }else{
                navigation.navigate('SingIn')
            }
        }
        checkToken();
    },[]);


    return (
    <Container>
        <TextTitle>{Dicas[2].title}</TextTitle>
        <TextParagraph>{Dicas[2].paragraph}</TextParagraph>
        <PreloadSvg width="200" height="200"/>
        <LoadingIcon size="large" color="#F96C00"/>
    </Container>
    );
  
};