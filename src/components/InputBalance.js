import React from 'react';
import { Platform } from 'react-native'
import styled from 'styled-components/native';

const InputArea = styled.View`
    min-width:100px;
    width: 100%;
    height: 50px;
    flex-direction: row;
    align-items:flex-end;
    /* justify-content:flex-start; */
    padding:0 5px;

`;
const Input = styled.TextInput`
    flex:1;
    color: #2FA776;
    font-size: 25px;
    font-weight: 700;
    padding:0;
    margin-bottom:${Platform.OS=='ios'? '-3px' : '-7px'};
`;

export default ({ value , onChangeText , Icon }) => {
    return (
        <InputArea>
            <Input 
            placeholderTextColor="#2FA776"
            value={value}
            onChangeText={onChangeText}
            keyboardType="numeric"
            maxLength={5}
            />
            {/* <Icon width="16" height="16" style={{marginLeft:0 , marginBottom: Platform.OS=='ios'? 5 : 0}}></Icon> */}
        </InputArea>
    );
}