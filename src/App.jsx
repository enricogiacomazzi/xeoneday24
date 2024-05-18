
import {signal, effect} from '@preact/signals-react';
import {useSignals} from '@preact/signals-react/runtime';
import { Comp1 } from './components/Comp1';

const count = signal(0);


export default function App() {


  function inc() {
    count.value++;
  }


  function dec() {
    count.value--;
  }


  function reset() {
    count.value = 0;
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

