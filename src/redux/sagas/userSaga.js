import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

const api = "https://jsonplaceholder.typicode.com/users"


//saga generators

function* fetchUsers() {
    try{
        const users = yield call(()=>axios.get(api))
        console.log(users);
        yield put({ type: 'GET_USERS_SUCCESS', users: users })
    }
    catch(e){
        yield put({ type: 'GET_USERS_FAILED', message: e.message })
    }
}

function* userSaga(){
    yield takeEvery('GET_USERS_REQUESTED', fetchUsers)
}

export default userSaga;