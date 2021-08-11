import React, {useEffect, useState} from 'react'
const axios = require('axios')

const Context = React.createContext()

function ContextProvider(props){
    const [uglyThings, setUglyThings] = useState([])
    
    const [inputs, setInputs] = useState({
        title: "",
        imgUrl: "",
        description: ""
    })

        const getUglyThings = () => {
            axios.get('https://api.vschool.io/Camila/thing')
                .then(response => 
                    setUglyThings(response.data))
                    .catch(err => console.log(err))
        }

        useEffect(()=>{
            getUglyThings()
        }, [])
            // console.log(uglyThings)

            const submitForm=()=>{
                axios.post('https://api.vschool.io/Camila/thing/', inputs)
                    .then(response => setUglyThings(prevThings => [...prevThings, response.data]))
                    .catch(err => console.log(err.response.data))  
            }
            
            const handleChange =(e)=>{
                const {name, value} = e.target
                    setInputs(prevInput => ({
                        ...prevInput,
                        [name] : value
                }))
            } 

            const handleDelete = (id) =>{
                // console.log('clicked')
                // console.log(id)
                axios.delete(`https://api.vschool.io/Camila/thing/${id}`)
                    .then(res => getUglyThings())
                    .catch(err => console.log(err.res))
            }
        

    return(
        <>
            <Context.Provider value={{uglyThings, submitForm, inputs, handleChange, handleDelete}}>
                {props.children}
            </Context.Provider>
        </>
        
    )
   
}

export {ContextProvider, Context}