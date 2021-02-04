import { call } from "redux-saga/effects";
import { watchFetchTodoApi } from "./todoSaga";

export default function* rootSaga() {
    yield call(watchFetchTodoApi);
}
