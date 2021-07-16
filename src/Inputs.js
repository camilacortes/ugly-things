import React from 'react'
import {ContextConsumer} from './ContextProvider.JS'

class Inputs extends React.Component{
    state={
        title:'',
        imageUrl: '',
        description: ''
    }

    // submitForm=(e)=>{
    //     e.preventDefault()
    //     let post = {
    //         title: this.state.title,
    //         imageUrl : this.state.imageUrl,
    //         description: this.state.description
    //     }
    //     //creating the post request 
    //     axios.post('https://api.vschool.io/Camila/thing', post)
    //     .then(response => console.log(response))
    //     .catch(err => console.log(err))
    // }

    handleChange =(e)=>{
        const {name, value} = e.target 
        this.setState({
          [name] : value
        })
      }

    render(){
    
        return(
            <>
            <div className="form-container">
                <ContextConsumer>

                
                <form onSubmit={this.submitForm}>
                    <input 
                    name="title"
                    value={this.state.title}
                    onChange={this.handleChange}
                    placeholder="Title">
                    </input>
                    <input 
                    name="imageUrl" 
                    value={this.state.imageUrl}
                    onChange={this.handleChange}
                    placeholder="Image Url">
                    </input>
                    <input 
                    name="description" 
                    value={this.state.description}
                    onChange={this.handleChange}
                    placeholder="Description">
                    </input>
                    <div className="button-container">
                        <button className="button">Submit</button>
                    </div>
                </form>
                </ContextConsumer>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300"> <path fill="#D0F0CE" fill-opacity="1" d="M0,96L21.8,133.3C43.6,171,87,245,131,229.3C174.5,213,218,107,262,90.7C305.5,75,349,149,393,192C436.4,235,480,245,524,229.3C567.3,213,611,171,655,170.7C698.2,171,742,213,785,234.7C829.1,256,873,256,916,250.7C960,245,1004,235,1047,197.3C1090.9,160,1135,96,1178,112C1221.8,128,1265,224,1309,234.7C1352.7,245,1396,171,1418,133.3L1440,96L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"></path></svg>
            </>
                )  
    }
}

export default Inputs