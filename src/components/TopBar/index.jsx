import { useEffect, useState } from "react";

<<<<<<< HEAD
import { Bar } from "../../styles/topBar";
=======
import { Bar } from "../../styles/cataloguePage";
>>>>>>> parent of d0510e9 (refactor: dividing TopBar style in a new folder)

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
  }, [type]);

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
