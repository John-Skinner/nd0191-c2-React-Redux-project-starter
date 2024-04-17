export const SET_AUTHED_USER = "SET_AUTHED_USER";
export function acceptUser(id) {
    console.log(`setting authed user to ${id}`)
    return {
        type:SET_AUTHED_USER,
        id,
    }
}
