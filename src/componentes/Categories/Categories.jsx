import React from "react";
import CategoryCard from "../CategoryCard/CategoryCard";
import "./Categories.css";

// Exportar el array por separado
export const categories = [
  { name: "Dogs", emoji: "🐕", link: "/productos/perros" },
  { name: "Cats", emoji: "🐈", link: "/productos/gatos" },
  { name: "Small", emoji: "🐇", link: "/productos/conejo" },
  { name: "Fish", emoji: "🐟", link: "/productos/fish" },
  { name: "Reptil", emoji: "🦎", link: "/productos/reptiles" },
  { name: "Bird", emoji: "🦜", link: "/productos/pajaros" },
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
