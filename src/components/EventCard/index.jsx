import { Card } from "../../styles/eventsPage";
import { useEffect, useState } from "react";

import { ButtonNav } from "../ButtonNav";

export const EventCard = ({ type }) => {
  
  const [content, setContent] = useState("");

  useEffect(() => {
    if (type === "graduation") {
      setContent("Formatura");
    } else if (type === "wedding") {
      setContent("Casamento");
    }
    else if
    (type === "confrat") {
      setContent("Confraternização");
    }
  }, [type]);

  return (
    <Card>
      <h1>{content}</h1>
      <ButtonNav type={type}/>
    </Card>
  );
};
