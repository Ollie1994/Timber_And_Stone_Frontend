import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import RentalPage from "./components/RentalPage";
function App() {
  return (
    <BrowserRouter>
    <Header />
      <div className="layout">
        
          < Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/loginPage" element={<LoginPage/>} />
          <Route path="/rentalPage/:id" element={<RentalPage/>} />
        </Routes>
      </div>
      <Footer />

    </BrowserRouter>
  );
}

export default App;
