
import {ADD_TASK , DELETE_TASK , DONE_TASK ,EDIT_TASK} from '../actionsType/actionsType';

const initialState = {
    list : [],
    
};

const reducersTask =(state=initialState, action )=>{
    switch(action.type){
        case ADD_TASK:
          return{
              ...state,
              list:[...state.list,action.payload]
              }
        case DELETE_TASK:
            return{
             ...state,
             list: state.list.filter((el) => el.id !== action.id),
            }
        case DONE_TASK:
            return {
             ...state,
             list: state.list.map((el) =>el.id === action.id ? { ...el, isDone: !el.isDone } : el),
            }
        case EDIT_TASK:
            return {
            ...state,
            list: state.list.map((el) => el.id === action.id ? { ...el, text: action.text } : el),
            };

         default:
         return state
    }
}

export default reducersTask;