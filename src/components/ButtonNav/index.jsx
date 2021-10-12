import { AiFillHome } from "react-icons/ai"

import { useEffect, useState } from "react";
import { useHistory } from "react-router";

export const ButtonNav = ({ type }) => {
  const history = useHistory();
  const [content, setContent] = useState("");

  useEffect(() => {
    if (type === "initial") {
      setContent("Check out our catalog");
    } else if (type === "toEvents") {
      setContent("Events");
    }
    else if (type === "toCatalog") {
      setContent("Catalog");
    } else if 
    (type === "toInitial") {
      setContent(<AiFillHome/>);
    }

    else if(type === "graduation"){
      setContent("See list")
    } else if(type === "wedding"){
      setContent("See list")
    } else if(type === "confrat"){
      setContent("See list")
    }

  }, [type]);

  const chooseType = () => {
    if (type === "initial") {
      history.push("/catalog");
    } else if (type === "toEvents") {
      history.push("/events");
    } else if
    (type === "toCatalog") {
      history.push("/catalog");
    } else if 
    (type === "toInitial") {
      history.push("/");
    } 

    else if(type === "graduation"){
      history.push(`/events/${type}`);
    } else if(type === "wedding"){
      history.push(`/events/${type}`)
    } else if(type === "confrat"){
      history.push(`/events/${type}`)
    }
  };

  return <button onClick={chooseType}>{content}</button>;
};
