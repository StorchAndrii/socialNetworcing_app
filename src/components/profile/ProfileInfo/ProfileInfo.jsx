import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div className={s.bar}>
        <img
          className={s.imgBar}
          src="https://www.lawrencerealestateonline.com/wp-content/uploads/2018/01/cropped-Chicargo-Skyline-1600-x-400-lq.jpg"
          alt="logo-fon"
        />
      </div>
      <div className={s.descriptionBlock}>
        <div>
          <img
            className={s.avatar}
            src="https://i.pinimg.com/originals/18/a3/59/18a359290b7267918ff8d1420d71cb91.jpg"
            alt="avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
