import { BiMessageRounded } from "react-icons/bi";
import { BsArrowDownUp, BsUpload } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { useEffect, useState } from "react";
import "./index.css";

const MessageItem = ({ messageData }) => {
  const { userId, body } = messageData;
  const [userItem, setUserItem] = useState({});

  // useEffect(() => {
  //   fetch(`https://dummyjson.com/users/${userId}`)
  //     .then((res) => res.json())
  //     .then((data) => setUserItem(data));
  // }, []);

  return (
    <div className="message_item">
      <img src={userItem.image} alt="user avatar" className="user_img" />
      <div className="user_message">
        <span className="username">{userItem.username}</span>
        <span className="email">{userItem.email}</span>
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
