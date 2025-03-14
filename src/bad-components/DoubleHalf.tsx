import React, { useState } from "react";
import { Button } from "react-bootstrap";
<<<<<<< HEAD
//import { dhValue, setDhValue } from "./DoubleHalfState";

export function DoubleHalf(): React.JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    function Doubler() {
        setDhValue(2 * dhValue);
    }
    function Halver() {
        setDhValue(0.5 * dhValue);
    }
=======
import { dhValue, setDhValue } from "./DoubleHalfState";

function Doubler(): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setDhValue(2 * dhValue);
            }}
        >
            Double
        </Button>
    );
}

function Halver(): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setDhValue(0.5 * dhValue);
            }}
        >
            Halve
        </Button>
    );
}

export function DoubleHalf(): React.JSX.Element {
>>>>>>> origin/task-forms
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
<<<<<<< HEAD
            <Button onClick={Doubler}>Button Double</Button>
            <Button onClick={Halver}>Button Halve</Button>
=======
            <Doubler></Doubler>
            <Halver></Halver>
>>>>>>> origin/task-forms
        </div>
    );
}
