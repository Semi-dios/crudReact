import React, { Component, useState } from 'react';
import CrudForm from './CrudForm'
import CrudTable from './CrudTable'
const intialDB = [
    {
        id: 1,
        name: "Seiya",
        constellation: "Pegaso",
    },
    {
        id: 2,
        name: "Shiryu",
        constellation: "Dragon",
    },
    {
        id: 3,
        name: "Hyoga",
        constellation: "Cisne",
    },
    {
        id: 4,
        name: "Shun",
        constellation: "Andromeda",
    },
    {
        id: 5,
        name: "Ikki",
        constellation: "Fenix",
    },
]
 const CrudApi = ()=> {
    const [db,setDb] = useState(intialDB);
    const [datatoEdit,setdatatoEdit] = useState(null);

    const createData = (data)=> {
        //console.log(data)
        data.id = Date.now();
        setDb([...db,data])
    };
    const updateData = (data)=> {
        let newData = db.map(el => el.id === data.id ? data: el);
        setDb(newData);
    };
    const deleteData = (id)=> {
        let isDelete = window.confirm(`Are you sure to delete the registry: ${id} ?`);
        if(isDelete) {
          let newData = db.filter(el => el.id !== id);
              setDb(newData);
          
        }else {
            return;
        }
    };
    return(
        <div>
            <h2>CRUD APP</h2>
            <CrudForm datatoEdit={datatoEdit} setdatatoEdit={setdatatoEdit} createData={createData} updateData={updateData} ></CrudForm>
            <CrudTable deleteData={deleteData} setdatatoEdit={setdatatoEdit} data={db}></CrudTable>

        </div>
    )
}
export default CrudApi;

