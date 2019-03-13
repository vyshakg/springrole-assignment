import styled from "styled-components";

export const UserProfileConatiner = styled.div`
  margin: 0 auto;
  max-width: 970px;

  @media (min-width: 1200px) {
    max-width: 1170px;
  }
`;

export const UserProfileWrapper = styled.div`
  border-radius: 4px;
  display: flex;
  margin: 15px 0;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  position: relative;
`;

export const PrimaryButton = styled.button`
  padding: 10px 15px;
  font-size: 14px;
  color: #004fc1;
  border: 1px solid #004fc1;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.25s;
  background: #f5f7f8;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.hover};
  background: ${props => props.color};
  &:hover {
    background-color: #004fc1;
    background-color: ${props => props.hover};
    color: #fff;
    color: ${props => props.color};
  }
`;

export const ProfileRightWrapper = styled.div`
  width: calc(100% - 200px);
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 0px;
  position: relative;
`;

export const UserSkill = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const SkillWrapper = styled.div`
  height: 31px;
  background-color: #f1f1f1;
  background: #f1f1f1;
  line-height: 31px;
  padding: 0 41px 0 10px;
  border-radius: 21px;
  display: flex;
  align-items: center;
  position: relative;
  font-size: 12px;
  margin-right: 10px;
`;

export const UserExtra = styled.div`
  display: flex;
  padding: 22px;
  background-color: #fff;
  margin: 15px 0;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
`;
