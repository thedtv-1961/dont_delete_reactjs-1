import { call, put, takeLatest} from 'redux-saga/effects';
import { TODO_FETCH_SUCCESS, TODO_FETCH_FAIL, TODO_FETCH } from '../actions/todoType';
import { TODO_ADD, TODO_ADD_SUCCESS, TODO_ADD_FAIL } from '../actions/todoType';
import { Api } from './Api';

function* fetchTodoApi() {
    try {
        const products = yield Api.get();
        yield put({
            type: TODO_FETCH_SUCCESS,
            data: {
                products,
                is_loading: false
            }
        });
    } catch (error) {
        yield put({
            type: TODO_FETCH_FAIL,
            error: error.message
        });
    }
}

export function* watchFetchTodoApi() { // action/insex.js fetchTodo() type: TODO_FETCH
    yield takeLatest(TODO_FETCH, fetchTodoApi);
}

function* postTodoApi(action){
    try{
        yield Api.post(action.newTodo);
        put({
            type: TODO_ADD_SUCCESS,
            message: 'Add todo successfully!',
        });
        yield call(fetchTodoApi);
    } catch(error) {
        put({
            type: TODO_ADD_FAIL,
            error: error.message
        });
    }
}

export function* watchPostTodoApi(){
    yield takeLatest(TODO_ADD, postTodoApi);
}
