import { useContext } from "react";

import { GraduationContext } from "../../Providers/GraduationDrinks";
import { WeddingContext } from "../../Providers/WeddingDrinks";
import { ConfratContext } from "../../Providers/ConfratDrinks";

import { useEffect, useState } from "react";
import { useHistory } from "react-router";

export const Button = ({ type, drinkId }) => {
  const history = useHistory();
  const [content, setContent] = useState("");

  const { addToGraduation } = useContext(GraduationContext);
  const { addToWedding } = useContext(WeddingContext);
  const { addToConfrat } = useContext(ConfratContext)

  useEffect(() => {
    if (type === "initial") {
      setContent("Veja nosso catálogo");
    } else if (type === "graduation") {
      setContent("Formatura");
    } else if (type === "wedding") {
      setContent("Casamento");
    } else if (type === "confrat") {
      setContent("Confraternização");
    } else if (type === "toEvents") {
      setContent("Eventos");
    }
  }, [type]);

  const chooseType = () => {
    if (type === "initial") {
      history.push("/catalogue");
    } else if (type === "graduation") {
      addToGraduation(drinkId);
    } else if (type === "wedding") {
      addToWedding(drinkId);
    } else if (type === "confrat") {
      addToConfrat(drinkId);
    }
  };

  return <button onClick={chooseType}>{content}</button>;
};
