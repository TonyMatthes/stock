import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* fetchPets() {
    try {
        const res = yield axios.get('/api/pets');

        yield put({
            type: 'SET_PETS',
            payload: res.data,
        });
    }
    catch (err) {
        console.log('fetch pets failed', err);
    }
}

function* petSaga() {
    yield takeLatest('FETCH_PETS', fetchPets);
}

export default petSaga;