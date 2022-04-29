const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

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
  profile: null,
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
    case UPDATE_NEW_POST_TEXT: {
      let stateCopy = { ...state };
      stateCopy.newPostText = action.newText;
      return stateCopy;
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    default:
      return state;
  }
};

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const addPost = () => {
  return { type: ADD_POST };
};
export const onChangePostText = (text) => {
  return { type: UPDATE_NEW_POST_TEXT, newText: text };
};

export default ProfileReducer;
