import React, { useState, useCallback } from 'react'
import Count1 from './Count1'
import Title from './Title';
import Button from './Button';

const ParentComponent = () => {
    const[age, setAge] = useState(25);
    const[salary, setSalary] = useState(50000)

    const incrementAge = useCallback(() =>{
        setAge(age+1)
    }, [age])
    const incrementSalary = useCallback(() =>{
        setSalary(salary + 1000)
    }, [salary])
  return (
    <div>
        <Title />
        <Count1 text="Age" count = {age} />
        <Button handleClick={incrementAge}>increment Age</Button>
        <Count1 text="Salary" count={salary}/>
        <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  )
}

export default ParentComponent