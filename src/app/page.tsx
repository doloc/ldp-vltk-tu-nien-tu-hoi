import Accumulate from "../component/accumulate";
import Birthday from "../component/birthday";
import Checkin from "../component/checkin";
import Footer from "../component/footer";
import Hero from "../component/hero";
import Spin from "../component/spin";

export default function LandingPage() {
  return (
    <div>
      <Hero />
      <Checkin />
      <Spin />
      <Accumulate />
      <Birthday />
      <Footer />
    </div>
  );
}
