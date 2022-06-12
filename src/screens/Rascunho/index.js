import React , { useEffect , useState } from 'react';
import HeaderArea from '../../components/HeaderArea';
import { Container , AreaList , AreaListText , LoadingIcon} from './styles';
import { useNavigation } from '@react-navigation/native';
import Lista from '../../services/Lista.js'
import Item from '../../services/Item.js'
import ListItem from '../../components/ListItem'


export default () => {
    var arrayList = [];
    const navigation = useNavigation();
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);


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
   renderTela()
}


const renderTela = async () => {
            
     await getList()

     get = setInterval(() => {
         if (arrayList) {
             console.log(arrayList);
             clearInterval(get)
             setLoading(true)
             }else{
                console.log('lalalal');
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
             list.map(item => ( <ListItem item={item} key={item.cod} clickFn={handle}></ListItem> ))}
            </AreaList>
        </Container>
    );
}