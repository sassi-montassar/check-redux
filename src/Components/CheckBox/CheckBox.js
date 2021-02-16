import React  from 'react'

const CheckBox = ({setDone,setUndone}) => {
    

    return (
        <div style={{color:'red',backgroundColor:'yellow',textAlign:'center'}}>
            <input type='checkbox' onChange={(e)=>setDone(e.target.checked)}/>
            <label>isDone</label>
            <input type='checkbox' onChange={(e)=>setUndone(e.target.checked)}/>
            <label>unDone</label>
            
        </div>
    )
}

export default CheckBox

