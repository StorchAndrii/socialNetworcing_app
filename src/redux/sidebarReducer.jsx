let initState = {
  friends: [
    {
      id: 1,
      name: "Bart",
      img: "https://png.pngitem.com/pimgs/s/198-1982799_imagenes-en-png-bart-simpson-butt-transparent-png.png",
    },
    {
      id: 2,
      name: "March",
      img: "https://gitlab.freedesktop.org/uploads/-/system/user/avatar/6683/avatar.png",
    },
    {
      id: 3,
      name: "Lisa",
      img: "https://yt3.ggpht.com/ytc/AAUvwngGCH2v4hHrxufLNWOUXj0fClMQME05lTJjfg9e=s900-c-k-c0x00ffffff-no-rj",
    },
  ],
};

const sidebarReducer = (state = initState, action) => {
  return state
};
export default sidebarReducer