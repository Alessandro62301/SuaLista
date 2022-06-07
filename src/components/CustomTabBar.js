import React , { useEffect, useState }from "react";
import { Keyboard } from 'react-native';
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
    justify-content: center;
    align-items: center;
`;

export default ({state , navigation }) => {
    const verifyList = 'l';

    const goTo = (screenName) => {
        navigation.navigate(screenName);
    }
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
            //Whenever keyboard did show make it don't visible
            setVisible(false);
        });
        const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
            setVisible(true);
        });

        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };
    }, []);

    return  visible &&(
        <DropShadow
        style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowOpacity: 0.3,
            shadowRadius: 5,
          }}
        > 
        <TabArea style={{display: state.index===4? "none" : "flex"}} >
            <TabItem onPress={()=>goTo('Home')}>
                <HomeIcon width="28" height="28" fill={ state.index===0? '#006CF9' : '#666'} />
            </TabItem>
            <TabItem onPress={()=>goTo('Rascunho')}>
                <RascunhoIcon   width="28" height="28" fill={ state.index===1? '#006CF9' : '#666'}/>
            </TabItem>
            <TabItem onPress={()=>goTo(verifyList===null? 'CreateList' : 'Lista')}>
                <ListaIcon width="28" height="28" fill={ state.index===2? '#006CF9' : '#666'}/>
            </TabItem>
            <TabItem onPress={()=>goTo('Historico')}>
                <HistoricoIcon  width="28" height="28" fill={ state.index===3? '#006CF9' : '#666'}/>
            </TabItem>
        </TabArea>
        </DropShadow>
    );
}