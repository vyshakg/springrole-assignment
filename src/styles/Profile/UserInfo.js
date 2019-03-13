import styled from "styled-components";

export const UserInfoConatiner = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: auto;
  max-width: 970px;
  @media (max-width: 1200px) {
    max-width: 1170px;
  }
  @media (max-width: 767px) {
    flex-direction: column-reverse;
  }
`;
export const UserExp = styled.div`
  width: 67%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  position: relative;
  @media (max-width: 767px) {
    width: 100%;
  }
`;
export const UserSkills = styled.div`
  width: calc(33% - 20px);
`;

export const WorkDetailWrapper = styled.div`
  background-color: #fff;
  border-bottom: 1px solid #efefef;
`;

export const WorkExp = styled.div`
  width: 100%;
  margin-bottom: 20px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
`;

export const WorkDetail = styled.div`
  display: flex;
  padding-left: 20px;
  justify-content: space-between;
  min-height: 120px;
  flex-wrap: wrap;
`;
export const CompanyLogo = styled.div`
  height: 60px;
  border-radius: 10px;
  width: 60px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  margin-top: 20px;
`;

export const CompanyDesc = styled.div`
  padding: 20px 15px 0 25px;
  width: calc(100% - 180px);
  font-size: 12px;
`;
