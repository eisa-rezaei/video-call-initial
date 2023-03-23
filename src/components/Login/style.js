import styled, { keyframes } from "styled-components";

const fadeBtn = keyframes`
0%{transform:translateX(-130%)}
10%{transform:translateX(-150%)}
100%{transform:translateX(0%)}
`;
const fadeBtn2 = keyframes`
0%{transform:translateX(130%)}
10%{transform:translateX(150%)}
100%{transform:translateX(0%)}
`;

export const StLoginPageContainer = styled.article`
  width: 100%;
  min-height: 95vh;
  background-color: #fff;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StLoginBackGround = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  & span {
    min-width: 100px;
    min-height: 100px;
    background-color: #ffffff20;
    position: absolute;
    z-index: 3;
    :nth-child(1) {
      width: 150px;
      height: 200px;
      top: -50px;
      left: -50px;
      transform: rotate(-55deg);
    }
    :nth-child(2) {
      width: 150px;
      height: 250x;
      top: 100px;
      left: 400px;
      transform: rotate(95deg);
      clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    }
    :nth-child(3) {
      top: 300px;
      right: 300px;
      transform: rotate(-25deg);
    }
    :nth-child(4) {
      top: 100px;
      right: 500px;
      width: 150px;
      transform: rotate(-25deg);
      clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    }
    :nth-child(5) {
      width: 100px;
      height: 100px;
      right: 50px;
      bottom: 100px;
      transform: rotate(35deg);
      clip-path: polygon(
        0% 15%,
        44% 46%,
        15% 0%,
        85% 0%,
        59% 47%,
        100% 15%,
        100% 85%,
        58% 58%,
        85% 100%,
        15% 100%,
        45% 58%,
        0% 85%
      );
    }
    :nth-child(6) {
      width: 200px;
      height: 200px;
      left: 450px;
      bottom: 100px;
      transform: rotate(-35deg);
      clip-path: polygon(
        50% 0%,
        61% 35%,
        98% 35%,
        68% 57%,
        79% 91%,
        50% 70%,
        21% 91%,
        32% 57%,
        2% 35%,
        39% 35%
      );
    }
    :nth-child(7) {
      width: 300px;
      height: 300px;
      left: 0px;
      bottom: -200px;
      transform: rotate(-25deg);
    }
    :nth-child(8) {
      width: 300px;
      height: 300px;
      right: -150px;
      top: -150px;
      clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    }
    :nth-child(9) {
      width: 300px;
      height: 250px;
      right: 400px;
      bottom: -100px;
      clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    }
    :nth-child(10) {
      width: 300px;
      height: 250px;
      left: -150px;
      top: 250px;
      transform: rotate(-25deg);
      clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    }
  }
`;

export const StLoginPageImage = styled.section`
  width: 50%;
  height: 100%;
  z-index: 2;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 1s ease;
  background-color: ${(props) => (props.isLogin ? "#3bb78f" : "#63afff")};
  /* background-image: ${(props) =>
    props.isLogin
      ? "linear-gradient(315deg, #3bb78f 0%, #0bab64 74%)"
      : "linear-gradient(315deg, #f39f86 0%, #f9d976 74%)"}; */
  transform: ${(props) =>
    props.isLogin ? "translateX(0%)" : "translateX(100%)"};
`;

export const StLoginPageImageTextPart = styled.div`
  width: 480px;
  height: 400px;
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  transition: all 1s linear;
  justify-content: space-between;
  animation: ${(props) => (props.isLogin ? fadeBtn : fadeBtn2)} 1s;

  & button {
    width: 80%;
    min-height: 50px;
    margin: 20px;
    border-radius: 30px;
    color: #fff;
    padding: 20px 30px;
    border: 1px solid #fff;
    transition: all 1s ease;
    animation: ${(props) => (props.isLogin ? fadeBtn2 : fadeBtn)} 1s;
  }
  & h1 {
    font-size: 2rem;
    margin: 10px 0;
  }
  & p {
    font-size: 1.1rem;
    line-height: 40px;
  }
`;

export const StLoginPageLogin = styled.section`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 1s 0.2s ease;
  transform: ${(props) =>
    props.isLogin ? "translateX(0%)" : "translateX(-100%)"};
  & div:nth-child(1) {
    transition: all 0.4s 0.4s ease;
    opacity: ${(props) => (props.isLogin ? "0" : "1")};
    visibility: ${(props) => (props.isLogin ? "hidden" : "visible")};
  }
`;

export const StLoginPageLoginInputs = styled.form`
  width: 500px;
  height: 520px;
  margin-top: ${(props) => (props.isLogin ? "-100px" : "0")};
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  transition: all 0.5s ease;
  justify-content: space-around;
  z-index: 5;
  & button {
    width: 500px;
    color: #fff;
    min-height: 50px;
    padding: 15px 0;
    border-radius: 10px;
    transition: all 1s ease;
    background-color: ${(props) => (props.isLogin ? "#3bb78f" : "#63afff")};
  }
  & h4 {
    margin-top: ${(props) => (props.isLogin ? "20px" : "0")};
    text-transform: capitalize;
    text-decoration: underline;
    transition: all 0.1s 0.4s ease;
    opacity: ${(props) => (props.isLogin ? "1" : "0")};
  }
`;
export const StLoginPageLoginInputFromControl = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  & p {
    font-size: 0.8rem;
    color: #ff9090;
    margin-top: 10px;
    text-align: right;
  }
`;

export const StLoginPageLoginInput = styled.input`
  width: 100%;
  margin-top: 10px;
  padding: 10px;
  border-bottom: 3px solid #ededed;
  :focus,
  :hover {
    border-bottom: 3px solid
      ${(props) => (props.isLogin ? "#89c4b2" : "#7ba4c4")};
  }
`;
