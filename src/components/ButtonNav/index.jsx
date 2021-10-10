import { useEffect, useState } from "react";
import { useHistory } from "react-router";

export const ButtonNav = ({ type }) => {
  const history = useHistory();
  const [content, setContent] = useState("");

  useEffect(() => {
    if (type === "initial") {
      setContent("Veja nosso catálogo");
    } else if (type === "toEvents") {
      setContent("Eventos");
    }
  }, [type]);

  const chooseType = () => {
    if (type === "initial") {
      history.push("/catalogue");
    } else if (type === "toEvents") {
      history.push("/events");
    }
  };

  return <button onClick={chooseType}>{content}</button>;
};
