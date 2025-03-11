import React, { useState } from "react";
import { Button } from "react-bootstrap";
//import { dhValue, setDhValue } from "./DoubleHalfState";

export function DoubleHalf(): React.JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    function Doubler() {
        setDhValue(2 * dhValue);
    }
    function Halver() {
        setDhValue(0.5 * dhValue);
    }
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Button onClick={Doubler}>Button Double</Button>
            <Button onClick={Halver}>Button Halve</Button>
        </div>
    );
}
