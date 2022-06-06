import React from 'react';
import styled from 'styled-components/native';


export const Container = styled.SafeAreaView`
    flex: 1;
    background-color:#FAF5F1;
`;
export const Scroller = styled.ScrollView`
    flex: 1;
    padding: 0 30px;
    background-color:#FAF5F1;
    // align-items: center;
`;
export const ContainerCenter = styled.View`
    padding: 0 30px;
`;
export const HeaderAreaSaldo = styled.View`
    flex-direction:row;
    justify-content: space-between;
    width: 100%;    
`;
export const HeaderRow = styled.Text`
    flex-direction:row;
    margin-bottom:10px;
    width: 250px;
`;
export const AreaNameText = styled.Text`
    font-size: 20px;
    font-weight: 700;
    color: #000;
`;
export const HeaderTextGreen = styled.TextInput`
    font-size: 25px;
    font-weight: 700;
    color: #2FA776;
    margin-left:20px;
`;
export const HeaderText = styled.Text`
    font-size: 25px;
    font-weight: 700;
    color: #000; 
`;

export const AreaNameList = styled.View`
    width: 100%;
    height: 30px;
`;

export const HeaderAreaIcon = styled.TouchableOpacity`
    justify-content: center;
`;
export const HeaderAreaText = styled.View`
    margin-top:20px;
`;
export const AreaAddItem = styled.View`
     width: 100%;
     height: 600px;
     position: absolute;
     margin-top:90px;
     z-index: 100;
     background-color:#fff; 
 `;
export const AreaTotal = styled.View`
    width: 100%;
    height: 50px;
    background: #006CF9;
    align-items: center;
    justify-content: center;
`;
export const Rows = styled.View`
    flex-direction:row;
    width: 250px;
    justify-content: space-between;
`;
export const AreaTotalText = styled.Text`
    font-size: 18px;
    color: #fff;
    font-weight: 700;
`;
export const RowStyled = styled.View`
    width: 100%;
    height: 2px;
    background: #fff;
`;
export const AreaCard = styled.View`
    margin-bottom:200px;
`;
export const Wrapper = styled.View`
    width: 100%;
    padding: 10px 30px;
    border-top-left-radius:14px;
    border-top-right-radius:14px;
    background: #fff;
`;
export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 100px;
`;
export const CustomButton = styled.TouchableOpacity`
    height: 40px;
    background-color:#006CF9; 
    border-radius:8px;
    justify-content: center;
    align-items: center;
    margin-top:15px;
`;
export const CustomButtonText = styled.Text`
    font-size: 18px;
    color: #fff;
    font-weight: 700;
`;
export const ContainerInput = styled.View`
    padding: 0 30px;
`;