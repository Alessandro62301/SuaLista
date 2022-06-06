import React , {useEffect , useState} from 'react';
import PreloadSvg from '../../assets/img/roda.svg';
import { Container , TextTitle , TextParagraph , LoadingIcon} from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';

export default () => {
    const Dicas = [
        {title:'Crie Suas Listas',paragraph:'Faça suas listas de forma fácil, adicione preços, quantidades..'},
        {title:'Compartilhe com a Familia',paragraph:'Utilize sua lista compartilhada com facilidade'},
        {title:'Saiba o total de gasto',paragraph:'Com a sua lista você consegue saber o total que ira gastar sem precisar de calculadora.'},
    ]
    const [titleRender,setTitleRender] = useState(Dicas[0].title);
    const [ParagraphRender,setParagraphRender] = useState(Dicas[0].paragraph);

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
        <TextTitle>{titleRender}</TextTitle>
        <TextParagraph>{ParagraphRender}</TextParagraph>
        <PreloadSvg width="300" height="300"/>
        <LoadingIcon size="large" color="#006CF9"/>
    </Container>
    );
  
};