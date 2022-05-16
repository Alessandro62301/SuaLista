import React from 'react';
import styled from 'styled-components/native';


export const Container = styled.SafeAreaView`
    flex: 1;
    background-color:#FAF5F1;
    alignItems: center;
`;

//InputArea , SingInput , CustomButton , CustomButtonText ,SingMessageButton ,SingMessageButtonText

export const InputArea = styled.View`
    padding: 40px;
    width: 100%;
`;
export const CustomButton = styled.TouchableOpacity`
    height: 60px;
    background-color:#F96C00; 
    border-radius:8px;
    justifyContent: center;
    alignItems: center;
    margin-top:15px;
`;
export const CustomButtonText = styled.Text`
    fontSize: 18px;
    color: #fff;
    fontWeight: 700;

`;
export const SingMessageButton = styled.TouchableOpacity`
    flex-direction:row;
    justifyContent: center;
    margin-top:20px;
    marginBottom: 20px;
`;
export const SingMessageButtonText = styled.Text`
    fontSize: 16px;
    color: #4f4f4f;
`;
export const SingMessageButtonTextBold = styled.Text`
    fontSize: 16px;
    color: #F96C00;
    fontWeight: 700;
    
`;
export const AreaLoginExternal = styled.View`
    flex-direction:row;
    justify-content:center; 
    margin-top:20px;
`;