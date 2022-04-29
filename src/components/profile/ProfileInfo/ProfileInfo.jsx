import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  const profile = props.profile.results[0];
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
          <img className={s.avatar} src={profile.picture.large} alt="avatar" />
          <div>
            {profile.name.first} {profile.name.last}
          </div>
          <div>Location: {profile.location.city}</div>
          <div>Mail: {profile.email}</div>
          <div>Cell: {profile.cell}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
