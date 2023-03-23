import { useEffect, useState } from "react";
import { MdOutlineChevronLeft } from "react-icons/md";
import { users } from "../../../../../data/data";
import {
  StHomeParticipant,
  StHomeParticipantContainer,
  StHomeParticipantGroupTitle,
  StHomeParticipants,
  StHomeParticipantUserInfo,
  StHomeParticipantUserInfoItem,
  StHomeParticipantUserProfile,
  StHomeParticipantUserProfileHead,
  StHomeParticipantUserProfileName,
} from "./style";

const Participants = ({ id }) => {
  const [userProfile, setUserProfile] = useState();
  useEffect(() => {
    const user = users.find((item) => item.userId === id);
    setUserProfile(user);
  }, [id]);
  const selectUserHelper = (id) => () => {
    if (id) {
      const user = users.find((item) => item.userId === id);
      setUserProfile(user);
    } else {
      setUserProfile(null);
    }
  };
  return (
    <StHomeParticipantContainer>
      <StHomeParticipants>
        {userProfile ? (
          <StHomeParticipantUserProfile>
            <StHomeParticipantUserProfileHead>
              <button onClick={selectUserHelper()}>
                <MdOutlineChevronLeft />
              </button>
              <span>Info</span>
            </StHomeParticipantUserProfileHead>
            <img src={userProfile.userAvatar} alt={userProfile.userId} />
            <StHomeParticipantUserProfileName>
              <h4>{userProfile.userId}</h4>
              <p>last seen recently</p>
            </StHomeParticipantUserProfileName>
            <StHomeParticipantUserInfo>
              <StHomeParticipantUserInfoItem>
                <h5>bio</h5>
                <p>{userProfile.bio}</p>
              </StHomeParticipantUserInfoItem>
              <StHomeParticipantUserInfoItem>
                <h5>userName</h5>
                <p>{userProfile.userId}</p>
              </StHomeParticipantUserInfoItem>
              <StHomeParticipantUserInfoItem>
                <h5>userName</h5>
                <p>{userProfile.userEmail}</p>
              </StHomeParticipantUserInfoItem>
            </StHomeParticipantUserInfo>
          </StHomeParticipantUserProfile>
        ) : (
          users.map(({ userId, userAvatar, isPublisher }) => (
            <StHomeParticipant key={userId} onClick={selectUserHelper(userId)}>
              <img src={userAvatar} alt="user-img" />
              <p>{userId}</p>
              <span>{isPublisher ? "Creator" : null}</span>
            </StHomeParticipant>
          ))
        )}
      </StHomeParticipants>
      <StHomeParticipantGroupTitle>
        Title : Welcome to new member of group
      </StHomeParticipantGroupTitle>
    </StHomeParticipantContainer>
  );
};

export default Participants;
