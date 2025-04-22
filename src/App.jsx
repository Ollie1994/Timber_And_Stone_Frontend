import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  return (
    <BrowserRouter>
      <div className="layout">
        <Header />
        {/*  < Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/rental/:id" element={<Rental />} />
        </Routes> */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
