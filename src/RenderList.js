import React from 'react'

function RenderList(props){
    return(
        <>
            <div className="box">
                <div className="title-container">
                    <h1>Title: {props.thing.title}</h1>
                </div>
                <div className="button-container">
                    <button>Edit</button>
                    <button>Delete</button>
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