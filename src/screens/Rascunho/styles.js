import React from 'react';
import styled from 'styled-components/native';


export const Container = styled.SafeAreaView`
    flex: 1;
    background-color:#FAF5F1;
`;
export const AreaList = styled.ScrollView`
    padding:20px;
    width:100%;
    height:400px;
`;
export const AreaListText = styled.Text`
    font-size:20px;
    color:#000;
`;
export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 100px;
`;
