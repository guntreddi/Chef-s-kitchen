import React from "react";
import "./Features.css";

const Features = () => {
  return (
    <div className="body">
      <div class="features">
        <h2>Get a many of interesting features.</h2>
        <div class="feature-container">
          <div class="feature-box">
            <img src="https://themewagon.github.io/chefs-kitchen-nextjs-free/images/Features/featureOne.svg" alt="" />
            <h3>Menu Variations</h3>
            <p>Explore a variety of menus and dishes.</p>
            <a href="#">Learn More &gt;</a>
          </div>
          <div class="feature-box">
           <img src="https://themewagon.github.io/chefs-kitchen-nextjs-free/images/Features/featureTwo.svg" alt="" />
            <h3>Cooking Warm</h3>
            <p>Cook your meals with expert guidance.</p>
            <a href="#">Learn More &gt;</a>
          </div>
          <div class="feature-box">
            <img src="https://themewagon.github.io/chefs-kitchen-nextjs-free/images/Features/featureThree.svg" alt="" />
            <h3>Best Chef</h3>
            <p>Learn from top-rated chefs around the world.</p>
            <a href="#">Learn More &gt;</a>
          </div>
          <div class="feature-box">
           <img src="https://themewagon.github.io/chefs-kitchen-nextjs-free/images/Features/featureFour.svg" alt="" />
            <h3>Fast Food</h3>
            <p>Delicious fast food options available.</p>
            <a href="#">Learn More &gt;</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
