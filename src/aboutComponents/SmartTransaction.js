import Image from "next/image";

export default function SmartTransaction() {
  return (
    <div className="mt-28 bg-[#EEEEEE] px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0 md:space-x-8 p-6">
        
       
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <Image
            src="/images/Rectangle 11 (1).png"
            alt="Contact Us Illustration"
            width={500}
            height={500}
            className="object-cover rounded-lg"
          />
          <p className="text-[24px] sm:text-[28px] md:text-[32px] font-semibold mt-4 text-black">
            Food Inventory
          </p>
          <p className="text-[14px] sm:text-[16px] leading-relaxed mt-2 text-black">
            Your go-to platform for managing food inventory with ease.
          </p>
        </div>

        
        <div className="w-full md:w-1/2 space-y-4 mt-12 md:mt-0">
          <h2 className="text-[28px] sm:text-[35px] md:text-[40px] font-bold leading-tight text-black">
            Efficient and Smart Transactions
          </h2>
          <p className="mt-4 sm:mt-6 text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed w-full md:w-10/12 text-black">
            Explore how FoodInventoryPro's technology streamlines data into actionable insights, enhancing efficiency in food inventory management.
          </p>
        </div>
      </div>
    </div>
  );
}
