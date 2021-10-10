import { DrinksProvider } from "./AllDrinks";
import { GraduationProvider } from "./GraduationDrinks";
import { WeddingProvider } from "./WeddingDrinks";
import { ConfratProvider } from "./ConfratDrinks";

const Providers = ({ children }) => {
  return (
    <DrinksProvider>
      <GraduationProvider>
        <WeddingProvider>
          <ConfratProvider>{children}</ConfratProvider>
        </WeddingProvider>
      </GraduationProvider>
    </DrinksProvider>
  );
};

export default Providers;
