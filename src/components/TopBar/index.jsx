import { useEffect, useState } from "react";

import { Bar } from "../../styles/cataloguePage";

import { ButtonNav } from "../ButtonNav";

export const TopBar = ({ type }) => {
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (type === "catalogue") {
      setTitle("Catálogo");
    }
    if (type === "events") {
        setTitle("Eventos");
    }
  }, [title]);

  return (
    <Bar>
      <img src="images/bottleWhite.png" alt="wine-bottle" />
      <h1>{title}</h1>

      {type === "catalogue" ? (
        <ButtonNav type="toEvents" />
      ) : type === "events" ? (
        <section>
        <ButtonNav type="toEvents" />
        <ButtonNav type="toHome"/>
        </section>
      ) : (
        <></>
      )}
    </Bar>
  );
};
