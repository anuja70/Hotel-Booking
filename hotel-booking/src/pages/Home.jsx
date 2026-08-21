import Navbar from "../components/Navbar";
import SearchBox from "../components/SearchBox";
import HotelCard from "../components/HotelCard";
import Footer from "../components/Footer";

import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
  WalletCards,
} from "lucide-react";

const hotels = [
  {
    id: 1,
    name: "The Himalayan Haven",
    location: "Kathmandu, Nepal",
    price: 8500,
    rating: 4.9,
    popular: true,
    description:
      "A peaceful luxury stay with beautiful mountain views and modern rooms.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    name: "Lakeside Retreat",
    location: "Pokhara, Nepal",
    price: 6500,
    rating: 4.8,
    popular: true,
    description:
      "Relax beside the lake with comfortable rooms and stunning surroundings.",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    name: "Everest View Resort",
    location: "Nagarkot, Nepal",
    price: 7200,
    rating: 4.7,
    popular: false,
    description:
      "Enjoy fresh mountain air and breathtaking sunrise views from your room.",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=900&q=80",
  },
];

function Home() {
  return (
    <>
      <Navbar />

      <main>

        {/* HERO */}
        <section className="hero" id="home">

          <div className="hero-overlay"></div>

          <div className="container hero-content">

            <span className="hero-tag">
              <Sparkles size={16} />
              Discover your perfect stay
            </span>

            <h1>
              Your next
              <br />
              <span>beautiful stay</span>
              <br />
              starts here.
            </h1>

            <p>
              Discover unique hotels, beautiful destinations,
              and unforgettable experiences.
            </p>

          </div>

          <div className="container search-container">
            <SearchBox />
          </div>

        </section>


        {/* POPULAR DESTINATIONS */}
        <section className="section">

          <div className="container">

            <div className="section-heading">
              <div>
                <span className="section-label">
                  Explore
                </span>

                <h2>
                  Popular destinations
                </h2>
              </div>

              <button className="text-button">
                View all
                <ArrowRight size={18} />
              </button>
            </div>


            <div className="destination-grid">

              <div className="destination-card kathmandu">
                <div>
                  <span>Kathmandu</span>
                  <small>120+ hotels</small>
                </div>
              </div>

              <div className="destination-card pokhara">
                <div>
                  <span>Pokhara</span>
                  <small>85+ hotels</small>
                </div>
              </div>

              <div className="destination-card chitwan">
                <div>
                  <span>Chitwan</span>
                  <small>50+ hotels</small>
                </div>
              </div>

              <div className="destination-card nagarkot">
                <div>
                  <span>Nagarkot</span>
                  <small>40+ hotels</small>
                </div>
              </div>

            </div>

          </div>

        </section>


        {/* FEATURED HOTELS */}
        <section className="section hotels-section" id="hotels">

          <div className="container">

            <div className="section-heading">

              <div>
                <span className="section-label">
                  Handpicked for you
                </span>

                <h2>
                  Featured hotels
                </h2>
              </div>

              <button className="text-button">
                Explore hotels
                <ArrowRight size={18} />
              </button>

            </div>


            <div className="hotel-grid">

              {hotels.map((hotel) => (
                <HotelCard
                  key={hotel.id}
                  hotel={hotel}
                />
              ))}

            </div>

          </div>

        </section>


        {/* WHY STAYEASE */}
        <section className="why-section" id="about">

          <div className="container">

            <div className="why-content">

              <div className="why-text">

                <span className="section-label">
                  Why StayEase?
                </span>

                <h2>
                  Everything you need
                  for a perfect stay.
                </h2>

                <p>
                  We make hotel booking simple, secure,
                  and enjoyable so you can focus on
                  creating unforgettable memories.
                </p>

              </div>


              <div className="benefits">

                <div className="benefit">

                  <div className="benefit-icon">
                    <ShieldCheck />
                  </div>

                  <div>
                    <h3>Secure booking</h3>
                    <p>
                      Your booking information is
                      protected and secure.
                    </p>
                  </div>

                </div>


                <div className="benefit">

                  <div className="benefit-icon">
                    <WalletCards />
                  </div>

                  <div>
                    <h3>Best prices</h3>
                    <p>
                      Find comfortable stays at
                      competitive prices.
                    </p>
                  </div>

                </div>


                <div className="benefit">

                  <div className="benefit-icon">
                    <Sparkles />
                  </div>

                  <div>
                    <h3>Quality stays</h3>
                    <p>
                      Carefully selected hotels
                      for a better experience.
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* CTA */}
        <section className="cta-section">

          <div className="container cta-content">

            <div>
              <span className="section-label">
                Ready to explore?
              </span>

              <h2>
                Your perfect getaway
                is waiting.
              </h2>
            </div>

            <button className="cta-button">
              Explore Hotels
              <ArrowRight size={19} />
            </button>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default Home;