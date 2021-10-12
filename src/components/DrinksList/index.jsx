import { DrinkCard } from "../DrinkCard";
import { Catalog } from "../../styles/catalogPage";
import { useContext } from "react";
import { DrinksContext } from "../../Providers/AllDrinks";

export const DrinkList = () => {
  const { drinkList } = useContext(DrinksContext);
  return (
    <Catalog>
      <h1>All our drinks</h1>
      <img src="images/divider.png" alt="divider" />
      <section>
      {drinkList.map((item, index) => (
        <DrinkCard key={index} drink={item} />
      ))}
      </section>
    </Catalog>
  );
};
