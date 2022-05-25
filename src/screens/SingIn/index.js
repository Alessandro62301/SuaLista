import React , {useState} from 'react';
import { Container , InputArea , CustomButton , CustomButtonText ,SingMessageButton ,SingMessageButtonText ,SingMessageButtonTextBold , AreaLoginExternal} from './styles';
import PreloadSvg from '../../assets/img/roda.svg';
import EmailIcon from '../../assets/img/email.svg';
import LockIcon from '../../assets/img/lock.svg';
import SingInput from '../../components/SingInput';
import { useNavigation } from '@react-navigation/native';
import GoogleIcon from '../../assets/img/Google.svg';
import AppleIcon from '../../assets/img/Apple.svg';

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
            <PreloadSvg  width="200" height="200" style={{marginTop:15}}/>
            <InputArea>
                <SingInput 
                IconSvg={EmailIcon}
                placeholder="Digite Seu Email"
                value={emailField}
                onChangeText={t=>setEmail(t)}
                keyBoardType={'email-address'}
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

                <SingMessageButton>
                    <SingMessageButtonText>Esqueceu sua senha?</SingMessageButtonText>
                </SingMessageButton>

                <AreaLoginExternal>    
                    <GoogleIcon width="160" height="60" fill="#000"></GoogleIcon>  
                    <AppleIcon  width="160" height="60" fill="#000"></AppleIcon>
                </AreaLoginExternal>

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