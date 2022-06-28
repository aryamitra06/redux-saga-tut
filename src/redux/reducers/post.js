const initialState = {
    post: [],
    loading: true
}

export default function post(state = initialState, action) {
    switch (action.type) {
        case "GET_POST_REQUESTED":
            return {
                ...state, loading: true
            }
        case "GET_POST_SUCCESS":
            return {
                ...state, loading: false, post: action.payload
            }
        default:
            return state;
    }
}