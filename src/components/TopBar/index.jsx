import { useEffect, useState } from "react";

import { Bar } from "../../styles/topBar";

import { ButtonNav } from "../ButtonNav";

export const TopBar = ({ type }) => {
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (type === "catalog") {
      setTitle("Catalog");
    } else if (type === "events") {
      setTitle("Events");
    } else if (type === "details") {
      setTitle("Details");
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

      {type === "catalog" ? (
        <ButtonNav type="toEvents" />
      ) : type === "events" ? (
        <section>
          <ButtonNav type="toCatalog" />
          <ButtonNav type="toInitial" />
        </section>
      ) : type === "details" ? (
        <section>
          <ButtonNav type="toCatalog" />
          <ButtonNav type="toEvents" />
        </section>
      ) : (
        <></>
      )}
    </Bar>
  );
};
