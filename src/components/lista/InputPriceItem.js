import React from 'react';
import styled from 'styled-components/native';

const InputArea = styled.View`
    width:40px;
    height: 20px;
    flex-direction:row;
    justify-content: flex-start;
    align-items: center;
    margin-bottom:5px;
    margin-left:3px;
`;
const Input = styled.TextInput`
    flex:1;
    padding:0;
    margin-bottom:-5px;
    font-size: 18px;
    font-weight: 700;
    color:#000;
`;

export default ({ value , onChangeText, Icon }) => {
    return (
        <InputArea>
            <Input 
            placeholderTextColor="#2FA776"
            value={value}
            onChangeText={onChangeText}
            keyboardType="numeric"
            maxLength={4}
            />

        </InputArea>
    );
}