import { useContext } from "react/cjs/react.development";
import { AlertsContext } from "../../Providers/Alerts";
import { AlertCard } from "../../styles/alertCard";
import { TopBar } from "../../components/TopBar";
import { DrinkList } from "../../components/DrinksList";

const Catalogue = () => {

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
        <TopBar type="catalogue"/>
        <DrinkList/>
        </>
    )    
}
export default Catalogue;