import React from 'react';
import styled from 'styled-components/native';

//Scroller , HeaderArea , HeaderText , BaseIconMenu 

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color:#FAF5F1;
`;
export const Scroller = styled.View`
    flex: 1;
`;
export const HeaderArea = styled.SafeAreaView`
    height: 60px;
    width: 100%;
    flex-direction:row;
    alignItems: center;
    justify-content:space-around;
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
export const HomeArea = styled.View`
  justify-content: center;
`;
export const AreaDicas = styled.View`
`;
