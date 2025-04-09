import BTB from "./BTB";
import EnvironmentalStats from "./EnvironmentalStats";
import Feature from "./Feature";
import Habout from "./Habout";
import HeroSection from "./HeroSection";
import Impact from "./Impact";
import Passionate from "./Passionate";
import Pioneering from "./Pioneering";
import Scrap from "./Scrap";
import Selling from "./Selling";
import Testimonial from "./Testinomial";
import Trusted from "./Trusted";

const Home = () => {
  return (
    <>

      <HeroSection />
      <Feature></Feature>
      <Habout></Habout>
      <BTB></BTB>
      <Scrap></Scrap>
      <EnvironmentalStats></EnvironmentalStats>
      <Impact></Impact>
      <Pioneering></Pioneering>
      <Trusted></Trusted>
      <Passionate></Passionate>
      <Selling></Selling>
      <Testimonial></Testimonial>

    </>
  )
}
export default Home;