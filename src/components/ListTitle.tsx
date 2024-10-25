import { useRef, useState } from "react";
import OptionButton from "./OptionButton";

interface ListTitleProp {
    isContentEditable: boolean,
    setIsContentEditable: React.Dispatch<React.SetStateAction<boolean>>,
    onClickAddTask: React.MouseEventHandler<HTMLImageElement>,
    onClickDeleteList: React.MouseEventHandler<HTMLImageElement>,
    isCollapsed: boolean,
    setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>,
    title: string
    setTitle: React.Dispatch<React.SetStateAction<string>>,
}

function ListTitle(
    {isContentEditable, setIsContentEditable, onClickAddTask, onClickDeleteList, isCollapsed, setIsCollapsed, title, setTitle}: ListTitleProp) {
    const [isDisplayed, setIsDisplayed] = useState<boolean>(false)
    const [content, setContent] = useState(title);

    const inputRef = useRef(null);
    
    const handleInput = (event) => {
        if (inputRef !== null) {
            const start = inputRef.current.selectionStart;
            const end = inputRef.current.selectionEnd;
            setContent(event.target.textContent);
            setTitle(event.target.textContent);
            if (start !== undefined && end !== undefined) {
                setTimeout(() => {
                    event.target.setSelectionRange(start, end);
                }, 0);
            }
        }
    };

    const handleAddTask = (event) => {
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
            ref={inputRef}
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
            onChange={
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