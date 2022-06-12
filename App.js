import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/stacks/MainStack'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import UserContextProvider from './src/contexts/UserContext';

import Lista from './src/services/Lista.js'
import Item from './src/services/Item.js'

var teste = [];

// Lista.create( {name:'Lista Nova', balance:1231, total:0} )
// .then( id => console.log('List created with id: '+ id) )
// .catch( err => console.log(err) )

// Lista.update( 1, {name:'AttLista', balance:1333, total:0} )
// .then( updated => console.log('Lista updated: '+ updated) )
// .catch( err => console.log(err) )

// Lista.find( 1 ) 
// .then( lista => console.log(lista) )
// .catch( err => console.log(err) )

// Lista.remove(5)
// .then( updated => console.log('Lista removed: '+ updated) )
// .catch( err => console.log(err) )

// Lista.all()
// .then( 
//   lista => lista.forEach( c => {
//     console.log(c);
//   } )
// )

// Item.create( {name:'Carne', price:30, quantity:3,codList:2} )
// .then( id => console.log('List created with id: '+ id) )
// .catch( err => console.log(err) )

// Lista.update( 1, {name:'AttLista', balance:1333, total:0} )
// .then( updated => console.log('Lista updated: '+ updated) )
// .catch( err => console.log(err) )

// Lista.find( 1 ) 
// .then( lista => console.log(lista) )
// .catch( err => console.log(err) )

// Item.remove(6)
// .then( updated => console.log('Item removed: '+ updated) )
// .catch( err => console.log(err) )

// Item.allInList(1)
// .then( 
// lista => lista.forEach( c => {
// console.log(c);
// } )
// )

Item.allInList(1)
.then( 
lista => lista.forEach( c => {
console.log(c);
} )
)



export default () => {


  return (
  <GestureHandlerRootView style={{ flex: 1 }}>
    <UserContextProvider>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </UserContextProvider>
  </GestureHandlerRootView>
  );
}