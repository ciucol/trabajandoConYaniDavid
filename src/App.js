import logo from "./logo.svg";
import Padre from "./components/Padre";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Padre name="Yani" />
      </header>
    </div>
  );
}

export default App;
