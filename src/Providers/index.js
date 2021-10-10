import { DrinksProvider } from "./AllDrinks";
import { GraduationProvider } from "./GraduationDrinks";
import { WeddingProvider } from "./WeddingDrinks";

const Providers = ({ children }) => {
  return (
    <DrinksProvider>
      <GraduationProvider>
        <WeddingProvider>{children}</WeddingProvider>
      </GraduationProvider>
    </DrinksProvider>
  );
};

export default Providers;
