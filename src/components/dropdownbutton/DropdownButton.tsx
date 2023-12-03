import "./DropdownButton.scss";
import { useState } from "react";

type Props = {
  dropdownButtonText: string;
  dropdownButtonImgSrc?: string;
};

const DropdownButton = (props: Props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="dropdown">
      <a className="dropbtn" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        <img
          src={props.dropdownButtonImgSrc ? props.dropdownButtonImgSrc : ""}
          alt=""
        />
        {props.dropdownButtonText}
      </a>
      <div
        className="dropdown-content"
        style={{ display: isDropdownOpen ? "flex" : "none" }}
      >
        <a href="/profile">
          <img src="/profile.svg" alt="" />
          Profile
        </a>
        <a href="/signout">
          <img src="/settings.svg" alt="" />
          Sign Out
        </a>
        {/* we can take menu items dynamicly from props but now its is not neccesary */}
      </div>
    </div>
  );
};

export default DropdownButton;
