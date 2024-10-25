import { useState } from "react";
import { Task, TaskProp } from "./Task"
import ListTitle from "./ListTitle";
import { RandomHashSHA256 } from "./CryptoTools";

export interface ToDoListProp {
    id: string,
    title: string,
    category: string,
    elements: TaskProp[]
}

function setClassName(prop: ToDoListProp, isCollapsed: boolean, isContentEditable: boolean) {
    let className = prop.category;
    if (isCollapsed) {
        className += " collapsed"
    }
    if (isContentEditable) {
        className += " editing"
    }

    return className;
}

export function ToDoList(prop: ToDoListProp) {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(true)
    const [todoListProp, setTodoListProp] = useState<ToDoListProp>(prop);
    const [isContentEditable, setIsContentEditable] = useState<boolean>(false)
    const [title, setTitle] = useState<string>(prop.title)
    const AddNewTask = () => {
        const elements = todoListProp.elements
        elements.push({
            id: RandomHashSHA256(),
            name: "New Task",
            checked: false
        })
    
        setTodoListProp({
            id: todoListProp.id,
            title: todoListProp.title,
            category: todoListProp.category,
            elements: elements
        });
    }

    return (
        <article id-list={prop.id} className={setClassName(prop, isCollapsed, isContentEditable)}>
            <ListTitle
                isContentEditable={isContentEditable}
                setIsContentEditable={setIsContentEditable}
                onClickAddTask={() => {AddNewTask()}}
                onClickDeleteList={() => {}}
                isCollapsed={isCollapsed}
                setIsCollapsed={setIsCollapsed}
                title={title}
                setTitle={setTitle} />
            <ul>
            {
                todoListProp.elements.map(
                    (task) => {
                        return (
                        <Task
                            id={task.id}
                            key={task.id}
                            checked={task.checked}
                            name={task.name} />
                        )
                    }
                )
            }
            </ul>
        </article>
    );
}
