import { Contact, Home, Projector, User } from "lucide-react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <header className=" w-[300px] h-screen top-0 left-0 bg-slate-200 gap-3 px-5 py-4  md:block hidden sticky">
      <main className="justify-between  flex flex-col gap-5 ">
        <aside className=" font-bold text-xl flex justify-center">LOGO</aside>
        <aside className=" flex flex-col gap-1">
          <Link
            to={"/"}
            className="  list-none flex gap-2 items-center hover:bg-orange-400 bg-orange-400 p-3 rounded-2xl cursor-pointer font-bold"
          >
            <Home /> Home
          </Link>
          <Link to={'/blog'} className="  list-none flex gap-2 items-center hover:bg-orange-400 p-3 rounded-2xl cursor-pointer font-bold">
            <Contact /> Contact
          </Link>
          <li className="  list-none flex gap-2 items-center hover:bg-orange-400 p-3 rounded-2xl cursor-pointer font-bold">
            <Projector /> Projects
          </li>
          <li className="  list-none flex gap-2 items-center hover:bg-orange-400 p-3 rounded-2xl cursor-pointer font-bold">
            <User /> Others
          </li>
        </aside>
      </main>
    </header>
  );
};

export default SideBar;
