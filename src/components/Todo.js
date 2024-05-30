import { useRef } from 'react';
import '../App.css';

export default function Todo(props){
    let inputRef = useRef();
    let checkedStyle={
        textDecoration:'line-through'
    }
    
    return(
        <div className="single-task">
            <div className="inputs">
            <input type="checkbox" onChange={props.handleChecked}></input> 
            <input type='text' 
                value={props.currentItem.task} 
                ref={inputRef}
                style={props.currentItem.done ? checkedStyle : {}}
                disabled = {!props.currentItem.editing}
                onKeyUp={()=>props.handleUpdate()}>
                </input>
            {/* <label style={props.currentItem.done ? checkedStyle : {}}>{props.currentItem.task} </label> */}
            </div>
            <div className='buttons'>
                <button onClick={props.handleEdit} disabled = {props.currentItem.done}>Edit</button>
                <button onClick={props.handleDelete}>Delete</button>
            </div>
        </div>
    )
};