import { useState } from "react";
import { Task, TaskProp } from "./Task"
import sha256 from 'crypto-js/sha256';
import ListTitle from "./ListTitle";

function hash(number: number) {
    const hash = sha256(number.toString())
    return hash;
}

export interface ToDoListProp {
    title: string,
    category: string,
    elements: TaskProp[]
}

export function ToDoList(prop: ToDoListProp) {
    const [toggle, setToggle] = useState<boolean>(true)

    return (
        <article className={toggle ? `collapsed  ${prop.category}` : prop.category}>
            <ListTitle toggle={toggle} setToggle={setToggle} title={prop.title} />
            <ul>
            {
                prop.elements.map(
                    (task) => {
                        const keyName = hash(Math.floor(Math.random() * 1e9));
                        return (
                        <Task
                            key={keyName}
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
