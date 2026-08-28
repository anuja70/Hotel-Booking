import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Hotels from "./pages/Hotels";
import HotelDetails from "./pages/HotelDetails";
import Booking from "./pages/Booking";
import BookingConfirmation from "./pages/BookingConfirmation";
import MyBookings from "./pages/MyBookings";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/hotels" element={<Hotels />} />

        <Route
          path="/hotels/:id"
          element={<HotelDetails />}
        />

        <Route
          path="/hotels/:id/book"
          element={<Booking />}
        />

        <Route
          path="/booking-confirmation"
          element={<BookingConfirmation />}
        />
        
          <Route
            path="/my-bookings"
            element={<MyBookings />}
                />
      </Routes>
    </BrowserRouter>
  );
}

export default App;