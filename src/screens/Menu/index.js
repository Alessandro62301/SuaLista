import React from 'react';
import { Container , Scroller , HeaderArea , BaseIconMenu , MenuArea ,MenuTextTitle , BaseItemMenu , ItemMenu , ItemMenuText, BaseFooter , AreaPremiun , AreaLogin , AreaPremiunText ,AreaPremiunTextBold , AreaPemiumSvg , AreaPemiumText , AreaLoginAvatar , AreaLoginTextContent} from './styles';
import CloseIcon from '../../assets/img/close.svg'
import { useNavigation } from '@react-navigation/native';
import HomeIcon from '../../assets/img/home.svg'
import RascunhoIcon from '../../assets/img/lista.svg'
import ListaIcon from '../../assets/img/carrinho.svg'
import HistoricoIcon from '../../assets/img/historico.svg'
import ConfigIcon from '../../assets/img/settings.svg'
import PremiumIcon from '../../assets/img/premium.svg'
import AvatarIcon from '../../assets/img/account.svg'
import {createTable , selectList , selectItem , insertList , insertItem , selectAllItems , removeItem , dropTable ,removeAll} from  './Sqlite.js';

// insertItem(name,cod,price,quantity,codList)
// removeItems()
    // createTable()
    // insertList('Junho',776);
    // insertList('Julho',476);
    // insertList('Agosto',576);
    // insertItem('Arroz',14.5,3,1);
    // insertItem('Batata',6.34,2,1);
    // insertItem('Cenoura',3.2,3,2);
    // insertItem('Xuxu',3.2,3,2);
    
// removeItem(2);
    // selectList()
// selectItem(2)
// selectAllItems()
// removeAll()
// dropTable()
// createTable();
selectAllItems()
selectList()
selectItem(2)



export default ({}) => {
    const navigation = useNavigation();

    return(
        <Container>
            <Scroller>
                <HeaderArea>
                    <BaseIconMenu onPress={()=>navigation.goBack()}>
                        <CloseIcon width="31" height="31"/>
                    </BaseIconMenu>
                </HeaderArea>
                <MenuArea>
                    <MenuTextTitle>Menu</MenuTextTitle>
                    <BaseItemMenu>
                        <ItemMenu onPress={()=>navigation.navigate('Home')}>
                            <HomeIcon width="21" height="21" fill="#000000"></HomeIcon>
                            <ItemMenuText>Home</ItemMenuText>
                        </ItemMenu>
                        <ItemMenu onPress={()=>navigation.navigate('Rascunho')}>
                            <RascunhoIcon width="21" height="21" fill="#000000"></RascunhoIcon>
                            <ItemMenuText>Rascunho</ItemMenuText>
                        </ItemMenu>
                        <ItemMenu onPress={()=>navigation.navigate('Lista')}>
                            <ListaIcon width="21" height="21" fill="#000000"></ListaIcon>
                            <ItemMenuText>Lista</ItemMenuText>
                        </ItemMenu>
                        <ItemMenu onPress={()=>navigation.navigate('Historico')}>
                            <HistoricoIcon width="21" height="21" fill="#000000"></HistoricoIcon>
                            <ItemMenuText>Historico</ItemMenuText>
                        </ItemMenu>
                        <ItemMenu>
                            <ConfigIcon width="21" height="21" fill="#000000"></ConfigIcon>
                            <ItemMenuText>Configurações</ItemMenuText>
                        </ItemMenu>
                    </BaseItemMenu>
                </MenuArea>
                <BaseFooter style={{position: 'absolute', left: 0, right: 0, bottom: -35}}>
                        <AreaPremiun>
                            <AreaPemiumText>
                                <AreaPremiunText>Torne se premium e receba mais praticidade no seu dia</AreaPremiunText>
                                <AreaPremiunTextBold>Cliquei e saiba mais.</AreaPremiunTextBold>
                            </AreaPemiumText>
                            <AreaPemiumSvg>
                                <PremiumIcon width="72" height="60" style={{marginLeft: 30 , marginTop: 10}}></PremiumIcon>
                            </AreaPemiumSvg>
                        </AreaPremiun>
                            <AreaLogin>
                                <AreaLoginAvatar>
                                    <AvatarIcon width="80" height="80" fill="#000000"></AvatarIcon>
                                </AreaLoginAvatar>
                                <AreaLoginTextContent>
                                    <AreaPremiunTextBold style={{marginTop: 10}}>Nome de User</AreaPremiunTextBold>
                                    <AreaPremiunText style={{marginTop: 10}} >Email@email.com</AreaPremiunText>
                                </AreaLoginTextContent>
                            </AreaLogin>
                    </BaseFooter>
            </Scroller>
        </Container>
    );
}