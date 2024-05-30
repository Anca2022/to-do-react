import {useState} from 'react';
import Todo from "./Todo";
import '../App.css';

export default function List(){
    const [toDoItems, setToDoItems] = useState([]);  
    const [currentId, setId]= useState(1); 
    

    function handleKeyUp(e){
        if(e.key==='Enter'){
            setId(currentId => currentId+1); 
            let toDoItem={id: currentId, task: e.target.value, done:false, editing:false};  
            setToDoItems(prevState=> ([...prevState, toDoItem]));
            e.target.value='';
        }
    }
    function handleChecked(id){
        let index = toDoItems.findIndex(element => element.id === id);
        let arr = [...toDoItems]; 
        arr[index].done = !arr[index].done; 
        setToDoItems(arr);
    }
    function handleEdit(id){
        let index = toDoItems.findIndex(element => element.id === id);
        let arr = [...toDoItems];
        arr[index].editing = !arr[index].editing;
        // console.log(arr[index]); 
        setToDoItems(arr); 
    }
    // handleUpdate NU MERGE!!!!! 
    // MODAL!!!! 
    function handleUpdate(e){
        console.log(e);
    }
    function handleDelete(id){
        let index = toDoItems.findIndex(element => element.id === id);
        let arr = [...toDoItems]; 
        arr.splice(index, 1); 
        setToDoItems(arr); 
    }


    return(
        <div>
            <input className="main-input" onKeyUp={handleKeyUp} placeholder="enter todo..."></input>
             
            <div className='tasks'> 
                <h2>Your tasks:</h2>
                {toDoItems.map(singleItem=> (
                    <Todo key={singleItem.id} 
                        currentItem={singleItem} 
                        handleDelete={()=>handleDelete(singleItem.id)} 
                        handleEdit={()=>handleEdit(singleItem.id)} 
                        handleUpdate={()=>handleUpdate}
                        handleChecked={()=>handleChecked(singleItem.id)} 
                    />
                ))}
            </div> 
            
        </div>
    );
}; 