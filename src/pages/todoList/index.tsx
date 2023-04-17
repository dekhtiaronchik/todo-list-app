import React from "react";
import { TaskInput } from "../../components/taskInput";
import { TaskList } from "../../components/taskList";

export function TodoList () {
    return <>
    <TaskList/>
    <TaskInput/>
    </>
}