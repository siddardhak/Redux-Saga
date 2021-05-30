import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import pollReducer from './polling';

import UserSlice from './UserDisplay';

import createSagaMiddleware from 'redux-saga';

import saga from '../Sagas/saga';


const sagaMiddleware = createSagaMiddleware();

const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];


const store = configureStore({
    reducer: {
        polls: pollReducer.reducer,
        users: UserSlice.reducer
    },
    middleware
});

sagaMiddleware.run(saga);

export default store;