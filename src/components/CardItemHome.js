import React from "react";
import styled from 'styled-components';

import BananaIcon from '../assets/img/banna.svg'

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

`;


export default ({title}) => {

    return(      
        <Card>
            <CardTitle>{title}</CardTitle>
            <BananaIcon width="80" height="80"></BananaIcon>
        </Card>
    );
}