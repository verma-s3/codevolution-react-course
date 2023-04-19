import React, { useReducer } from 'react'
const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return initialState;
        default:
            return state;
    }
}
const CounterOne = () => {
    const [count, displatch] = useReducer(reducer, initialState)
    return (
        <div>
            <button onClick={()=>displatch('increment')}>Increment</button>
            <button onClick={()=>displatch('decrement')}>decrement</button>
            <button onClick={()=>displatch('reset')}>reset</button>
            <p>Count number is - {count}</p>
        </div>
    )
}

export default CounterOne