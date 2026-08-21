import {
  CalendarDays,
  MapPin,
  Search,
  Users,
} from "lucide-react";

function SearchBox() {
  return (
    <div className="search-box">

      <div className="search-item">
        <MapPin size={20} />
        <div>
          <label>Location</label>
          <input
            type="text"
            placeholder="Where are you going?"
          />
        </div>
      </div>

      <div className="search-item">
        <CalendarDays size={20} />
        <div>
          <label>Check in</label>
          <input type="date" />
        </div>
      </div>

      <div className="search-item">
        <CalendarDays size={20} />
        <div>
          <label>Check out</label>
          <input type="date" />
        </div>
      </div>

      <div className="search-item">
        <Users size={20} />
        <div>
          <label>Guests</label>
          <select defaultValue="2 Guests">
            <option>1 Guest</option>
            <option>2 Guests</option>
            <option>3 Guests</option>
            <option>4 Guests</option>
            <option>5+ Guests</option>
          </select>
        </div>
      </div>

      <button className="search-button">
        <Search size={20} />
        Search
      </button>

    </div>
  );
}

export default SearchBox;