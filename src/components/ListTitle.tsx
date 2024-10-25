import { useState } from "react";
import OptionButton from "./OptionButton";

interface ListTitleProp {
    isContentEditable: boolean,
    setIsContentEditable: React.Dispatch<React.SetStateAction<boolean>>,
    onClickAddTask: React.MouseEventHandler<HTMLImageElement>,
    onClickDeleteList: React.MouseEventHandler<HTMLImageElement>,
    isCollapsed: boolean,
    setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>,
    title: string
}

function ListTitle(
    {isContentEditable, setIsContentEditable, onClickAddTask, onClickDeleteList, isCollapsed, setIsCollapsed, title}: ListTitleProp) {
    const [isDisplayed, setIsDisplayed] = useState<boolean>(false)
    const [content, setContent] = useState(title);

    const handleInput = (event) => {
      setContent(event.currentTarget.textContent);
    };

    const handleAddTask = (event) => {
        // Actions supplémentaires si nécessaire

        onClickAddTask(event);
      };

    const handleModifyTitle = (event) => {
        // Actions supplémentaires si nécessaire
        setIsContentEditable(!isContentEditable)
    };

    const handleDeleteList = (event) => {
        onClickDeleteList(event);
      };
    
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
        <h3 
            dangerouslySetInnerHTML={{ __html: content }}
            contentEditable={isContentEditable}
            className={isContentEditable ? "editing-element" : ""}
            onClick={
                () => {
                    setIsCollapsed(!isCollapsed);
                }
            }
            onBlur={
                () => {
                    setIsContentEditable(false)
                }
            }
            onInput={
                handleInput
            }></h3>
        <div className={isDisplayed ? "option-bar" : "option-bar hidden"}>
            <OptionButton
                onClick={handleAddTask}
                image="./src/assets/plus.png"
                name="plus" />
            <OptionButton
                onClick={handleModifyTitle}
                image="./src/assets/modify.png"
                name="modify" />
            <OptionButton
                onClick={handleDeleteList}
                image="./src/assets/trash.png"
                name="trash" />
        </div>
    </div>
    );
}

export default ListTitle;