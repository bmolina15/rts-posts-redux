import { combineReducers } from 'redux';
import PostsReducers from './Posts/PostsReducers';

const rootReducer = combineReducers({
    posts: PostsReducers,
});
export default rootReducer;