import { EventDrinkList } from "../../styles/eventDrinks";

import { useContext, useEffect, useState } from "react";

import { GraduationContext } from "../../Providers/GraduationDrinks";
import { WeddingContext } from "../../Providers/WeddingDrinks";
import { ConfratContext } from "../../Providers/ConfratDrinks";
import { EventDrinkCard } from "../EventDrinkCard";

export const EventDrinks = ({ listType, listTitle }) => {

  const { graduationList } = useContext(GraduationContext);
  const { weddingList } = useContext(WeddingContext);
  const { confratList } = useContext(ConfratContext);
  const [toRenderList, setToRenderList] = useState([]);

  useEffect(() => {
    if (listType === "grad") {
      setToRenderList(graduationList);
    } else if (listType === "wed") {
      setToRenderList(weddingList);
    } else if (listType === "conf") {
      setToRenderList(confratList);
    }
  
  }, [listType, graduationList, weddingList, confratList]);
  
  return(
    <EventDrinkList>

    <h1>{listTitle}</h1>
    
    <hr/>
    <section>
      {toRenderList.length !== 0 ? (
        toRenderList.map( (drink, index) => <EventDrinkCard key={index} drink={drink} eventType={listType}/> )
      
      ) : (
        <h1>Empty list</h1>
      )
      }
    </section>
    </EventDrinkList>
    ) ;
      
};
