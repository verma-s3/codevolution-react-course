import React, { useReducer } from 'react'
const initialState = {
    name: 'Name',
    age: 10
}
const reducer = (state, action)=>{
    switch(action.type){
        case 'increment':
            return {name: state.name, age : state.age + 1 }
        case 'name_change':
            return{
                name: action.newName, 
                age: state.age
            }
    }
}
const FormObject = () => {
    const[state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
        <input type='text' value={state.name} onChange={(e)=>dispatch({type: 'name_change', newName: e.target.value})}/>
        <button onClick={()=>dispatch({type: 'increment'})}>Increment</button>
        <p>Hi, <strong>{state.name}</strong>. Your age is <strong >{state.age}</strong></p>
    </div>
  )
}

export default FormObject