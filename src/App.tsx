import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Test from "./pages/Test";
import AboutUs from "./pages/AboutUs";
import VCourses from "./pages/VCourses";
import Courses from "./pages/Courses";
import SEB from "./pages/SEB";



function App() {
  return (
    <BrowserRouter>
      <Header />
      <main id="main" className="min-h-screen h-fit flex flex-col items-center justify-between">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/seb" element={<SEB />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/videos" element={<VCourses />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
