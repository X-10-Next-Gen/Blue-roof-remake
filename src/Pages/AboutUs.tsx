import image1 from '../assets/image_9.jpg'
import image2 from '../assets/IMG-20241130-WA0001.jpg'


const AboutUs = () => {
    return (
      <div className="relative bg-gray-900 text-white">
{/* Hero Section */}
<div className="relative flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-[#0a0a0a] via-[#1e3a8a] to-[#0a0a0a] py-16 px-6 md:px-20 rounded-b-[50px] overflow-hidden">
  {/* Left Content */}
  <div className="text-center md:text-left md:max-w-lg z-10 text-white">
    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">About Us</h1>
    <p className="text-lg opacity-90">
      Welcome to <span className="font-semibold">Blue Roof Serviced Apartments</span>, where luxury meets comfort. We offer a premium stay experience designed to make you feel at home.
    </p>
  </div>

  {/* Right Image */}
  <div className="w-60 h-60 md:w-80 md:h-80 bg-gray-200 rounded-full shadow-lg flex items-center object-fit justify-center">
    <img
      src={image1}
      alt="Luxury Apartment"
      className="rounded-full object-cover w-full h-full"
    />
  </div>

  {/* Curved Effect */}
  <div className="absolute -top-10 left-0 w-full h-16 bg-gray-900 rounded-b-[50%] scale-x-[1.2]"></div>
  <div className="absolute -bottom-10 left-0 w-full h-16 bg-gray-900 rounded-t-[50%] scale-x-[1.2]"></div>
</div>

        {/* Our Story & Commitment */}
        <div className="mt-16 px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition duration-300">
            <h2 className="text-3xl font-bold mb-3">Our Story</h2>
            <p className="opacity-80 leading-relaxed">
              **Blue Roof Serviced Apartments** started with a vision—to create a home-like experience with the elegance of a luxury hotel. Over the years, we have grown into a brand trusted by travelers and business professionals alike.
            </p>
          </div>
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition duration-300">
            <h2 className="text-3xl font-bold mb-3">Our Commitment</h2>
            <p className="opacity-80 leading-relaxed">
              We promise **excellence, comfort, and security**. Whether you're on a business trip or a vacation, our apartments are designed to cater to all your needs.
            </p>
          </div>
        </div>
  
        {/* Why Choose Us */}
        <div className="mt-16 px-6 md:px-16">
          <h2 className="text-4xl font-extrabold text-center mb-8">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Luxury & Comfort", desc: "Enjoy fully furnished apartments with top-notch amenities." },
              { title: "Prime Locations", desc: "Stay in the heart of the city, close to attractions & business hubs." },
              { title: "24/7 Support", desc: "Our team is always ready to assist you, anytime, anywhere." }
            ].map((item, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition duration-300">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="opacity-80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
  
        {/* Testimonials */}
        <div className="mt-16 px-6 md:px-16">
          <h2 className="text-4xl font-extrabold text-center mb-8">What Our Guests Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "John Doe", text: "Amazing experience! The rooms were spotless, and the service was top-notch." },
              { name: "Emily Carter", text: "Felt like home. The best serviced apartment I’ve ever stayed in." },
              { name: "Michael Brown", text: "The staff was incredibly helpful, and the location was perfect!" }
            ].map((review, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition duration-300">
                <p className="italic opacity-80">"{review.text}"</p>
                <h4 className="mt-4 font-bold text-lg">{review.name}</h4>
              </div>
            ))}
          </div>
        </div>
  
        {/* Our Values */}
        <div className="mt-16 px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:scale-105 transition duration-300">
            <h2 className="text-3xl font-bold mb-3">Our Core Values</h2>
            <p className="opacity-80 leading-relaxed">
              **Integrity, Excellence, and Hospitality** are at the heart of everything we do. We ensure every guest experiences unmatched comfort and service.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={image2}
              alt="Our Team"
              className="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition duration-300"
            />
          </div>
        </div>
  
        {/* Our Locations */}
        <div className="mt-16 px-6 md:px-16 text-center">
          <h2 className="text-4xl font-extrabold mb-6">Where You Can Find Us</h2>
          <p className="opacity-80 max-w-3xl mx-auto">
            Our serviced apartment is located at 6 Sule Kusimo Street, ayetoro, Sabo 110118, Ogun State with plans to expand to more cities.
          </p>
        </div>
  
     
      </div>
    );
  };
  
  export default AboutUs;
  