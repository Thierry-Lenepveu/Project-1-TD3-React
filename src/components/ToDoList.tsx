import { Task, TaskProp } from "./Task"
import sha256 from 'crypto-js/sha256';

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
    return (
        <article className={`${prop.category}`}>
            <div className="header-element">
                <h3>{prop.title}</h3>
            </div>
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