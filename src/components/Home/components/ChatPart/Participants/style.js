import styled from "styled-components";

export const StHomeParticipantContainer = styled.article`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const StHomeParticipants = styled.div`
  width: 100%;
  padding: 10px 0;
  min-height: 550px;
`;

export const StHomeParticipant = styled.div`
  width: 100%;
  display: flex;
  padding: 15px 15px;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s ease;
  border-radius: 35px;
  box-shadow: 0 5px 15px #dde0e5aa;

  & img {
    width: 45px;
    height: 45px;
    margin-right: 10px;
    border-radius: 50%;
    border: 2px solid #fff;
  }
  & p {
    flex: 2;
  }
  & span {
    font-size: 0.8rem;
  }
  :hover {
    background-color: #fff;
    box-shadow: 0 5px 20px #cccfd4fa;
    cursor: pointer;
  }
`;

export const StHomeParticipantGroupTitle = styled.div`
  width: 100%;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  background-color: white;
  border: 2px solid #dfdfdf;
  border-radius: 0 0 20px 20px;
`;

export const StHomeParticipantUserProfile = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  & img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
`;

export const StHomeParticipantUserProfileHead = styled.header`
  width: 100%;
  min-height: 60px;
  padding: 0 10px;
  padding-right: 40px;
  margin-bottom: 15px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  background-color: #d5e6e880;
  justify-content: space-between;
  & span {
    flex: 2;
    text-align: center;
  }
  & button {
    width: 30px;
    height: 25px;
    line-height: 10px;
    border-radius: 5px;
    cursor: pointer;
    color: seagreen;
    background-color: #cfdfdf;
  }
`;

export const StHomeParticipantUserProfileName = styled.div`
  margin-top: 10px;
  text-align: center;
  & p {
    margin: 5px 0;
    color: #a0a0a0;
    font-size: 0.8rem;
  }
`;

export const StHomeParticipantUserInfo = styled.ul`
  width: 100%;
  min-height: 200px;
  margin-top: 30px;
  border-radius: 5px;
  overflow: hidden;
  background-color: #d5e6e880;
`;

export const StHomeParticipantUserInfoItem = styled.li`
  width: 100%;
  min-height: 50px;
  padding: 20px 10px;
  border-bottom: 1px solid #89c4b2;
  & h5 {
    margin-bottom: 10px;
    color: seagreen;
  }
  & p {
    font-size: 0.8rem;
  }
  :last-child {
    border-bottom: none;
  }
`;
