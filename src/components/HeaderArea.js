import React from 'react';
import MenuIcon from '../assets/img/menu-left.svg'
import AddIcon from '../assets/img/add.svg';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components';
import DropShadow from "react-native-drop-shadow";


export const Container = styled.SafeAreaView`
    background-color:#FAF5F1;
`;
export const HeaderArea = styled.SafeAreaView`
    height: 60px;
    width: 100%;
    flex-direction:row;
    alignItems: center;
    justify-content:space-around;
    margin-top:20px;
`;
export const HeaderText = styled.Text`
    fontSize: 24px;
    fontWeight: 700;
    color: #000000;
`;
export const BaseIconMenu = styled.TouchableOpacity`
    width: 60px;
    height: 60px;
    background-color:#ffffff; 
    border-radius:8px;
    alignItems: center;
    justify-content: center;
`;

export const BaseIconMenuAdd = styled.TouchableOpacity`
    width: 60px;
    height: 60px;
    border-radius:8px;
    align-items: center;
    justify-content: center;
`;


export default ({showList, showName, showMenu}) => {

    const navigation = useNavigation();

    return(
        <Container>
                <HeaderArea>
                    <DropShadow
                        style={{
                            shadowColor: "#000",
                            shadowOffset: {
                            width: 0,
                            height: 0,
                            },
                            shadowOpacity: 0.2,
                            shadowRadius: 5,
                        }}
                    >  
                    <BaseIconMenu onPress={()=>navigation.navigate('Menu')} style={{opacity: showMenu === false ? 0 : 1}}>
                        <MenuIcon width="31" height="20" fill="#000000"/>
                    </BaseIconMenu>
                    </DropShadow>
                        <HeaderText style={{opacity: showName === false ? 0 : 1}}>Sua Lista</HeaderText>
                    <BaseIconMenuAdd onPress={()=>navigation.navigate('CreateList')} style={{opacity: showList === false ? 0 : 1}}>
                        <AddIcon width="35" height="35"/>
                    </BaseIconMenuAdd>
                </HeaderArea>
        </Container>
    );
}