

import Image from "next/image";

export default function OurTeam() {
  const images = [
    "/images/Rectangle 42.png",
    "/images/Rectangle 43.png",
    "/images/Rectangle 44.png",
  ];

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-24 py-16 bg-white">
  
      <div className="text-center mt-12 md:mt-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">Our Team</h1>
        <p className="text-lg md:text-xl lg:text-2xl mt-2 text-black">
          Meet the dedicated individuals behind our innovative food inventory solution
        </p>
      </div>

      <div className="relative w-full max-w-[324px] h-[317px] mx-auto mt-12 md:mt-16 lg:mt-24 overflow-hidden rounded-xl">
        <Image
          src={images[0]}
          alt="A beautiful example image"
          layout="fill"
          objectFit="cover"
          className="h-full w-full"
        />
      </div>
      <div className="flex flex-wrap justify-center md:justify-between gap-8 md:gap-12 lg:gap-16 mx-auto mt-12 lg:mt-16 max-w-screen-lg">
        {images.slice(1).map((image, index) => (
          <div
            key={index}
            className="relative w-full max-w-[324px] h-[317px] overflow-hidden rounded-xl"
          >
            <Image
              src={image}
              alt={`Image ${index + 2}`}
              layout="fill"
              objectFit="cover"
              className="h-full w-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

