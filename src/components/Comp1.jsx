import { Comp2 } from "./Comp2";

export function Comp1({count}) {
    console.log('comp 1 render');
    return <Comp2 count={count}/>
}