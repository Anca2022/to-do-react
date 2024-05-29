import {useState} from 'react';
import Todo from "./Todo";
import '../App.css';

export default function List(){
    const [toDoItems, setToDoItems] = useState([]);  
    const [currentId, setId]= useState(1); 
    function handleKeyUp(e){
        if(e.key==='Enter'){
            setId(currentId => currentId+1); 
            let todo={id: currentId, task: e.target.value, done:false};  
            setToDoItems(prevState=> ([...prevState, todo]));
            e.target.value='';
        }
    }
    function handleEdit(id){
        console.log ('trying to edit ' + id);
        
    }
    function handleDelete(id){
        // console.log("elementul de sters: " + id);
        let index = toDoItems.findIndex(element => element.id === id);
        // console.log('indexul elementului de sters: ' + index);
        let arr = [...toDoItems]; 
        //console.log(arr === toDoItems); 
        arr.splice(index, 1); 
        setToDoItems(arr); 
    }


    return(
        <div>
            <input onKeyUp={handleKeyUp}></input>
             
            <div className='tasks'> 
                <h2>Your tasks:</h2>
                {toDoItems.map(singleItem=> (
                    <Todo key={singleItem.id} currentItem={singleItem} handleDelete={()=>handleDelete(singleItem.id)} handleEdit={()=>handleEdit(singleItem.id)} />
                ))}
            </div> 
            
        </div>
    );
}; 