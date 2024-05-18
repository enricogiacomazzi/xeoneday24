import {useSignals} from '@preact/signals-react/runtime';

export function Comp5({count}) {
    useSignals();
    console.log('comp 5 render');
    return <h1>{count.value}</h1>
}