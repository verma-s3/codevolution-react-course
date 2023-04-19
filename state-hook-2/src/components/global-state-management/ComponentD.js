import React, { useContext } from 'react'
import { CountContext } from '../../App'

const ComponentD = () => {
    const countContext = useContext(CountContext)
    return (
        <div>
            ComponentD -&gt; {countContext.countState}
            <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
            <button onClick={() => countContext.countDispatch('decrement')}>decrement</button>
            <button onClick={() => countContext.countDispatch('reset')}>reset</button>
        </div>
    )
}

export default ComponentD