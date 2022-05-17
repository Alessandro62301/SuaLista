import React from 'react';
import  styled  from 'styled-components';




export const ContainerPadding = styled.SafeAreaView`
    padding: 20px;
    background-color:#f00;
`;




export default () => {
    return (
      <ContainerPadding></ContainerPadding>
    );
}