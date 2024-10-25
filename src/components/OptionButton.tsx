import { useState } from "react";

interface OptionButtonProp {
    onClick: React.MouseEventHandler<HTMLImageElement>,
    name: string,
    image: string,
} 
function OptionButton ({ onClick, name, image }: OptionButtonProp) {
    const [opacity, setOpacity] = useState<number>(0.25)

    return (
        <img className="option-button"
            style={{ opacity: opacity }}
            src={image}
            alt={name}
            onMouseOver={
                () => {
                    setOpacity(1.0)
                }
            }
            onMouseLeave={
                () => {
                    setOpacity(0.25)
                }
            }
            onClick={onClick} />
        );
}

export default OptionButton;