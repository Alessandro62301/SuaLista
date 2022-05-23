import React from "react";
import styled from "styled-components";

import HomeIcon from '../assets/img/home.svg'
import RascunhoIcon from '../assets/img/lista.svg'
import ListaIcon from '../assets/img/carrinho.svg'
import HistoricoIcon from '../assets/img/historico.svg'
import DropShadow from "react-native-drop-shadow";


const TabArea = styled.View`
    height: 90px;
    background-color:#fff;
    flex-direction: row; 
    border-radius:17px;
`;
const TabItem = styled.TouchableOpacity`
    flex: 1;
    justifyContent: center;
    alignItems: center;
`;

export default ({state , navigation }) => {
    const verifyList = 'l';

    const goTo = (screenName) => {
        navigation.navigate(screenName);
    }

    return (
        <DropShadow
        style={{
            shadowColor: "rgba(0,0,0,0.2)",
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowOpacity: 1,
            shadowRadius: 5,
          }}
        > 
        <TabArea style={{display: state.index===4? "none" : "flex"}} >
            <TabItem onPress={()=>goTo('Home')}>
                <HomeIcon  style={{opacity: state.index===0? 1 : 0.7}} width="28" height="28" fill="#F96C00" />
            </TabItem>
            <TabItem onPress={()=>goTo('Rascunho')}>
                <RascunhoIcon style={{opacity: state.index===1? 1 : 0.7}}  width="28" height="28" fill="#F96C00" />
            </TabItem>
            <TabItem onPress={()=>goTo(verifyList===null? 'CreateList' : 'Lista')}>
                <ListaIcon style={{opacity: state.index===2? 1 : 0.7}}  width="28" height="28" fill="#F96C00"/>
            </TabItem>
            <TabItem onPress={()=>goTo('Historico')}>
                <HistoricoIcon style={{opacity: state.index===3? 1 : 0.7}} width="28" height="28" fill="#F96C00"/>
            </TabItem>
        </TabArea>
        </DropShadow>
    );
}