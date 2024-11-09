// // export default function Navbr () {
// //     return(
// //         <div className="text center">
// //             <h1 className="text-center text-3xl font-bold text-red-800">
// //             Navbar
// //             </h1>
           
// //         </div>
// //     )
// // }


// // import Link from 'next/link';

// // export default function Navbar() {
// //   return (
// //     <nav className="bg-gray-800 text-white ">
// //       <div className="container mx-auto flex justify-start items-center gap-32">
// //         {/* Logo */}
// //         <div className="text-xl font-bold mr-6">
// //           <Link href="/">
// //             Logo
// //           </Link>
// //         </div>

// //         {/* Menu Items */}
// //         <div className="hidden md:flex space-x-6 ">
// //           <Link href="/welcome">
// //             <span className="text-lg hover:text-gray-400">Welcome to</span>
// //           </Link>
// //           <Link href="/add-items">
// //             <span className="text-lg hover:text-gray-400">Add Items</span>
// //           </Link>
// //           <Link href="/about">
// //             <span className="text-lg hover:text-gray-400">About</span>
// //           </Link>
// //           <Link href="/contact">
// //             <span className="text-lg hover:text-gray-400">Contact</span>
// //           </Link>
// //         </div>

// //         {/* Mobile Menu Toggle */}
// //         <div className="md:hidden flex items-center">
// //           <button className="text-white">
// //             <svg
// //               className="w-6 h-6"
// //               fill="none"
// //               stroke="currentColor"
// //               viewBox="0 0 24 24"
// //               xmlns="http://www.w3.org/2000/svg"
// //             >
// //               <path
// //                 strokeLinecap="round"
// //                 strokeLinejoin="round"
// //                 strokeWidth="2"
// //                 d="M4 6h16M4 12h16M4 18h16"
// //               ></path>
// //             </svg>
// //           </button>
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // }



// import Link from 'next/link';

// export default function Navbar() {
//   return (
//     <nav className="bg-white text-gray-800 py-16 shadow-md h-[200px] fix">
//       <div className="container mx-auto flex justify-between items-center px-8">
//         {/* Logo */}
//         <div className="text-3xl font-bold py-2">
//           <Link href="/">Logo</Link>
//         </div>

//         {/* Menu Items */}
//         <div className="flex space-x-8">
//           <div className="text-lg hover:text-gray-600">
//             <Link href="/welcome">Welcome to</Link>
//           </div>
//           <div className="text-lg hover:text-gray-600">
//             <Link href="/add-items">Add Items</Link>
//           </div>
//           <div className="text-lg hover:text-gray-600">
//             <Link href="/about">About</Link>
//           </div>
//           <div className="text-lg hover:text-gray-600">
//             <Link href="/contact">Contact</Link>
//           </div>
//         </div>

//         {/* Mobile Menu Toggle (optional) */}
//         <div className="md:hidden flex items-center">
//           <button className="text-gray-800">
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16M4 18h16"
//               ></path>
//             </svg>
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// }


import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white text-gray-800 py-8 shadow-md fixed w-full" style={{ top: "20px" }}>
      <div className="container mx-auto flex items-center px-8">
        {/* Logo */}
        <div className="text-3xl font-bold py-2">
          <Link href="/">Logo</Link>
        </div>

        {/* Menu Items */}
        <div className="flex space-x-10 ml-12">
          <div className="text-lg hover:text-gray-600">
            <Link href="/welcome">Welcome to</Link>
          </div>
          <div className="text-lg hover:text-gray-600">
            <Link href="/add-items">Add Items</Link>
          </div>
          <div className="text-lg hover:text-gray-600">
            <Link href="/about">About</Link>
          </div>
          <div className="text-lg hover:text-gray-600">
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        {/* Mobile Menu Toggle (optional) */}
        <div className="md:hidden flex items-center ml-auto">
          <button className="text-gray-800">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
