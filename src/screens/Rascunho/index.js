import React , { useEffect , useState } from 'react';
import HeaderArea from '../../components/HeaderArea';
import { Container , AreaList , AreaListText , LoadingIcon} from './styles';
import { useNavigation } from '@react-navigation/native';
import Lista from '../../services/Lista.js'
import Item from '../../services/Item.js'
import ListItem from '../../components/ListItem'
import AsyncStorage from '@react-native-community/async-storage';


export default () => {
    var arrayList = [];
    var teste;
    const navigation = useNavigation();
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);


const goTo = (screenName) => {
    navigation.navigate(screenName);
}

const setCurrentList = async (value) => {
    try {
    await AsyncStorage.setItem("CurrentList", JSON.stringify(value));
    } catch (error) {
    console.log(error);
    }
}

const getList = async () => {
    setLoading(true);
    arrayList = []
    Lista.all()
    .then( 
    lista => lista.forEach( c => {
        arrayList.push(c)
    } )
    )
    setList(arrayList)
    setLoading(false);
}

const handle = () => {
    setCurrentList(null)
    renderTela()
}
const handleList = (cod) => {
    setCurrentList(cod)
    goTo('Lista')
    // console.log('CurrentList Add == ' + cod);
}

const renderTela = async () => {
            
     await getList()

     get = setInterval(() => {
         if (arrayList) {
            //  console.log(arrayList);
             clearInterval(get)
             setLoading(true)
             }else{
                setLoading(false)
             }
 }, 10)

}

// useEffect(()=>{
//     renderTela();
// }, []);

React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
             renderTela()
          });          
          return unsubscribe;
}, [navigation]);
    
    return(
        <Container>
            <HeaderArea/>
            <AreaList>
            {loading===false?  <LoadingIcon size="large" color="#006CF9" /> :
             list.map(item => ( <ListItem item={item} key={item.cod} clickFn={handle} toogleList={handleList}></ListItem> ))}
            </AreaList>
        </Container>
    );
}