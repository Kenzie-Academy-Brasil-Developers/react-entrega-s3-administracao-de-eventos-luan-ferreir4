import { Switch, Route } from "react-router";
import Catalogue from "../Pages/Catalogue";
import EventDetails from "../Pages/EventDetails";
import EventList from "../Pages/EventList";
import Home from "../Pages/Home";
import { GlobalStyles } from "../styles/globalStyles";
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <GlobalStyles />
        <Home />
      </Route>

      <Route path="/catalogue">
        <GlobalStyles />
        <Catalogue />
      </Route>

      <Route path="/events">
        <GlobalStyles />
        <EventList />
      </Route>

      <Route path="/details">
        <GlobalStyles />
        <EventDetails />
      </Route>
    </Switch>
  );
};
export default Routes;
