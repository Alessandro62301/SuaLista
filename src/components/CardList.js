import React from "react";
import styled from 'styled-components';

import ListIcon from '../assets/img/bolsa.svg';


export const Card = styled.View`
    width: 290px;
    height: 150px;
    background-color: #FFDEAD;
    border-radius:8px; 
    flex-direction:row;
    justify-content: center;
    align-items: center;
    margin-left:10px;
`;
export const CardDescription = styled.Text`
    fontSize: 14px;
    margin-top:10px;
    fontWeight: 700;
    margin-bottom:10px;
`;
export const CardDate = styled.Text`
    fontSize: 14px;
    margin-top:10px;
`;
export const ConteinerText = styled.View`
    width: 50%;
`;


export default ({color , today}) => {

    todayColors = ['#FFDEAD','#FFADBD','#CEADFF','#FFC8AD','#C9FFAD','#ADE9FF','#F1FFAD'];
    todayTitle = ['Segunda Feira','Terca Feira','Quarta Feira','Quinta Feira','Sexta Feira','Sabado','Domingo'];

    var day = parseInt(today.getDay());
    var date = parseInt(today.getDate());
    var month = parseInt(today.getMonth());

    day = day - 1;
    month = month + 1;

    return(    
        <Card style={{backgroundColor:todayColors[day]}}>
            <ConteinerText>
                <CardDescription>A sua Lista de    {todayTitle[day]}</CardDescription>
                <CardDate>Dia 0{month}/{date}</CardDate>
            </ConteinerText>
            <ListIcon width="90" height="130"  style={{marginBottom: 10 , marginRight:-10}} ></ListIcon>
        </Card>
    );
}