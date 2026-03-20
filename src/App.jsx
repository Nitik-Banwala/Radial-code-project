import "./index.css";

import { Route, Routes } from "react-router-dom";
import Pupilo from "./pages/Pupilo";
import BlogPage from "./pages/BlogPage";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<BlogPage />} />
        <Route path="/:slug" element={<Pupilo />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;