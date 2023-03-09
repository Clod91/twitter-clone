import "./index.css";

const Header = ({ sliderTop }) => {
  return (
    <div className={`header ${sliderTop ? "hide" : ""}`}>
      <div className="header_small">
        <ul className="topIcons">
          <li>
            <img
              className="logo"
              src="https://img.icons8.com/ios-filled/256/xbox-menu.png"
              alt="menu"
            />
          </li>
          <li>
            <img
              className="logo"
              src="https://img.icons8.com/ios/256/splash.png"
              alt="logo"
            />
          </li>
          <li>
            <img
              src="https://img.icons8.com/color/256/sparkling.png"
              alt="sparkling"
            />
          </li>
        </ul>
      </div>
      <div className="header_up">
        <p>Home</p>
        <img
          src="https://img.icons8.com/color/256/sparkling.png"
          alt="sparkling"
        />
      </div>
      <div className="header_down">
        <img
          className="header_down_profile"
          src="https://img.icons8.com/ios-glyphs/256/gender-neutral-user.png"
          alt="profile"
        />
        <input type="text" placeholder="What's happening?" />
        <img src="https://img.icons8.com/fluency/256/image.png" alt="image" />
        <img src="https://img.icons8.com/arcade/256/gif.png" alt="gif" />
        <img
          src="https://img.icons8.com/fluency/256/combo-chart.png"
          alt="graph"
        />
      </div>
    </div>
  );
};

export default Header;
