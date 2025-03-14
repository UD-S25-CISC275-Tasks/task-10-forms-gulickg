import React, { useState } from "react";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [givenAnswer, setAnswer] = useState<string>("");
    const answerChange = (event: {
        target: { value: React.SetStateAction<string> };
    }) => {
        setAnswer(event.target.value);
    };
    const correct = givenAnswer == expectedAnswer;
    return (
        <div>
            <h3>Check Answer</h3>
            <input
                type="text"
                value={givenAnswer}
                onChange={answerChange}
                placeholder="Enter answer"
            ></input>
            <div>{correct ? "✔️" : "❌"}</div>
        </div>
    );
}
