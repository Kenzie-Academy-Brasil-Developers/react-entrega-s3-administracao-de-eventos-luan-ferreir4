import { EventDrinkList } from "../../styles/eventDrinks";

import { useContext, useEffect, useState } from "react";

import { GraduationContext } from "../../Providers/GraduationDrinks";
import { WeddingContext } from "../../Providers/WeddingDrinks";
import { ConfratContext } from "../../Providers/ConfratDrinks";
import { EventDrinkCard } from "../EventDrinkCard";

export const EventDrinks = ({ listType }) => {
  console.log(listType)
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listType]);
  
  return( 
    <EventDrinkList>
      {
        toRenderList.map( (drink, index) => <EventDrinkCard key={index} drink={drink}/> )
      }
    </EventDrinkList>
    ) ;
      
};
