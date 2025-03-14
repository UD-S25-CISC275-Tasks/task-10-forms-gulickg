import React, { useState } from "react";
import { Button } from "react-bootstrap";

enum Holiday {
    Halloween = "🎃",
    Christmas = "🎄",
    NewYear = "🎉",
    Easter = "🐰",
    Thanksgiving = "🦃",
}

function nextHolidayAlph(holiday: Holiday): Holiday {
    const holidays = Object.values(Holiday);
    const i = holidays.indexOf(holiday);
    return holidays[(i + 1) % holidays.length];
}

function nextHolidayYear(holiday: Holiday): Holiday {
    const holidaysDate = [
        Holiday.NewYear,
        Holiday.Easter,
        Holiday.Halloween,
        Holiday.Thanksgiving,
        Holiday.Christmas,
    ];
    const i = holidaysDate.indexOf(holiday);
    return holidaysDate[(i + 1) % holidaysDate.length];
}

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>(Holiday.Halloween);
    function advanceAlph() {
        setHoliday((holiday) => nextHolidayAlph(holiday));
    }
    function advanceYear() {
        setHoliday((holiday) => nextHolidayYear(holiday));
    }
    return (
        <div>
            <p>Holiday: {holiday}</p>
            <div>
                <Button onClick={advanceAlph}>Advance by Alphabet</Button>
                <Button onClick={advanceYear}>Advance by Year</Button>
            </div>
        </div>
    );
}

/*
You will need one state, either a string or an enumeration of 5 strings like QuestionType (perhaps named Holiday).
You will need to define two functions (or two Records) that can take in an existing holiday and produce the next holiday - one function should produce the next holiday alphabetically, and the other produces the next holiday in the year.
The view should render the current holiday with the text Holiday: followed by the emoji (e.g., Holiday: 🎃).
The first button should include the text Alphabet somewhere (e.g., Advance by Alphabet) and changes the current holiday to the next one alphabetically.
The second button should include the text Year somewhere (e.g., Advance by Year) and changes the current holiday to the next one in the year.
*/
