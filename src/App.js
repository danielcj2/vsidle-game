import { Route, Routes} from "react-router-dom"
import Home from "./pages/Home";
import Game from "./pages/Game";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Home />} />
        <Route path="/game/:id" element={<Game />} />
      </Routes>
    </>
  );
}

export default App;
