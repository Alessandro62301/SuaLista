import React from "react";
import styled from 'styled-components';
import DropShadow from "react-native-drop-shadow";


export const Card = styled.View`
    width: 110px;
    height: 110px;
    background-color: #fff;
    border-radius:8px; 
    justify-content: center;
    align-items: center;
    margin-left:10px;
`;
export const CardTitle = styled.Text`
    fontSize: 16px;
    fontWeight: 700;
    margin-top:10px;
    color:#000;
`;


export default ({title , Icon}) => {

    return(      
        <DropShadow
        style={{
            shadowColor: "#000",
            shadowOffset: {
            width: 0,
            height: 0,
            },
            shadowOpacity: 0.3,
            shadowRadius: 3,
        }}
        >  
        <Card>
            <CardTitle>{title}</CardTitle>
            <Icon width="80" height="80"></Icon>
        </Card>
        </DropShadow>
    );
}