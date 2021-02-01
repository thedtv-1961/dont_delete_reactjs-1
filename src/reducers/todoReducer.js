import { FETCH_TODO_LIST_FAIL, FETCH_TODO_LIST_SUCCESS } from '../actions/todoType';

const todoReducer = (todos = [], action) => {
    switch (action.type) {
        // case TODO_LIST: -> ko cần vì saga sẽ tự thực hiện
        case FETCH_TODO_LIST_SUCCESS:
            return action.todos;
        case FETCH_TODO_LIST_FAIL:
            return [];
        default:
            return todos;
    }
}

export default todoReducer;
