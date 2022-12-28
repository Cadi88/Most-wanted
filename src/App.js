import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import route from "./routes/route";

import Header from "./components/navigation/Header";
import MenuContent from "./components/content/menu/MenuContent";
import HomeContent from "./components/content/home/HomeContent";
import ContactContent from "./components/content/contact/ContactContent";
import Footer from "./components/ui/footer/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomeContent />} />
        <Route path="/menu" element={<MenuContent />} />
        <Route path="/contactus" element={<ContactContent />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
