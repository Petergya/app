



import Image from 'next/image';

export default function Hero() {
  return (
    <div className="flex h-[600px] mt-8"> 
      <div className="w-1/2 bg-[#EEEEEE] h-full"> 
        <div className="relative flex items-center justify-start pl-9 h-full">
          <div className="flex flex-col items-center w-[80%]">
            <h1 className="text-[52px] font-bold">
              Meet the team behind this magic
            </h1>
            <p className="mt-2">
              We're passionate about revolutionizing food inventory management.
            </p>
          </div>
        </div>
      </div>

      <div className="w-1/2 h-full relative "> 
        <Image 
          src="/images/Rectangle 40.png" 
          alt="A beautiful example image" 
          layout="fill" 
          objectFit="cover" 
        />
      </div>
    </div>
  );
}
