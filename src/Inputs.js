import axios from 'axios'
import React ,{ useContext} from 'react'
import { Context } from './ContextProvider.js'

function Inputs(){
    const {inputs, submitForm, handleChange} = useContext(Context)
    return(
        <>
            <div className="form-container">
                 <form>
                    <input 
                        name="title"
                        value={inputs.title}
                        onChange={handleChange}
                        placeholder="Title">
                        </input>
                    <input 
                        name="imgUrl" 
                        value={inputs.imgUrl}
                        onChange={handleChange}
                        placeholder="Image Url">
                        </input>
                    <input 
                        name="description" 
                        value={inputs.description}
                        onChange={handleChange}
                        placeholder="Description">
                        </input>
                    <div className="button-container">
                        <button className="button" onClick={e=>{
                            e.preventDefault()
                            submitForm(inputs)
                        }}>Submit</button>
                    </div>
                </form>
            </div>
        </>
        )  
}

export default Inputs