import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { TopBar } from "../../components/TopBar";
import { EventDrinks } from "../../components/EventDrinks";


const EventDetails = () => {
    const params = useParams();
    const event = params.type;
    const [ listType, setListType ] = useState("");
    const [ listTitle, setListTitle ] = useState("");

    useEffect(()=>{
        if(event === "graduation") {
            setListType("grad");
            setListTitle("Formatura");
        } else if(event === "wedding") {
            setListType("wed");
            setListTitle("Casamento");
        }
        else if(event === "confrat") {
            setListType("conf")
            setListTitle("Confraternização")
        }
    },[event]);
    
    return(
        <>
        <TopBar type="details"/>
        
        <EventDrinks listType={listType} listTitle={listTitle}/>
        </>
    )    
}
export default EventDetails;