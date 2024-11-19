import { FaBars, FaSearch, FaUserPlus } from "react-icons/fa";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="h-screen w-20 bg-gray-100 flex flex-col items-center pt-10 space-y-6">
      
      <Link href="/dashboard">
        <div className="flex  items-center gap-6 group cursor-pointer mt-32">
          <FaBars className="text-black text-xl" />
          <p className="text-xs font-bold text-black  mt-1">Dashboard</p>
        </div>
      </Link>

     
      <Link href="/users">
        <div className="flex  items-center gap-6 group cursor-pointer">
          <FaSearch className="text-black text-xl" />
          <p className="text-xs font-bold text-black  mt-1">View Users</p>
        </div>
      </Link>

     
      <Link href="/addUsers">
        <div className="flex  items-center gap-6  group cursor-pointer">
          <FaUserPlus className="text-black text-xl" />
          <p className="text-xs font-bold text-black  mt-1">Add User</p>
        </div>
      </Link>

    
      <Link href="/logout">
        <div className="flex flex-col group cursor-pointer">
          <p className="text-xs font-bold text-black mt-1">Logout</p>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
