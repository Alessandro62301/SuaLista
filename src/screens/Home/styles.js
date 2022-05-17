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
    height: 200px;
    padding: 0 30px;
    margin-top:30px;
`;
export const TextDicas = styled.Text`
    fontSize: 18px;
    color: #000;
    margin-bottom:25px;
`;
export const TextDicasBold = styled.Text`
    fontSize: 18px;
    color: #000;
    margin-bottom:25px;
    fontWeight: 600;
`;
export const ContainerDicas = styled.View`
    height: 135px;
    background: rgb(255,241,173);
    flex-direction:row;
    justify-content:space-between;
    align-items:space-between;
    border-radius:8px;
`;
export const ContainerDicasText = styled.View`
    height: 100%;
    width: 60%;
    justify-content: center;
    padding-left:20px;
`;
export const ContainerIcon = styled.View`
    width: 40%;
    height: 100%;
    justify-content: center;
    align-items:flex-end;  
`;
export const AreaSlick = styled.View`
    height: 180px;
    padding: 10px 30px;
`;
export const AreaSlickList = styled.View`
    height: 230px;
    padding: 10px 30px;
`;
export const ContainerScroll = styled.ScrollView`
    flex-direction:row;
    margin-left:-10px;
    height: 110px;
    background: transparent;
`;
export const ContainerScrollList = styled.ScrollView`
    flex-direction:row;
    margin-left:-10px;
`;