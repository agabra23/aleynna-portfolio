import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cafe from "./pages/Cafe";
import Beachside from "./pages/Beachside";
import About from "./pages/About";
import Play from "./pages/Play";
import ErrorPage from "./pages/404";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative z-0 overflow-x-hidden min-h-screen w-full bg-offwhite">
      <BrowserRouter>
        <NavBar />
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
          <Route
            path="/about"
            element={<About />}
            errorElement={<ErrorPage />}
          />
          <Route path="/play" element={<Play />} errorElement={<ErrorPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <div className="-z-20 absolute top-0 left-0 bottom-0 right-0 max-h-full overflow-hidden">
        <div className="opacity-50 absolute -top-20 -left-36 w-96 h-96 filter blur-2xl bg-pumpkin rounded-full"></div>
        <div className="opacity-50 absolute -bottom-60 -right-48 w-96 h-96 filter blur-2xl bg-pumpkin rounded-full"></div>
        <div className="opacity-50 absolute top-80 -right-56 w-96 h-96 filter blur-2xl bg-blueberry rounded-full"></div>
        <div className="opacity-50 absolute -bottom-80 -left-48 w-96 h-96 filter blur-2xl bg-blueberry rounded-full"></div>
        <div className="opacity-50 absolute top-32 -right-24 w-96 h-96 filter blur-2xl bg-candyPink rounded-full"></div>
      </div>
    </div>
  );
}

export default App;
