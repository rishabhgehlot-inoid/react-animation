import {
  Computer,
  Contact2,
  GalleryHorizontal,
  Phone,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <header className=" w-[300px] h-screen top-0 left-0 bg-slate-200 gap-3 px-5 py-4  md:block hidden sticky">
      <main className="justify-between  flex flex-col gap-5 ">
        <aside className=" font-bold text-xl flex justify-center">LOGO</aside>
        <aside className=" flex flex-col gap-1">
          <li className="  list-none flex gap-2 items-center hover:bg-orange-400 p-3 rounded-2xl cursor-pointer font-bold">
            <Users /> Users
          </li>
          <Link
            to={"/"}
            className="  list-none flex gap-2 items-center hover:bg-orange-400 bg-orange-400 p-3 rounded-2xl cursor-pointer font-bold"
          >
            <GalleryHorizontal /> Gallery Management
          </Link>
          <Link
            to={"/"}
            className="  list-none flex gap-2 items-center hover:bg-orange-400 p-3 rounded-2xl cursor-pointer font-bold"
          >
            <Contact2 /> Contact Query
          </Link>

          <Link
            to={"/"}
            className="  list-none flex gap-2 items-center hover:bg-orange-400 p-3 rounded-2xl cursor-pointer font-bold"
          >
            <Computer /> Desktop Slider
          </Link>
          <li className="  list-none flex gap-2 items-center hover:bg-orange-400 p-3 rounded-2xl cursor-pointer font-bold">
            <Phone /> Mobile Slider
          </li>
        </aside>
      </main>
    </header>
  );
};

export default SideBar;
