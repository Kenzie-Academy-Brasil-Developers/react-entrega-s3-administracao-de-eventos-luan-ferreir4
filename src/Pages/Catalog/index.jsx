import { useContext } from "react";
import { AlertsContext } from "../../Providers/Alerts";
import { AlertCard } from "../../styles/alertCard";
import { TopBar } from "../../components/TopBar";
import { DrinkList } from "../../components/DrinksList";

const Catalog = () => {

    const { added } = useContext(AlertsContext);
    
    const { already } = useContext(AlertsContext);

    return(
        <>
        {added &&
            <AlertCard style={{backgroundColor: "#7BBE5C", top: "14%"}}>Added drink</AlertCard>
        }
        {already &&
            <AlertCard  style={{backgroundColor: "#f4735d", top: "20%"}}>Already added to this event</AlertCard>
        }
        <TopBar type="catalog"/>
        <DrinkList/>
        </>
    )    
}
export default Catalog;