export const RECEIVE_USERS="RECEIVE_USERS";
export const UPDATE_USER="UPDATE_USER";
export function receiveUsers(users) {
    return {
        type:RECEIVE_USERS,
        users
    }
}
export function updateUser(user,pollQuestion) {
    return {
        type:UPDATE_USER,
        user,
        pollQuestion
    }
}
