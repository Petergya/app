import Image from "next/image";




export default function FoodInventory() {
  return (
    <div className="mt-36 ">
      <div className="text-center ">
        <h1 className="text-[60px] font-bold">
          How does FoodInventoryPro work?
        </h1>
      </div>
<div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8 p-6 ">
    
    <div className="md:w-1/2 space-y-4">
      
      <div className="">
        <h2 className="text-[40px]  mt-9 font-bold ">Essential features for new users</h2>
        <p className="mt-6 w-9/12 text-[20px]">
          New users can start using FoodInventoryPro without technical knowledge.
          Go to our website, add items to your inventory, and easily manage your
          food storage.
        </p>
        <p className="mt-16 text-[30px]">
        Don’t Forget, Simple is better
        </p>
      </div>
    </div>
   
    <div className="w-1/2 flex justify-center items-center">
        <Image
          src="/images/Rectangle 4 (3).png"
          alt="Contact Us Illustration"
          width={500}
          height={500}
          className="object-cover"
        />
      </div>
  </div>
    </div>
    
  );
}
