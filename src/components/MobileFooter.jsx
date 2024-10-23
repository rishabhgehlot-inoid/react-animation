import { Contact, Home, Projector, User, Users } from "lucide-react";

const MobileFooter = () => {
  return (
    <header className=" w-screen h-auto bottom-0 left-0 bg-slate-200 gap-3 px-5 py-4  md:hidden block fixed ">
      <main className="justify-between  flex flex-col gap-5 ">
        <aside className=" flex gap-1 justify-evenly">
          <li className="  list-none flex gap-2 items-center hover:bg-orange-400 bg-orange-400 p-3 rounded-2xl cursor-pointer font-bold">
            <Home />
          </li>
          <li className="  list-none flex gap-2 items-center hover:bg-orange-400 p-3 rounded-2xl cursor-pointer font-bold">
            <Contact />
          </li>
          <li className="  list-none flex gap-2 items-center hover:bg-orange-400 p-3 rounded-2xl cursor-pointer font-bold">
            <Projector />
          </li>
          <li className="  list-none flex gap-2 items-center hover:bg-orange-400 p-3 rounded-2xl cursor-pointer font-bold">
            <User />
          </li>
          <li className="  list-none flex gap-2 items-center hover:bg-orange-400 p-3 rounded-2xl cursor-pointer font-bold">
            <Users />
          </li>
        </aside>
      </main>
    </header>
  );
};

export default MobileFooter;
