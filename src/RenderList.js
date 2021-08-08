import React from 'react'

class RenderList extends React.Component{
    state={}

    render(){
        return(
            <>
            <div className="title-container">
               <h1>{this.props.thing.title}</h1>
            </div>
            <div className="desc-container">
            {/* <h1>{this.props.thing.description}</h1> */}
             </div>
            </>
        )
    }
}

export default RenderList 