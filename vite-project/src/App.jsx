import Content from "./components/content";
import BottomBar from "./components/bottomBar";
import Trends from "./components/trends";

import "./App.css";

// ho provato a far scomparire la header in modalità mobile,quando si scrolla in giù ma non mi visualizza l'overflow,
// quindi ho messo un useRef che fa scomparire i trends

function App() {
  return (
    <div className="App">
      <Content />
      <BottomBar />
      <Trends />
    </div>
  );
}

export default App;
