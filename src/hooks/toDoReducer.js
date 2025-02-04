export const INITIAL_STATE={
    toDoItems: [], 
    currentId: 1, 
    itemsDone: 0
}

export function toDoReducer (state, action){
    switch(action.type){
        case "ADD_TODO":
            return {...state, 
                currentId: state.currentId + 1, 
                toDoItems: [...state.toDoItems, {
                    id:state.currentId, 
                    task: action.payload, 
                    done:false
                    }]
            };
        case "DELETE_TASK":
            return{...state, 
                itemsDone: state.toDoItems[action.payload].done ? state.itemsDone - 1 : state.itemsDone,
                toDoItems: state.toDoItems.filter((_, index)=> index !== action.payload)
            };
        case "CHANGE_DONE": 
            return{...state, 
                itemsDone: state.toDoItems[action.payload].done 
                    ? (state.itemsDone - 1) 
                    : (state.itemsDone + 1),  
                toDoItems: state.toDoItems.map( (item, index) => {
                    return index === action.payload
                        ? {...item, 
                            done: !item.done
                          }
                        : item
                })
            };
        case "UPDATE_TASK":
            return {...state, 
                toDoItems: state.toDoItems.map( (item, index) => {
                    return index === action.payload.index 
                        ? {...item, 
                          task: action.payload.task  
                        }
                        : item
                })
            };
        
        default: return state;         
    }
}
