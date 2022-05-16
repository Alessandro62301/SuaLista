import React , {useState} from 'react';
import { Container , InputArea , CustomButton , CustomButtonText ,SingMessageButton ,SingMessageButtonText ,SingMessageButtonTextBold} from './styles';
import PreloadSvg from '../../assets/img/preloadSvg.svg';
import EmailIcon from '../../assets/img/email.svg';
import LockIcon from '../../assets/img/lock.svg';
import SingInput from '../../components/SingInput';
import { useNavigation } from '@react-navigation/native';


export default () => {

    const navigation = useNavigation();

    const [emailField, setEmail] = useState('');
    const [passwordField, setPassword] = useState('');

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'SingUp'}]
        })
    }
    const handleMessageButtonClickVisitante = () => {
        navigation.reset({
            routes: [{name: 'MainTab'}]
        })
    }
    const handleSingClick = () => {
        if(emailField != '' && passwordField != ''){

        }else{
            alert('Prencha os campos');
        }
    }

    return (
        <Container>
            <PreloadSvg  width="200" height="200" style={{marginTop:60}}/>
            <InputArea>
                <SingInput 
                IconSvg={EmailIcon}
                placeholder="Digite Seu Email"
                value={emailField}
                onChangeText={t=>setEmail(t)}
                />

                <SingInput 
                IconSvg={LockIcon}
                placeholder="Digite Sua Senha"
                value={passwordField}
                onChangeText={t=>setPassword(t)}
                password={true}
                />
                <CustomButton onPress={handleSingClick}>
                    <CustomButtonText>Login</CustomButtonText>
                </CustomButton>
                <SingMessageButton onPress={handleMessageButtonClick}>
                    <SingMessageButtonText>Ainda não possui uma conta?</SingMessageButtonText>
                    <SingMessageButtonTextBold> Cadastra-se</SingMessageButtonTextBold>
                </SingMessageButton>
                
                <SingMessageButton onPress={handleMessageButtonClickVisitante}>
                    <SingMessageButtonTextBold> Entrar como Visitante</SingMessageButtonTextBold>
                </SingMessageButton>
            </InputArea>
        </Container>
    );
   
};