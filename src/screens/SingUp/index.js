import React , {useState} from 'react';
import { Text } from 'react-native';
import { Container , InputArea , CustomButton , CustomButtonText ,SingMessageButton ,SingMessageButtonText ,SingMessageButtonTextBold} from './styles';
import PreloadSvg from '../../assets/img/preloadSvg.svg';
import EmailIcon from '../../assets/img/email.svg';
import LockIcon from '../../assets/img/lock.svg';
import PersonIcon from '../../assets/img/person.svg';
import SingInput from '../../components/SingInput';
import { useNavigation } from '@react-navigation/native';


export default () => {

    const navigation = useNavigation();

    const [emailField, setEmail] = useState('');
    const [passwordField, setPassword] = useState('');
    const [nameField, setNameField] = useState('');

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'SingIn'}]
        })
    }
    const handleSingClick = async() => {
        if(emailField != '' && passwordField != '' && nameField != ''){

        }else{
            alert('Prencha os campos');
        }
    }

    return (
        <Container>
            <PreloadSvg  width="200" height="200" style={{marginTop:60}}/>
            <InputArea>
                <SingInput 
                IconSvg={PersonIcon}
                placeholder="Digite Seu Nome"
                value={nameField}
                onChangeText={t=>setNameField(t)}
                />

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
                    <CustomButtonText>Cadastrar</CustomButtonText>
                </CustomButton>
                <SingMessageButton onPress={handleMessageButtonClick}>
                    <SingMessageButtonText>Já possui uma conta?</SingMessageButtonText>
                    <SingMessageButtonTextBold> Faca Login</SingMessageButtonTextBold>
                </SingMessageButton>
            </InputArea>
        </Container>
    );
   
};