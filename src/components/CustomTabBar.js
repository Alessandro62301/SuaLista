import React from "react";
import styled from "styled-components";

import HomeIcon from '../assets/img/home2.svg'
import RascunhoIcon from '../assets/img/lista.svg'
import ListaIcon from '../assets/img/carrinho.svg'
import HistoricoIcon from '../assets/img/historico.svg'

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

    const goTo = (screenName) => {
        navigation.navigate(screenName);
    }

    return (
        <TabArea>
            <TabItem onPress={()=>goTo('Home')}>
                <HomeIcon  style={{opacity: state.index===0? 1 : 0.7}} width="28" height="28" fill="#fff" />
            </TabItem>
            <TabItem onPress={()=>goTo('Rascunho')}>
                <RascunhoIcon style={{opacity: state.index===1? 1 : 0.7}}  width="28" height="28" />
            </TabItem>
            <TabItem onPress={()=>goTo('Lista')}>
                <ListaIcon style={{opacity: state.index===2? 1 : 0.7}}  width="28" height="28" />
            </TabItem>
            <TabItem onPress={()=>goTo('Historico')}>
                <HistoricoIcon style={{opacity: state.index===3? 1 : 0.7}} width="28" height="28" />
            </TabItem>
        </TabArea>
    );
}