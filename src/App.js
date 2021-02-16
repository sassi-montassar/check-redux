import React ,{useState} from 'react'
import AddTask from './Components/AddTask/AddTask'
import TaskList from './Components/TaskList/TaskList'
import CheckBox from './Components/CheckBox/CheckBox'

function App() {
  const[done, setDone]=useState(false)
    const[undone, setUndone]=useState(false)
  return (
    <div className="App">
      <AddTask/>
      <CheckBox SetIsdone={setDone} setUndone={setUndone}/>
      <TaskList done={done} undone={undone}/>
    </div>
  );
}

export default App;

