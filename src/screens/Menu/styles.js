import React from 'react';
import styled from 'styled-components/native';

//Scroller , HeaderArea , HeaderText , BaseIconMenu 

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color:#ffffff;
`;
export const Scroller = styled.View`
    flex: 1;
`;
export const HeaderArea = styled.SafeAreaView`
    height: 60px;
    width: 100%;
    flex-direction:row;
    align-items: center;
    justify-content:flex-start;
    margin-left:30px;
    margin-top:20px;
`;

export const BaseIconMenu = styled.TouchableOpacity`
    width: 60px;
    height: 60px;
    background-color:#ffffff; 
    border-radius:8px;
    align-items: center;
    justify-content: center;
`;
export const MenuArea = styled.SafeAreaView`
    margin-top:46px; 
`;
export const MenuTextTitle = styled.Text`
    font-weight: 700;
    font-size: 40px;
    margin-left:40px;
    color:#000;
`;
export const BaseItemMenu = styled.View`
    margin-top:64px; 
`;
export const ItemMenu = styled.TouchableOpacity`
    flex-direction:row;
    align-items:center;
    height: 30px;
    margin-left:60px
    margin-bottom:28px;
`;
export const ItemMenuText = styled.Text`
    font-size: 20px;
    margin-left:40px;
    color:#000;
`;
export const BaseFooter = styled.SafeAreaView`
    background-color:#F3F3F3;
`;
export const AreaPremiun = styled.TouchableOpacity`
    width: 100%;
    height: 120px;
    background-color:#FFDEAD;
    flex-direction:row;
    aling-items:center;
    justify-content: center;
`;
export const AreaPemiumText = styled.View`
    width: 66%;
    justify-content: center;
    aling-items:center;
`;
export const AreaPemiumSvg = styled.View`
    width: 33%;
    flex-direction:row;
    justify-content: center;
    alignItems: center;
`;
export const AreaPremiunText = styled.Text`
    fontSize: 16px;
    margin-bottom: 8px;
    margin-left:30px;
    color:#000;
`;
export const AreaPremiunTextBold = styled.Text`
    fontSize: 16px;
    fontWeight: 700;
    margin-left:30px;
    color:#000;
`;
export const AreaLogin = styled.TouchableOpacity`
    height: 150px;
    background-color:#F3F3F3;
    flex-direction:row;
`;
export const AreaLoginAvatar = styled.View`
    width: 30%;
    height: 100%;
    flex-direction:row;
    justify-content:center;
    align-items:flex-start;
    margin-top:20px;
    margin-left:10px;
`;
export const AreaLoginTextContent = styled.View`
    width: 70%;
    height: 100%;
    justify-content:flex-start;
    align-items:flex-start;
    margin-top:20px;

`;
