import { useContext, useEffect } from "react";
import { DrinksContext } from "../AllDrinks";

import { createContext, useState } from "react";

export const GraduationContext = createContext();

export const GraduationProvider = ({ children }) => {
  const { drinkList } = useContext(DrinksContext);

  const [graduationList, setGraduationList] = useState(
    JSON.parse(localStorage.getItem("graduationList")) || []
  );

  const verifyId = (id) => {
    const existing = graduationList.find((drink) => drink.id === id);

    if (existing) {
      return false;
    } else {
      return true;
    }
  };

  const addToGraduation = (id) => {
    const drink = drinkList.find((drink) => drink.id === id);

    if (verifyId(id)) {
      setGraduationList([...graduationList, drink]);
      console.log("added to graduation");
    } else {
      console.log("Item ja adicionado");
    }
  };

  localStorage.setItem("graduationList", JSON.stringify(graduationList));

  useEffect(() => {
    if (graduationList.length === 0) {
      localStorage.removeItem("graduationList");
    }
  }, [graduationList]);

  const removeFromGrad = (id) => {
    setGraduationList(graduationList.filter((drink) => drink.id !== id));
  };

  return (
    <GraduationContext.Provider
      value={{ graduationList, addToGraduation, removeFromGrad }}
    >
      {children}
    </GraduationContext.Provider>
  );
};
