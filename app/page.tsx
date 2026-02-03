import Hero from "../src/components/Hero";
import Navbar from "../src/components/Navbar";
import FoodPage from "../src/components/FoodPage";
import ExpectPage from "@/src/components/ExpectPage";
import TravelPage from "@/src/components/TravelPage";
import RSVPPage from "@/src/components/RSVPPage";
import InfoPage from "@/src/components/InfoPafe";
import DressPage from "@/src/components/DressPage";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ExpectPage />
      <FoodPage />
      <TravelPage />
      <DressPage />
      <InfoPage />
      <RSVPPage />
    </main>
  );
}
