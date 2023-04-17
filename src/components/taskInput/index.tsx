import React from "react";
import "./styles.less";

export function TaskInput () {
    return <div className="taskInput">
        <div className="taskInput__container">
            <input className="taskInput__taskTitle" placeholder="add new task"></input>
            <textarea className="taskInput__taskDescription" name="description"></textarea>
            <button>Add</button>
        </div>
    </div>
}