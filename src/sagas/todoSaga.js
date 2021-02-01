import { put, takeLatest } from 'redux-saga/effects';
import { Api } from './Api';
import { FETCH_TODO_LIST_SUCCESS, FETCH_TODO_LIST_FAIL, TODO_LIST } from '../actions/todoType';

function* todoSaga() {
    try {
        const todos = yield Api.getToDos();
        console.log(todos);
        put(FETCH_TODO_LIST_SUCCESS, {todos})
    } catch(ex) {
        console.log(ex);
        put(FETCH_TODO_LIST_FAIL, {ex})
    }
}

export function* watchFetchTodos() {
    yield takeLatest(TODO_LIST, todoSaga);
}
