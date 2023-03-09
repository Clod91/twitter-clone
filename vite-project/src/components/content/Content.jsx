import Header from "../header";
import MessageList from "../messageList";
import { useRef, useState } from "react";
import "./index.css";

const Content = () => {
  const contentRef = useRef(null);
  const [sliderTop, setSliderTop] = useState(false);
  return (
    <div
      ref={contentRef}
      className="content"
      onScroll={() =>
        contentRef.current.scrollTop >= 1
          ? setSliderTop(true)
          : setSliderTop(false)
      }
    >
      <Header slidertop={sliderTop} />
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
