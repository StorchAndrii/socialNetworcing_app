import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
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
            src={props.profile.photos.large}
            alt="avatar"
          />
          <div>{props.profile.fullName}</div>
          <div>Mail: {props.profile.contacts.mainLink}</div>
          <div>GitHub: {props.profile.contacts.github}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
