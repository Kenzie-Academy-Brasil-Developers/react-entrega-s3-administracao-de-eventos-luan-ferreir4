import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const DrinksContext = createContext();

export const DrinksProvider = ({ children }) => {
  const [drinkList, setDrinkList] = useState([]);

  useEffect(
    () =>
      axios
        .get("https://api.punkapi.com/v2/beers")
        .then((res) => setDrinkList(res.data)).catch(err=>console.log(err)),
    []
  );

  return (
    <DrinksContext.Provider value={{ drinkList }}>
      {children}
    </DrinksContext.Provider>
  );
};
