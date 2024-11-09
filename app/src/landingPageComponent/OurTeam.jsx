


import Image from "next/image";

export default function OurTeam() {
  const images = [
    "/images/Rectangle 42.png",
    "/images/Rectangle 43.png",
    "/images/Rectangle 44.png",
  ];

  return (
    <div className="">
      
      <div className="text-center mt-24">
        <h1 className="text-[42px] font-bold">Our Team</h1>
        <p className="text-[24px] mt-2">
          Meet the dedicated individuals behind our innovative food inventory solution
        </p>
      </div>
      <div className="relative w-[324px] h-[317px] mx-auto mt-32 overflow-hidden rounded-xl">
        <Image
          src={images[0]}
          alt="A beautiful example image"
          layout="fill"
          objectFit="cover"
          className="h-48 w-48 md:h-48"
        />
      </div>

      
      <div className="flex justify-between mx-28 mt-16">
        {images.slice(1).map((image, index) => (
          <div
            key={index}
            className="relative w-[324px] h-[317px] overflow-hidden rounded-xl"
          >
            <Image src={image} alt={`Image ${index + 2}`} layout="fill" objectFit="cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
