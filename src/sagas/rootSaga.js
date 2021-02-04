import { call, fork } from "redux-saga/effects";
import { watchFetchTodoApi, watchPostTodoApi } from "./todoSaga";

export default function* rootSaga() {
    yield fork(watchFetchTodoApi);
    yield fork(watchPostTodoApi);
}
