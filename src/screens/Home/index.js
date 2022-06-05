import React from 'react';
import { Platform } from 'react-native'
import { Container , Scroller , AreaDicas  ,HomeArea , TextDicas ,TextDicasBold , ContainerDicas , ContainerDicasText , ContainerIcon , AreaSlick , AreaSlickList ,ContainerScroll , ContainerScrollList} from './styles';
import FruitsIcon from '../../assets/img/roda.svg'
import { useNavigation } from '@react-navigation/native';
import CardItemHome from '../../components/CardItemHome';
import CardList from '../../components/CardList';
import HeaderArea from '../../components/HeaderArea';
import DropShadow from "react-native-drop-shadow";
import AsyncStorage from '@react-native-community/async-storage';
import IconBanana from '../../assets/img/banna.svg';
import IconUva from '../../assets/img/Uva.svg';
import IconMelancia from '../../assets/img/Melancia.svg';
import IconPessego from '../../assets/img/pessego.svg';


export default () => {
    var today = new Date();
    const navigation = useNavigation();

    return(
        <Container>
            <Scroller>
                <HeaderArea>

                </HeaderArea>
                <HomeArea>
                    <AreaDicas>
                            <TextDicas>Dicas</TextDicas>
                            <DropShadow
                            style={{
                                shadowColor: "#000",
                                shadowOffset: {
                                width: 0,
                                height: 0,
                                },
                                shadowOpacity: 0.3,
                                shadowRadius: 5,
                          }}>
                            <ContainerDicas>
                                <ContainerDicasText>
                                    <TextDicas>05/10</TextDicas>
                                    <TextDicasBold>Faça Suas listas de compras</TextDicasBold>
                                </ContainerDicasText>
                                <ContainerIcon>
                                    <FruitsIcon width="120" height="120"></FruitsIcon>
                                </ContainerIcon>
                            </ContainerDicas>
                            </DropShadow>
                    </AreaDicas>
                    <AreaSlick>
                        <TextDicasBold>Selecione rapidamente produtos</TextDicasBold>
                        <ContainerScroll 
                            indicatorStyle="white"
                            horizontal
                            >       
                            <CardItemHome title={'Banana'} Icon={IconBanana}/>
                            <CardItemHome title={'Uva'} Icon={IconUva}/>
                            <CardItemHome title={'Pessego'} Icon={IconPessego}/>
                            <CardItemHome title={'Melancia'} Icon={IconMelancia}/>
                        </ContainerScroll>                           
                    </AreaSlick>
                    <AreaSlickList>
                        <TextDicasBold>Que tal reutilizar, uma de suas listas?</TextDicasBold>
                        <ContainerScrollList 
                         indicatorStyle="white"
                         horizontal>
                            <CardList today={today}/>
                            <CardList today={today}/>
                            <CardList today={today}/>
                        </ContainerScrollList>
                    </AreaSlickList>
                </HomeArea>
            </Scroller>
        </Container>
    );
}