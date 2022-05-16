import React from 'react';
import { Container , Scroller , HeaderArea , HeaderText , BaseIconMenu ,BaseIconMenuAdd , AreaDicas  ,HomeArea } from './styles';
import MenuIcon from '../../assets/img/menu-left.svg'
import AddIcon from '../../assets/img/add.svg';
import FruitsIcon from '../../assets/img/roda.svg'
import { useNavigation } from '@react-navigation/native';



export default () => {

    const navigation = useNavigation();

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

                    </AreaDicas>
                </HomeArea>



            </Scroller>
        </Container>
    );
}