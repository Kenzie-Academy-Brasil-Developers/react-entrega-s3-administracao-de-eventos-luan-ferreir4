import { createContext, useState } from "react";

// export const AddedContext = createContext();
export const AlertsContext = createContext();
// export const AlreadyContext = createContext();

export const AlertsProvider = ({ children }) => {
  const [added, setAdded] = useState(false);

  const [already, setAlready] = useState(false);

  const handleAdded = () => {
    if (!added) {
      setAdded(true);
    } 
    setTimeout(()=>{
        setAdded(false);
    },3000);
  };

  const handleAlready = () => {
    if (!already) {
      setAlready(true);
    }
    setTimeout(()=>{
        setAlready(false);
    },3000);
  };

  return (
    <AlertsContext.Provider value={{ added, already, handleAdded, handleAlready }}>
      {children}
    </AlertsContext.Provider>
  );
};
