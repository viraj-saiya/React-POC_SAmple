import { View, Text } from 'react-native'
import React,{useEffect} from 'react'
import SQLite,{SQLiteDatabase, openDatabase} from 'react-native-sqlite-storage';

export default function SQL() {


  // var db = openDatabase("test.db", "1.0", "Test Database", 200000, ()=>{console.log("Success")}, (error)=>{console.error("error",error)});
  var db :any = openDatabase({name:'Wave.db'});

  const createTable = async () => {
    // create table if not exists
    const query = `CREATE TABLE IF NOT EXISTS Wave(
          value TEXT NOT NULL
      );`;
  
    await db.executeSql(query,[],()=>console.log("Success"),error=>console.error(error));
  };


  useEffect(()=>{
    createTable()

  })

  // db.transaction((tx) => {
  //   tx.executeSql('SELECT * FROM Employees a, Departments b WHERE a.department = b.department_id', [], (tx, results) => {
  //       console.log("Query completed");
  
  //       // Get rows with Web SQL Database spec compliance.
  
  //       var len = results.rows.length;
  //       for (let i = 0; i < len; i++) {
  //         let row = results.rows.item(i);
  //         console.log(`Employee name: ${row.name}, Dept Name: ${row.deptName}`);
  //       }
  
  //       // Alternatively, you can use the non-standard raw method.
  
  //       /*
  //         let rows = results.rows.raw(); // shallow copy of rows Array
  
  //         rows.map(row => console.log(`Employee name: ${row.name}, Dept Name: ${row.deptName}`));
  //       */
  //     },(error)=>{console.error("error",error)});
  // });
  return (
    <View>
      <Text>SQL</Text>
    </View>
  )
}