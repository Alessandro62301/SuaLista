import React from 'react';
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
    margin-bottom:-7px;
`;

export default ({ value , onChangeText,Icon }) => {
    return (
        <InputArea>
            <Input 
            placeholderTextColor="#2FA776"
            value={value}
            onChangeText={onChangeText}
            keyboardType="numeric"
            maxLength={6}
            />
            <Icon width="16" height="16" style={{marginLeft:5}}></Icon>
        </InputArea>
    );
}