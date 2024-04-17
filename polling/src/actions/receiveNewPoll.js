export const RECEIVE_NEWPOLL="RECEIVE_NEWPOLL"
export function receiveNewPoll(question) {
    return {
        type: RECEIVE_NEWPOLL,
        newQuestion:question,
    };
}
