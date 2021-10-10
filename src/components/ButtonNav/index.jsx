import { AiFillHome } from "react-icons/ai"

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
    else if (type === "toCatalogue") {
      setContent("Catálogo");
    } else if 
    (type === "toInitial") {
      setContent(<AiFillHome/>);
    }

    if(type === "graduation"){
      setContent("Ver detalhes")
    } else if(type === "wedding"){
      setContent("Ver detalhes")
    } else if(type === "confrat"){
      setContent("Ver detalhes")
    }

  }, [type]);

  const chooseType = () => {
    if (type === "initial") {
      history.push("/catalogue");
    } else if (type === "toEvents") {
      history.push("/events");
    } else if
    (type === "toCatalogue") {
      history.push("/catalogue");
    } else if 
    (type === "toInitial") {
      history.push("/");
    } 

    if(type === "graduation"){
      history.push(`/events/${type}`);
    } else if(type === "wedding"){
      history.push(`/events/${type}`)
    } else if(type === "confrat"){
      history.push(`/events/${type}`)
    }
  };

  return <button onClick={chooseType}>{content}</button>;
};
