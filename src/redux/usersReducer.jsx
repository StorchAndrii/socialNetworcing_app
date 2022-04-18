const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const GET_CURRENT_PAGE = "GET_CURRENT_PAGE";

let initState = {
  users: [],
  pageSize: 5,
  totalUserCount: 50,
  currentPage: 1,
};

const usersReducer = (state = initState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };

    case SET_USERS: {
      return { ...state, users: action.users };
    }
    case GET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }
    default:
      return state;
  }
};

export const followAC = (userId) => {
  return { type: FOLLOW, userId };
};
export const unfollowAC = (userId) => {
  return { type: UNFOLLOW, userId };
};
export const setUsersAC = (users) => {
  return { type: SET_USERS, users };
};
export const getCurrentPageAC = (currentPage) => {
  return { type: GET_CURRENT_PAGE, currentPage };
};
export default usersReducer;

// props.setUsers([
//   {
//     id: 1,
//     followed: false,
//     fullName: "Bart Simpson",
//     img: "https://png.pngitem.com/pimgs/s/198-1982799_imagenes-en-png-bart-simpson-butt-transparent-png.png",
//     status: "I am Devils.... 👿",
//     location: {
//       country: "USA",
//       city: "Springfield",
//     },
//   },
//   {
//     id: 2,
//     followed: true,
//     fullName: "March Simpson",
//     img: "https://gitlab.freedesktop.org/uploads/-/system/user/avatar/6683/avatar.png",
//     status: "I am happy",
//     location: {
//       country: "USA",
//       city: "Springfield",
//     },
//   },
//   {
//     id: 3,
//     followed: false,
//     fullName: "Lisa Simpson",
//     img: "https://yt3.ggpht.com/ytc/AAUvwngGCH2v4hHrxufLNWOUXj0fClMQME05lTJjfg9e=s900-c-k-c0x00ffffff-no-rj",
//     status: "I love music",
//     location: {
//       country: "USA",
//       city: "Springfield",
//     },
//   },
//   {
//     id: 4,
//     followed: false,
//     fullName: "Maggie Simpson",
//     img: "https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png",
//     status: "Be...be...be..🍼",
//     location: {
//       country: "USA",
//       city: "Springfield",
//     },
//   },
// ]);
