import React, { useContext } from 'react'
import Inputs from './Inputs';
import RenderList from './RenderList';
import {Context} from './ContextProvider'

function App(props){
  const context = useContext(Context)
  const renderList = context.uglyThings.map(thing => {
  return <RenderList key={thing._id} thing={thing}/>
  })
    return(
        <div>
          <Inputs id={context.items}/>
          <div>{renderList}</div>
        </div>
      )
}

export default App;
