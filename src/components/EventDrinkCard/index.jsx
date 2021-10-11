import { useEffect, useState } from "react";
import { EventCard } from "../../styles/eventDrinks";

export const EventDrinkCard = ({
  drink: { id, image_url, name, first_brewed, description },
}) => {

  const [formatedName, setFormatedName] = useState(name);

  const handleClick = () => {
   
  };

  useEffect(()=>{
    if(name.length >= 15){
      const newName = name.substring(0,15)
      setFormatedName(newName.concat("..."));
    }
  },[name]);

  return (
    <EventCard>
      <img src={image_url} alt="drink" />
      <h5>{formatedName}</h5>

      <button onClick={handleClick}>Remover</button>
    </EventCard>
  );
};
