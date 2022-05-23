import React from 'react';
import styled from 'styled-components/native';


export const Container = styled.SafeAreaView`
    flex: 1;
    background-color:#FAF5F1;
`;
export const Scroller = styled.ScrollView`
    flex: 1;
    padding: 0 30px;
    background-color:#FAF5F1;
    // align-items: center;
`;
export const ContainerCenter = styled.View`
    padding: 0 30px;
`;
export const HeaderAreaSaldo = styled.View`
    padding: 20px 0;
    flex-direction:row;
    justify-content: space-between;
    width: 100%;    
`;
export const HeaderTextGreen = styled.Text`
    fontSize: 25px;
    fontWeight: 700;
    color: #2FA776;
    marginLeft: 10px;
`;
export const HeaderText = styled.Text`
    fontSize: 25px;
    fontWeight: 700;
    color: #000;
    
`;
export const AreaNameText = styled.Text`
    fontSize: 28px;
    fontWeight: 700;
    color: #F96C00;
`;

export const AreaNameList = styled.View`
    width: 100%;
    height: 60px;
`;

export const HeaderAreaIcon = styled.View`
    
`;
export const HeaderAreaText = styled.View`
    flex-direction:row;
`;
export const AreaAddItem = styled.View`
     width: 100%;
     height: 600px;
     position: absolute;
     margin-top:90px;
     z-index: 100;
     background-color:#fff; 
 `;
export const AreaTotal = styled.View`
    width: 100%;
    height: 50px;
    background: #F96C00;
    align-items: center;
    justify-content: center;
`;
export const Rows = styled.View`
    flex-direction:row;
    width: 250px;
    justify-content: space-between;
    margin: 10px ;
`;
export const AreaTotalText = styled.Text`
    fontSize: 18px;
    color: #fff;
    fontWeight: 700;
`;
export const BackText = styled.View`
    // background: #fff;
    // border-radius: 8px;
    // width: 100px;
    // height: 25px;
    // justify-content: center;
    // align-items: center;
`;
export const RowStyled = styled.View`
    width: 100%;
    height: 2px;
    background: #fff;
    opacity: .5;
`;
export const AreaCard = styled.View`
`;
export const Wrapper = styled.View`
    width: 100%;
    padding: 0 30px;
`;