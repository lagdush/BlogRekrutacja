import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import articleSlice from './articleReducer';
import commentsSlice from './commentsReducer';
import favouriteReducer from './favouriteReducer';

const reducers = combineReducers({
    articles: articleSlice,
    comments: commentsSlice,
    favourite: favouriteReducer,
});

const persistConfig = {
  key: 'state',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
