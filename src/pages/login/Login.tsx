import axios, { AxiosResponse } from "axios";
import "./Login.scss";
import { useState } from "react";
import { Navigate } from "react-router-dom";

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

  type User = {
    Id: number;
    Name: string;
    Surname: string;
    Mail: string;
    Token: string;
  };

  type LoginResponse = {
    Status: number;
    Message: string;
    Value: User;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post("https://api-dev.wsrlife.com/api/user/login/email", {
        mail: formData.mail,
        password: formData.password,
      })
      .then((res: AxiosResponse<LoginResponse>) => {
        console.log(res);

        if (res.data.Status == 0) {
          setErrorMessage(res.data.Message);
          return;
        }

        localStorage.setItem(
          "loggedUserName",
          res.data.Value.Name + " " + res.data.Value.Surname
        );
        localStorage.setItem("token", res.data.Value.Token);

        setErrorMessage(res.data.Message);
        setUser(res.data.Value);
      })
      .catch((err) => {
        console.log(err);
        var errorMessage = "";
        if (err.response.status === 400) {
          errorMessage += err.code;
        }

        if (err.response.data) {
          errorMessage += err.response.data.title;
        }

        setErrorMessage(errorMessage);
      });
  };
  return (
    <div className="login">
      <div className="loginHeader">
        <img src="/logo.svg" alt="" />
        <h1>Login Page</h1>
      </div>
      {errorMessage && <p>{errorMessage}</p>}
      {user && <Navigate to="/" />}

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
    </div>
  );
};

export default Login;
