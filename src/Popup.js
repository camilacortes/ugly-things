import React, { useState} from 'react'


const axios = require('axios')

export default function Popup(props) {
    const id = props.id;

    const [newInputs, setnewInputs] = useState({
        title: "",
        imgUrl: "",
        description: ""
    })
    
    const handleChange =(e)=>{
        const {name, value} = e.target
            setnewInputs(prevInput => ({
                ...prevInput,
                [name] : value
        }))
    } 


    // update request 
    const updateForm = (id) =>{
        axios.put(`https://api.vschool.io/Camila/thing/${id}`, newInputs)
            .then(response => console.log(response))
            .catch(err => console.log(err))
    }



    // console.log(newInputs)
    return ( props.trigger) ? (
        <div className="popup">
            <form>
            Title: 
            <input 
            name="title"
            onChange={handleChange}
            value={newInputs.title}></input>
            Description: 
            <input 
            name="description"
            onChange={handleChange}
            value={newInputs.description}></input>
            Image: 
            <input 
            name="imgUrl"
            onChange={handleChange}
            value={newInputs.imgUrl}></input>
            
            <button onClick={()=>{
                props.setTrigger(false)
                updateForm(id)
            }}>Save</button>
            {props.children}
            </form>
        </div>
    ) : "";
    
}
