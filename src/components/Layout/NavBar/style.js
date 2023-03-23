import styled from "styled-components";

export const StNavBarContainer = styled.nav`
  width: 100px;
  min-height: 95vh;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  & img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    cursor: pointer;
  }
`;

export const StNavBarLinksContainer = styled.ul`
  width: 100px;
  min-height: 350px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & .active {
    color: #47a08a;
    border-right: 3px solid #49a08a;
    & svg {
      width: 45px;
      height: 45px;
      padding: 10px;
      background-color: #e4f3f0;
    }
  }
`;
export const StNavBarLinksItem = styled.li`
  width: 100px;
  font-size: 1.3rem;
  color: #c0c0c0;
  & a {
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 3px solid #fff;
    & svg {
      width: 45px;
      height: 45px;
      padding: 10px;
      border-radius: 10px;
    }
  }
`;

export const StNavBarUserSetting = styled.div`
  width: 45px;
  height: ${(props) => (props.isUserSettingOpen ? "145px" : "45px")};
  bottom: 25px;
  border-radius: 25px;
  overflow: hidden;
  position: absolute;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-end;
  & a,
  button {
    height: 40px;
    margin-bottom: 10px;
    color: #c0c0c0;
    cursor: pointer;
    transition: all 0.2s ease;
    border-radius: 50%;
    & svg {
      width: 45px;
      height: 45px;
      padding: 10px;
      border-radius: 50%;
      background-color: #e4f3f0;
    }
  }
`;
