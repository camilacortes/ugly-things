import React from 'react'
const axios = require('axios')

const {Provider, Consumer} = React.createContext()

class ContextProvider extends React.Component{
    state={
    uglyThings: []
    }

    componentDidMount(){
         axios.get('https://api.vschool.io/Camila/thing')
            .then(response => 
                this.setState({
                 uglyThings: response.data}))
            .catch(err => console.log(err.response.data))
        }

    //SET state for ugly things 

 render(){
    console.log('data', this.state.uglyThings)

    return(
        <>
        <Provider value={{items: this.state.uglyThings}}>
            {this.props.children}
        </Provider>
        </>
        
    )
   
 }
}

export {ContextProvider, Consumer as ContextConsumer}