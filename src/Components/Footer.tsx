import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#1E3A5F] text-white py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        
        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-[#D4AF37] transition">Home</Link></li>
            <li><Link to="/aboutus" className="hover:text-[#D4AF37] transition">About Us</Link></li>
            <li><Link to="/faq" className="hover:text-[#D4AF37] transition">FAQs</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-[#D4AF37] transition">Privacy Policy</Link></li>
            <li><Link to="/terms-conditions" className="hover:text-[#D4AF37] transition">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Stay Connected */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Stay Connected</h2>
          <p className="mb-3">Follow us on:</p>
          <div className="flex space-x-4">
            <a 
              href="https://www.facebook.com/share/1Xvvsj7SbV/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Facebook"
              className="text-[#D4AF37] hover:text-white transition"
            >
              <FaFacebook size={24} />
            </a>
            <a 
              href="https://www.instagram.com/blueroofservicedapartments/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Instagram"
              className="text-[#D4AF37] hover:text-white transition"
            >
              <FaInstagram size={24} />
            </a>
            <a 
              href="https://twitter.com/yourhandle" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Twitter"
              className="text-[#D4AF37] hover:text-white transition"
            >
              <FaTwitter size={24} />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <p>📧 <a href="mailto:Blueroofservicedepartment@gmail.com" className="hover:text-[#D4AF37] transition">Blueroofservicedepartment@gmail.com</a></p>
          <p>📞 <a href="tel:+2347061778948" className="hover:text-[#D4AF37] transition">+234 706 177 8948</a></p>

          <h2 className="mt-4 text-lg font-semibold">Our Location</h2>
          <p className="text-sm mb-2">6 Sule Kusimo Street, ayetoro, Sabo 110118, Ogun State</p>

          {/* Google Maps Embed */}
          <iframe
            className="w-full h-40 rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7917.694338488458!2d3.380623!3d7.143665!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103a4b4f66e8fabd%3A0xd14d3c63ee6734db!2sBlueroof%20Serviced%20Apartments!5e0!3m2!1sen!2sng!4v1741559376576!5m2!1sen!2sng"
            loading="lazy"
            style={{ border: "0" }}
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center font-semibold text-sm border-t border-gray-700 pt-4">
        <p className="hover:text-[#D4AF37] transition">© 2024 BlueRoof Apartment. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
