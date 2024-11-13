
export default function Footer() {
  return (
    <div className="flex h-[300px] sm:h-[400px] mt-16 w-full bg-[#E82429]">
      <div className="flex h-full w-full items-center justify-center px-4 md:px-10">
        <div className="flex flex-col items-center text-center w-full md:w-[80%]">
          
         
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[52px] font-bold text-white">
            Meet the team behind this magic
          </h1>
          
         
          <p className="mt-4 sm:mt-5 text-white text-base sm:text-lg md:text-xl lg:text-2xl">
            We&apos;re passionate about revolutionizing food inventory management.
          </p>
          
        
          <div className="flex flex-col sm:flex-row items-center justify-center mt-8 sm:mt-10 space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="px-10 sm:px-14 py-2 sm:py-3 bg-black text-white text-sm sm:text-base font-semibold rounded-full">
              Start Now
            </button>
            <button className="px-10 sm:px-14 py-2 sm:py-3 bg-black text-white text-sm sm:text-base font-semibold rounded-full">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
