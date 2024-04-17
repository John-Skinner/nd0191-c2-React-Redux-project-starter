export const LOGOUT_USER="LOGOUT_USER";
export function logout() {
    console.log(`logged out action`);
    return {
        type:LOGOUT_USER

    }
}
