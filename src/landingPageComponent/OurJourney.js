


import Image from 'next/image';

export default function OurJourney() {
  return (
    <div className="flex flex-col items-center mt-20 bg-white px-4 sm:px-8 lg:px-16">
      
    
      <div className="flex flex-col items-center text-center mb-6">
        <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-black">
          Our Food Journey
        </h1>
        <p className="w-full sm:w-3/4 lg:w-[70%] mx-auto text-lg sm:text-xl lg:text-2xl text-black">
          Founded by a group of food enthusiasts, our company has evolved into a leading provider of
          innovative solutions for managing food inventory effectively.
        </p>
      </div>    

    
      <div className="relative w-full sm:w-[90%] h-[300px] sm:h-[400px] lg:h-[500px] mx-auto mt-16 overflow-hidden rounded-xl">
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

