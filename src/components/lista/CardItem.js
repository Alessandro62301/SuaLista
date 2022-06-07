import React ,{ useState } from "react";
import styled from 'styled-components';
import DropShadow from "react-native-drop-shadow";
import InputPriceItem from "./InputPriceItem";
import CloseIcon from '../../assets/img/closeItem.svg'
import CheckIcon from '../../assets/img/salvar.svg'
import AddIcon from '../../assets/img/mais.svg'
import RemoveIcon from '../../assets/img/menos.svg'
import PencilIcon from '../../assets/img/lapis.svg'


export const Card = styled.View`
    height: 78px;
    border-radius:8px;
    background: #fff;
    flex-direction:row;
    justify-content: space-between;
    align-items: center; 
    margin-top: 15px;
`;
export const TextBold = styled.Text`
    font-size: 18px;
    font-weight: 700;
    color:#000;
`;
export const TextDesc = styled.Text`
    font-size: 16px;
    font-weight: 700;
    width: 140px;
    height: 20px;
    color:#000;
    margin:1px;
`;
export const TextArea = styled.View`
    justify-content: center;
    text-align: left;
    margin-left:20px;
`;
export const PriceArea = styled.View`
    flex-direction:row;
    justify-content: flex-start;
    align-items: center;
    margin-bottom:5px;
`;
export const ButtonArea = styled.TouchableOpacity`
    justify-content:center;
    align-items: center;
    width: 20px;
    height: 20px;
    background: #fff;
    border-radius:8px;
`;
export const CloseArea = styled.View`
    justify-content:flex-start;
    align-items: flex-start;
    width: 20px;
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
    height: 100%;
    justify-content: center;
    align-items:center;
`;
export const Check = styled.View`
    width: 30px;
    height: 30px;
    border: 1px solid #000;
    border-radius:8px;
    margin-left: 20px;
    justify-content: center;
    align-items:center;
`;

export default ({item , clickFnAdd , remove}) => {


    const [statusCheck,setStatusCheck] = useState(item.status);
    const [quantityState,setQuantity] = useState(item.quantity);
    const [price,setPrice] = useState(item.price);
    let teste = '';


    const handleCheck = () => {
        item.status = !item.status;
        setStatusCheck(item.status);
        console.log(item);
    }
    const handleAdd = () => {
        item.quantity = item.quantity + 1;
        setQuantity(item.quantity)
        console.log(item.quantity);
        clickFnAdd()

    }
    const handleRemove = () => {
        if(item.quantity - 1 > -1){
            item.quantity  = item.quantity - 1;
          }    
        setQuantity(item.quantity)
        console.log(item.quantity);
        clickFnAdd()
    }

    const handleClose = () => {
        remove(item.id);
    }
    const changePrice = (t) => {
        t = (t).replace(',','.');

        setPrice(String(t))
        item.price = parseFloat(t);
        console.log(t);
        clickFnAdd()

    }


    return(    
        <DropShadow
        style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowOpacity: 0.3,
            shadowRadius: 3,
            opacity:statusCheck===true? 0.2 : 1,
            paddingLeft:6,
            paddingRight:6,
          }}
        >  
            <Card>
                <TextArea>
                    <PriceArea>
                        <TextBold>R$</TextBold>
                        <InputPriceItem 
                            value={String(price)}
                            onChangeText={(t)=>changePrice(t)}
                        />
                        <PencilIcon style={{marginLeft: 5}}></PencilIcon>
                    </PriceArea>
                    <TextDesc>{item.name[0].toUpperCase() + item.name.substring(1)}</TextDesc>
                </TextArea>
                <AddArea>
                    <ButtonArea onPress={()=>handleRemove()}>
                        <RemoveIcon width="10" height="10" fill="#000"></RemoveIcon>
                    </ButtonArea>
                    <TextBold>{quantityState}</TextBold>
                    <ButtonArea onPress={()=>handleAdd()}>
                        <AddIcon width="10" height="10" fill="#000" ></AddIcon>
                    </ButtonArea>
                </AddArea>
                <CheckArea onPress={()=>handleCheck()}>
                    <Check>
                        {statusCheck===true? <CheckIcon width="24" height="24" fill="#F96C00"></CheckIcon> : <></>}
                    </Check>
                </CheckArea>
                <CloseArea>
                    <CloseIcon width="20" height="20" onPress={()=>handleClose()} ></CloseIcon>
                </CloseArea>
            </Card>
        </DropShadow>
    );
}