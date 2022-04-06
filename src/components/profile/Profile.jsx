import React from "react";
import MyPosts from "./myPosts/MyPosts";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

  return (
    <div>
      <ProfileInfo />
      <MyPosts  posts={props.profilePage.posts}/>
    </div>
  );
};

export default Profile;
