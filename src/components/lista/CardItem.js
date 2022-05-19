import React from "react";
import styled from 'styled-components';

import CloseIcon from '../../assets/img/closeItem.svg'
import AddIcon from '../../assets/img/mais.svg'
import RemoveIcon from '../../assets/img/menos.svg'
import PencilIcon from '../../assets/img/lapis.svg'
export const Card = styled.View`
    width: 100%;
    height: 78px
    border-radius:8px;
    background: #fff;
    flex-direction:row;
    justify-content: space-around;
    align-items: center; 
    
    margin-top:50px;
`;
export const TextBold = styled.Text`
    fontSize: 18px;
    fontWeight: 700;
`;
export const TextDesc = styled.Text`
    fontSize: 16px;
    fontWeight: 700;
`;
export const TextArea = styled.View`
    justify-content: center;
    text-align: left;
`;
export const PriceArea = styled.View`
    flex-direction:row;
    justify-content: flex-start;
    align-items: center;
    margin-bottom:5px;
`;
export const CloseArea = styled.View`
    justify-content:flex-start;
    align-items: flex-start;
    width: 30px;
    height: 100%;
`;
export const AddArea = styled.View`
    flex-direction:row;
    width: 90px;
    height: 30px;
    background: #EAEAEA;
    justify-content: space-around;
    align-items:center;
    border-radius:8px;
`;
export const CheckArea = styled.TouchableOpacity`
    height: 100%
    justify-content: center;
`;
export const Check = styled.View`
    width: 32px;
    height: 32px;
    border: 1px solid #000;
    border-radius:8px;
`;

export default () => {

    return(      
        <Card>
            <CloseArea>
                <CloseIcon></CloseIcon>
            </CloseArea>
            <TextArea>
                <PriceArea>
                    <TextBold>R$3,00</TextBold>
                    <PencilIcon style={{marginLeft: 10}}></PencilIcon>
                </PriceArea>
                <TextDesc>Extrato de tomate</TextDesc>
            </TextArea>
            <AddArea>
                <AddIcon width="10" height="10" fill="#000" ></AddIcon>
                <TextBold>1</TextBold>
                <RemoveIcon width="10" height="10" fill="#000" ></RemoveIcon>
            </AddArea>
            <CheckArea>
                <Check></Check>
            </CheckArea>
        </Card>
    );
}