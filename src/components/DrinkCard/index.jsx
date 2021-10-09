import { useState } from "react";
import { Card } from "../../styles/cataloguePage";
import { Button } from "../Button";

export const DrinkCard = ({
  drink: { image_url, name, first_brewed, description },
}) => {
  const [showAdd, setShowAdd] = useState(false);

  const handleClick = () => {
    if (!showAdd) {
      setShowAdd(true);
    } else {
      setShowAdd(false);
    }
  };

  return (
    <>
      {!showAdd ? (
        <Card>
          <img src={image_url} alt="" />
          <h5>{name}</h5>

          <button onClick={handleClick}>Adicionar</button>
        </Card>
      ) : (
        <Card>
          <p>Tipo de evento</p>
          <section>
            <Button type="graduation" />

            <Button type="wedding" />

            <Button type="confrat" />
          </section>

          <button onClick={handleClick}>Fechar</button>
        </Card>
      )}
    </>
  );
};
