import logo from './logo.svg';
import './App.css';
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';
import CounterThree from './components/CounterThree';
import FormObject from './experiemnt/FormObject';
import ToDoList from './experiemnt/To-do/ToDoList';
import ComponentA from './components/global-state-management/ComponentA';
import ComponentB from './components/global-state-management/ComponentB';
import ComponentC from './components/global-state-management/ComponentC';
import React, { useContext, useReducer } from 'react';
import DataFetchingOne from './components/DataFetchingOne';
import DataFetchingTwo from './components/DataFetchingTwo';

export const CountContext = React.createContext()

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

function App() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    // <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
    //   <div className="App">
    //     <p>Count-&gt; {count}</p>
    //     {/* <CounterOne />
    //   <CounterTwo /> */}
    //     {/* <CounterThree /> */}
    //     {/* <br /><br /><br />
    //   <FormObject />
    //   <br />
    //   <hr />
    //   <br />*/}
      <ToDoList /> 
    //     <ComponentA />
    //     <ComponentB />
    //     <ComponentC />
    //   </div>
    // </CountContext.Provider>
    // <DataFetchingOne />
    // <DataFetchingTwo />
  );
}

export default App;
