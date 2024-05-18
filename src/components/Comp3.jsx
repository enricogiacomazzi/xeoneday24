import { Comp4 } from "./Comp4";


export function Comp3({count}) {
    console.log('comp 3 render');
    return <Comp4 count={count}/>
}