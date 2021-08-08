import React from 'react'
// import RenderList from './RenderList'
const axios = require('axios')

const {Provider, Consumer} = React.createContext()

class ContextProvider extends React.Component{
    state={
    uglyThings: [],
        data: []
    }

    

        componentDidMount(){
             axios.get('https://api.vschool.io/Camila/thing')
            .then(response => 
                this.setState({
                 data: response.data}))
            .catch(err => console.log(err))
        }

    //SET state for ugly things 

 render(){
    //  console.log(this.state.data[0])
    return(
        <>
        <Provider value={{items: this.state.uglyThings, data: this.state.data}}>
            {this.props.children}
        </Provider>
        </>
        
    )
   
 }
}

export {ContextProvider, Consumer as ContextConsumer}