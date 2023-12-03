import fscreen from "fscreen";
import "./navbar.scss";
import DropdownButton from "../dropdownbutton/DropdownButton";

const Navbar = () => {
  const loggedUserName = localStorage.getItem("loggedUserName");

  const handleFullscreen = () => {
    fscreen.requestFullscreen(document.documentElement);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>React Demo</span>
      </div>
      <div className="icons">
        <img
          src="/expand.svg"
          alt=""
          className="icon"
          onClick={handleFullscreen}
        />
        <DropdownButton
          dropdownButtonText={loggedUserName ? loggedUserName : "User"}
          dropdownButtonImgSrc="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
        ></DropdownButton>
      </div>
    </div>
  );
};

export default Navbar;
