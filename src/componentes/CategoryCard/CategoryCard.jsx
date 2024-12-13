import React from "react";
import "./CategoryCard.css";

const CategoryCard = ({ name, emoji, link }) => {
  return (
    <a href={link} className="category-card">
      <div className="emoji">{emoji}</div>
      <p>{name}</p>
    </a>
  );
};

export default CategoryCard;
