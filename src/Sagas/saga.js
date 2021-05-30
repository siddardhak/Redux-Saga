import { takeEvery, put, call } from 'redux-saga/effects';

import { sagaActions } from '../SagaActions/sagaAction';

import { displayUsers, createdUser } from '../Store/UserDisplay';

let apiCall = (url) => {
    console.log(url)
    return fetch(url).then((response) => {
        console.log('data' + response)
        if (response.ok) {
            return response.json();
        }
    }).catch(error => {
        return error
    });
}
let postCall = (url) => {
    console.log(url)
    return fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify({
            'name': 'Sid',
            'job': 'Developer'
        })
    }).then((response) => {
        console.log(response)
        if (response.ok) {
            return response.json();
        }
    }).catch(error => {
        return error
    });
}

export function* fetchUsers() {
    try {
        let usersAPI = yield call(() =>
            apiCall('https://reqres.in/api/users?page=2')
        );
        console.log('hi' + usersAPI)
        yield put(displayUsers(usersAPI))

    } catch (e) {
        console.log(e)
    }
}

export function* createUser() {
    try {
        let userAPI = yield call(() =>
            postCall('https://reqres.in/api/users')
        );
        console.log(userAPI);
        yield put(createdUser())
    } catch (e) {
        console.log(e);
    }

}

export default function* rootSaga() {
    yield takeEvery(sagaActions.CREATE_USERS, createUser)

    yield takeEvery(sagaActions.FETCH_USER, fetchUsers)
}