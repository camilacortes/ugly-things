import React , {useContext} from 'react'
import { Context } from './ContextProvider.js'


function RenderList(props){
    const {handleDelete, handleEdit} = useContext(Context)

    const id = props.thing._id

  

    return(
        <>
            <div className="box">
                <div className="title-container">
                    <h1>Title: {props.thing.title}</h1>
                </div>
                <div className="button-container">
                    <button onClick={e => {
                        e.preventDefault()
                        handleEdit(id)
                    }}>Edit</button>
                    <button onClick={e =>{
                        e.preventDefault()
                        handleDelete(id)
                    }}>Delete</button>
                </div>
                <div className="desc-container">
                    <p>Description: {props.thing.description}</p>
                </div>
                <div className="image-container">
                    <p>Image: </p> <img src={props.imgUrl} alt="ugly-thing"/>
                </div>
            </div>
        </>
        )
    
}

export default RenderList 