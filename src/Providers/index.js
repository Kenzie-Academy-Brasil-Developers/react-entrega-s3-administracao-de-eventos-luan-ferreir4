import { DrinksProvider } from "./AllDrinks";
import { GraduationProvider } from "./GraduationDrinks";
import { WeddingProvider } from "./WeddingDrinks";
import { ConfratProvider } from "./ConfratDrinks";
import { AlertsProvider } from "./Alerts";

const Providers = ({ children }) => {
  return (
    <DrinksProvider>
      <AlertsProvider>
        <GraduationProvider>
          <WeddingProvider>
            <ConfratProvider>
              {children}
            </ConfratProvider>
          </WeddingProvider>
        </GraduationProvider>
      </AlertsProvider>
    </DrinksProvider>
  );
};

export default Providers;
