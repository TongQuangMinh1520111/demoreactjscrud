import React, { useEffect, useState } from "react";
import AccountModule from "../../modules/account.module";

const Profile = () => {
  const [profile, setProfile] = useState({});
  useEffect( () => {
    const data = AccountModule.getProfile();
    data.then(function(result) {
        setProfile(result.data.profile);
     })
  }, []);

  console.log(profile);


  return <div>
    <ul>
        <li>{profile.email}</li>
        <li>{profile.username}</li>
    </ul>
  </div>;
};

export default Profile;
