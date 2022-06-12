import db from './SqliteDatabase.js'

// status bolean

db.transaction((tx) => {
    //<<<<<<<<<<<<<<<<<<<<<<<< USE ISSO APENAS DURANTE OS TESTES!!! >>>>>>>>>>>>>>>>>>>>>>>
    //tx.executeSql("DROP TABLE cars;");
    //<<<<<<<<<<<<<<<<<<<<<<<< USE ISSO APENAS DURANTE OS TESTES!!! >>>>>>>>>>>>>>>>>>>>>>>
  
    tx.executeSql(
      ` 
      CREATE TABLE if not exists Item (
        name VARCHAR(60),
        cod integer PRIMARY KEY AUTOINCREMENT,
        price FLOAT ,
        quantity integer,
        codList integer,
         FOREIGN KEY (codList) REFERENCES Lista(cod)
     );
      `
    );
  });

  const create = (obj) => {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        //comando SQL modificável
            tx.executeSql('INSERT INTO Item (name,price,quantity,codList) values (:name,:price,:quantity,:codList)',
            [obj.name,obj.price,obj.quantity,obj.codList]),
          //-----------------------
          (_, { rowsAffected, insertId }) => {
            if (rowsAffected > 0) resolve(insertId);
            else reject("Error inserting obj: " + JSON.stringify(obj)); // insert falhou
          },
          (_, error) => reject(error) // erro interno em tx.executeSql
      });
    });
  };

/**
 * ATUALIZA UM REGISTRO JÁ EXISTENTE
 * - Recebe o ID do registro e um OBJETO com valores atualizados;
 * - Retorna uma Promise:
 *  - O resultado da Promise é a quantidade de registros atualizados;
 *  - Pode retornar erro (reject) caso o ID não exista ou então caso ocorra erro no SQL.
 */
 const update = (id, obj) => {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        //comando SQL modificável
        tx.executeSql(
          "UPDATE Item SET name=?, price=?, quantity=? WHERE cod=?;",
          [obj.name, obj.price, obj.quantity, id],
          //-----------------------
          (_, { rowsAffected }) => {
            if (rowsAffected > 0) resolve(rowsAffected);
            else reject("Error updating obj: id=" + id); // nenhum registro alterado
          },
          (_, error) => reject(error) // erro interno em tx.executeSql
        );
      });
    });
  };
  
  /**
   * BUSCA UM REGISTRO POR MEIO DO ID
   * - Recebe o ID do registro;
   * - Retorna uma Promise:
   *  - O resultado da Promise é o objeto (caso exista);
   *  - Pode retornar erro (reject) caso o ID não exista ou então caso ocorra erro no SQL.
   */

  // const find = (id) => {
  //   return new Promise((resolve, reject) => {
  //     db.transaction((tx) => {
  //       //comando SQL modificável
  //       tx.executeSql(
  //         "SELECT * FROM Item WHERE cod=?;",
  //         [id],
  //         //-----------------------
  //         (_, { rows }) => {
  //           if (rows.length > 0) resolve(rows._array[0]);
  //           else reject("Obj not found: id=" + id); // nenhum registro encontrado
  //         },
  //         (_, error) => reject(error) // erro interno em tx.executeSql
  //       );
  //     });
  //   });
  // };
  
  /**
   * BUSCA TODOS OS REGISTROS DE UMA DETERMINADA TABELA
   * - Não recebe parâmetros;
   * - Retorna uma Promise:
   *  - O resultado da Promise é uma lista (Array) de objetos;
   *  - Pode retornar erro (reject) caso o ID não exista ou então caso ocorra erro no SQL;
   *  - Pode retornar um array vazio caso não existam registros.
   */
  const allInList = (idlist) => {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        //comando SQL modificável
        tx.executeSql(
          "SELECT * FROM Item WHERE codList=?;",
          [idlist],
          //-----------------------
          (_, { rows }) => resolve(rows._array),
          (_, error) => reject(error) // erro interno em tx.executeSql
        );
      });
    });
  };

  const all = () => {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        //comando SQL modificável
        tx.executeSql(
          "SELECT * FROM Item;",
          [],
          //-----------------------
          (_, { rows }) => resolve(rows._array),
          (_, error) => reject(error) // erro interno em tx.executeSql
        );
      });
    });
  };
  
  /**
   * REMOVE UM REGISTRO POR MEIO DO ID
   * - Recebe o ID do registro;
   * - Retorna uma Promise:
   *  - O resultado da Promise a quantidade de registros removidos (zero indica que nada foi removido);
   *  - Pode retornar erro (reject) caso o ID não exista ou então caso ocorra erro no SQL.
   */
   const remove = (id) => {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        //comando SQL modificável
        tx.executeSql(
          "DELETE FROM Item WHERE cod=?;",
          [id],
          //-----------------------
          (_, { rowsAffected }) => {
            resolve(rowsAffected);
          },
          (_, error) => reject(error) // erro interno em tx.executeSql
        );
      });
    });
  };

   const removeItemsInList = (id) => {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        //comando SQL modificável
        tx.executeSql(
          "DELETE FROM Item WHERE codList=?;",
          [id],
          //-----------------------
          (_, { rowsAffected }) => {
            resolve(rowsAffected);
          },
          (_, error) => reject(error) // erro interno em tx.executeSql
        );
      });
    });
  };
  
  export default {
    create,
    update,
    // find,
    allInList,
    all,
    remove,
    removeItemsInList
  };