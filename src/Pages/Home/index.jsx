import { Button } from "../../components/Button";
import { Welcome } from "../../components/Welcome";
import { Header, Main } from "../../styles/landingPage";

const Home = () => {
  return (
    <>
      <Header>
          <img src="images/bottleWhite.png" alt="wine-bottle" />
      </Header>
      
      <Main>
        <Welcome />
        <Button type="initial"/>
      </Main>
    </>
  );
};
export default Home;
