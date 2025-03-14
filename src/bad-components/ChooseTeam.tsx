import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";

const PEOPLE = [
    "Alan Turing",
    "Grace Hopper",
    "Ada Lovelace",
    "Charles Babbage",
    "Barbara Liskov",
<<<<<<< HEAD
    "Margaret Hamilton"
=======
    "Margaret Hamilton",
>>>>>>> origin/task-forms
];

export function ChooseTeam(): React.JSX.Element {
    const [allOptions, setAllOptions] = useState<string[]>(PEOPLE);
    const [team, setTeam] = useState<string[]>([]);

<<<<<<< HEAD
    function chooseMember(newMember: string) {
        //const newTeam = [...team, newMember];
        if (!team.includes(newMember)) {
            setTeam((team) => [...team, newMember]);
        }
    }

    function clearTeam() {
        setTeam([]);
        setAllOptions(allOptions);
=======
    function chooseMember() {
        /*
        if (!team.includes(newMember)) {
            team.push(newMember);
        }
        */
    }

    function clearTeam() {
        /*
        team = [];
        */
>>>>>>> origin/task-forms
    }

    return (
        <div>
            <h3>Choose Team</h3>
            <Row>
                <Col>
                    {allOptions.map((option: string) => (
                        <div key={option} style={{ marginBottom: "4px" }}>
                            Add{" "}
<<<<<<< HEAD
                            <Button
                                onClick={() => {
                                    chooseMember(option);
                                }}
                                size="sm"
                            >
=======
                            <Button onClick={chooseMember} size="sm">
>>>>>>> origin/task-forms
                                {option}
                            </Button>
                        </div>
                    ))}
                </Col>
                <Col>
                    <strong>Team:</strong>
                    {team.map((member: string) => (
                        <li key={member}>{member}</li>
                    ))}
                    <Button onClick={clearTeam}>Clear Team</Button>
                </Col>
            </Row>
        </div>
    );
}
