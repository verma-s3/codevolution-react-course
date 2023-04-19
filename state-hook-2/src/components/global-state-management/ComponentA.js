import React, { useContext } from 'react'
import { CountContext } from '../../App'

const ComponentA = () => {
    const countContext = useContext(CountContext)
    return (
        <div>
            ComponentA -&gt; {countContext.countState}
            <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
            <button onClick={() => countContext.countDispatch('decrement')}>decrement</button>
            <button onClick={() => countContext.countDispatch('reset')}>reset</button>
        </div>
    )
}

export default ComponentA