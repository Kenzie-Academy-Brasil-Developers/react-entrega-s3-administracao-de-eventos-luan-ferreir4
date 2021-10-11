import { useEffect, useState } from "react";

import { Bar } from "../../styles/topBar";

import { ButtonNav } from "../ButtonNav";

export const TopBar = ({ type }) => {
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (type === "catalogue") {
      setTitle("Catálogo");
    } else if (type === "events") {
      setTitle("Eventos");
    } else if (type === "details") {
      setTitle("Detalhes");
    }
  }, [type]);

  return (
    <Bar>
      {type !== "details" ? (
        <img src="images/bottleWhite.png" alt="wine-bottle" />
      ) : (
        <></>
      )}
      <h1>{title}</h1>

      {type === "catalogue" ? (
        <ButtonNav type="toEvents" />
      ) : type === "events" ? (
        <section>
          <ButtonNav type="toCatalogue" />
          <ButtonNav type="toInitial" />
        </section>
      ) : type === "details" ? (
        <section>
          <ButtonNav type="toCatalogue" />
          <ButtonNav type="toEvents" />
        </section>
      ) : (
        <></>
      )}
    </Bar>
  );
};
