import '../App.css';

export default function Todo(props){

    return(
        <div className="single-task">
            <div>
            <input type="checkbox"></input> <label>{props.currentItem.task} </label>
            </div>
            <div className='buttons'>
                <button onClick={props.handleEdit}>Edit</button>
                <button onClick={props.handleDelete}>Delete</button>
            </div>
        </div>
    )
};