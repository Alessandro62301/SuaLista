import React from 'react';
import styled from 'styled-components/native';

//Scroller , HeaderArea , HeaderText , BaseIconMenu 

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color:#FAF5F1;
`;
export const Wrapper = styled.View`
    height: 60px;
    width: 100%;
    align-items: flex-start; 
`;
export const AreaContent = styled.View` 
    align-items: center;
    padding: 30px;
    margin-top:30px;
`;
export const AreaText = styled.Text`
    fontSize: 25px;
    fontWeight: 700;
    color:#000;
`;
export const AreaInput = styled.View` 
    align-items: center;
    padding: 30px;
`;
export const AreaButton = styled.View` 
    padding: 30px;
    flex-direction:row;
    justify-content:space-between;
    margin-top:-20px;
`;
export const ButtonVoltar = styled.TouchableOpacity` 
    width: 130px;
    height: 60px;
    border: 2px solid #F96C00;
    border-radius:8px;  
    align-items: center;
    justify-content: center;
`;
export const ButtonCriar = styled.TouchableOpacity` 
    width: 180px;
    height: 60px;
    background: #F96C00;
    border-radius:8px; 
    flex-direction:row;
    align-items: center;
    justify-content: center;
`;
export const ButtonTextWhite = styled.Text` 
    color: #fff;
    fontSize: 18px;
    fontWeight: 700;
`;
export const ButtonTextOrange = styled.Text` 
    color: #F96C00;
    fontSize: 18px;
    fontWeight: 700;
`;