


import { FaBars, FaSearchengin, FaUserPlus, FaSignOutAlt } from "react-icons/fa";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-full  md:block hidden "> 
      <div className="h-screen  w-20 bg-gray-100 flex flex-col items-left pt-10 space-y-6 px-10">
        <Link href="/dashboard">
          <div className="flex items-center gap-6 group cursor-pointer mt-32">
            <FaBars className="text-black text-xl" />
            <p className="text-xs font-bold text-black mt-1">Dashboard</p>
          </div>
        </Link>

        <Link href="/users">
          <div className="flex items-center gap-6 group cursor-pointer">
            <FaSearchengin className="text-black text-xl" />
            <p className="text-xs font-bold text-black mt-1">View Users</p>
          </div>
        </Link>

        <Link href="/addUsers">
          <div className="flex items-center gap-6 group cursor-pointer mr-8">
            <FaUserPlus className="text-black text-xl" />
            <p className="text-xs font-bold text-black mt-1">Add User</p>
          </div>
        </Link>

        <Link href="/logout">
          <div className="flex items-center gap-6 group cursor-pointer mt-auto pr-16 pb-10">
            <FaSignOutAlt className="text-black text-xl" />
            <p className="text-sm font-bold text-black group-hover:text-indigo-600">
              Logout
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}














