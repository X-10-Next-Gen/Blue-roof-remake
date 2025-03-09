import { Link } from "react-router-dom";

const PromoBanner = () => {
  return (
    <div className="bg-[#F5A623] text-white text-center py-3">
      <Link to="/book" className="text-lg font-semibold hover:underline">
        Get 20% off this month when you try our services for the first 10 customers!!!
      </Link>
    </div>
  );
};

export default PromoBanner;
