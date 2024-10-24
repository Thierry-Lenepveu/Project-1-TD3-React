export interface TaskProp {
    checked: boolean,
    name: string
}

function Span(prop: TaskProp) {
    if (prop.checked) {
        return (
            <span className="checked">{prop.name}</span>
        );
    }

    return (
        <span>{prop.name}</span>
    )
}

export function Task(prop: TaskProp) {
    return (
        <li>
            <img src={prop.checked ? "./src/assets/checkbox-filled.svg" : "./src/assets/checkbox-empty.svg"} alt="checkbox-empty" className="checkbox" />
            <Span checked={prop.checked}
                name={prop.name} />
        </li>
    );
}
