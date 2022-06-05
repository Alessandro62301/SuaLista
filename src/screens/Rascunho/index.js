import React from 'react';
import HeaderArea from '../../components/HeaderArea';
import { Container } from './styles';
import { useNavigation } from '@react-navigation/native';


export default () => {
    const navigation = useNavigation();

    
    return(
        <Container>
            <HeaderArea></HeaderArea>
        </Container>
    );
}