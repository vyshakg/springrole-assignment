import Axios from "axios";
import React, { useEffect, useState } from "react";
import { ProfileContainer } from "../styles/Profile/Profile";
import UserInfo from "./Profile/UserInfo";
import UserProfile from "./Profile/UserProfile";

function Profile() {
  const [workExp, setworkExp] = useState(null);
  const [profile, setProfile] = useState(null);
  const [education, setEducation] = useState(null);
  // const config = {
  //   headers: {
  //     "Access-Control-Allow-Origin": "*",
  //     "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE"
  //   },
  //   crossDomain: true,
  //   proxy: {
  //     host: "https://beta.springrole.com"
  //   }
  // };
  useEffect(() => {
    // Axios.defaults.baseURL = "https://beta.springrole.com";
    Axios.get("api/v1/user/c4f4c607-e9c8-4acb-9893-93c541bddf35/work-experience")
      .then(res => {
        setworkExp(res.data.work_experiences);
      })
      .catch(err => {
        console.log(err);
      });

    Axios.get("api/v1/user/c4f4c607-e9c8-4acb-9893-93c541bddf35/profile/skills")
      .then(res => {
        setProfile(res.data);
      })
      .catch(err => {
        console.log(err);
      });

    Axios.get("api/v1/user/c4f4c607-e9c8-4acb-9893-93c541bddf35/education")
      .then(res => {
        setEducation(res.data.educationList);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <ProfileContainer>
      <UserProfile profile={profile} />
      <UserInfo workExp={workExp} education={education} />
    </ProfileContainer>
  );
}

export default Profile;
