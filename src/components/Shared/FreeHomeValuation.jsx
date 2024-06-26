/* eslint-disable react/no-unescaped-entities */
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const FreeHomeValuation = () => {
  useEffect(() => {
    AOS.init(); 
  }, []);

  return (
    <div>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className="mt-10 mb-32 container mx-auto px-5"
      >
        <p className="text-primary text-center text-sm md:text-xl mb-1 md:mb-5">
          Receive Your Instant Free Home Valuation
        </p>
        <h1 className="text-3xl md:text-4xl text-center dm-sans-font font-medium font-md">
          Considering a <span className="font-bold">Sale or Purchase?</span>
        </h1>
        <p className="md:text-center mx-auto text-sm md:text-lg my-5 mb-8 dm-sans-font lg:w-3/4">
          Whether you're contemplating a sale or purchase, your achievement is
          our top priority, especially in today's competitive market.
          Determining the right price for your property is crucial, and our
          expertise ensures your home sells successfully. If you're interested
          in discovering your home's current market value, kindly complete a
          straightforward form, and we'll provide you with a cost-free home
          assessment.
        </p>

        {/* Button */}
        <div className="flex justify-center">
          <Link
            to="/contact"
            className="relative flex justify-center items-center px-8 py-3 font-medium text-white bg-primary rounded hover:bg-orange-600 outline-none ring-2 ring-offset-2 ring-orange-500 transition-transform transform hover:scale-105 shadow-md"
          >
            Get My Home Estimate
            <span className="ml-2">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FreeHomeValuation;
