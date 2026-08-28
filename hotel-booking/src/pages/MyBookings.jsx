import { Link } from "react-router-dom";
import {
  CalendarDays,
  MapPin,
  Users,
  Hotel,
  ArrowRight,
} from "lucide-react";

function MyBookings() {
  // Temporary booking data
  // Later we can connect this to a backend/database.
  const bookings = [
    {
      id: "ST482731",
      hotelName: "The Himalayan Haven",
      location: "Kathmandu, Nepal",
      roomType: "Deluxe Room",
      guests: 2,
      checkIn: "2026-09-10",
      checkOut: "2026-09-12",
      total: 9000,
      status: "Confirmed",
    },
  ];

  return (
    <div className="my-bookings-page">

      {/* HEADER */}

      <header className="my-bookings-header">
        <div className="container">

          <Link to="/hotels" className="back-link">
            ← Back to hotels
          </Link>

          <p className="booking-label">
            StayEase
          </p>

          <h1>My Bookings</h1>

          <p>
            Manage and view your hotel reservations.
          </p>

        </div>
      </header>


      {/* BOOKINGS */}

      <main className="container my-bookings-content">

        {bookings.length === 0 ? (

          <div className="empty-bookings">

            <Hotel size={45} />

            <h2>No bookings yet</h2>

            <p>
              You haven't made any hotel reservations yet.
            </p>

            <Link
              to="/hotels"
              className="browse-hotels-button"
            >
              Browse Hotels
            </Link>

          </div>

        ) : (

          <div className="booking-list">

            {bookings.map((booking) => (

              <article
                className="my-booking-card"
                key={booking.id}
              >

                {/* HOTEL */}

                <div className="my-booking-hotel">

                  <div className="booking-hotel-icon">
                    <Hotel size={30} />
                  </div>

                  <div>

                    <h2>
                      {booking.hotelName}
                    </h2>

                    <p className="booking-location">
                      <MapPin size={15} />
                      {booking.location}
                    </p>

                  </div>

                  <span className="booking-status">
                    {booking.status}
                  </span>

                </div>


                {/* DETAILS */}

                <div className="my-booking-details">

                  <div>

                    <CalendarDays size={19} />

                    <div>
                      <span>Check-in</span>
                      <strong>
                        {booking.checkIn}
                      </strong>
                    </div>

                  </div>


                  <div>

                    <CalendarDays size={19} />

                    <div>
                      <span>Check-out</span>
                      <strong>
                        {booking.checkOut}
                      </strong>
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


                  <div>

                    <Hotel size={19} />

                    <div>
                      <span>Room</span>
                      <strong>
                        {booking.roomType}
                      </strong>
                    </div>

                  </div>

                </div>


                {/* FOOTER */}

                <div className="my-booking-footer">

                  <div>

                    <span>
                      Booking ID
                    </span>

                    <strong>
                      {booking.id}
                    </strong>

                  </div>


                  <div className="booking-total">

                    <span>
                      Total
                    </span>

                    <strong>
                      Rs.{" "}
                      {booking.total.toLocaleString()}
                    </strong>

                  </div>


                  <Link
                    to="/hotels"
                    className="view-hotels-link"
                  >
                    Browse hotels
                    <ArrowRight size={17} />
                  </Link>

                </div>

              </article>

            ))}

          </div>

        )}

      </main>

    </div>
  );
}

export default MyBookings;