import { useState } from "react";
import OptionButton from "./OptionButton";

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
    const [checked, setChecked] = useState<boolean>(prop.checked)
    const [isDisplayed, setIsDisplayed] = useState<boolean>(false);
    
    return (
        <li
            onMouseOver={
                () => {
                    setIsDisplayed(true)
                }
            }
            onMouseLeave={
                () => {
                    setIsDisplayed(false)
                }
            }>
            <div
                className="task">
                <img 
                    src={checked ? "./src/assets/checkbox-filled.svg" : "./src/assets/checkbox-empty.svg"}
                    alt="checkbox-empty" className="checkbox"
                    onClick={
                        () => {
                            setChecked(!checked);
                        }
                    }/>
                <Span checked={checked}
                    name={prop.name} />
            </div>
            <div className={isDisplayed ? "option-bar" : "option-bar hidden"}>
                <OptionButton
                    onClick={() => alert('modify: onClick')}
                    image="./src/assets/modify.png"
                    name="modify" />
                <OptionButton
                    onClick={() => alert('delete: onClick')}
                    image="./src/assets/trash.png"
                    name="trash" />
            </div>
        </li>
    );
}
