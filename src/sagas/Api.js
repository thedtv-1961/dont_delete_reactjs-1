import { todoUrl } from "./url";

function* getToDos(){
    const response = yield fetch(todoUrl, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    }).then(res => res.json());

    return response;
}

export const Api = {
    getToDos
}
