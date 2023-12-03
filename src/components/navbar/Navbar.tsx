import fscreen from "fscreen"
import "./navbar.scss";

const Navbar = () => {
  const handleFullscreen = () => {
    fscreen.requestFullscreen(document.documentElement);
  }

  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>gungoromer</span>
      </div>
      <div className="icons">
        <img src="/expand.svg" alt="" className="icon" onClick={handleFullscreen} />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt=""
          />
          <span>Jane</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
