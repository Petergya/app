
import Image from "next/image";
import Abouthero from "@/aboutComponents/Abouthero";
import FoodProcess from "@/aboutComponents/FoodProcess";
import Future from "@/aboutComponents/Future";
import SmartTransaction from "@/aboutComponents/SmartTransaction"








export default function About() {

  return (

    <div className=" bg-white min-h-screen">
<Abouthero />
      <FoodProcess />
      <Future />
      <SmartTransaction />
    </div>
  
  );
}



