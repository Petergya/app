export default function Footer() {
  return (
    <div className="flex h-[400px] mt-16 w-screen bg-[#E82429]">
      <div className="h-full w-full flex items-center justify-center px-4 md:px-10">
        <div className="flex flex-col items-center text-center w-full md:w-[80%]">
          <h1 className="text-[32px] md:text-[52px] font-bold text-white">
            Meet the team behind this magic
          </h1>
          <p className="pt-10 text-white text-[16px] md:text-[24px]">
            We&apos;re passionate about revolutionizing food inventory management.
          </p>
          <div className="flex items-center justify-center ">
  <div className="space-x-6   ">
    <button className="px-14 py-3 bg-black text-white text-[16px] font-semibold rounded-full">
      Start Now
    </button>
    <button className="px-14 py-3 bg-black text-white text-[16px] font-semibold rounded-full">
      Contact Us
    </button>
  </div>
</div>

        </div>
        
      </div>
      
    </div>
  );
}
