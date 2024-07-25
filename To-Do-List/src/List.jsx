import React, { useState } from "react";

export default function List(){
    const [tasks, setTasks] = useState(["DSA", "Competative coding", "Development"]);
    const [newTask, setNewtask] = useState("");
    function handletaskchange(event){
        setNewtask(event.target.value);
    }
    function addTask(){
        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask]);
            setNewtask("");
        }
    }
    function deleteTask(index){
        const updateTasks = tasks.filter((_, i)=> i!==index);
        setTasks(updateTasks);
    }
    function moveTaskUp(index){
        if(index>0){
            const updateTasks = [...tasks];
            [updateTasks[index], updateTasks[index-1]] = [updateTasks[index-1], updateTasks[index]];
            setTasks(updateTasks);
        }
    }
    function moveTaskDown(index){
        if(index<tasks.length-1){
            const updateTasks = [...tasks];
            [updateTasks[index], updateTasks[index+1]] = [updateTasks[index+1], updateTasks[index]];
            setTasks(updateTasks);
        }
    }
    return(<>
        <div className="to-do-list"> 
            <h1>To-Do-List</h1>
            <div>
                <input type="text" value={newTask} placeholder="New Task" onChange={handletaskchange}/>
                <button onClick={addTask} className="add-button">Add</button>
            </div>
            <ol>
                {tasks.map((task, index)=>{
                    <li key={index}>{task}<span className="text"></span>
                        <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
                        <button className="move-button" onClick={() => moveTaskUp(index)}>⬆</button>
                        <button className="move-button" onClick={() => moveTaskDown(index)}>⬇</button>
                    </li>
                })}  
            </ol>
        </div>
    </>);
}