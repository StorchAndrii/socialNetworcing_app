import React from "react";
import MyPosts from "./myPosts/MyPosts";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        updateNewPostText={props.updateNewPostText}
        newPostText={props.profilePage.newPostText}
        posts={props.profilePage.posts}
        addPost={props.addPost}
      />
    </div>
  );
};

export default Profile;
