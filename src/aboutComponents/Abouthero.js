



import Image from "next/image";

export default function FoodInventory() {
  return (
    <div className="mt-36 px-4 sm:px-6 lg:px-8 bg-white">
   
      <div className="text-center">
        <h1 className="text-[40px] sm:text-[50px] md:text-[60px] font-bold">
          How does FoodInventoryPro work?
        </h1>
      </div>

      
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8 p-6">
        
       
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-[30px] sm:text-[35px] md:text-[40px] mt-9 font-bold">
            Essential features for new users
          </h2>
          <p className="mt-6 w-full md:w-10/12 text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed">
            New users can start using FoodInventoryPro without technical knowledge.
            Go to our website, add items to your inventory, and easily manage your
            food storage.
          </p>
          <p className="mt-8 md:mt-16 text-[20px] sm:text-[25px] md:text-[30px] font-semibold">
            Don’t Forget, Simple is better
          </p>
        </div>
        
       
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <Image
            src="/images/Rectangle 4 (3).png"
            alt="How FoodInventoryPro works"
            width={500}
            height={500}
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

