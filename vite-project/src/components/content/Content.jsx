import Header from "../header";
import MessageList from "../messageList";

import "./index.css";

const Content = () => {
  return (
    <div className="content">
      <Header />
      <MessageList />
      <img
        src="https://img.icons8.com/ios/256/hand-with-pen.png"
        alt="nuovo messaggio"
        className="write"
      />
    </div>
  );
};

export default Content;
