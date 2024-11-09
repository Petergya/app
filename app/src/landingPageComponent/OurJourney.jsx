



// export default function OurJourney () {
//     return(

//         <div>
//  <div className="text center">
//             <h1 className="text-center text-3xl font-bold text-red-800">
//             Our Food Journey
//             </h1>
//             <p>
//             Founded by a group of food enthusiasts, our company has evolved into a leading provider of innovative 
//             solutions for managing food inventory effectively.
//             </p>
           
//         </div>

//         <div className="w-1/2 h-full "> 
//         <Image 
//           src="/images/Rectangle 41.png" 
//           alt="A beautiful example image" 
//           layout="fill" 
//           objectFit="cover" 
//         />
//       </div>
       
//         </div>
       
//     )
// }



// import Image from 'next/image';

// export default function OurJourney() {
//   return (
//     <div className="flex flex-col items-cente r">
//       <div className="text-center mb-6">
//         <h1 className="text-[42px]">Our Food Journey</h1>
//         <p className='text-24px'>
//           Founded by a group of food enthusiasts, our company has evolved into a leading provider of innovative
//           solutions for managing food inventory effectively.
//         </p>
//       </div>

//       <div className=""> 
//         <Image
//           src="/images/Rectangle 41.png"
//           alt=""
//           layout="fill"
//           objectFit="cover"
//         />
//       </div>
//     </div>
//   );
// }
import Image from 'next/image';

export default function OurJourney() {
  return (
    <div className="flex flex-col items-center mt-20">
      {/* <div className="text-center mb-6">
        <h1 className="text-3xl font-bold ">Our Food Journey</h1>
        <p className='w-[70%] text-center'>
          Founded by a group of food enthusiasts, our company has evolved into a leading provider of innovative
          solutions for managing food inventory effectively.
        </p>
      </div> */}

<div className="flex flex-col items-center text-center mb-6">
  <h1 className="text-3xl font-bold">Our Food Journey</h1>
  <p className="w-[70%] mx-auto">
    Founded by a group of food enthusiasts, our company has evolved into a leading provider of innovative
    solutions for managing food inventory effectively.
  </p>
</div>


      {/* <div className="relative w-[90%] h-[400px] mx-auto mt-32"> 
        <Image
          src="/images/Rectangle 41.png"
          alt="A beautiful example image"
          layout="fill"
          objectFit="cover"
        
        />
      </div> */}

<div className="relative w-[90%] h-[400px] mx-auto mt-32 overflow-hidden rounded-xl">
  <Image
    src="/images/Rectangle 41.png"
    alt="A beautiful example image"
    layout="fill"
    objectFit="cover"
  />
</div>

    </div>
  );
}
