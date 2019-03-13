import React from "react";
import {
  PrimaryButton,
  ProfileRightWrapper,
  SkillWrapper,
  UserExtra,
  UserProfileConatiner,
  UserProfileWrapper,
  UserSkill
} from "../../styles/Profile/Userprofile";

function UserProfile({ profile }) {
  if (!profile) return null;
  return (
    <UserProfileConatiner>
      <UserProfileWrapper>
        <PrimaryButton className="message-btn-position">
          Message
          <i className="fas fa-comments" style={{ marginLeft: "4px" }} />
        </PrimaryButton>
        <img
          src={profile.avatar_url}
          delay="25"
          width="200"
          height="200"
          style={{ objectFit: "cover" }}
          alt="profile-pic"
        />
        <ProfileRightWrapper>
          <div className="user-id-ctr">
            <h1 style={{ fontSize: "24px", fontWeight: "500" }}>{profile.name}</h1>

            <h4 className="user-designation-style meida-mt">
              {profile.current_job_designation} at {profile.current_company}
            </h4>
            <h4 className="user-designation-style">{profile.current_location}</h4>
          </div>
          <UserSkill>
            {profile.skills.map(skills => (
              <SkillWrapper key={skills.id}>
                <div>{skills.skill_name}</div>
                <div className="circle" />
              </SkillWrapper>
            ))}
          </UserSkill>
          <div className="user-profile-url">
            <div className="url ">{profile.url}</div>
          </div>
        </ProfileRightWrapper>
      </UserProfileWrapper>
      <UserExtra>
        <div className="user-btn-extra">
          <PrimaryButton style={{ marginRight: "22px" }}>Endorse +</PrimaryButton>
          <PrimaryButton color={"#004FC1"} hover={"#f5f7f8"}>
            Verify Experience
          </PrimaryButton>
        </div>
        <div className="experience-user">
          <div className="experience-bars">
            <div className="bars">
              <div className="experience-txt">
                10+<span className="yrs-text">yrs</span>
              </div>
              <div className="grid-bar grid-bar-1   active " />
              <div className="grid-bar grid-bar-2   active " />
              <div className="grid-bar grid-bar-3   active " />
            </div>
            <div className="experience-text ">Experience</div>
          </div>
          <div className="verified-percentile">
            <div className="verification-graphic ">
              <div>50%</div>
            </div>
            <div>
              Verified <span> ✔ </span>
            </div>
          </div>
        </div>
      </UserExtra>
      <h3 className="about-me ">{profile.bio}</h3>
    </UserProfileConatiner>
  );
}

export default UserProfile;
