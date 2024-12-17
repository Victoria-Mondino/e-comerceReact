import React from "react";
import CategoryCard from "../CategoryCard/CategoryCard";
import "./Categories.css";

const categories = [
  { name: "Dogs", emoji: "🐕", link: "/productos/perros" },
  { name: "Cats", emoji: "🐈", link: "/productos/productos-gatos" },
  { name: "Small", emoji: "🐇", link: "/productos/productos-pequeno" },
  { name: "Fish", emoji: "🐟", link: "/productos/productos-peces" },
  { name: "Reptil", emoji: "🦎", link: "/productos/productos-reptiles" },
  { name: "Bird", emoji: "🦜", link: "/productos/productos-pajaros" },
];


const Categories = () => {
  return (
    <div className="categories-container">
      <h2>Shop by Pet</h2>
      <div className="categories">
        {categories.map((category) => (
          <CategoryCard
            key={category.name}
            name={category.name}
            emoji={category.emoji}
            link={category.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;
