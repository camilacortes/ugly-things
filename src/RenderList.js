import React from 'react'

class RenderList extends React.Component{
    state={}

    render(){
        return(
            <>
            <div className="title-container">
                {/* <h1>{this.props.data.title}</h1> */}
               <h1>{this.props.thing}</h1>
            </div>
            <div className="desc-container">
            </div>
            </>
        )
    }
}

export default RenderList 