import { useContext } from "react";
import { GraduationContext } from "../../Providers/GraduationDrinks";
import { WeddingContext } from "../../Providers/WeddingDrinks";
import { ConfratContext } from "../../Providers/ConfratDrinks";

export const ButtonRemove = ({ eventType, drinkId }) => {
  const { removeFromGrad } = useContext(GraduationContext);
  const { removeFromWed } = useContext(WeddingContext);
  const { removeFromConf } = useContext(ConfratContext);

  const chooseAction = () => {
      if (eventType === "grad") {
          removeFromGrad(drinkId);
      }
      else if (eventType === "wed") {
        removeFromWed(drinkId)
      }
      else if (eventType === "conf") {
        removeFromConf(drinkId)
      }
  };

  return <button onClick={chooseAction}>Remove</button>;
};
