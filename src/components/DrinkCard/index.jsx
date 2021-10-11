import { useEffect, useState } from "react";
import { Card } from "../../styles/cataloguePage";
import { Button } from "../Button";

export const DrinkCard = ({
  drink: { id, image_url, name, first_brewed, description },
}) => {
  const [ addContainer, setAddContainer ] = useState(false);
  const [ descContainer, setDescContainer ] = useState(false);

  const [formatedName, setFormatedName] = useState(name);
  
  const showAdd = () => {
    if (!addContainer) {
      setAddContainer(true);
    } else {
      setAddContainer(false);
    }
  };
  
  const showDesc = () => {
    if (!descContainer) {
      setDescContainer(true);
    } else {
      setDescContainer(false);
    }
  };

  useEffect(()=>{
    if(name.length >= 15){
      const newName = name.substring(0,15)
      setFormatedName(newName.concat("..."))
    }
  },[name]);

  return (
    <>
      {!addContainer && !descContainer? (

        <Card>
          <img src={image_url} alt="" />
          <h5>{formatedName}</h5>
          <div>
          <button onClick={showDesc}>Descrição</button>
          <button onClick={showAdd}>Adicionar</button>
          </div>
        </Card>

      ) : addContainer && !descContainer ? (

        <Card>
          <p>Tipo de evento</p>
          <section>
            <Button type="graduation" drinkId={id}/>

            <Button type="wedding" drinkId={id}/>

            <Button type="confrat" drinkId={id}/>
          </section>

          <button onClick={showAdd}>Fechar</button>
        </Card>

      ) : !addContainer && descContainer ?(

        <Card>
          <h4>{name}</h4>
          <p>{description}</p>
          <button onClick={showDesc}>Fechar</button>
        </Card>

      ) : <></> }
    </>
  );
};
