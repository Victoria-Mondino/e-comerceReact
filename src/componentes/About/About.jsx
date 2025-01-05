import React from "react";
import "./About.css";

const AboutUs = () => {
  return (
    <div className="about-us">
      <h1 className="about-us-title">
        About us <span className="highlight">✨</span>
      </h1>
      <div className="about-us-content">
        <div className="text-section">
          <h2>Who We Are</h2>
          <p>
            PetMania is a specialty shop offering a curated selection of quality
            pet products. With both brick-and-mortar and online shops, PetMania
            focuses on independent designers and contemporary collections
            thoughtfully crafted to blend seamlessly with your personal style.
          </p>
          <p>
            PetMania also designs and produces our own line of modern products
            for pets, including carriers, collars, leads, accessories, apparel,
            treats & more. In partnering with ethical manufacturers in the US
            and beyond, the PetMania brand is designed with a cool-yet-classic
            modern scientific, each piece crafted with both form & function in
            mind.
          </p>
        </div>
        <div className="image-section">
          <img
            src="https://petmania.vamtam.com/wp-content/uploads/2022/07/iStock-1308557657-1024x765.jpg"
            alt="About us"
          />
          
        </div>
      </div>
      <div className="proud-section">
        <h2>
          We’re very proud to be <br />
          and we will always put our <br />
          <span>before profit.</span>
        </h2>
        <div className="pet-images">
          <img src="https://petmania.vamtam.com/wp-content/uploads/2022/07/iStock-1300842515-1024x297.png" alt="" />
        </div>
      </div>



      <div className="impact-section">
      <div className="impact-container">
        <div className="image-section">
          <img
            src="https://petmania.vamtam.com/wp-content/uploads/2022/07/istockphoto-1134929522-2048x2048-1-1024x765.jpg"
            alt="Our Impact"
          />
        </div>
        <div className="text-section">
          <h2>Our Impact</h2>
          <p>
            Our Impact comes from our commitment to our customers and to our
            rescue partners. We pledge to aid in animal rescue efforts, from
            hosting in-store adoption events & fundraisers, to making donations
            as our resources allow. We are personally committed to helping
            animals in need.
          </p>
        </div>
      </div>

      <div className="mission-container">
        <div className="text-section">
          <h2>Mission & Promise</h2>
          <p>
            Our Mission is to provide a curated assortment of the best
            contemporary pet products on the market, with a focus on thoughtful
            design and production.
          </p>
          <p>
            Our Promise is to provide you with a top assortment of safe, quality
            products produced with our precious pets in mind. We don’t stock
            anything that we wouldn’t – or haven’t – used with our own pets!
          </p>
          <button>Visit Our Shop</button>
        </div>
        <div className="image-section">
          <img
            src="https://petmania.vamtam.com/wp-content/uploads/2022/07/iStock-1170668075-1024x766.jpg"
            alt="Mission and Promise"
          />
        </div>
      </div>
    </div>


    </div>
  );
};

export default AboutUs;
