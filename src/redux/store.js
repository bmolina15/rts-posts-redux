//Store.js
//Creating the global store enviroment for Redux
import { createStore } from 'redux';
import rootReducer from './rootReducer';

const store = createStore(
    rootReducer,
);
export default store;