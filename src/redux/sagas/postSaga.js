import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';




//saga generators

function* fetchPost(action) {
    try{
        console.log(action.payload);
        const post = yield call(()=>axios.get(`https://jsonplaceholder.typicode.com/posts/${action.payload}`))
        yield put({ type: 'GET_POST_SUCCESS', payload: post })
    }
    catch(e){
        console.log(e);
    }
}

function* postSaga(){
    yield takeEvery('GET_POST_REQUESTED', fetchPost)
}

export default postSaga;