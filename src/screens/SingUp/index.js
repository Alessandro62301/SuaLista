import React , {useState} from 'react';
import { Container , InputArea , CustomButton , CustomButtonText ,SingMessageButton ,SingMessageButtonText ,SingMessageButtonTextBold , AreaLoginExternal , Check } from './styles';
import EmailIcon from '../../assets/img/email.svg';
import LockIcon from '../../assets/img/lock.svg';
import PersonIcon from '../../assets/img/person.svg';
import TodayIcon from '../../assets/img/today.svg'
import GoogleIcon from '../../assets/img/Google.svg';
import AppleIcon from '../../assets/img/Apple.svg';
import SingInput from '../../components/SingInput';
import { useNavigation } from '@react-navigation/native';


export default () => {

    const navigation = useNavigation();

    const [emailField, setEmail] = useState('');
    const [passwordField, setPassword] = useState('');
    const [nameField, setNameField] = useState('');
    const [numeroField, setNumeroField] = useState('');
    const [dateField, setDateField] = useState('');

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
    const [isSelected, setSelection] = useState(false);

    return (
        <Container>
            <InputArea style={{marginTop: 30}}>
                <SingInput 
                IconSvg={PersonIcon}
                placeholder="Digite Seu Nome"
                value={nameField}
                onChangeText={t=>setNameField(t)}
                />

                <SingInput 
                IconSvg={EmailIcon}
                placeholder="Digite Seu Numero"
                value={numeroField}
                onChangeText={t=>setNumeroField(t)}
                />

                <SingInput 
                IconSvg={EmailIcon}
                placeholder="Digite Seu Email"
                value={emailField}
                onChangeText={t=>setEmail(t)}
                />

                <SingInput 
                IconSvg={TodayIcon}
                placeholder="Digite Sua Data de Nascimento"
                value={dateField}
                onChangeText={t=>setDateField(t)}
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

                <AreaLoginExternal>    
                    <GoogleIcon width="160" height="60" fill="#000"></GoogleIcon>  
                    <AppleIcon  width="160" height="60" fill="#000"></AppleIcon>
                </AreaLoginExternal>

                <SingMessageButton onPress={handleMessageButtonClick}>
                    <SingMessageButtonText>Já possui uma conta?</SingMessageButtonText>
                    <SingMessageButtonTextBold> Faca Login</SingMessageButtonTextBold>
                </SingMessageButton>
            </InputArea>
        </Container>
    );
   
};