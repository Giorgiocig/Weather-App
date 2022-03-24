import "./App.css";
import Main from "./components/Main";
import ThemeSelector from "./components/ThemeSelector";
import { useContext } from "react";
import { ThemeContext } from "./context/GlobalState";
import Clock from "./components/Clock";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className={`container col ${
        darkMode ? "bg-dark text-dark" : "bg-light text-light"
      }`}
    >
      <h1>Welcome to Weather App</h1>
      <Clock />
      <ThemeSelector />
      <Main />
    </div>
  );
}

export default App;
