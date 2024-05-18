import { Comp3 } from "./Comp3";
import {effect} from '@preact/signals-react';

export function Comp2({count}) {
    console.log('comp 2 render');
    effect(() => console.log(`values: ${count.value}`));
    return <Comp3 count={count}/>
}