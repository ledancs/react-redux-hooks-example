import { all, takeEvery, call, put } from 'redux-saga/effects';
import {
    ADDITIONAL_DATA_LOADING_COMPLETED,
    BOOT_SEQUENCE_COMPLETED,
    START_ADDITIONAL_DATA_LOADING,
    START_BOOT_SEQUENCE
} from './actions';

const getUser = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                username: 'testermann',
                id: '1455',
                acceptedTerms: true
            });
        }, 2000);
    });
};

const getProfile = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                email: 'testermann@gmail.com',
                id: 45
            });
        }, 2000);
    });
};

function* startBootSaga(){
    try{
        const userDTO = yield call(getUser);
        console.log(userDTO);
        if (!userDTO.username) {
            yield put({ type: BOOT_SEQUENCE_COMPLETED });
        } else if (!userDTO.acceptedTerms) {
            yield put({ type: BOOT_SEQUENCE_COMPLETED });
        } else if (userDTO.acceptedTerms) {
            yield put({ type: BOOT_SEQUENCE_COMPLETED });
            yield put({ type: START_ADDITIONAL_DATA_LOADING });
        }

    } catch (e) {
        console.log(e.message || 'Error booting the app');
    }
}

function* startAdditionalLoadingSaga() {
    try{
        const profileDTO = yield call(getProfile);
        console.log(profileDTO);
        yield put({type: ADDITIONAL_DATA_LOADING_COMPLETED});

    } catch (e) {
        console.log(e.message || 'Error booting the app');
    }
}

const appBootSagas = [
    takeEvery(START_BOOT_SEQUENCE, startBootSaga),
    takeEvery(START_ADDITIONAL_DATA_LOADING, startAdditionalLoadingSaga)
];

export default function* rootSaga() {
    yield all([
        ...appBootSagas
        ]);
};