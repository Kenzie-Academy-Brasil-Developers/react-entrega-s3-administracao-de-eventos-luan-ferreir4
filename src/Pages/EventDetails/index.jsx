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
            setListTitle("Graduation");
        } else if(event === "wedding") {
            setListType("wed");
            setListTitle("Wedding");
        }
        else if(event === "confrat") {
            setListType("conf")
            setListTitle("Confraternization")
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