import { BiMessageRounded } from "react-icons/bi";
import { BsArrowDownUp, BsUpload } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";

import "./index.css";

const MessageItem = ({ messageData }) => {
  const { photo, userName, body, email } = messageData;
  return (
    <div className="message_item">
      <img src={photo} alt="user avatar" className="user_img" />
      <div className="user_message">
        <span className="username">{userName}</span>
        <span className="email">{email}</span>
        <p>{body}</p>

        <div className="msg_icons">
          <BiMessageRounded />

          <BsArrowDownUp />
          <AiOutlineHeart />
          <BsUpload />
        </div>
      </div>
    </div>
  );
};
export default MessageItem;
