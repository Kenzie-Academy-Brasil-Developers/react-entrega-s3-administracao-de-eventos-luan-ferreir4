import { useContext } from "react";
import { DrinksContext } from "../AllDrinks";

import { createContext, useState } from "react";

export const WeddingContext = createContext();

export const WeddingProvider = ({ children }) => {

  const { drinkList } = useContext(DrinksContext);

  const [weddingList, setWeddingList] = useState([]);

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
    const drink = drinkList.find( drink => drink.id === id);
    if (verifyId(id)) {
      setWeddingList([...weddingList, drink]);
      console.log("added");
    }
    else{
        console.log("Item ja adicionado");
    }
  };
  // console.log(weddingList)
  const remove = (id) => {
   setWeddingList(
       weddingList.filter( drink => drink.id !== id )
   );
  };

  return (
    <WeddingContext.Provider value={{ weddingList, addToWedding, remove }}>
      {children}
    </WeddingContext.Provider>
  );
};
