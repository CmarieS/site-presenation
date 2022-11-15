import './App.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Home from "./pages/Home";
import Cv from "./pages/Cv";
import Games from "./pages/Games";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv" element={<Cv />} />
        <Route path="/my-games" element={<Games />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
