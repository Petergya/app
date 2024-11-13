import Image from "next/image";

export default function Future() {
  return (
    <div className="mt-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8 p-6">
       
        <div className="w-full md:w-1/2 space-y-4 mt-8 md:mt-12">
          <h2 className="text-[28px] sm:text-[35px] md:text-[40px] font-bold">
            Optimize Your Food Inventory Process
          </h2>
          <p className="mt-4 sm:mt-6 text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed w-full md:w-10/12">
            FoodInventoryPro transforms food inventory processes, providing insights
            for better decision-making and value creation for users.
          </p>
        </div>

        
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <Image
            src="/images/Rectangle 9 (1).png"
            alt="Food Inventory Illustration"
            width={500}
            height={500}
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
