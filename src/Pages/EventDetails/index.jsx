import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { TopBar } from "../../components/TopBar";

const EventDetails = () => {
    const params = useParams();
    const event = params.type;

    const [ listType, setListType ] = useState();

    useEffect(()=>{
        if(event === "graduation") {
            setListType("grad")
        } else if(event === "graduation") {
            setListType("wed")
        }
        else if(event === "graduation") {
            setListType("conf")
        }
    },[event]);

    return(
        <>
        <TopBar/>
        Event Details
        <p>Tipo de evento: {params.type}</p>
        </>
    )    
}
export default EventDetails;