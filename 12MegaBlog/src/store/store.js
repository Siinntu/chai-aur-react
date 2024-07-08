import {configureStore} from '@reduxjs/toolkit';
import authslice from './authslice';

const store = configureStore({
    reducer: {
        auth : authSlice,
        //TODO: add more slices here for posts
    }
});


export default store;