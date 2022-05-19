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
`;
export const HeaderAreaSaldo = styled.View`
    padding: 30px 0;
    flex-direction:row;
    justify-content: flex-start;
    
`;
export const HeaderTextGreen = styled.Text`
    fontSize: 25px;
    fontWeight: 700;
    color: #2FA776;
    marginLeft: 10px;
`;
export const HeaderText = styled.Text`
    fontSize: 25px;
    fontWeight: 700;
    color: #000;
`;