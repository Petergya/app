import Image from "next/image";

export default function SmartTransaction() {
  return (
    <div className="mt-28 bg-[#EEEEEE] ">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0 md:space-x-8 p-6 ">
       
        <div>
        <div className="w-full flex justify-center items-center">
          <Image
            src="/images/Rectangle 11 (1).png"
            alt="Contact Us Illustration"
            width={500}
            height={500}
            className="object-cover"
          />
        </div>

        <p className="text-[32px] ">
        Food Inventory
        </p>
        <p className="text-[16px]">
        Your go-to platform for managing food inventory with ease.
        </p>

        </div>

        <div className="md:w-1/2 space-y-4 ">
          <div className="mt-20">
            <h2 className="text-[40px] w-9/12 mt-9 font-bold ">
            Efficient and smart 
            transactions
            </h2>
            <p className="mt-6 w-9/12 text-[20px]">
            Explore how FoodInventoryPro's technology streamlines data into actionable insights, enhancing efficiency in food inventory management.
            </p>
        
    
          </div>
        </div>
      </div>
    </div>
  );
}
