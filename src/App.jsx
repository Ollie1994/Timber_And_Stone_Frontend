import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RentalPage from "./pages/RentalPage";
import ProfilePage from "./pages/ProfilePage";
import { AuthProvider } from "./contexts/AuthContext";
import '@fontsource/kufam';
import '@fontsource/poppins'
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <div className="layout">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/loginpage" element={<LoginPage />} />
            <Route path="/rentalpage/:id" element={<RentalPage />} />
            <Route path="/profilepage/:id" element={<ProfilePage />} />
          </Routes>
        </div>
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
