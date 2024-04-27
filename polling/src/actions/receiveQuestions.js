export const RECEIVE_QUESTIONS="RECEIVE_QUESTIONS"
export const UPDATE_QUESTION = "UPDATE_QUESTION";
export function receiveQuestions(questions) {
    console.log(`*************questions:${JSON.stringify(questions,null,2)}`);
    return {
        type: RECEIVE_QUESTIONS,
        questions
    };
}
export function updateQuestion(question) {
    return {
        type: UPDATE_QUESTION,
        question
    }
}
