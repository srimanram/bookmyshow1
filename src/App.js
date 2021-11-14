import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import TicketBooking from "./Pages/TicketBooking";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="movies/:movieId" element={<TicketBooking />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
