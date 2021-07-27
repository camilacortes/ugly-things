import React from 'react'
const axios = require('axios')

const {Provider, Consumer} = React.createContext()

class ContextProvider extends React.Component{
    state={
        uglyThings: []
    }

    submitForm=(post)=>{
        // let post = {
        //     title: this.state.title,
        //     imageUrl : this.state.imageUrl,
        //     description: this.state.description
        // }
        // creating the post request 
        axios.post('https://api.vschool.io/Camila/thing', post)
        .then(response => this.setState(prevState=>{
            return {
                uglyThings:[response, ...prevState.uglyThings]

            }
        }))
        .catch(err => console.log(err))
            console.log(this.uglyThings)
        }

        componentDidMount(){
            
        }

    // component did mount for get request 
    //SET state for ugly things 

 render(){
    return(
        <Provider value={{items: this.state.uglyThings, submitForm: this.submitForm}}>
            {this.props.children}
        </Provider>
    )
 }
}

export {ContextProvider, Consumer as ContextConsumer}