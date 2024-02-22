import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="section px-[70px]">
        <h1 className="text-center text-4xl my-[80px]" data-aos="fade-up">
          A brand built on the love of craftmanship, quality <br /> and
          outstanding customer service
        </h1>

        <div className="top flex justify-between items-center"  data-aos="fade-left">
          <div className="left">
            <h3 className="text-3xl mb-[20px]">
              From a studio in London to a global <br /> brand with over 400
              outlets
            </h3>
            <p className="w-[500px] mb-[50px]">
              When we started Avion, the idea was simple. Make high quality
              furniture affordable and available for the mass market. Handmade,
              and lovingly crafted furniture and homeware is what we live,
              breathe and design so our Chelsea boutique become the hotbed for
              the London interior design community.
            </p>
            <Link to={'/'} className="btn p-3">Get in touch</Link>
          </div>
          <div className="right">
            <img src="https://avion-uz.vercel.app/img/a1.png" className="w-[695px]" />
          </div>
        </div>

        <div className="bottom flex justify-between items-center" data-aos="fade-left">
          <div className="left">
            <img src="https://avion-uz.vercel.app/img/a2.png" className="w-[695px]" />
          </div>
          <div className="right" data-aos="fade-left">
            <h3 className="text-3xl mb-[20px]">Our service isn't just personal, it's <br /> actually hyper personally exquisite</h3>
            <p className="w-[500px] mb-[50px]">When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community</p>
            <Link to={'/'} className="btn p-3">Get in touch</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
