import { Switch, Route } from "react-router";
import Catalogue from "../Pages/Catalogue";
import EventDetails from "../Pages/EventDetails";
import EventList from "../Pages/EventList";
import Home from "../Pages/Home";

const Routes = () => {
    return (
        <Switch>

            <Route exact path="/">
                <Home/>
            </Route>
            
            <Route path="/catalogue">
                <Catalogue/>
            </Route>
            
            <Route path="/events">
                <EventList/>
            </Route>
            
            <Route path="/details">
                <EventDetails/>
            </Route>

        </Switch>
    )
}
export default Routes;