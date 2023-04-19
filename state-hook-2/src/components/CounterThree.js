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
const CounterThree = () => {
    const [count, displatch] = useReducer(reducer, initialState)
    const [countTwo, displatchTwo] = useReducer(reducer, initialState)
    return (
        <div>
            <button onClick={() => displatch('increment')}>Increment</button>
            <button onClick={() => displatch('decrement')}>decrement</button>
            <button onClick={() => displatch('reset')}>reset</button>
            <p>Count number is - {count}</p>
            <div>
                <button onClick={() => displatchTwo('increment')}>Increment</button>
                <button onClick={() => displatchTwo('decrement')}>decrement</button>
                <button onClick={() => displatchTwo('reset')}>reset</button>
                <p>Another Count number is - {countTwo}</p>
            </div>
        </div>
    )
}

export default CounterThree