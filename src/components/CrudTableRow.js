import React from 'react';

 const CrudTableRow = ({el,setdatatoEdit, deleteData}) => {
     let {name , constellation, id } = el;

    return(
     
            <tr>
                <td>{name}</td>
                <td>{constellation}</td>
                <td>
                    <button onClick={()=>setdatatoEdit(el)}>Editar</button>
                    <button onClick={()=>deleteData(id)}>Eliminar</button>
                </td>
            </tr>
         
    )
}

export default CrudTableRow;

