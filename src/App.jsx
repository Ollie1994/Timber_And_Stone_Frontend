import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RentalPage from "./pages/RentalPage";
import { AuthProvider } from "./contexts/AuthContext";
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <div className="layout">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/loginPage" element={<LoginPage />} />
            <Route path="/rentalPage/:id" element={<RentalPage />} />
          </Routes>
        </div>
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
