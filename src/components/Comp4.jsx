import { Comp5 } from "./Comp5";
import {computed} from '@preact/signals-react';

export function Comp4({count}) {
    console.log('comp 4 render');
    const double = computed(() => count.value * 2);
    return <Comp5 count={double}/>
}