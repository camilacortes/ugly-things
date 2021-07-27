import React, { Component } from 'react'
import Inputs from './Inputs';
import RenderList from './RenderList';
import {ContextConsumer} from './ContextProvider'

class App extends Component {
  render(){
    return(
      <div>
        <ContextConsumer>
          {value =>{
            const RenderList = value.items.map(thing => {
              <RenderList thing={thing}/>
            })
      return(
        <div>
          <Inputs submitForm={value.submitForm}/>
          <div>{RenderList}</div>
        </div>
      )
          }}
        </ContextConsumer>
      </div>
    )

    // // return (
    //   <div>
        
  
    //     <Inputs/>
    //     <RenderList/>
    //   </div>
    // );
  }
 
}

export default App;
