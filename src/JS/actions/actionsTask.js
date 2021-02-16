
import {ADD_TASK , DELETE_TASK , DONE_TASK , EDIT_TASK} from '../actionsType/actionsType'

export const addTask=(payload)=>{
    return {
        type: ADD_TASK,
        payload
    }
}
export const deleteTask = (id) => {
    return {
      type: DELETE_TASK,
      id,
    };
  };

export const doneTask =(id) =>{
    return{
        type: DONE_TASK,
        id,
    }
}

export const editTask =(id,text)=>{
    return{
        type: EDIT_TASK,
        id,
        text,
    }
}