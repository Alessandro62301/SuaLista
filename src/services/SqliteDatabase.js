import SQLite from 'react-native-sqlite-2';

//  const db = SQLite.openDatabase('test.db', '1.0', '', 1)
// const db = SQLite.openDatabase('db.db')
 const db = SQLite.openDatabase(
     {
         name: 'test.db',
     },
     () => { },
     error => { console.log(error) }
 );

//  const db = SQLite.openDatabase('app.db')


export default db;