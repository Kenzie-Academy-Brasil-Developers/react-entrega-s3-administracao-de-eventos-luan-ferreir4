import { EventCard } from "../EventCard";
import { EventsContainer } from "../../styles/eventsPage";
export const EventsList = () => {

  return (
    <EventsContainer>
      <EventCard type="graduation"/>
      <EventCard type="wedding"/>
      <EventCard type="confrat"/>
    </EventsContainer>
  );
};
