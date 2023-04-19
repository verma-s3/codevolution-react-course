import React, { useReducer } from 'react'
const initialState = {
    firstCounter: 0,
    secondCounter: 10
};
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {...state, firstCounter: state.firstCounter + action.value };
        case 'decrement':
            return {...state, firstCounter: state.firstCounter - action.value };
        case 'increment2':
            return {...state, secondCounter: state.secondCounter + action.value };
        case 'decrement2':
            return {...state, secondCounter: state.secondCounter - action.value };
        case 'reset':
            return initialState;
        default:
            return state;
    }
}
const CounterTwo = () => {
    const [count, displatch] = useReducer(reducer, initialState)
    return (
        <div>
            <button onClick={() => displatch({ type: 'increment', value: 1 })}>Increment</button>
            <button onClick={() => displatch({ type: 'decrement', value: 1 })}>decrement</button>
            <button onClick={() => displatch({ type: 'increment', value: 5 })}>Increment 5</button>
            <button onClick={() => displatch({ type: 'decrement', value: 5 })}>decrement 5</button>
            <p>First Count number is :=&gt; {count.firstCounter}</p>
            <button onClick={() => displatch({ type: 'increment2', value: 1 })}>Increment-Second</button>
            <button onClick={() => displatch({ type: 'decrement2', value: 1 })}>decrement-Second</button>
            <p>Second Count number is :=&gt; {count.secondCounter}</p>

            
            <button onClick={() => displatch({ type: 'reset' })}>reset</button>
        </div>
    )
}

export default CounterTwo