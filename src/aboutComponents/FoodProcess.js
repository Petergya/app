import Image from "next/image";

export default function FoodProcess() {
  return (
    <div className="mt-28 bg-[#EEEEEE] ">
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8 p-6 ">
        <div className="w-1/2 flex justify-center items-center">
          <Image
            src="/images/Rectangle 6.png"
            alt="Contact Us Illustration"
            width={500}
            height={500}
            className="object-cover"
          />
        </div>

        <div className="md:w-1/2 space-y-4">
          <div className="">
            <h2 className="text-[40px]  mt-9 font-bold ">
              FoodInventoryPro and data management
            </h2>
            <p className="mt-6 w-9/12 text-[20px]">
              FoodInventoryPro ensures efficient food storage management. Its
              system is user-friendly, accessible, and reliable for all users.
              It revolutionizes the way food inventory is managed.
            </p>
        
    <button className="px-14 py-3 bg-[#E82429] text-white text-[20px]  rounded-full mt-12">
    Start managing food
    </button>
          </div>
        </div>
      </div>
    </div>
  );
}
