import React from 'react';
import styled from 'styled-components/native';

const InputArea = styled.View`
    width: 100%;
    height: 60px;
    border: 1px solid #c1bbbb;
    flex-direction: row;
    border-radius:8px; 
    margin-top:15px;
    align-items: center;
`;
const Input = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: #006CF9;
    margin-left:10px;
`;

export default ({IconSvg , placeholder ,value , onChangeText ,password}) => {
    return (
        <InputArea>
            <Input 
            placeholder={placeholder}
            placeholderTextColor="#666"
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={password}
            />
            <IconSvg  width="24" height="24" fill="#006CF9" style={{marginRight:16}}/>
        </InputArea>
    );
}