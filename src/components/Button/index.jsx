import { useEffect, useState } from "react";
import { useHistory } from "react-router";

export const Button = ({ type }) => {
  const history = useHistory();
  const [content, setContent] = useState("");

    useEffect(()=>{
        if (type === "initial") {
            setContent("Veja nosso catálogo");
        }
        else if (type === "toHome") {
            setContent("Home");
        }
    },[type]);

  const chooseType = () => {
    if (type === "initial") {
      history.push("/catalogue");
    }
  };

  return <button onClick={chooseType}>{content}</button>;
};
