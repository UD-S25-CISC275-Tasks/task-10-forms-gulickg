import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);
    const [disabled, setDisabled] = useState<boolean>(true);
    function startQuiz(): void {
        if (attempts > 0) {
            setProgress(true);
            () => setAttempts(attempts - 1);
        }
    }
    function stopQuiz(): void {
        setProgress(false);
    }
    function mulligan(): void {
        () => setAttempts(attempts + 1);
    }
    return (
        <div>
            {progress && attempts > 0
                ? <Button onClick={startQuiz}>Start Quiz</Button> && (
                      <Button onClick={stopQuiz} disabled={disabled}>
                          Stop Quiz
                      </Button>
                  ) && (
                      <Button onClick={mulligan} disabled={disabled}>
                          Mulligan
                      </Button>
                  )
                : !progress
                ? <Button onClick={startQuiz}>Start Quiz</Button> && (
                      <Button onClick={stopQuiz} disabled={disabled}>
                          Stop Quiz
                      </Button>
                  ) && <Button onClick={mulligan}>Mulligan</Button>
                : attempts == 0
                ? (
                      <Button onClick={startQuiz} disabled={disabled}>
                          Start Quiz
                      </Button>
                  ) && <Button onClick={stopQuiz}>Stop Quiz</Button> && (
                      <Button onClick={mulligan}>Mulligan</Button>
                  )
                : <Button onClick={startQuiz}>Start Quiz</Button> && (
                      <Button onClick={stopQuiz}>stopQuiz</Button>
                  ) && <Button onClick={mulligan}>Mulligan</Button>}
            <h3>Number of Attempts: {attempts}</h3>
        </div>
    );
}
/*
You will need two pieces of state: the number of attempts and whether the quiz is in progress.
The initial number of attempts is 4
The quiz is initially NOT in progress
There is a button labelled Start Quiz that puts the Quiz in progress and decreases the number of attempts by one.
There is a button labelled Stop Quiz that stops the Quiz from being in progress.
There is a button labelled Mulligan that increase the attempts by one.
When the quiz is in progress, the Start Quiz and Mulligan buttons are disabled.
When the quiz is not in progress, the Stop Quiz button is disabled.
When the attempts are zero, the Start Quiz button is disabled.
The number of attempts should be visible in the interface.
*/
