import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      {/* Hero Section */}
      <div className="w-full max-w-6xl text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#D4AF37]">Contact Us</h1>
        <p className="text-lg text-gray-300 mt-2">We’d love to hear from you! Reach out to us with any inquiries.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl w-full">
        {/* Contact Details */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-[#D4AF37] mb-4">Get in Touch</h2>
          <p className="text-gray-300 mb-6">
            Have a question or want to make a booking? Contact us via phone, email, or visit us at our location.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="text-emerald-400 text-xl">📍</span>
              <p>123 Luxury Street, Blue Roof Apartments, Lagos, Nigeria</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-emerald-400 text-xl">📞</span>
              <p>+234 706 177 8948</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-emerald-400 text-xl">✉️</span>
              <p>info@blueroofservicedapartments.com</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-emerald-400 text-xl">🕒</span>
              <p>Monday - Sunday: 24/7</p>
            </div>
          </div>

          {/* Google Maps Embed */}
          <iframe
            className="w-full h-56 mt-6 rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7917.694338488458!2d3.380623!3d7.143665!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103a4b4f66e8fabd%3A0xd14d3c63ee6734db!2sBlueroof%20Serviced%20Apartments!5e0!3m2!1sen!2sng!4v1741559376576!5m2!1sen!2sng"
            loading="lazy"
            style={{ border: "0" }}
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-[#D4AF37] mb-4">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-semibold text-gray-200">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 bg-gray-900 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500"
                required
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-200">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 bg-gray-900 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500"
                required
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-200">Message</label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 bg-gray-900 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-emerald-500 text-white font-semibold text-lg rounded-lg hover:bg-emerald-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
