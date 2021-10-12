import { useContext, useEffect } from "react";
import { DrinksContext } from "../AllDrinks";

import { createContext, useState } from "react";

export const ConfratContext = createContext();

export const ConfratProvider = ({ children }) => {
  const { drinkList } = useContext(DrinksContext);

  const [confratList, setConfratList] = useState(
    JSON.parse(localStorage.getItem("confratList")) || []
  );

  const verifyId = (id) => {
    const existing = confratList.find((drink) => drink.id === id);

    if (existing) {
      return false;
    } else {
      return true;
    }
  };

  const addToConfrat = (id) => {
    const drink = drinkList.find((drink) => drink.id === id);

    if (verifyId(id)) {
      setConfratList([...confratList, drink]);

      console.log("Added to confrat");
    } else {
      console.log("Item ja adicionado");
    }
  };

  localStorage.setItem("confratList", JSON.stringify(confratList));

  useEffect(() => {
    if (confratList.length === 0) {
      localStorage.removeItem("confratList");
    }
  }, [confratList]);

  const removeFromConf = (id) => {
    setConfratList(confratList.filter((drink) => drink.id !== id));
  };

  return (
    <ConfratContext.Provider
      value={{ confratList, addToConfrat, removeFromConf }}
    >
      {children}
    </ConfratContext.Provider>
  );
};
