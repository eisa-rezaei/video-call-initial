import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import {
  StLoginBackGround,
  StLoginPageContainer,
  StLoginPageImage,
  StLoginPageImageTextPart,
  StLoginPageLogin,
  StLoginPageLoginInput,
  StLoginPageLoginInputFromControl,
  StLoginPageLoginInputs,
} from "./style";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const initialValues = isLogin
    ? {
        email: "",
        password: "",
      }
    : {
        name: "",
        email: "",
        password: "",
      };
  const onSubmit = (values) => {
    localStorage.setItem("user", JSON.stringify(values));
    navigate("/");
  };
  const validationSchema = Yup.object(
    isLogin
      ? {
          email: Yup.string()
            .email("Invalid email format")
            .required("This feild is Required"),
          password: Yup.string()
            .required("No password provided.")
            .min(8, "Password is too short - should be 8 chars minimum.")
            .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
        }
      : {
          name: Yup.string().required("This feild is Required"),
          email: Yup.string()
            .email("Invalid email format")
            .required("This feild is Required"),
          password: Yup.string()
            .required("No password provided.")
            .min(8, "Password is too short - should be 8 chars minimum.")
            .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
        }
  );

  const formik = useFormik({ initialValues, onSubmit, validationSchema });

  return (
    <StLoginPageContainer>
      <StLoginBackGround>
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </StLoginBackGround>
      <StLoginPageImage isLogin={isLogin}>
        <StLoginPageImageTextPart isLogin={isLogin}>
          <h1>
            {isLogin ? "Good to see You Again " : "Welcome to Our Platform "}
          </h1>
          <h1>{isLogin ? "Sign In" : "Sign Up"}</h1>
          <p>
            {isLogin
              ? "Hi, Welcome back good to see you here again! Try to keep your info secret"
              : "Enter your personal info to be connected with us!"}
          </p>
          <button onClick={() => setIsLogin((prev) => !prev)}>
            {isLogin ? "Sign In" : "Sign Up"}
          </button>
        </StLoginPageImageTextPart>
      </StLoginPageImage>
      <StLoginPageLogin isLogin={isLogin}>
        <StLoginPageLoginInputs
          onSubmit={formik.handleSubmit}
          isLogin={isLogin}
        >
          <StLoginPageLoginInputFromControl>
            <label htmlFor="name">Name:</label>
            <StLoginPageLoginInput
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              {...formik.getFieldProps("name")}
            />
            {formik.errors.name && !isLogin ? (
              <p>{formik.errors.name}</p>
            ) : null}
          </StLoginPageLoginInputFromControl>

          <StLoginPageLoginInputFromControl>
            <label htmlFor="email">Email:</label>
            <StLoginPageLoginInput
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              {...formik.getFieldProps("email")}
              isLogin={isLogin}
            />
            {formik.touched.email && formik.errors.email ? (
              <p>{formik.errors.email}</p>
            ) : null}
          </StLoginPageLoginInputFromControl>
          <StLoginPageLoginInputFromControl>
            <label htmlFor="password">Password:</label>
            <StLoginPageLoginInput
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              {...formik.getFieldProps("password")}
              isLogin={isLogin}
            />
            {formik.touched.password && formik.errors.password ? (
              <p>{formik.errors.password}</p>
            ) : null}
          </StLoginPageLoginInputFromControl>
          <h4>forgot password</h4>
          <button type="submit"> {isLogin ? "Log In" : "Sign In"} </button>
        </StLoginPageLoginInputs>
      </StLoginPageLogin>
    </StLoginPageContainer>
  );
};

export default Login;
