import React,  {useState} from 'react'

function ToDoList(){
    
    const [tasks, setTasks] = useState(["Eat Breakfast","Off To Work" ,
                                       "Preaparing Meeting","Lunch",
                                       "Slideshows typing","Coffee Break",
                                        "closing emails","Push Ups","Drill","Running"]);
    const [newTask, setNewTask] = useState("");
    
    function handleInputChange(event){
        setNewTask(event.target.value);
        }
    function addTask(){
        if(newTask.trim() !== ""){
            setTasks(t=> [...t,newTask]);
            setNewTask("");
            }   
        }
    function deleteTask(index){
            const updatedTasks = tasks.filter((element, i) => i !==index);
            setTasks(updatedTasks);
        }
    function moveTaskUp(index){
        if (index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index-1]]=
            [updatedTasks[index-1], updatedTasks[index]];
            setTasks(updatedTasks)
        }
    }
    function moveTaskDown(index){
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] =
            [updatedTasks[index + 1] ,updatedTasks[index]]
            setTasks(updatedTasks);
        }
    } 

    return(
      <div className="to-do-list">
        <h1>To Do List</h1>
        <div>
            <input
            className='taskdecider'
                type="text"
                placeholder="Enter a Task"
                value={newTask}
                onChange={handleInputChange}
            />
            <button 
                className='add-button'
                onClick={addTask}>
                    Add
            </button>

            <ol>
                {tasks.map((tasks, index) =>
                    <li key={index}>
                        <span className="text" >{tasks}</span>
                        <button 
                            className='delete-button'
                            onClick={() => deleteTask(index)}>
                                Delete
                        </button>
                        <button 
                            className='move-up-button'
                            onClick={() => moveTaskUp(index)}>
                                Drag task UP
                        </button>
                        <button 
                            className='move-down-button'
                            onClick={() => moveTaskDown(index)}>
                                Drag task Down
                        </button>
                    </li>
                )}
            </ol>
        </div>
      </div>
    );
};
export default ToDoList;