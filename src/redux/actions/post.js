export function getPost(id) {
    return {
        type: "GET_POST_REQUESTED",
        payload: id
    }
}