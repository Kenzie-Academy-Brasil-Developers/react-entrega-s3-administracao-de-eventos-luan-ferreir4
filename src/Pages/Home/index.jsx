import { Header, Main } from "../../styles/landingPage";
import { Welcome } from "../../components/Welcome";
import { ButtonNav } from "../../components/ButtonNav";
const Home = () => {
  return (
    <>
      <Header>
          <img src="images/bottleWhite.png" alt="wine-bottle" />
      </Header>
      
      <Main>
        <Welcome />
        <div>
        <img src="images/serving-wine.png" alt="seving-wine" />
        <ButtonNav type="initial"/>
        </div>
      </Main>
    </>
  );
};
export default Home;
