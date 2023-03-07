import { RxHome } from "react-icons/rx";
import { BsSearch, BsBell } from "react-icons/bs";
import { BiMessageDetail } from "react-icons/bi";
import "./index.css";

const BottomBar = () => {
  return (
    <div className="bottomBar">
      <ul className="bar_list">
        <li>
          <img
            src="https://img.icons8.com/ios/256/splash.png"
            alt="logo"
            className="logo1"
          />
        </li>
        <li>
          <RxHome className="bottom_icon" />
          <p>home</p>
        </li>
        <li>
          <BsSearch className="bottom_icon" />
          <p>cerca</p>
        </li>
        <li>
          <BsBell className="bottom_icon" />
          <p>notifiche</p>
        </li>
        <li>
          <BiMessageDetail className="bottom_icon" />
          <p>messaggi</p>
        </li>
      </ul>
      <button className="splash">Splash</button>
    </div>
  );
};

export default BottomBar;
