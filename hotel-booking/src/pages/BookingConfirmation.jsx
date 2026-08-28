import { Link, useLocation } from "react-router-dom";
import {
  Check,
  CalendarDays,
  MapPin,
  Users,
  Home,
} from "lucide-react";

function BookingConfirmation() {
  const location = useLocation();

  const booking = location.state || {
    hotelName: "The Himalayan Haven",
    location: "Kathmandu, Nepal",
    roomType: "Deluxe Room",
    guests: 2,
    checkIn: "Not selected",
    checkOut: "Not selected",
    total: 9000,
  };

  const bookingId = "ST" + Math.floor(100000 + Math.random() * 900000);

  return (
    <div className="confirmation-page">

      <div className="confirmation-container">

        {/* SUCCESS ICON */}

        <div className="success-icon">
          <Check size={38} strokeWidth={3} />
        </div>

        <p className="confirmation-label">
          Booking confirmed
        </p>

        <h1>You're all set!</h1>

        <p className="confirmation-message">
          Your reservation has been successfully confirmed.
          We look forward to welcoming you.
        </p>


        {/* BOOKING CARD */}

        <div className="confirmation-card">

          <div className="confirmation-card-header">

            <div>
              <p>Booking ID</p>
              <strong>{bookingId}</strong>
            </div>

            <span className="confirmed-badge">
              Confirmed
            </span>

          </div>


          <div className="confirmation-hotel">

            <div className="confirmation-hotel-icon">
              <Home size={25} />
            </div>

            <div>
              <h2>{booking.hotelName}</h2>

              <p>
                <MapPin size={15} />
                {booking.location}
              </p>
            </div>

          </div>


          {/* DETAILS */}

          <div className="confirmation-details">

            <div>
              <CalendarDays size={19} />

              <div>
                <span>Check-in</span>
                <strong>{booking.checkIn}</strong>
              </div>
            </div>


            <div>
              <CalendarDays size={19} />

              <div>
                <span>Check-out</span>
                <strong>{booking.checkOut}</strong>
              </div>
            </div>


            <div>
              <Home size={19} />

              <div>
                <span>Room</span>
                <strong>{booking.roomType}</strong>
              </div>
            </div>


            <div>
              <Users size={19} />

              <div>
                <span>Guests</span>
                <strong>
                  {booking.guests} Guests
                </strong>
              </div>
            </div>

          </div>


          {/* TOTAL */}

          <div className="confirmation-total">

            <span>Total paid</span>

            <strong>
              Rs. {Number(booking.total).toLocaleString()}
            </strong>

          </div>

        </div>


        {/* ACTIONS */}

        <div className="confirmation-actions">

          <Link
            to="/"
            className="confirmation-home"
          >
            Back to Home
          </Link>

          <Link
            to="/hotels"
            className="confirmation-hotels"
          >
            Explore More Hotels
          </Link>

        </div>

      </div>

    </div>
  );
}

export default BookingConfirmation;