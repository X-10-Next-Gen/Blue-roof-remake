import { useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link
import "aos/dist/aos.css";
import AOS from "aos";
import "swiper/swiper-bundle.css"; // Keeping Swiper styles if needed

const LandingPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-[#1E3A5F] text-white">
      {/* Hero Section with Parallax */}
      <div 
        className="relative overflow-hidden h-screen flex items-center justify-center bg-cover bg-center"
        style={{ 
          backgroundImage: `url("https://media.istockphoto.com/id/2110310187/photo/luxury-tropical-pool-villa-at-dusk.webp?a=1&b=1&s=612x612&w=0&k=20&c=3wDvy4YueLfVHI9Kycl7J-nYKJsxiJL1rpBQ-ZS0hTI=")`,
          backgroundAttachment: "fixed"
        }}
      >
        {/* Text Content */}
        <div className="relative z-10 text-center px-6 md:px-12 bg-[#1E3A5F] bg-opacity-50 p-8 rounded-lg">
          <h1 className="text-5xl font-bold text-[#D4AF37]" data-aos="fade-up">
            Experience Unmatched Luxury
          </h1>
          <p className="text-lg text-[#F5E6CA] mt-2" data-aos="fade-up">
            Discover a world of comfort and elegance at BlueRoof Apartments.
          </p>
          <Link
            to="/book"
            className="mt-4 inline-block px-6 py-2 bg-[#D4AF37] hover:bg-[#F5E6CA] text-[#1E3A5F] rounded-lg transition"
            data-aos="fade-up"
          >
            Book Now
          </Link>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="p-10 text-center">
        <h1 className="text-4xl font-bold text-[#D4AF37]" data-aos="fade-up">
          Why Choose BlueRoof Apartments?
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {[
            { title: "🌟 5-Star Comfort", text: "Luxurious and spacious rooms designed for your comfort." },
            { title: "🔒 Secure & Private", text: "24/7 security and private access for peace of mind." },
            { title: "📍 Prime Location", text: "Easy access to city hotspots, malls, and business centers." },
          ].map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-[#D4AF37] rounded-lg shadow-lg text-[#1E3A5F] transition-transform duration-300 transform hover:scale-105 hover:bg-[#b38f2f]"
              data-aos="fade-up"
            >
              <h2 className="text-2xl font-bold">{feature.title}</h2>
              <p className="mt-2">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Rooms & Suites */}
      {/* <div className="p-10">
        <h1 className="text-center text-4xl font-bold text-[#D4AF37]" data-aos="fade-up">
          Our Featured Suites
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {[
            { name: "Deluxe Suite", img: "https://source.unsplash.com/500x300/?hotel,room", price: "$150/night" },
            { name: "Executive Suite", img: "https://source.unsplash.com/500x300/?luxury,room", price: "$200/night" },
            { name: "Penthouse Suite", img: "https://source.unsplash.com/500x300/?penthouse,room", price: "$350/night" },
          ].map((room, index) => (
            <div
              key={index}
              className="p-6 bg-[#D4AF37] rounded-lg shadow-lg text-[#1E3A5F] transition-transform duration-300 transform hover:scale-105 hover:bg-[#b38f2f]"
              data-aos="fade-up"
            >
              <img src={room.img} alt={room.name} className="w-full h-40 object-cover rounded-md" />
              <h2 className="text-2xl font-bold mt-4">{room.name}</h2>
              <p className="mt-2">{room.price}</p>
              <Link
                to="/book"
                className="mt-3 inline-block px-4 py-2 bg-[#1E3A5F] hover:bg-[#14283C] text-[#D4AF37] rounded-lg transition"
              >
                Book Now
              </Link>
            </div>
          ))}
        </div>
      </div> */}

      {/* Contact Us Section */}
      <div className="p-10">
        <h1 className="text-center text-4xl font-bold text-[#D4AF37]" data-aos="fade-up">
          Contact Us
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {[
            { title: "📞 Call Us", text: "+234 706 177 8948", link: "tel:+2347061778948" },
            { title: "✉️ Email Us", text: "Blueroofservicedepartment@gmail.com", link: "mailto:Blueroofservicedepartment@gmail.com" },
            { title: "💬 WhatsApp", text: "Chat with us on WhatsApp", link: "https://wa.me/+2347061778948" },
            { title: "📍 Visit Us", text: "6 Blueroof Close, Abeokuta", link: "https://www.google.com/maps/place/Blueroof+Serviced+Apartments/" },
          ].map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              className="p-6 bg-[#D4AF37] rounded-lg text-[#1E3A5F] transition-transform duration-300 transform hover:scale-105 hover:bg-[#b38f2f] block"
              data-aos="fade-up"
            >
              <h2 className="text-2xl font-bold">{contact.title}</h2>
              <p className="mt-2">{contact.text}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
