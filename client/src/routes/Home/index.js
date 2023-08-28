import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/header";
import Slider from "./components/slider";
import Services from "./components/services";
import BestPart from "./components/bestPart";

import WhyUs from "./components/whyUs";

import Footer from "./components/footer";
import TrustedBy from "./components/TrustedBy";
import Newsletter from "./components/Newsletter";

function Homepage() {
  return (
    <>
      <Header active="job" />
      <Slider />
      {/*<TrustedBy />*/}
      <Services />
      <BestPart />

<<<<<<< HEAD
      <WhyUs />
=======
      {/* <WhyUs /> */}
>>>>>>> 4a1de39c713e854b769720cd9a6bd47064f44f64
      {/*<Newsletter />*/}

      <Footer />
    </>
  );
}

export default Homepage;
