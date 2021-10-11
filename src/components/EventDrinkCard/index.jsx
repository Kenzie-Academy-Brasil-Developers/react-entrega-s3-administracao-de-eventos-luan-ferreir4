import { useEffect, useState } from "react";
import { EventCard } from "../../styles/eventDrinks";
import { ButtonRemove } from "../ButtonRemove";

export const EventDrinkCard = ({
  drink: { id, image_url, name}, eventType
}) => {

  const [formatedName, setFormatedName] = useState(name);

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

     <ButtonRemove eventType={eventType} drinkId={id}/>
     
    </EventCard>
  );
};
