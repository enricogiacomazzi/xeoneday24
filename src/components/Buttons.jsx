

export default function Buttons({handler}) {
    return (
        <>
            <button onClick={() => handler('inc')}>+</button>
            <button onClick={() => handler('dec')}>-</button>
            <button onClick={() => handler('reset')}>reset</button>
        </>
    )
}




