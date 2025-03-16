import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [mode, setMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);
    function switchChange() {
        setMode(!mode);
    }
    function nameChange(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    function studentChange(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }
    return (
        <div>
            <Form.Check
                type="switch"
                checked={mode}
                onChange={switchChange}
                label="Edit Mode"
            ></Form.Check>
            <div>
                {" "}
                {mode ?
                    <>
                        <h3>Edit Mode</h3>
                        <label>
                            Name:
                            <input
                                type="text"
                                value={name}
                                onChange={nameChange}
                            ></input>
                        </label>
                        <label>
                            Are you a student?
                            <input
                                type="checkbox"
                                checked={student}
                                onChange={studentChange}
                            ></input>
                        </label>
                    </>
                :   <>
                        <h3>View Mode</h3>
                        <p>
                            {name} is {student ? "a student" : "not a student"}
                        </p>
                    </>
                }
            </div>
        </div>
    );
}
