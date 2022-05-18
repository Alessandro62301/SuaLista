import React from 'react';
import { Container , Scroller , AreaDicas  ,HomeArea , TextDicas ,TextDicasBold , ContainerDicas , ContainerDicasText , ContainerIcon , AreaSlick , AreaSlickList ,ContainerScroll , ContainerScrollList} from './styles';
import FruitsIcon from '../../assets/img/roda.svg'
import { useNavigation } from '@react-navigation/native';
import Item from '../../classes/Item'
import CardItem from '../../components/CardItem';
import CardList from '../../components/CardList';
import HeaderArea from '../../components/HeaderArea';

export default () => {
    
    var item1 = new Item('carne');
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
                            <ContainerDicas>
                                <ContainerDicasText>
                                    <TextDicas>05/10</TextDicas>
                                    <TextDicasBold>Faça Suas listas de compras</TextDicasBold>
                                </ContainerDicasText>
                                <ContainerIcon>
                                    <FruitsIcon width="120" height="120"></FruitsIcon>
                                </ContainerIcon>
                            </ContainerDicas>
                    </AreaDicas>
                    <AreaSlick>
                        <TextDicasBold>Selecione rapidamente produtos</TextDicasBold>
                        <ContainerScroll 
                            indicatorStyle="white"
                            horizontal>       
                            <CardItem title={'Banana'}/>
                            <CardItem title={'Uva'}/>
                            <CardItem title={'Melancia'}/>
                            <CardItem title={'Pessego'}/>
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