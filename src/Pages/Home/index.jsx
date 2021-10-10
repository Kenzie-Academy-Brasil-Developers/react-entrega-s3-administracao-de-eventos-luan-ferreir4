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
        <ButtonNav type="initial"/>
      </Main>
    </>
  );
};
export default Home;
