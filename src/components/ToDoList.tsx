import { useState } from "react";
import { Task, TaskProp } from "./Task"
import ListTitle from "./ListTitle";
import { RandomHashSHA256 } from "./CryptoTools";

export interface ToDoListProp {
    idList: string,
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

    const AddNewTask = () => {
        const elements = todoListProp.elements
        elements.push({
            idList: todoListProp.idList,
            idTask: RandomHashSHA256(),
            name: "New Task",
            checked: false
        })
    
        setTodoListProp({
            idList: todoListProp.idList,
            title: todoListProp.title,
            category: todoListProp.category,
            elements: elements
        });
    }

    return (
        <article id-list={prop.idList} className={setClassName(todoListProp, isCollapsed, isContentEditable)}>
            <ListTitle
                isContentEditable={isContentEditable}
                setIsContentEditable={setIsContentEditable}
                onClickAddTask={() => {AddNewTask()}}
                onClickDeleteList={() => {}}
                isCollapsed={isCollapsed}
                setIsCollapsed={setIsCollapsed}
                todoListProp={todoListProp}
                setTodoListProp={setTodoListProp} />
            <ul>
            {
                todoListProp.elements.map(
                    (task: TaskProp) => {
                        return (
                        <Task
                            idList={prop.idList}
                            idTask={task.idTask}
                            key={task.idTask}
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
