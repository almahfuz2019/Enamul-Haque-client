/* eslint-disable react/no-unescaped-entities */
import { Helmet } from "react-helmet-async";
import ForConnected from "../../components/ForConnected/ForConnected";
import OwnerSpeech from "../../components/Shared/OwnerSpeech";
import Services from "../../components/Shared/Services";
import WhyChooseEnam from "../../components/Shared/WhyChooseEnam";
import Modern_Skyscrapers from "./../../assets/Images/Modern_Skyscrapers.png";
const About = () => {
  return (
    <div className="overflow-hidden">
      {/* Set document head */}
      <Helmet>
        <title>About </title>
      </Helmet>
      {/* Header section with image */}
      <div className=" mx-auto ">
        <div className=" mx-auto ">
          <div className="flex flex-col justify-center items-center  mx-auto overflow-hidden mt-16 md:mt-0 ">
            <img
              src={Modern_Skyscrapers}
              alt="Modern skyscrapers with glass facades reflecting the sky"
              className="w-full  h-52 lg:h-[500px]  "
            />
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="lg:p-14 px-5 md:p-8  container  pb-12 m-4 mx-auto lg:-mt-32 space-y-6  sm:px-10 sm:mx-12  pt-10 bg-white"
            >
              <div className="space-y-2 text-center lg:text-left">
                <h1
                  rel="noopener noreferrer"
                  href="#"
                  className="inline-block  text-3xl lg:text-5xl  "
                >
                  About <span className="font-bold">Enam</span>
                </h1>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-xl text-justify">
                  At Emanul Haque, we are dedicated to providing exceptional
                  real estate services tailored to your unique needs. Our team,
                  led by Emanul Haque, a seasoned and trusted Canadian Realtor,
                  is committed to delivering top-notch results for our
                  clients.With a deep understanding of the Canadian real estate
                  market, we take pride in guiding you through every step of
                  your real estate journey. Whether you're buying, selling, or
                  investing in properties, we have the expertise to make your
                  real estate goals a reality
                </p>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className=" bg-primary mx-auto h-1 w-80 "
          ></div>

          {/* Why Choose Enam Component */}
          <WhyChooseEnam />
        </div>
        {/* Additional Components */}
        <OwnerSpeech />
        <Services />
        <ForConnected />
      </div>
    </div>
  );
};
export default About;
