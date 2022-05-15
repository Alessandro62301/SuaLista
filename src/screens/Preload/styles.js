import React from 'react';
import styled from 'styled-components/native';


export const Container = styled.SafeAreaView`
    flex: 1;
    margin: 0px 20px; 
    background-color:#FAF5F1;
    alignItems: center;
`;
export const TextTitle = styled.Text`
    textAlign: center; 
    fontSize: 20px;
    fontWeight: 700;
    margin-top:150px; 

`;
export const TextParagraph = styled.Text`
    textAlign: center; 
    fontSize: 16px;
    margin-top:20px; 
    margin-bottom:100px; 

`;
export const LoadingIcon = styled.ActivityIndicator`
    margin-top:50px;

`;
