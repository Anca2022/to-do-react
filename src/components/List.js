import { useReducer } from 'react';
import { INITIAL_STATE, toDoReducer } from '../hooks/toDoReducer';
import Todo from "./Todo";
import '../App.css';

export default function List(){
    const [state, dispatch] = useReducer(toDoReducer, INITIAL_STATE);

    function handleKeyUp(e){
        if(e.key==='Enter'){
            dispatch({type: "ADD_TODO", payload: e.target.value});
            e.target.value='';
        }
    }
    function handleChecked(id){
        let index = state.toDoItems.findIndex(element => element.id === id);
        dispatch({type:"CHANGE_DONE", payload: index});
    }
    
    function handleUpdate(e, id){
        if(e.key==='Enter' ||  e.type==='blur') {
            let index = state.toDoItems.findIndex(element => element.id === id);
            dispatch({type:'UPDATE_TASK', payload: {index, task:e.target.value}})
            if (e.key==='Enter') {
                e.target.blur(); 
            }
        }
    }
    function handleDelete(id){
        let index = state.toDoItems.findIndex(element => element.id === id);
        dispatch({type:"DELETE_TASK", payload:index});
    }
    return(
        <div>
            <input className="main-input" onKeyUp={handleKeyUp} placeholder="enter todo..."></input>
            <div className='tasks'> 

                {/* Active tasks:  */}

                {state.toDoItems.length > 0 && state.toDoItems.every(item=> item.done===true) ? 
                (<div>
                    <h2>Active tasks:</h2>
                    <p>Congrats, you've completed all your tasks </p>
                </div>)
                :  
                (<>{state.toDoItems.length > 0 ?
                    (<div>
                        <h2>Active tasks:</h2>
                        {state.toDoItems.map(singleItem=> {
                            if(!singleItem.done){
                                return (
                                    <Todo key={singleItem.id} 
                                        currentItem={singleItem} 
                                        handleDelete={()=>handleDelete(singleItem.id)} 
                                        handleUpdate={handleUpdate}
                                        handleChecked={()=>handleChecked(singleItem.id)} 
                                    />
                                )
                            } else return(null);
                        })}
                    </div>)
                    :
                    (<></>)                     
                } </>  
                ) 
                }

                {/* Completed tasks */}

                {state.toDoItems.find(item=>item.done===true) && 
                    <div className='completed-tasks'>
                        <h2>Completed tasks ({state.itemsDone}/{state.toDoItems.length}):</h2>
                        {state.toDoItems.map(singleItem => {
                            if(singleItem.done){
                                return (
                                    <Todo key={singleItem.id} 
                                        currentItem={singleItem} 
                                        handleDelete={()=>handleDelete(singleItem.id)}
                                        handleChecked={()=>handleChecked(singleItem.id)} 
                                    />
                                )
                            } else return(null);
                        })} 
                    </div>
                }
                
            </div> 
        </div>
    );
}; 