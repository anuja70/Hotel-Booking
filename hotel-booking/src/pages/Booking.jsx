import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  CreditCard,
  ShieldCheck,
} from "lucide-react";

const hotels = {
  1: {
    name: "The Himalayan Haven",
    location: "Kathmandu, Nepal",
    price: 8500,
  },
  2: {
    name: "Lakeside Retreat",
    location: "Pokhara, Nepal",
    price: 6500,
  },
  3: {
    name: "Everest View Resort",
    location: "Nagarkot, Nepal",
    price: 7200,
  },
};

function Booking() {
  const { id } = useParams();
  const navigate = useNavigate();

  const hotel = hotels[id];

  const [guests, setGuests] = useState(2);
  const [roomType, setRoomType] = useState("Deluxe Room");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  if (!hotel) {
    return (
      <div className="not-found">
        <h1>Hotel not found</h1>

        <Link to="/hotels">
          Back to hotels
        </Link>
      </div>
    );
  }

  const serviceFee = 500;

  const roomPrice =
    roomType === "Premium Suite"
      ? hotel.price + 3500
      : hotel.price;

  const total = roomPrice + serviceFee;

  const handleConfirmBooking = () => {
    navigate("/booking-confirmation", {
      state: {
        hotelName: hotel.name,
        location: hotel.location,
        roomType: roomType,
        guests: guests,
        checkIn: checkIn || "Not selected",
        checkOut: checkOut || "Not selected",
        total: total,
      },
    });
  };

  return (
    <div className="booking-page">

      {/* HEADER */}

      <header className="booking-header">

        <div className="container">

          <Link
            to={`/hotels/${id}`}
            className="back-link"
          >
            <ArrowLeft size={18} />
            Back to hotel
          </Link>

          <h1>Complete your booking</h1>

          <p>
            You're just a few steps away from your stay.
          </p>

        </div>

      </header>


      {/* MAIN */}

      <main className="container booking-layout">

        {/* LEFT SIDE */}

        <section className="booking-form">

          {/* TRIP */}

          <div className="form-card">

            <h2>Your trip</h2>

            <div className="date-grid">

              <div className="form-group">

                <label>
                  Check-in
                </label>

                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) =>
                    setCheckIn(e.target.value)
                  }
                />

              </div>


              <div className="form-group">

                <label>
                  Check-out
                </label>

                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) =>
                    setCheckOut(e.target.value)
                  }
                />

              </div>

            </div>


            <div className="form-group">

              <label>
                Guests
              </label>

              <select
                value={guests}
                onChange={(e) =>
                  setGuests(Number(e.target.value))
                }
              >

                <option value="1">
                  1 Guest
                </option>

                <option value="2">
                  2 Guests
                </option>

                <option value="3">
                  3 Guests
                </option>

                <option value="4">
                  4 Guests
                </option>

              </select>

            </div>

          </div>


          {/* ROOM */}

          <div className="form-card">

            <h2>
              Choose your room
            </h2>


            <label className="room-option">

              <input
                type="radio"
                name="room"
                value="Deluxe Room"
                checked={
                  roomType === "Deluxe Room"
                }
                onChange={(e) =>
                  setRoomType(e.target.value)
                }
              />

              <div>

                <strong>
                  Deluxe Room
                </strong>

                <p>
                  King-size bed · 2 guests
                </p>

              </div>

              <span>
                Rs.{" "}
                {hotel.price.toLocaleString()}
              </span>

            </label>


            <label className="room-option">

              <input
                type="radio"
                name="room"
                value="Premium Suite"
                checked={
                  roomType === "Premium Suite"
                }
                onChange={(e) =>
                  setRoomType(e.target.value)
                }
              />

              <div>

                <strong>
                  Premium Suite
                </strong>

                <p>
                  Large suite · 3 guests
                </p>

              </div>

              <span>
                Rs.{" "}
                {(hotel.price + 3500).toLocaleString()}
              </span>

            </label>

          </div>


          {/* PAYMENT */}

          <div className="form-card">

            <h2>
              Payment method
            </h2>

            <div className="payment-box">

              <CreditCard size={22} />

              <div>

                <strong>
                  Card Payment
                </strong>

                <p>
                  Visa, Mastercard and other cards
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* RIGHT SIDE */}

        <aside className="booking-summary-card">

          <h2>
            Booking summary
          </h2>


          {/* HOTEL */}

          <div className="summary-hotel">

            <div className="summary-placeholder">
              🏨
            </div>

            <div>

              <strong>
                {hotel.name}
              </strong>

              <p>
                {hotel.location}
              </p>

            </div>

          </div>


          {/* DETAILS */}

          <div className="summary-details">

            <div>

              <span>
                Room
              </span>

              <strong>
                {roomType}
              </strong>

            </div>


            <div>

              <span>
                Guests
              </span>

              <strong>
                {guests}
              </strong>

            </div>


            <div>

              <span>
                Check-in
              </span>

              <strong>
                {checkIn || "Select date"}
              </strong>

            </div>


            <div>

              <span>
                Check-out
              </span>

              <strong>
                {checkOut || "Select date"}
              </strong>

            </div>

          </div>


          {/* PRICE */}

          <div className="summary-price">

            <div>

              <span>
                Room price
              </span>

              <span>
                Rs.{" "}
                {roomPrice.toLocaleString()}
              </span>

            </div>


            <div>

              <span>
                Service fee
              </span>

              <span>
                Rs.{" "}
                {serviceFee.toLocaleString()}
              </span>

            </div>


            <hr />


            <div className="summary-total">

              <strong>
                Total
              </strong>

              <strong>
                Rs.{" "}
                {total.toLocaleString()}
              </strong>

            </div>

          </div>


          {/* CONFIRM BUTTON */}

          <button
            className="confirm-button"
            onClick={handleConfirmBooking}
          >
            Confirm Booking
          </button>


          {/* SECURE */}

          <div className="secure-note">

            <ShieldCheck size={16} />

            <span>
              Secure booking
            </span>

          </div>

        </aside>

      </main>

    </div>
  );
}

export default Booking;