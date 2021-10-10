import { EventsList } from "../../components/EventsList";
import { TopBar } from "../../components/TopBar";

const EventsPage = () => {
    return(
        <>
        <TopBar type="events"/>
        <EventsList/>
        </>
    )    
}
export default EventsPage;