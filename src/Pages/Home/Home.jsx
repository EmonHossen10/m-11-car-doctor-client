import Banner from "../Banner";
import About from "./About";
import Popular from "./Popular/Popular";
import Schedule from "./Schedule";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <Schedule></Schedule>
      <Popular></Popular>
    </div>
  );
};

export default Home;
