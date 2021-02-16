import React,{useState} from 'react'
import {InputGroup, FormControl,Button} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import {addTask} from '../../JS/actions/actionsTask'

const AddTask = () => {
  const [task,setTask]=useState("")
  const dispatch =useDispatch();
  const add =()=>{
    if (task) {
    dispatch(addTask({text:task,isDone:false,id:Date.now()}));
    setTask("");
    } else {
      alert("There is no task!");
    }
  };
  
 

    return (
        <div style={{margin:'60px'}}>
          <h1>TO DO LIST !</h1>
             <InputGroup className="mb-3">
             
    <FormControl
      placeholder="Write Task Here"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"

      onChange={(e)=>setTask(e.target.value)}
      value={task}

    />
    <InputGroup.Append>
      <Button  variant="outline-secondary"
               onClick={add}>   ADD TASK  </Button>
    </InputGroup.Append>
  </InputGroup>
        </div>
    )
}

export default AddTask
