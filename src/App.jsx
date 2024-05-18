import { useState } from 'react'
import { Comp1 } from './components/Comp1';


export default function App() {
  const [count, setCount] = useState(0);

  function inc() {
    setCount(count + 1);
  }


  function dec() {
    setCount(count - 1);
  }


  function reset() {
    setCount(0);
  }

  console.log('\n\napp render');

  return (
    <>
      <Comp1 count={count}/>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
      <button onClick={reset}>reset</button>
    </>
  )
}

