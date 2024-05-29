
import './App.css'

export default function Todo(props){

    return(
        <div className="single-task">
            <div>
            <input type="checkbox"></input> <label>{props.currentState.task} </label>
            </div>
            <div className='buttons'>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    )
};