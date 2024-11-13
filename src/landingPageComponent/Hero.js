



import Image from 'next/image';

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row h-auto md:h-[800px] mt-8"> 
      {/* Left Section */}
      <div className="w-full md:w-1/2 bg-[#EEEEEE] h-[300px] md:h-full flex items-center justify-center md:justify-start px-4 md:pl-9"> 
        <div className="flex flex-col w-full md:w-[70%] text-center md:text-left">
          <h1 className="text-[28px] md:text-[52px] font-bold text-black">
            Meet the team behind this magic
          </h1>
          <p className="mt-2 text-[18px] md:text-[24px] text-black">
            We&apos;re passionate about revolutionizing food inventory management.
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 h-[300px] md:h-full relative"> 
        <Image 
          src="/images/Rectangle 40.png" 
          alt="A beautiful example image" 
          layout="fill" 
          objectFit="cover" 
          className="object-center"
        />
      </div>
    </div>
  );
}
