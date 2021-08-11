import React from 'react';
import CrudTableRow from './CrudTableRow';
 const CrudTable = ({data, updateData, datatoEdit , setdatatoEdit,deleteData}) => {
    return(
        <div>
            <h3>Tabla de Datos</h3>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Constellation</th>
                        <th>Options</th>
                    </tr>
                </thead>
              <tbody>
                  {data.length === 0 ? ( <tr ><td colSpan="3">Not found data</td></tr>):(
                      data.map((el)=><CrudTableRow key={el.id} setdatatoEdit={setdatatoEdit} deleteData={deleteData} el={el}></CrudTableRow>)
                  )}
              </tbody>
            </table>
        </div>
    )
}

export default CrudTable;
