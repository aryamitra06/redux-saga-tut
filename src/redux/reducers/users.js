const initialState = {
    users: [],
    loading: true
}

export default function users(state = initialState, action) {
    switch (action.type) {
        case "GET_USERS_REQUESTED":
            return {
                ...state, loading: true
            }
        case "GET_USERS_SUCCESS":
            return {
                ...state, loading: false, users: action.users
            }
        default:
            return state;
    }
}