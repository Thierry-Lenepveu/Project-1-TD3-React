import { useState } from "react";
import OptionButton from "./OptionButton";

interface ListTitleProp {
    toggle: boolean,
    setToggle: React.Dispatch<React.SetStateAction<boolean>>,
    title: string
}

function ListTitle({toggle, setToggle, title}: ListTitleProp) {
    const [isDisplayed, setIsDisplayed] = useState<boolean>(false)

    return( 
    <div 
        className="header-element"
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
        <h3 onClick={
            () => {
                setToggle(!toggle);
            }
        }>{title}</h3>
        <div className={isDisplayed ? "option-bar" : "option-bar hidden"}>
        <OptionButton
            onClick={() => alert('plus: onClick')}
            image="./src/assets/plus.png"
            name="plus" />
        <OptionButton
            onClick={() => alert('modify: onClick')}
            image="./src/assets/modify.png"
            name="modify" />
        <OptionButton
            onClick={() => alert('delete: onClick')}
            image="./src/assets/trash.png"
            name="trash" />
        </div>
    </div>
    );
}

export default ListTitle;