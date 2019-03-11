import React from "react";
import { ProfileContainer } from "../styles/Profile/Profile";
import UserInfo from "./Profile/UserInfo";
import UserProfile from "./Profile/UserProfile";

function Profile() {
  return (
    <ProfileContainer>
      <UserProfile />
      <UserInfo />
    </ProfileContainer>
  );
}

export default Profile;
