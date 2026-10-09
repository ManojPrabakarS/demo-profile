import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppButton from "./components/WhatsAppButton";
import PageTransition from "./components/PageTransition";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Workshop from "./pages/Workshop";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <>
      <ScrollToTop />

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />

        <Route
          path="/profile"
          element={
            <PageTransition>
              <Profile />
            </PageTransition>
          }
        />

        <Route
          path="/workshop"
          element={
            <PageTransition>
              <Workshop />
            </PageTransition>
          }
        />

        <Route
          path="/portfolio"
          element={
            <PageTransition>
              <Portfolio />
            </PageTransition>
          }
        />

        <Route
          path="/contact"
          element={
            <PageTransition>
              <Contact />
            </PageTransition>
          }
        />

      </Routes>

      <WhatsAppButton />

      <Footer />
    </>
  );
}