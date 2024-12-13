import React from 'react'
import "./Home.css";
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import Categories from '../Categories/Categories';


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
            src="https://petmania.vamtam.com/wp-content/uploads/2022/07/iStock-180869579-1-847x1024.png"
            alt="Dog"
            className="dog-image"
          />
          <img
            src="https://petmania.vamtam.com/wp-content/uploads/2022/07/iStock-180869579-2-1.png"
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
            <a href="#"><img src="https://petmania.vamtam.com/wp-content/uploads/2022/07/iStock-1271793136.jpg" alt="Outdoor Toys" class="trending-image" /></a>
            <p class="trending-shop">Shop</p>
            <h3 class="trending-name">Outdoor Toys</h3>
          </div>
          <div class="trending-item">
          <a href="#"><img src="https://petmania.vamtam.com/wp-content/uploads/2022/07/iStock-1398781665.jpg" alt="Outdoor Toys" class="trending-image" /></a>
            <p class="trending-shop">Shop</p>
             <h3 class="trending-name">Vital Care</h3>
          </div>
          <div class="trending-item">
            <a href="#"> <img src="https://petmania.vamtam.com/wp-content/uploads/2022/07/iStock-1140125261.jpg" alt="Fresh & Frozen" class="trending-image" /> </a>
            <p class="trending-shop">Shop</p>
            <h3 class="trending-name">Fresh & Frozen</h3>
          </div>
        </div>
        <Categories />
        <ItemListContainer />
    </div>
    <section className="pet-section">
      <div className="pet-content">
        <div className="pet-images">
          <img
            src="https://petmania.vamtam.com/wp-content/uploads/2022/07/iStock-513048080.png"
            alt="Dog and Cat"
            className="pet-main-image"
          />
          <img
            src="https://petmania.vamtam.com/wp-content/uploads/2022/07/iStock-1326701268.png"
            alt="Food bowl"
            className="food-bowl-image"
          />
        </div>
        <div className="pet-info">
          <h1>
            Your <span className="highlight">favorite</span> pet <br /> food & supplies
            store
          </h1>
          <p>
            PetMania is a family-owned business. Our mission is to service our
            community and their pets with outstanding services and high-quality
            products. We offer a variety of brands of dry, wet, treats, toys,
            raw & fresh food, aquatics, and more for dogs, cats, small animals,
            fish, and reptiles.
          </p>
          <a href="#learn-more" className="learn-more">
            Learn more
          </a>
        </div>
      </div>
    </section>
    
  
    </div>
    
    
  )
}

export default Home