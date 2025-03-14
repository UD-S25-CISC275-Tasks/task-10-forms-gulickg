import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
<<<<<<< HEAD
import {
    duplicateQuestion,
    makeBlankQuestion,
    renameQuestion
} from "./objects";
=======
>>>>>>> origin/task-forms

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
<<<<<<< HEAD
    const newQuest = questions.filter(
        (question: Question): boolean => question.published
    );
    return newQuest;
=======
    return [];
>>>>>>> origin/task-forms
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
<<<<<<< HEAD
    const newQuest = questions.filter(
        (question: Question): boolean =>
            question.body !== "" ||
            question.expected !== "" ||
            question.options.length > 0
    );
    return newQuest;
=======
    return [];
>>>>>>> origin/task-forms
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
<<<<<<< HEAD
    const found = questions.find(
        (question: Question): boolean => question.id == id
    );
    if (found) {
        return found;
    }
=======
>>>>>>> origin/task-forms
    return null;
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
<<<<<<< HEAD
    const newQuest = questions.filter(
        (question: Question): boolean => question.id != id
    );
    return newQuest;
=======
    return [];
>>>>>>> origin/task-forms
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
<<<<<<< HEAD
    const newQuest = questions.map(
        (question: Question): string => question.name
    );
    return newQuest;
=======
    return [];
>>>>>>> origin/task-forms
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
<<<<<<< HEAD
    const sum = questions.reduce(
        (total, question): number => total + question.points,
        0
    );
    return sum;
=======
    return 0;
>>>>>>> origin/task-forms
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
<<<<<<< HEAD
    const newQuest = getPublishedQuestions(questions);
    const sum = sumPoints(newQuest);
    return sum;
=======
    return 0;
>>>>>>> origin/task-forms
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
<<<<<<< HEAD
    let newQuest = questions.map(
        (question: Question) =>
            question.id.toString() +
            "," +
            question.name +
            "," +
            question.options.length.toString() +
            "," +
            question.points.toString() +
            "," +
            question.published.toString()
    );
    return "id,name,options,points,published" + "\n" + newQuest.join("\n");
=======
    return "";
>>>>>>> origin/task-forms
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
<<<<<<< HEAD
    const answers = questions.map(
        (question: Question): Answer => ({
            questionId: question.id,
            text: "",
            submitted: false,
            correct: false
        })
    );
    return answers;
=======
    return [];
>>>>>>> origin/task-forms
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
<<<<<<< HEAD
    const newQuest = questions.map(
        (question: Question): Question => ({
            ...question,
            published: true
        })
    );
    return newQuest;
=======
    return [];
>>>>>>> origin/task-forms
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
<<<<<<< HEAD
    return questions.every(
        (question: Question) => question.type == questions[0].type
    );
=======
    return false;
>>>>>>> origin/task-forms
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
<<<<<<< HEAD
    const newQuest: Question = makeBlankQuestion(id, name, type);
    const copyQuest = [...questions, newQuest];
    return copyQuest;
=======
    return [];
>>>>>>> origin/task-forms
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
<<<<<<< HEAD
    const targetQuest = questions.map((question: Question): Question => {
        if (question.id == targetId) {
            const newQuest: Question = renameQuestion(question, newName);
            return newQuest;
        }
        return question;
    });
    return targetQuest;
=======
    return [];
>>>>>>> origin/task-forms
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
<<<<<<< HEAD

//error
=======
>>>>>>> origin/task-forms
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
<<<<<<< HEAD
    const newQuest = questions.map((question: Question): Question => {
        if (question.id == targetId) {
            question.type == newQuestionType;
            if (newQuestionType != "multiple_choice_question") {
                question.options = [];
            }
            return { ...question, type: newQuestionType };
        }
        return question;
    });
    return newQuest;
=======
    return [];
>>>>>>> origin/task-forms
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
<<<<<<< HEAD
): Question[] {
    const newQuest = questions.map((question: Question): Question => {
        if (question.id == targetId) {
            const newOptions = [...question.options];
            if (targetOptionIndex == -1) {
                newOptions.push(newOption);
            } else {
                newOptions[targetOptionIndex] = newOption;
            }
            return { ...question, options: newOptions };
        }
        return question;
    });
    return newQuest;
=======
) {
    return [];
>>>>>>> origin/task-forms
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
<<<<<<< HEAD
    const newQuest = [...questions];
    const questIndex: number = newQuest.findIndex(
        (question: Question): boolean => question.id == targetId
    );
    newQuest.splice(
        questIndex + 1,
        0,
        duplicateQuestion(newId, questions[questIndex])
    );
    return newQuest;
=======
    return [];
>>>>>>> origin/task-forms
}
