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
          <img src="https://img.icons8.com/ios/256/home-page.png" alt="home" />
          <p>home</p>
        </li>
        <li>
          <img src="https://img.icons8.com/ios/256/search.png" alt="search" />
          <p>cerca</p>
        </li>
        <li>
          <img src="https://img.icons8.com/ios/256/bell.png" alt="notice" />
          <p>notifiche</p>
        </li>
        <li>
          <img src="https://img.icons8.com/ios/256/new-message.png" alt="msg" />
          <p>messaggi</p>
        </li>
      </ul>
      <button className="splash">Splash</button>
    </div>
  );
};

export default BottomBar;
