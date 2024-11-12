import Image from "next/image";




export default function Future() {
  return (
    <div className="mt-20">
      
<div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8 p-6 ">
    
    <div className="md:w-1/2 space-y-4 mt-12">
      
      <div className="">
        <h2 className="text-[40px]  mt-9 font-bold ">Optimize your food inventory 
        process</h2>
        <p className="mt-6 w-9/12 text-[20px]">
         FoodInventoryPro transforms food inventory processes, providing insights for better decision-making and value creation for users.
        </p>
        
      </div>
    </div>
   
    <div className="w-1/2 flex justify-center items-center">
        <Image
          src="/images/Rectangle 9 (1).png"
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
