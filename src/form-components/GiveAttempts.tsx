import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [attemptsRequest, setAttemptsRequest] = useState<string>("");
    const change = (event: {
        target: { value: React.SetStateAction<string> };
    }) => {
        setAttemptsRequest(event.target.value);
    };
    function use() {
        setAttemptsLeft(attemptsLeft - 1);
    }
    function gain() {
        const request = parseInt(attemptsRequest);
        if (!request) {
            setAttemptsLeft(attemptsLeft);
        }
        setAttemptsLeft(attemptsLeft + request);
    }
    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts Left: {attemptsLeft}</p>
            <input
                type="number"
                value={attemptsRequest}
                onChange={change}
                placeholder="Request attempts"
            ></input>
            <Button onClick={use} disabled={attemptsLeft === 0}>
                use
            </Button>
            <Button onClick={gain}>gain</Button>
        </div>
    );
}
