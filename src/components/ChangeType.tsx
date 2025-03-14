import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
<<<<<<< HEAD
    //type QuestionType = "multiple_choice_question" | "short_answer_question";
    const [question, setType] = useState<QuestionType>("short_answer_question");
    function ChangeType(): void {
        if (question == "short_answer_question") {
            setType("multiple_choice_question");
        } else {
            setType("short_answer_question");
        }
    }
    return (
        <div>
            <Button onClick={ChangeType}>Change Type</Button>
            {question == "multiple_choice_question" ? (
                <p>Multiple Choice</p>
            ) : (
                <p>Short Answer</p>
            )}
        </div>
    );
}

/*
You will need a single state to handle whether the type is multiple_choice_question or short_answer_question.
The type of the state should be QuestionType, not string.
There should be a button labelled Change Type that changes the state from one type to the other.
When the type is multiple_choice_question, the text Multiple Choice should be visible.
When the type is short_answer_question, the text Short Answer should be visible.
The initial type must be short_answer_question.
*/
=======
    return <div>Change Type</div>;
}
>>>>>>> origin/task-forms
