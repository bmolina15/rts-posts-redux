import { ADD_POST,DELETE_POST, EDIT_POST, ADD_COMMENT } from "./PostsTypes";

//Actions.js
//import Types
export const addPost = (postObj) => {
    return {
        type: ADD_POST,
        payload: postObj
    }
}

export const deletePost = (postObj) => {
    return {
        type: DELETE_POST,
        payload: postObj
    }
}

export const editPost = (postObj) => {
    return {
        type: EDIT_POST,
        payload: postObj
    }
}

export const addComment = (postObj) => {
    return {
        type: ADD_COMMENT,
        payload: postObj
    }
}