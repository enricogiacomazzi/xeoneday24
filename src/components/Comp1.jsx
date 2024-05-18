
export function Comp1({count}) {
    console.log('comp 1 render');
    return <Comp2 count={count}/>
}

export function Comp2({count}) {
    console.log('comp 2 render');
    return <Comp3 count={count}/>
}

export function Comp3({count}) {
    console.log('comp 3 render');
    return <Comp4 count={count}/>
}

export function Comp4({count}) {
    console.log('comp 4 render');
    return <Comp5 count={count}/>
}

export function Comp5({count}) {
    console.log('comp 5 render');
    return <h1>{count}</h1>
}