import { useEffect, useState } from "react";
import { Card } from "../../styles/catalogPage";
import { DescpCard } from "../../styles/catalogPage";
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
          <button onClick={showDesc}>Description</button>
          <button onClick={showAdd}>Add</button>
          </div>
        </Card>

      ) : addContainer && !descContainer ? (

        <Card>
          <p>Pick an event</p>
          <section>
            <Button type="graduation" drinkId={id}/>

            <Button type="wedding" drinkId={id}/>

            <Button type="confrat" drinkId={id}/>
          </section>

          <button onClick={showAdd}>Close</button>
        </Card>

      ) : !addContainer && descContainer ?(

        <DescpCard>
          <h4>{name}</h4>
          <small>Fabrication start - {first_brewed}</small>
          <p>{description}</p>
          <button onClick={showDesc}>Close</button>
        </DescpCard>

      ) : <></> }
    </>
  );
};
