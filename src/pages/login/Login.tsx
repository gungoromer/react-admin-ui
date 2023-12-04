import "./Login.scss";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import UserRepository from "../../shared/Api/User/UserRepository";
import { BaseResponse } from "../../shared/Api/Abstract/BaseResponse";
import { IUserLoginResponse } from "../../shared/Api/User/Response/IUserLoginResponse";

const Login = () => {
  const [formData, setFormData] = useState({
    mail: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [user, setUser] = useState(null);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();

    const repository: UserRepository = new UserRepository();

    await repository
      .login(formData.mail, formData.password)
      .then((response: BaseResponse<IUserLoginResponse>) => {
        console.log("login page then");
        console.log(response);

        if (response.Status == 0) {
          setErrorMessage(response.Message ? response.Message : "");
          return;
        }

        localStorage.setItem(
          "loggedUserName",
          response.Value?.Name + " " + response.Value?.Surname
        );
        if (response.Value?.Token) {
          localStorage.setItem("token", response.Value?.Token);
        }

        setErrorMessage(response.Message ? response.Message : "");
        if (response.Value) {
          setUser(response.Value);
        }
      });
  };
  return (
    <div className="login">
      <div className="loginHeader">
        <img src="/logo.svg" alt="" />
        <h1>React Tutorials</h1>
      </div>

      <form action="" onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="mail"
          placeholder="Email"
          value={formData.mail}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <input type="submit" value="Login" />
      </form>
      {errorMessage && <p className="errorMessage">{errorMessage}</p>}
      {user && <Navigate to="/" />}
    </div>
  );
};

export default Login;
