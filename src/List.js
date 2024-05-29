import {useState} from 'react';
import Todo from "./Todo";

export default function List(){
    const [state, setState] = useState([]);  
    function handleChange(e){
        console.log(e.target.value)
        let todo={task: e.target.value, done:false}; 
        setState(prevState=> ([...prevState, todo]));
    }

    return(
        <div>
            <input onChange={handleChange}></input>
            
             {state.map(singleState=> (
                <Todo currentState={singleState}/>
             ))}
            
        </div>
    );
}; 