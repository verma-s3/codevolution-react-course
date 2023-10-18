import React, { useEffect, useRef, useState } from 'react'

const HookTimer = () => {
    const[timer, setTimer] = useState(0)
    const timerRef = useRef()
    useEffect(()=>{
        timerRef.current = setInterval(()=>{            
            setTimer(prevTimer=>prevTimer+1)
        },1000)
        return ()=>{
            clearInterval(timerRef.current)
        }
    },[])
  return (
    <div>
        {timer}
        <button onClick={()=>clearInterval(timerRef.current)}>CLear Timer</button>
    </div>
  )
}

export default HookTimer