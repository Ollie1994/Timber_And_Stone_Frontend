import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="layout">
        {/* Header outside of  Routes because we use header and footer on all page */}
        <Header />{" "}
        {/* These route ´s are examples and have to be modified accordingly depending on if we need static or dynamic routing */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/rental/:id" element={<Rental />} />
        </Routes>
        {/* Footer outside of Routes because we use header and footer on all page */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
