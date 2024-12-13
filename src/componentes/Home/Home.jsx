import React from 'react'
import "./Home.css"


const Home = () => {
  return (
    <div>
        <section className="dog-food-section">
      <div className="dog-food-content">
        <div className="text-content">
          <h1>Premium food <br />  for your dog </h1>
          <p>Spoil your pet by shopping from our vast online canine catalog.</p>
          <button className="shop-now-btn">Shop Now</button>
        </div>
        <div className="dog-image-container">
          <img
            src="src/assets/img/iStock-180869579-1-847x1024.webp"
            alt="Dog"
            className="dog-image"
          />
          <img
            src="src/assets/img/iStock-180869579-2-1.webp"
            alt="Dog Food"
            className="food-image"
          />
        </div>
      </div>
      <div className="free-shipping">
        <p>
          <span className="shipping-icon">🚚</span> Free shipping on orders over
          $40!
        </p>
      </div>
    </section>
    <div class="trending-section">
        <h2 class="trending-title">Trending</h2>
        <div class="trending-items">
          <div class="trending-item">
            <a href="#"><img src="src/assets/img/iStock-1271793136.webp" alt="Outdoor Toys" class="trending-image" /></a>
            <p class="trending-shop">Shop</p>
            <h3 class="trending-name">Outdoor Toys</h3>
          </div>
          <div class="trending-item">
          <a href="#"><img src="src/assets/img/iStock-1398781665.webp" alt="Outdoor Toys" class="trending-image" /></a>
            <p class="trending-shop">Shop</p>
             <h3 class="trending-name">Vital Care</h3>
          </div>
          <div class="trending-item">
            <a href="#"> <img src="src/assets/img/iStock-1140125261.webp" alt="Fresh & Frozen" class="trending-image" /> </a>
            <p class="trending-shop">Shop</p>
            <h3 class="trending-name">Fresh & Frozen</h3>
          </div>
        </div>
    </div>
    
  
    </div>
    
    
  )
}

export default Home