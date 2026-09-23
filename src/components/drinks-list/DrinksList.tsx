import { Drinks } from "../drinks/Drinks";
import { cocktails } from "../drinks/Drinks.data";
import "./drinksList.scss";

export function DrinksList() {
  return (
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
