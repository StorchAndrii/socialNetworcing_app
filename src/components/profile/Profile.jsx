import React from "react";
import s from './Profile.module.css'

const Profile = () => {
  return (
    <div className={s.content}>
      <img
        src="https://cdn.pixabay.com/photo/2016/07/28/14/40/space-1548139_1280.jpg"
        alt="logo-fon"
      />
      <div>
        <img
          src="https://i.pinimg.com/originals/18/a3/59/18a359290b7267918ff8d1420d71cb91.jpg"
          alt="avatar"
        />
      </div>
      <div>
        myPost
        <div>newPost</div>
        <div>
          <div>Post1</div>
          <div>Post2</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
