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

export const Api = {
    get
}
