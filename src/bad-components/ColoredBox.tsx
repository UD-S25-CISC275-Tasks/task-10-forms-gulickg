import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

function ChangeColor({
    colorChange
}: {
    colorChange: (newColorIndex: number) => void;
}): React.JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
    const handleClick = () => {
        setColorIndex((1 + colorIndex) % COLORS.length),
            colorChange((1 + colorIndex) % COLORS.length);
    };
    return <Button onClick={handleClick}>Next Color</Button>;
}

function ColorPreview({
    colorIndex
}: {
    colorIndex: number;
}): React.JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS[colorIndex],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px"
            }}
        ></div>
    );
}

export function ColoredBox(): React.JSX.Element {
    const [currentIndex, setCurrentIndex] =
        useState<number>(DEFAULT_COLOR_INDEX);
    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[currentIndex]}</span>
            <div>
                <ChangeColor colorChange={setCurrentIndex}></ChangeColor>
                <ColorPreview colorIndex={currentIndex}></ColorPreview>
            </div>
        </div>
    );
}
