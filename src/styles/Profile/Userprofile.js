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
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #004fc1;
    color: #fff;
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
