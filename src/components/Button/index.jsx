import { useEffect, useState } from "react";
import { useHistory } from "react-router";

export const Button = ({ type, setState }) => {
  const history = useHistory();
  const [content, setContent] = useState("");

  useEffect(() => {
    if (type === "initial") {
      setContent("Veja nosso catálogo");
    } else if (type === "graduation") {
      setContent("Formatura");
    } else if (type === "wedding") {
      setContent("Casamento");
    } else if (type === "confrat") {
      setContent("Confraternização");
    } else if (type === "toEvents") {
      setContent("Eventos");
    }
  }, [type]);

  const chooseType = () => {
    if (type === "initial") {
      history.push("/catalogue");
    } else if (type === "graduation") {
    } else if (type === "wedding") {
    } else if (type === "confrat") {
    }
  };

  return <button onClick={chooseType}>{content}</button>;
};
