export const RECEIVE_QUESTIONS="RECEIVE_QUESTIONS"
export function receiveQuestions(questions) {
    console.log(`*************questions:${JSON.stringify(questions,null,2)}`);
    return {
        type: RECEIVE_QUESTIONS,
        questions
    };
}
