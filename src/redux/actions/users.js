export function getUsers(state) {
    return {
        type: "GET_USERS_REQUESTED",
        payload: state
    }
}