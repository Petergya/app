export default function Footer() {
  return (
    <div className="flex h-[400px] mt-16 w-screen bg-[#E82429]">
      <div className="h-full w-full flex items-center justify-center px-4 md:px-8">
        <div className="flex flex-col items-center text-center w-full md:w-[80%]">
          <h1 className="text-[32px] md:text-[52px] font-bold text-white">
            Meet the team behind this magic
          </h1>
          <p className="mt-2 text-white text-[16px] md:text-[20px]">
            We're passionate about revolutionizing food inventory management.
          </p>
        </div>
      </div>
    </div>
  );
}
