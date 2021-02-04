import { todoUrl } from './url';

function* get() {
    const products = yield fetch(todoUrl , {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    }).then(res => res.json());

    return products;
}

function* post(todo) {
    yield fetch(todoUrl , {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo)
    });
}

export const Api = {
    get,
    post
}
