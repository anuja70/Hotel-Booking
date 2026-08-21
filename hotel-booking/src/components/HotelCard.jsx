import { Heart, MapPin, Star } from "lucide-react";

function HotelCard({ hotel }) {
  return (
    <div className="hotel-card">

      <div className="hotel-image-wrapper">
        <img
          src={hotel.image}
          alt={hotel.name}
          className="hotel-image"
        />

        <button className="favorite-button">
          <Heart size={19} />
        </button>

        {hotel.popular && (
          <span className="popular-badge">
            Popular
          </span>
        )}
      </div>

      <div className="hotel-info">

        <div className="hotel-title-row">
          <h3>{hotel.name}</h3>

          <div className="rating">
            <Star size={16} fill="currentColor" />
            {hotel.rating}
          </div>
        </div>

        <div className="location">
          <MapPin size={16} />
          {hotel.location}
        </div>

        <p className="hotel-description">
          {hotel.description}
        </p>

        <div className="hotel-bottom">

          <div className="price">
            <strong>Rs. {hotel.price.toLocaleString()}</strong>
            <span>/ night</span>
          </div>

          <button className="view-button">
            View Hotel
          </button>

        </div>
      </div>
    </div>
  );
}

export default HotelCard;