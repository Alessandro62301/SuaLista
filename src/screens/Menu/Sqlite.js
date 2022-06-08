import SQLite from 'react-native-sqlite-2';


const db = SQLite.openDatabase('test.db', '1.0', '', 1)

export function dropTable(){
  db.transaction(function(txn) {
    txn.executeSql('DROP TABLE Lista', [])
    txn.executeSql('DROP TABLE Item', [])
  })
}
export function createTable (){
  db.transaction(function(txn) {
    
        txn.executeSql(
         `
         CREATE TABLE if not exists Lista (
           cod integer PRIMARY KEY AUTOINCREMENT,
           name VARCHAR(60),
           balance FLOAT,
           total FLOAT
         );
         `,
          []
        )
        txn.executeSql(
         `
         CREATE TABLE if not exists Item (
           name VARCHAR(60),
           cod integer PRIMARY KEY AUTOINCREMENT,
           price FLOAT ,
           quantity integer,
            codList integer,
            FOREIGN KEY (codList) REFERENCES Lista(cod)
        );
         `,
          []
        )
    })
}
export function insertList(name,balance){
  db.transaction(function(txn) {
      txn.executeSql('INSERT INTO Lista (name,balance,total) values (:name,:balance,:total)',[name,balance,0])
      })
}


export function insertItem(name,price,quantity,codList){
  db.transaction(function(txn) {
      txn.executeSql('INSERT INTO Item (name,price,quantity,codList) values (:name,:price,:quantity,:codList)',[name,price,quantity,codList])
      })
      console.log('Item Inserido:', name + price + quantity + codList);
}


export function selectItem(id){
  db.transaction(function(txn) {

    txn.executeSql('select Item.name , Item.price , Item.quantity from `Item`  where Item.codList = :id', [id], function(tx, res) {
      for (let i = 0; i < res.rows.length; ++i) {
        console.log('Item:', res.rows.item(i))
      }
    })
  })
}


export function selectList(){
  db.transaction(function(txn) {

    txn.executeSql('select Lista.name, Lista.cod, Lista.balance from `Lista`', [], function(tx, res) {
      for (let i = 0; i < res.rows.length; ++i) {
        console.log('Lista:', res.rows.item(i))
      }
    })
  })
}

export function selectAllItems(){
  db.transaction(function(txn) {

    txn.executeSql('select * from `Item`', [], function(tx, res) {
      for (let i = 0; i < res.rows.length; ++i) {
        console.log('Item:', res.rows.item(i))
      }
    })
  })
}
export function removeItem(id){
  db.transaction(function(txn) {

    txn.executeSql('delete from `Item` where Item.cod = :id', [id], function(tx, res) {
      for (let i = 0; i < res.rows.length; ++i) {
        console.log('Item:', res.rows.item(i))
      }
    })
  })
}

export function removeAll(id){
  db.transaction(function(txn) {

    txn.executeSql('delete from `Item`', [id], function(tx, res) {
      for (let i = 0; i < res.rows.length; ++i) {
        console.log('Item:', res.rows.item(i))
      }
    })
    txn.executeSql('delete from `Lista`', [id], function(tx, res) {
      for (let i = 0; i < res.rows.length; ++i) {
        console.log('Item:', res.rows.item(i))
      }
    })
  })
}


