import { EventDinkList } from "../../styles/eventDrinks";

import { useContext, useEffect, useState } from "react";

import { GraduationContext } from "../../Providers/GraduationDrinks";
import { WeddingContext } from "../../Providers/WeddingDrinks";
import { ConfratContext } from "../../Providers/ConfratDrinks";

export const EventDrinks = ({ listType }) => {
  console.log(listType)
  const { graduationList } = useContext(GraduationContext);
  const { weddingList } = useContext(WeddingContext);
  const { confratList } = useContext(ConfratContext);
  console.log(graduationList);
  const [toRenderList, setToRenderList] = useState([]);

  useEffect(() => {
    if (listType === "grad") {
      setToRenderList(graduationList);
    } else if (listType === "wed") {
      setToRenderList(weddingList);
    } else if (listType === "conf") {
      setToRenderList(confratList);
    }
  }, [listType]);
  
console.log(toRenderList);

  return( 
    <EventDinkList>
      {
        toRenderList.map( (drink, index) => <div key={index}>{drink.name}</div> )
      }
    </EventDinkList>
    ) ;
      
};
