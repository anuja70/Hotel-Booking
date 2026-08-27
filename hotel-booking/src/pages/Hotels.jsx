import { useState } from "react";
import { Heart, MapPin, Star, SlidersHorizontal } from "lucide-react";

const hotels = [
  {
    id: 1,
    name: "The Himalayan Haven",
    location: "Kathmandu, Nepal",
    price: 8500,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    name: "Lakeside Retreat",
    location: "Pokhara, Nepal",
    price: 6500,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    name: "Everest View Resort",
    location: "Nagarkot, Nepal",
    price: 7200,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    name: "Mountain Pearl Hotel",
    location: "Pokhara, Nepal",
    price: 5500,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 5,
    name: "Kathmandu Grand",
    location: "Kathmandu, Nepal",
    price: 9500,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 6,
    name: "Forest Paradise",
    location: "Chitwan, Nepal",
    price: 4800,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=900&q=80",
  },
];

function Hotels() {
  const [maxPrice, setMaxPrice] = useState(15000);
  const [minRating, setMinRating] = useState(0);

  const filteredHotels = hotels.filter(
    (hotel) =>
      hotel.price <= maxPrice &&
      hotel.rating >= minRating
  );

  return (
    <div className="hotels-page">

      {/* HEADER */}
      <div className="hotels-header">
        <div className="container">

          <p className="section-label">
            Find your stay
          </p>

          <h1>Hotels in Nepal</h1>

          <p>
            Discover comfortable stays for your next
            adventure.
          </p>

        </div>
      </div>

      <div className="container hotels-layout">

        {/* FILTER SIDEBAR */}
        <aside className="filter-sidebar">

          <div className="filter-title">
            <h3>Filters</h3>
            <SlidersHorizontal size={20} />
          </div>

          <div className="filter-group">

            <h4>Maximum Price</h4>

            <input
              type="range"
              min="3000"
              max="15000"
              step="500"
              value={maxPrice}
              onChange={(e) =>
                setMaxPrice(Number(e.target.value))
              }
            />

            <div className="price-range">
              <span>Rs. 3,000</span>
              <strong>
                Rs. {maxPrice.toLocaleString()}
              </strong>
            </div>

          </div>

          <div className="filter-group">

            <h4>Minimum Rating</h4>

            <label className="rating-option">
              <input
                type="radio"
                name="rating"
                onChange={() => setMinRating(4)}
              />
              <span>4+ ⭐</span>
            </label>

            <label className="rating-option">
              <input
                type="radio"
                name="rating"
                onChange={() => setMinRating(3)}
              />
              <span>3+ ⭐</span>
            </label>

            <label className="rating-option">
              <input
                type="radio"
                name="rating"
                defaultChecked
                onChange={() => setMinRating(0)}
              />
              <span>Any rating</span>
            </label>

          </div>

        </aside>


        {/* HOTEL RESULTS */}
        <section className="hotel-results">

          <div className="results-header">
            <div>
              <h2>
                {filteredHotels.length} hotels found
              </h2>

              <p>
                Based on your preferences
              </p>
            </div>

            <select className="sort-select">
              <option>Recommended</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Highest Rated</option>
            </select>
          </div>


          <div className="listing-grid">

            {filteredHotels.map((hotel) => (

              <div className="listing-card" key={hotel.id}>

                <div className="listing-image">

                  <img
                    src={hotel.image}
                    alt={hotel.name}
                  />

                  <button className="listing-heart">
                    <Heart size={19} />
                  </button>

                </div>


                <div className="listing-info">

                  <div className="listing-title">

                    <h3>{hotel.name}</h3>

                    <div className="listing-rating">
                      <Star
                        size={15}
                        fill="currentColor"
                      />
                      {hotel.rating}
                    </div>

                  </div>


                  <div className="listing-location">
                    <MapPin size={15} />
                    {hotel.location}
                  </div>


                  <div className="listing-bottom">

                    <div className="listing-price">
                      <strong>
                        Rs. {hotel.price.toLocaleString()}
                      </strong>

                      <span>/ night</span>
                    </div>

                    <button className="details-button">
                      View Hotel
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </section>

      </div>

    </div>
  );
}

export default Hotels;