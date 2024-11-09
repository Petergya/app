
import Image from 'next/image';

export default function OurJourney() {
  return (
    <div className="flex flex-col items-center mt-20">
     

<div className="flex flex-col items-center text-center mb-6">
  <h1 className="text-3xl font-bold">Our Food Journey</h1>
  <p className="w-[70%] mx-auto text-[24px]">
    Founded by a group of food enthusiasts, our company has evolved into a leading provider of innovative
    solutions for managing food inventory effectively.
  </p>
</div>


    

<div className="relative w-[90%] h-[400px] mx-auto mt-32 overflow-hidden rounded-xl">
  <Image
    src="/images/Rectangle 41.png"
    alt="A beautiful example image"
    layout="fill"
    objectFit="cover"
  />
</div>

    </div>
  );
}
