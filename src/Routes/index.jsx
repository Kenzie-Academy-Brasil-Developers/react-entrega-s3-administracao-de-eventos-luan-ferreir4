import { Switch, Route } from "react-router";
import Catalog from "../Pages/Catalog";
import EventDetails from "../Pages/EventDetails";
import EventsPage from "../Pages/EventsPage";
import Home from "../Pages/Home";
import { GlobalStyles } from "../styles/globalStyles";
const Routes = () => {
  return (
    <Switch>
      
      <Route exact path="/">
        <GlobalStyles />
        <Home />
      </Route>

      <Route path="/catalog">
        <GlobalStyles />
        <Catalog />
      </Route>

      <Route exact path="/events">
        <GlobalStyles />
        <EventsPage />
      </Route>

      <Route path="/events/:type">
        <GlobalStyles />
        <EventDetails />
      </Route>

    </Switch>
  );
};
export default Routes;
