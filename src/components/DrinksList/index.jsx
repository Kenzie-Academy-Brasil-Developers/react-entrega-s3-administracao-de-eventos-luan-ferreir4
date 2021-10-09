import { DrinkCard } from "../DrinkCard";
import { Catalogue } from "../../styles/cataloguePage";
import { useContext } from "react";
import { DrinksContext } from "../../Providers/AllDrinks";

export const DrinkList = () => {
  const { drinkList } = useContext(DrinksContext);
  return (
    <Catalogue>
      <h1>Nossas bebidas disponíveis</h1>
      <img src="images/divider.png" alt="divider" />
      {drinkList.map((item, index) => (
        <DrinkCard key={index} drink={item} />
      ))}
    </Catalogue>
  );
};
