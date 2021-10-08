import { DrinksProvider } from "./AllDrinks";

const Providers = ({ children }) => {
    return(
        <DrinksProvider>
            {children}
        </DrinksProvider>
    )
}

export default Providers;