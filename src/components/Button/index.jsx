import { useContext } from "react";

import { GraduationContext } from "../../Providers/GraduationDrinks";
import { WeddingContext } from "../../Providers/WeddingDrinks";
import { ConfratContext } from "../../Providers/ConfratDrinks";

import { useEffect, useState } from "react";

export const Button = ({ type, drinkId }) => {
  const [content, setContent] = useState("");

  const { addToGraduation } = useContext(GraduationContext);
  const { addToWedding } = useContext(WeddingContext);
  const { addToConfrat } = useContext(ConfratContext);

  useEffect(() => {
    if (type === "graduation") {
      setContent("Graduation");
    } else if (type === "wedding") {
      setContent("Wedding");
    } else if (type === "confrat") {
      setContent("Confraternization");
    }
  }, [type]);

  const chooseType = () => {
    if (type === "graduation") {
      addToGraduation(drinkId);
    } else if (type === "wedding") {
      addToWedding(drinkId);
    } else if (type === "confrat") {
      addToConfrat(drinkId);
    }
  };

  return <button onClick={chooseType}>{content}</button>;
};
