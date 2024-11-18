// import { redirect } from "next/navigation";


// export default function Home() {
//   return redirect('/contact')
// }


import Footer from "@/headerFooter/Footer";
import Navbar from "@/headerFooter/Navbar";
import Hero from "@/landingPageComponent/Hero";
import OurJourney from "@/landingPageComponent/OurJourney";
import OurTeam from "@/landingPageComponent/OurTeam";


export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <OurJourney />
      <OurTeam />
      <Footer />
    </div>
  );
}
