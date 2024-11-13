
import Image from "next/image";

export default function FoodProcess() {
  return (

    
 <div className=" bg-[#EEEEEE] px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8 p-6">
        
       
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <Image
            src="/images/Rectangle 6.png"
            alt="Food Inventory Illustration"
            width={500}
            height={500}
            className="object-cover rounded-lg"
          />
        </div>

       
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-[28px] sm:text-[35px] md:text-[40px] mt-9 font-bold text-black">
            FoodInventoryPro and Data Management
          </h2>
          <p className="mt-6 text-[16px] sm:text-[18px] md:text-[20px] w-full md:w-10/12 leading-relaxed text-black">
            FoodInventoryPro ensures efficient food storage management. Its
            system is user-friendly, accessible, and reliable for all users.
            It revolutionizes the way food inventory is managed.
          </p>

          <button className="px-10 py-3 sm:px-12 md:px-14 sm:py-3 bg-[#E82429] text-white text-[16px] sm:text-[18px] md:text-[20px] font-semibold rounded-full mt-8 md:mt-12 ">
            Start Managing Food
          </button>
        </div>
      </div>
    </div>
    
   
  );
}
