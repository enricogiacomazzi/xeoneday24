import { useReducer } from 'react'
import Buttons from './components/Buttons';


export default function App() {
    
  const [count, dispatch] = useReducer(reducer, 0);

  function reducer(state, action){
    switch(action.type) {
      case 'inc':
        return state + 1;
      case 'dec':
        return state - 1;
      case 'reset':
        return 0;
    }
  }

  return (
    <>
      <h1>{count}</h1>
      <Buttons handler={type => dispatch({type})}/>
    </>
  )


}

