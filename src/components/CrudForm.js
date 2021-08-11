
import React, {useState, useEffect} from 'react';

const initialForm = {
    name: "",
    constellation: "",
    id:null
}

const CrudForm = ({createData, updateData, datatoEdit , setdatatoEdit}) => {
    const[form,setForm] = useState({initialForm});
    useEffect(()=>{
        if(datatoEdit) {
            setForm(datatoEdit);
        }else{
            setForm(initialForm);
        }
    },[datatoEdit])
    const handleChange = (e) => {
        setForm({
            ...form, [e.target.name]:e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        if(!form.name || !form.constellation ){
            alert('Incompleted information')
        }

        if(form.id === null){
            console.log(form)
            createData(form)
        }else {
            updateData(form)
        }

        handleReset();
    }
    const handleReset = (e) => {
        setForm(initialForm)
        setdatatoEdit(null)
    }

    return(
        <div>
            <h3>{datatoEdit ? "Edit" : "Add"}</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={form.name} onChange={handleChange}  id="" />
                <input type="text" name="constellation" value={form.constellation} onChange={handleChange}  id="" />
               
                <input type="submit" value="Enviar" />
                <input type="reset" value="Limpiar" onClick={handleReset} />
            </form>
        </div>
    )
}

export default CrudForm;
