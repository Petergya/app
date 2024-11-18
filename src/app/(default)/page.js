


import Footer from "@/headerFooter/Footer";
import Hero from "@/landingPageComponent/Hero";
import OurJourney from "@/landingPageComponent/OurJourney";
import OurTeam from "@/landingPageComponent/OurTeam";

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <Hero />
      <OurJourney />
      <OurTeam />
      <Footer />
    </div>
  );
}

