import { ADD_POST, DELETE_POST, EDIT_POST, ADD_COMMENT } from "./PostsTypes";

const INITIAL_STATE = [];

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_POST:
        console.log("action",action.payload)
        console.log("state",state.length);
      state.push({
        id: state.length,
        title: action.payload.title,
        description: action.payload.description,
        category: action.payload.category,
        image: action.payload.image,
        comments: [],
      });
      return state;
    default: 
      return state;
  }
};
export default reducer;