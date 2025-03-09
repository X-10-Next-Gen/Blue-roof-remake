import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-[#1E3A5F] w-full px-8 py-6 flex justify-between items-center text-white shadow-md">
        {/* Logo (Left) */}
        <Link to="/" className="text-2xl font-bold text-[#D4AF37]">BlueRoof</Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 justify-center space-x-6 text-lg">
          <Link to="/" className="hover:text-[#D4AF37] transition">Home</Link>
          <Link to="/book" className="hover:text-[#D4AF37] transition">Book a Room</Link>
          <Link to="/aboutus" className="hover:text-[#D4AF37] transition">About Us</Link>
          <Link to="/contactus" className="hover:text-[#D4AF37] transition">Contact</Link>
        </nav>

        {/* Social Media Icons */}
        <div className="hidden md:flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook className="text-[#D4AF37] hover:text-white transition" size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter className="text-[#D4AF37] hover:text-white transition" size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="text-[#D4AF37] hover:text-white transition" size={24} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </header>

      {/* Promo Banner */}
      <div className="bg-[#D4AF37] text-[#1E3A5F] text-center py-2 font-semibold text-lg">
        Special Offer: Get 20% Off Your First Booking! Use Code: <span className="font-bold">BLUEROOF20</span>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="md:hidden bg-[#1E3A5F] p-5 flex flex-col items-center space-y-4 text-center">
          <Link to="/" className="text-[#D4AF37] hover:text-white transition" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/book" className="text-[#D4AF37] hover:text-white transition" onClick={() => setMenuOpen(false)}>Book a Room</Link>
          <Link to="/aboutus" className="text-[#D4AF37] hover:text-white transition" onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link to="/contactus" className="text-[#D4AF37] hover:text-white transition" onClick={() => setMenuOpen(false)}>Contact</Link>

          {/* Social Media Links */}
          <div className="flex space-x-6 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook className="text-[#D4AF37] hover:text-white transition" size={28} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter className="text-[#D4AF37] hover:text-white transition" size={28} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="text-[#D4AF37] hover:text-white transition" size={28} />
            </a>
          </div>
        </nav>
      )}
    </>
  );
};

export default Header;
