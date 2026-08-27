import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  Bath,
  BedDouble,
  Car,
  Check,
  Coffee,
  Heart,
  MapPin,
  Star,
  Tv,
  Wifi,
} from "lucide-react";

const hotels = [
  {
    id: 1,
    name: "The Himalayan Haven",
    location: "Kathmandu, Nepal",
    price: 8500,
    rating: 4.9,
    reviews: 128,
    description:
      "The Himalayan Haven offers a peaceful and comfortable stay in the heart of Kathmandu. Enjoy modern rooms, excellent service, and beautiful surroundings while exploring Nepal.",
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=900&q=80",
    ],
    amenities: [
      { name: "Free WiFi", icon: Wifi },
      { name: "Parking", icon: Car },
      { name: "Breakfast", icon: Coffee },
      { name: "TV", icon: Tv },
      { name: "Private Bathroom", icon: Bath },
    ],
  },
  {
    id: 2,
    name: "Lakeside Retreat",
    location: "Pokhara, Nepal",
    price: 6500,
    rating: 4.8,
    reviews: 96,
    description:
      "Lakeside Retreat is a relaxing destination in Pokhara, perfect for travelers looking for comfortable rooms, peaceful surroundings, and easy access to the beautiful lakeside area.",
    images: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=900&q=80",
    ],
    amenities: [
      { name: "Free WiFi", icon: Wifi },
      { name: "Parking", icon: Car },
      { name: "Breakfast", icon: Coffee },
      { name: "Private Bathroom", icon: Bath },
    ],
  },
  {
    id: 3,
    name: "Everest View Resort",
    location: "Nagarkot, Nepal",
    price: 7200,
    rating: 4.7,
    reviews: 84,
    description:
      "Everest View Resort provides a peaceful mountain escape with comfortable rooms and breathtaking views. It is an ideal place to relax and enjoy the beauty of Nepal.",
    images: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=900&q=80",
    ],
    amenities: [
      { name: "Free WiFi", icon: Wifi },
      { name: "Parking", icon: Car },
      { name: "Breakfast", icon: Coffee },
      { name: "TV", icon: Tv },
    ],
  },
];

const rooms = [
  {
    name: "Deluxe Room",
    description: "Comfortable room with a king-size bed.",
    price: 8500,
    guests: 2,
  },
  {
    name: "Premium Suite",
    description: "Spacious suite with a beautiful city view.",
    price: 12000,
    guests: 3,
  },
];

function HotelDetails() {
  const { id } = useParams();

  const hotel = hotels.find(
    (item) => item.id === Number(id)
  );

  if (!hotel) {
    return (
      <div className="not-found">
        <h1>Hotel not found</h1>
        <Link to="/hotels">Back to Hotels</Link>
      </div>
    );
  }

  return (
    <div className="details-page">

      {/* HEADER */}

      <header className="details-header">
        <div className="container details-header-content">

          <Link to="/hotels" className="back-link">
            <ArrowLeft size={18} />
            Back to hotels
          </Link>

          <button className="details-favorite">
            <Heart size={19} />
          </button>

        </div>
      </header>


      <main className="container details-container">

        {/* IMAGE GALLERY */}

        <div className="image-gallery">

          <img
            src={hotel.images[0]}
            alt={hotel.name}
            className="main-hotel-image"
          />

          <div className="small-images">

            <img
              src={hotel.images[1]}
              alt={`${hotel.name} room`}
            />

            <img
              src={hotel.images[2]}
              alt={`${hotel.name} interior`}
            />

          </div>

        </div>


        {/* HOTEL INFORMATION */}

        <div className="hotel-details-grid">

          <section className="hotel-main-info">

            <div className="details-rating">
              <Star size={17} fill="currentColor" />
              {hotel.rating}
              <span>
                ({hotel.reviews} reviews)
              </span>
            </div>

            <h1>{hotel.name}</h1>

            <div className="details-location">
              <MapPin size={18} />
              {hotel.location}
            </div>

            <p className="details-description">
              {hotel.description}
            </p>


            {/* AMENITIES */}

            <div className="amenities-section">

              <h2>Hotel amenities</h2>

              <div className="amenities-grid">

                {hotel.amenities.map((amenity) => {

                  const Icon = amenity.icon;

                  return (
                    <div
                      className="amenity"
                      key={amenity.name}
                    >
                      <Icon size={19} />
                      <span>{amenity.name}</span>
                    </div>
                  );
                })}

              </div>

            </div>


            {/* ROOMS */}

            <div className="rooms-section">

              <h2>Choose your room</h2>

              <div className="rooms-list">

                {rooms.map((room) => (

                  <div
                    className="room-card"
                    key={room.name}
                  >

                    <div className="room-image">
                      <img
                        src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=700&q=80"
                        alt={room.name}
                      />
                    </div>

                    <div className="room-info">

                      <div>
                        <h3>{room.name}</h3>

                        <p>
                          {room.description}
                        </p>

                        <span className="room-guests">
                          <BedDouble size={15} />
                          Up to {room.guests} guests
                        </span>
                      </div>

                      <div className="room-action">

                        <div>
                          <strong>
                            Rs.{" "}
                            {room.price.toLocaleString()}
                          </strong>

                          <span>/ night</span>
                        </div>

                       <Link
                       to={`/hotels/${id}/book`}
                       className="book-button"
                        >
                           Book Now
                            </Link>

                      </div>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </section>


          {/* BOOKING CARD */}

          <aside className="booking-card">

            <p className="booking-label">
              Starting from
            </p>

            <div className="booking-price">
              Rs. {hotel.price.toLocaleString()}
              <span>/ night</span>
            </div>

            <div className="booking-inputs">

              <div>
                <label>Check-in</label>
                <input type="date" />
              </div>

              <div>
                <label>Check-out</label>
                <input type="date" />
              </div>

            </div>

            <div className="booking-guests">

              <label>Guests</label>

              <select defaultValue="2">
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
              </select>

            </div>

            <div className="booking-summary">

              <div>
                <span>Room</span>
                <span>
                  Rs. {hotel.price.toLocaleString()}
                </span>
              </div>

              <div>
                <span>Service fee</span>
                <span>Rs. 500</span>
              </div>

              <hr />

              <div className="total">
                <strong>Total</strong>
                <strong>
                  Rs. {(hotel.price + 500).toLocaleString()}
                </strong>
              </div>

            </div>
              <Link
                   to={`/hotels/${id}/book`}
                     className="reserve-button"
                               >
                           Reserve Room
                           </Link>

            <div className="secure-booking">
              <Check size={16} />
              You won't be charged yet
            </div>

          </aside>

        </div>

      </main>

    </div>
  );
}

export default HotelDetails;