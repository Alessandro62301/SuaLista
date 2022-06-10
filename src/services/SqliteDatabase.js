import SQLite from 'react-native-sqlite-2';


const db = SQLite.openDatabase('test.db', '1.0', '', 1)

export default db;