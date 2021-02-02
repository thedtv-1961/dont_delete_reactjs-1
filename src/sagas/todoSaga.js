import { put, takeLatest} from 'redux-saga/effects';
import { TODO_FETCH_SUCCESS, TODO_FETCH_FAIL, TODO_FETCH } from '../actions/todoType';
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
