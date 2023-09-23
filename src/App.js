import { Route, Routes} from "react-router-dom"
import Home from "./pages/Home";
import Game from "./pages/Game";
import { useState, useEffect } from "react";
import '../src/index.css';


function App() {
  const [theme, setTheme] = useState('default');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);


  return (
    <>
      <Routes>
        <Route path="/" element={<Home theme={theme} setTheme={setTheme}/>} />
        <Route path="/game" element={<Home theme={theme} setTheme={setTheme}/>} />
        <Route path="/game/:id" element={<Game theme={theme} setTheme={setTheme}/>} />
      </Routes>
    </>
  );
}

export default App;
