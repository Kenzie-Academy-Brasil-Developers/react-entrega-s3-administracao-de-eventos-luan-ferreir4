import { useContext, useEffect } from "react";
import { DrinksContext } from "../AllDrinks";
import { AlertsContext } from "../Alerts";

import { createContext, useState } from "react";

export const GraduationContext = createContext();

export const GraduationProvider = ({ children }) => {
  const { drinkList } = useContext(DrinksContext);

  const { handleAdded } = useContext(AlertsContext);
  const { handleAlready } = useContext(AlertsContext);

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
      handleAdded();
    } else {
      handleAlready();
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
