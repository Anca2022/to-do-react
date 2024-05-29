import '../App.css';

export default function Todo(props){
    let checkedStyle={
        textDecoration:'line-through'
    }
    

    return(
        <div className="single-task">
            <div>
            <input type="checkbox" onChange={props.handleChecked}></input> 
            <label style={props.currentItem.done ? checkedStyle : {}}>{props.currentItem.task} </label>
            </div>
            <div className='buttons'>
                <button onClick={props.handleEdit} disabled = {props.currentItem.done}>Edit</button>
                <button onClick={props.handleDelete}>Delete</button>
            </div>
        </div>
    )
};