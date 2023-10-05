import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Navigation from "@/components/shared/Navigation";

// Pages
import Home from "@/pages/Home";
import Register from "@/pages/Register";
import Login from "@/pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
