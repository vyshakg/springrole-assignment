import React from "react";
import {
  CompanyDesc,
  CompanyLogo,
  UserExp,
  UserInfoConatiner,
  UserSkills,
  WorkDetail,
  WorkDetailWrapper,
  WorkExp
} from "../../styles/Profile/UserInfo";

function UserInfo({ workExp, education }) {
  if (!workExp) return null;
  if (!education) return null;
  return (
    <UserInfoConatiner>
      <UserExp>
        <h2 style={{ fontSize: "18px", fontWeight: "500", marginBottom: "15px" }}> Work Experience </h2>
        <WorkExp>
          <WorkDetailWrapper>
            {workExp.map((we, index) => (
              <div key={index} className="after-each-work">
                <WorkDetail>
                  <CompanyLogo
                    style={{
                      backgroundImage: `url(
                   ${we.company.logo_url}
                  )`
                    }}
                  />
                  <CompanyDesc>
                    <h3 className="company-name-header">{we.company.name}</h3>
                    <h3 className="company-name">{we.designation}</h3>
                    <h3 className="position-duration mt-4">{we.location}</h3>
                    <h3 className="position-duration">{we.duration}</h3>
                  </CompanyDesc>
                </WorkDetail>
                {(we.description || we.skills_data.length !== 0) && (
                  <div className="work-done-description">
                    {we.description && <div className="work-done">{we.description}</div>}
                    {we.skills_data.length !== 0 && (
                      <div className="worked-on">
                        WORKED ON:
                        {we.skills_data.map(sk => (
                          <span key={sk.id} className="worked-on-tag">
                            {sk.skill_name}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </WorkDetailWrapper>
        </WorkExp>
        <h2 style={{ fontSize: "18px", fontWeight: "500", marginBottom: "15px" }}> Education </h2>
        <WorkExp>
          <WorkDetailWrapper>
            {education.map((edc, index) => (
              <div key={index} className="after-each-work">
                <WorkDetail>
                  <CompanyLogo
                    style={{
                      backgroundImage: `url(
                   ${"https://frontend.springrole.com/66995ea0a66c78113bc7930e926104fe.png"}
                  )`
                    }}
                  />
                  <CompanyDesc>
                    <h3 className="company-name">{edc.institution_name}</h3>
                    <h3 className="position-duration mt-4">{edc.location}</h3>
                  </CompanyDesc>
                </WorkDetail>
              </div>
            ))}
          </WorkDetailWrapper>
        </WorkExp>
      </UserExp>
      <UserSkills>
        <h2 style={{ fontSize: "18px", fontWeight: "500", marginBottom: "15px" }}> Skills </h2>
      </UserSkills>
    </UserInfoConatiner>
  );
}

export default UserInfo;
