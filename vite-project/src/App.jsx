import Content from "./components/content";
import BottomBar from "./components/bottomBar";
import Trends from "./components/trends";
import FormModal from "./components/formModal";
import { useState } from "react";

import "./App.css";

function App() {
  const [displayModal, setDisplayModal] = useState(false);

  return (
    <div className="App">
      <Content setDisplayModal={setDisplayModal} />
      <BottomBar />
      <Trends />
      <FormModal
        displayModal={displayModal}
        setDisplayModal={setDisplayModal}
      />
    </div>
  );
}

export default App;
