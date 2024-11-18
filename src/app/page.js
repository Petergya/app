// import { redirect } from "next/navigation";


// export default function Home() {
//   return redirect('/contact')
// }


import Footer from "@/headerFooter/Footer";
import Hero from "@/landingPageComponent/Hero";
import OurJourney from "@/landingPageComponent/OurJourney";
import OurTeam from "@/landingPageComponent/OurTeam";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <OurJourney />
      <OurTeam />
      <Footer />
    </div>
  );
}
