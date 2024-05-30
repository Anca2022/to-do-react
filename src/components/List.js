import {useState} from 'react';
import Todo from "./Todo";
import '../App.css';

export default function List(){
    const [toDoItems, setToDoItems] = useState([]);  
    const [currentId, setId]= useState(1); 
    const [itemsDone, setItemsDone] = useState(0);

    function handleKeyUp(e){
        if(e.key==='Enter'){
            setId(currentId => currentId+1); 
            let toDoItem={id: currentId, task: e.target.value, done:false};  
            setToDoItems(prevState=> ([...prevState, toDoItem]));
            e.target.value='';
        }
    }
    function handleChecked(id){
        let index = toDoItems.findIndex(element => element.id === id);
        let arr = [...toDoItems]; 
        if (arr[index].done){
            setItemsDone(prevVal => prevVal-1)
        } else {setItemsDone(prevVal => prevVal+1)}
        arr[index].done= !arr[index].done; 
        setToDoItems(arr);
    }
    
    function handleUpdate(e, id){
        if(e.key==='Enter' ||  e.type==='blur') {
            let index = toDoItems.findIndex(element => element.id === id);
            let arr = [...toDoItems]; 
            arr[index].task=e.target.value;
            setToDoItems(arr); 
            if (e.key==='Enter') {
                e.target.blur(); 
            }
        }
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

                {/* Active tasks:  */}

                {toDoItems.length > 0 && toDoItems.every(item=> item.done===true) ? 
                (<div>
                    <h2>Active tasks:</h2>
                    <p>Congrats, you've completed all your tasks </p>
                </div>)
                :  
                (<>{toDoItems.length > 0 ?
                    (<div>
                        <h2>Active tasks:</h2>
                        {toDoItems.map(singleItem=> {
                            if(!singleItem.done){
                                return (
                                    <Todo key={singleItem.id} 
                                        currentItem={singleItem} 
                                        handleDelete={()=>handleDelete(singleItem.id)} 
                                        handleUpdate={handleUpdate}
                                        handleChecked={()=>handleChecked(singleItem.id)} 
                                    />
                                )
                            } else return(<></>);
                        })}
                    </div>)
                    :
                    (<></>)                     
                } </>  
                ) 
                }

                {/* Completed tasks */}

                {toDoItems.find(item=>item.done===true) && 
                    <div className='completed-tasks'>
                        <h2>Completed tasks ({itemsDone}/{toDoItems.length}):</h2>
                        {toDoItems.map(singleItem => {
                            if(singleItem.done){
                                return (
                                    <Todo key={singleItem.id} 
                                        currentItem={singleItem} 
                                        handleDelete={()=>handleDelete(singleItem.id)}
                                        handleChecked={()=>handleChecked(singleItem.id)} 
                                    />
                                )
                            } else return(<></>);
                        })} 
                    </div>
                }
                
            </div> 
        </div>
    );
}; 