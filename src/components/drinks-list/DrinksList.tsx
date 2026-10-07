import { useEffect, useState } from "react";
import { Drinks } from "../drinks/Drinks";
import { cocktails } from "../drinks/Drinks.data";
import "./drinksList.scss";

export function DrinksList() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return loading ? (
    <span
      className="loading"
      style={{ color: "#fff", display: "block", textAlign: "center" }}
    >
      Loading...
    </span>
  ) : (
    <ul className="drinks_list">
      {cocktails.map((c) => (
        <li className="drinks_list__item" key={c.id}>
          <Drinks
            available={c.available}
            name={c.name}
            imgUrl={c.imgUrl}
            price={c.price}
            description={c.description}
            rating={c.rating}
          />
        </li>
      ))}
    </ul>
  );
}
