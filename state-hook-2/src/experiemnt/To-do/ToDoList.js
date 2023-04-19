import React, { useReducer } from 'react'
import TaskList from './TaskList.js'
import AddTask from './AddTask.js'

// initialTasks of the reducer hook
let nextId = 1;
const initialTasks = [{
    id: '0',
    name: 'Name',
    taskComplete: 'false',
}]

//reducer function from hook
const reducer = (tasks, action) => {
    switch(action.type){
        case 'add':
            return [...tasks, {
                id: action.id, 
                name: action.nextName,
                taskComplete: false 
            }]
        case 'edit':
            return []
        case 'delete' :
            return
    }
}


const ToDoList = () => {
    const[tasks, dispatch] = useReducer(reducer, initialTasks);
    // handling how user can ass task
    const handleAddtask = () => {
        dispatch({
            type: 'added',
            id: nextId++,
            name: Text, 
            taskComplete: 'false'
        })
    }
  return (
    <div className="to-do-list-container">
        <h1>To Do List</h1>
        <AddTask onAddTask={handleAddtask}/>
        <TaskList tasks={tasks}/>
    </div>
  )
}

export default ToDoList