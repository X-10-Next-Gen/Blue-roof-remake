import { useState } from "react";

const BookPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    roomType: "Deluxe Suite",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    // Construct the WhatsApp message with form details
    const whatsappMessage = `Hello, I want to book a room. Here are my details:
    - Name: ${formData.name}
    - Email: ${formData.email}
    - Phone: ${formData.phone}
    - Check-In Date: ${formData.checkIn}
    - Check-Out Date: ${formData.checkOut}
    - Room Type: ${formData.roomType}`;
  
    // WhatsApp API URL with message
    const whatsappURL = `https://wa.me/+2347061778948?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Redirect to WhatsApp
    window.open(whatsappURL, "_blank");
  };
  
  const handleWhatsAppBooking = () => {
    const { name, phone, checkIn, checkOut, roomType } = formData;
    const whatsappMessage = `Hello, my name is *${name}*. I would like to book a *${roomType}* from *${checkIn}* to *${checkOut}*. My contact: *${phone}*.`;
    const whatsappURL = `https://wa.me/+2347061778948?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappURL, "_blank");
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-6">
      <div className="bg-gray-800 p-8 rounded-lg shadow-2xl w-full max-w-lg">
        <h1 className="text-4xl font-extrabold text-center text-[#D4AF37]">Book Your Stay</h1>
        <p className="text-center text-gray-300 mt-2">Choose your preferred booking method.</p>

        {/* Booking Options */}
        {!showForm && (
          <div className="flex flex-col items-center gap-4 mt-6">
            <button
              onClick={() => setShowForm(true)}
              className="group relative inline-flex items-center justify-center text-base rounded-xl bg-gray-900 px-8 py-3 font-semibold text-white transition-all duration-200 hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 hover:shadow-gray-600/30"
            >
              Book by Form
            </button>

            <button
              onClick={handleWhatsAppBooking}
              className="relative inline-flex h-12 active:scale-95 transition overflow-hidden rounded-lg p-[1px] focus:outline-none"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"></span>
              <span className="inline-flex h-full w-full items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2">
                Book on WhatsApp
              </span>
            </button>
          </div>
        )}

        {/* Booking Form */}
        {showForm && (
          <form className="mt-6 bg-gray-700 p-6 rounded-lg shadow-lg" onSubmit={handleSubmit}>
            <div className="mb-4">
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

            <div className="mb-4">
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

            <div className="mb-4">
              <label className="block font-semibold text-gray-200">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 bg-gray-900 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500"
                required
              />
            </div>

            {/* Check-In and Check-Out Dates */}
            <div className="flex gap-4">
              <div className="mb-4 w-1/2">
                <label className="block font-semibold text-gray-200">Check-In Date</label>
                <input
                  type="date"
                  name="checkIn"
                  value={formData.checkIn}
                  onChange={handleChange}
                  min={today}
                  className="w-full p-3 bg-gray-900 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500"
                  required
                />
              </div>

              <div className="mb-4 w-1/2">
                <label className="block font-semibold text-gray-200">Check-Out Date</label>
                <input
                  type="date"
                  name="checkOut"
                  value={formData.checkOut}
                  onChange={handleChange}
                  min={formData.checkIn || today}
                  className="w-full p-3 bg-gray-900 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-emerald-500 text-white font-semibold text-lg rounded-lg hover:bg-emerald-600 transition duration-300"
            >
              Submit Booking Request
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default BookPage;
