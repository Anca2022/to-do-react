import {useState} from 'react';
import Todo from "./Todo";
import './App.css'

export default function List(){
    const [toDoItems, setToDoItems] = useState([]);  
    console.log(toDoItems);
    function handleKeyUp(e){
        if(e.key==='Enter'){
        let todo={task: e.target.value, done:false}; 
        setToDoItems(prevState=> ([...prevState, todo]));
        e.target.value='';
        }
    }

    return(
        <div>
            <input onKeyUp={handleKeyUp}></input>
             
            <div className='tasks'> 
                <h2>Your tasks:</h2>
                {toDoItems.map(singleState=> (
                    <Todo currentState={singleState}/>
                ))}
            </div> 
            
            
        </div>
    );
}; 