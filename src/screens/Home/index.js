import React from 'react';
import { Container , Scroller , HeaderArea , HeaderText , BaseIconMenu ,BaseIconMenuAdd , AreaDicas  ,HomeArea , TextDicas ,TextDicasBold , ContainerDicas , ContainerDicasText , ContainerIcon , AreaSlick , AreaSlickList ,ContainerScroll , ContainerScrollList} from './styles';
import MenuIcon from '../../assets/img/menu-left.svg'
import AddIcon from '../../assets/img/add.svg';
import FruitsIcon from '../../assets/img/roda.svg'
import { useNavigation } from '@react-navigation/native';
import Item from '../../classes/Item'
import CardItem from '../../components/CardItem';
import CardList from '../../components/CardList';

export default () => {

    var item1 = new Item('carne');
    var today = new Date();
    const navigation = useNavigation();
    console.log(item1);
    return(
        <Container>
            <Scroller>
                <HeaderArea>
                    <BaseIconMenu onPress={()=>navigation.navigate('Menu')}>
                        <MenuIcon width="31" height="20" fill="#000000"/>
                    </BaseIconMenu>
                        <HeaderText>Sua Lista</HeaderText>
                    <BaseIconMenuAdd onPress={()=>navigation.navigate('Lista')}>
                        <AddIcon width="35" height="35"/>
                    </BaseIconMenuAdd>
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