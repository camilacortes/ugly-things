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
            const renderList = value.items.map(thing => {
              return <RenderList thing={thing} data={value.data} key='1' />
            })
      return(
        <div>
          <Inputs />
          <div>{renderList}</div>
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
