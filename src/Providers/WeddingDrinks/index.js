import { useContext, useEffect } from "react";
import { DrinksContext } from "../AllDrinks";
import { AlertsContext } from "../Alerts";

import { createContext, useState } from "react";

export const WeddingContext = createContext();

export const WeddingProvider = ({ children }) => {
  const { drinkList } = useContext(DrinksContext);

  const { handleAdded } = useContext(AlertsContext);
  const { handleAlready } = useContext(AlertsContext);

  const [weddingList, setWeddingList] = useState(
    JSON.parse(localStorage.getItem("weddingList")) || []
  );

  const verifyId = (id) => {
    const existing = weddingList.find((drink) => drink.id === id);
    console.log(existing);
    if (existing) {
      return false;
    } else {
      return true;
    }
  };

  const addToWedding = (id) => {
    const drink = drinkList.find((drink) => drink.id === id);
    if (verifyId(id)) {
      setWeddingList([...weddingList, drink]);
      handleAdded();
      console.log("added to weeding");
    } else {
      handleAlready();
      console.log("Item ja adicionado");
    }
  };

  localStorage.setItem("weddingList", JSON.stringify(weddingList));

  useEffect(() => {
    if (weddingList.length === 0) {
      localStorage.removeItem("weddingList");
    }
  }, [weddingList]);

  const removeFromWed = (id) => {
    setWeddingList(weddingList.filter((drink) => drink.id !== id));
  };

  return (
    <WeddingContext.Provider
      value={{ weddingList, addToWedding, removeFromWed }}
    >
      {children}
    </WeddingContext.Provider>
  );
};
