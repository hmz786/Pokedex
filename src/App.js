import "./App.css";
import { PokedexBook } from "./components/PokedexBook";
import Horloge from "./components/Horloge";

function App() {
  return (
    <div className="App">
      <div className="clock-bar">
        <Horloge />
      </div>
      <PokedexBook />
    </div>
  );
}

export default App;
