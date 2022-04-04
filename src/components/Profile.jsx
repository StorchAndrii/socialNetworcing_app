import React from "react";

const Profile = () => {
  return (
    <div className="content">
      <img
        src="https://cdn.pixabay.com/photo/2016/07/28/14/40/space-1548139_1280.jpg"
        alt="logo-fon"
      />
      <div>
        ava+description
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRofzqT5WrbDaWekGcxTZQ1-_HkF8K2pNxiz7M1Le2jncIBCZiWpN52QLPiU1JCbf-AQKE&usqp=CAU"
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
