import { DrinksProvider } from "./AllDrinks";
import { WeddingProvider } from "./WeddingDrinks";

const Providers = ({ children }) => {
    return(
        <DrinksProvider>
            <WeddingProvider>
            {children}
            </WeddingProvider>
        </DrinksProvider>
    )
}

export default Providers;