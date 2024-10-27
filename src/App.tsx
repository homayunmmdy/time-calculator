import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LangSelector } from "./components/LangSelector";
import About from "./pages/About";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Suspense fallback="loading">
        <BrowserRouter>
          <LangSelector />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
};

export default App;
