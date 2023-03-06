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
          <img
            src="https://img.icons8.com/external-those-icons-lineal-those-icons/256/external-Chat-Bubble-messages-and-chat-those-icons-lineal-those-icons-10.png"
            alt="chat"
          />
          <img
            src="https://img.icons8.com/external-bearicons-gradient-bearicons/256/external-Repost-social-media-bearicons-gradient-bearicons.png"
            alt="repost"
          />
          <img
            src="https://img.icons8.com/emoji/256/green-heart.png"
            alt="heart"
          />
          <img src="https://img.icons8.com/ios/256/upload.png" alt="upload" />
        </div>
      </div>
    </div>
  );
};
export default MessageItem;
