import "./index.css";
import { Route, Routes } from "react-router-dom";
import Pupilo from "./pages/Pupilo";
import BlogPage from "./pages/BlogPage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import ProgramsPage from "./pages/ProgramsPage";
import WhyPupilo from "./pages/WhyPupilo";
import LearnWithPupiloPage from "./pages/LearnWithPupiloPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<BlogPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/why-pupilo" element={<WhyPupilo />} />
        <Route path="/learn-with-pupilo" element={<LearnWithPupiloPage />} />
        <Route path="/blog/:slug" element={<Pupilo />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
