import '../App.css';

export default function Todo(props){
    let checkedStyle={
        textDecoration:'line-through'
    }
    
    return(
        <div className="single-task">
            <div className="inputs">
                <input type="checkbox" 
                onChange={props.handleChecked}
                checked = {props.currentItem.done}
                ></input> 
                <input type='text' 
                    defaultValue ={props.currentItem.task} 
                    onKeyUp={(e)=>props.handleUpdate(e, props.currentItem.id)}
                    onBlur={e=>props.handleUpdate(e, props.currentItem.id)}
                    style={props.currentItem.done ? checkedStyle : {}}
                    disabled = {props.currentItem.done}>
                </input>
            </div>
            <button onClick={props.handleDelete}>Delete</button>
        </div>
    )
};