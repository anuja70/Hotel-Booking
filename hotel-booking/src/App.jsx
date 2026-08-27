import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Hotels from "./pages/Hotels";
import HotelDetails from "./pages/HotelDetails";
import Booking from "./pages/Booking";



function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/hotels" element={<Hotels />} />

        <Route path="/hotels/:id" element={<HotelDetails />} />
        
        <Route path="/bookings/:id" element={<Booking />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;