import { Card } from "../../styles/eventsPage";
import { useEffect, useState } from "react";

import { ButtonNav } from "../ButtonNav";

export const EventCard = ({ type }) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    if (type === "graduation") {
      setContent("Graduation");
    } else if (type === "wedding") {
      setContent("Wedding");
    } else if (type === "confrat") {
      setContent("Confraternization");
    }
  }, [type]);

  return (
    <Card>
      <h1>{content}</h1>
      <ButtonNav type={type} />
    </Card>
  );
};
