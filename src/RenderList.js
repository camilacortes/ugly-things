import React from 'react'

class RenderList extends React.Component{
    state={}

    render(){
        return(
            <>
            <div className="box">
            <div className="title-container">
               <h1>Title: {this.props.thing.title}</h1>
            </div>
            <div className="desc-container">
            <p>Description: {this.props.thing.description}</p>
             </div>
             <div className="image-container">
            <p>Image: </p> <img src="+{this.props.imgUrl}+"/>
             </div>
                </div>
            </>
        )
    }
}

export default RenderList 