import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cafe from "./pages/Cafe";
import Beachside from "./pages/Beachside";
import About from "./pages/About";
import Play from "./pages/Play";
import ErrorPage from "./pages/404";

function App() {
  return (
    <BrowserRouter>
      <nav>Nav</nav>
      <Routes>
        <Route path="/" element={<Home />} errorElement={<ErrorPage />} />
        <Route
          path="/connection-cafe"
          element={<Cafe />}
          errorElement={<ErrorPage />}
        />
        <Route
          path="/beachside-snackshop"
          element={<Beachside />}
          errorElement={<ErrorPage />}
        />
        <Route path="/about" element={<About />} errorElement={<ErrorPage />} />
        <Route path="/play" element={<Play />} errorElement={<ErrorPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <footer>Footer</footer>
    </BrowserRouter>
  );
}

export default App;
