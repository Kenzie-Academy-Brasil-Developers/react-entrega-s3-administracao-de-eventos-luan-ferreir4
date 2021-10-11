import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { TopBar } from "../../components/TopBar";
import { EventDrinks } from "../../components/EventDrinks";


const EventDetails = () => {
    const params = useParams();
    const event = params.type;
    const [ listType, setListType ] = useState("");

    useEffect(()=>{
        if(event === "graduation") {
            setListType("grad")
        } else if(event === "wedding") {
            setListType("wed")
        }
        else if(event === "confrat") {
            setListType("conf")
        }
    },[event]);
    return(
        <>
        <TopBar/>
        <EventDrinks listType={listType}/>
        </>
    )    
}
export default EventDetails;