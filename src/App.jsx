import { useState } from 'react'


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

  return (
    <>
      <h1>{count}</h1>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
      <button onClick={reset}>reset</button>
    </>
  )
}

