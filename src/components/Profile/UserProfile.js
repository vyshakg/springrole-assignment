import React from "react";
import {
  PrimaryButton,
  ProfileRightWrapper,
  UserProfileConatiner,
  UserProfileWrapper
} from "../../styles/Profile/Userprofile";

function UserProfile() {
  return (
    <UserProfileConatiner>
      <UserProfileWrapper>
        <PrimaryButton className="message-btn-position">
          Message
          <i className="fas fa-comments" style={{ marginLeft: "4px" }} />
        </PrimaryButton>
        <img
          src="https://springrole-assets.imgix.net/user/3/profile/f686d37a-3ea5-4c3b-a2b1-c0f67cc18d5f.jpg"
          delay="25"
          width="200"
          height="200"
          style={{ objectFit: "cover" }}
          alt="profile-pic"
        />
        <ProfileRightWrapper>
          <div class="user-id-ctr">
            <h1 style={{ fontSize: "24px", fontWeight: "500" }}>Kartik Mandaville</h1>

            <h4 class="user-designation-style">CEO at SpringRole</h4>
            <h4 class="user-designation-style">India</h4>
          </div>
        </ProfileRightWrapper>
      </UserProfileWrapper>
    </UserProfileConatiner>
  );
}

export default UserProfile;
