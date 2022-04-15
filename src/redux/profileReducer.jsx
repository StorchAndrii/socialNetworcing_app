const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
let initState = {
  posts: [
    {
      id: 1,
      name: "My 1 post!",
      message: "Hi, how are you?",
      likePost: 20,
    },
    {
      id: 2,
      name: "My 2 post!",
      message: "It`s my first post",
      likePost: 50,
    },
  ],
  newPostText: "Hello Storch",
};

const ProfileReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        name: "",
        message: state.newPostText,
        likePost: 0,
      };
      let stateCopy = { ...state };
      stateCopy.posts = [...state.posts];
      stateCopy.posts.push(newPost);
      stateCopy.newPostText = "";
      return stateCopy;
    }
    case UPDATE_NEW_POST_TEXT:
      let stateCopy = { ...state };
      stateCopy.newPostText = action.newText;
      return stateCopy;
    default:
      return state;
  }
};

export const addPostActionCreator = () => {
  return { type: ADD_POST };
};
export const updateNewPostTextActionCreator = (text) => {
  return { type: UPDATE_NEW_POST_TEXT, newText: text };
};

export default ProfileReducer;
