import { useState } from 'react'
import clsx from 'clsx';
import { css } from '@emotion/css';

export default function App() {
  
  const [count, setCount] = useState(0);
  


  const titleStyle = clsx(
    'title', 
    count >= 5 && 'danger', 
    {'very-danger': count >= 10}
  );





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
      <h1 className={titleStyle}>
        {count}
      </h1>

      <div className={css`
          height: 15px;
          background-color: purple;
          width: ${count * 10}px;
      `}/>
      
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
      <button onClick={reset}>
        reset
      </button>
    </>
  )



}

