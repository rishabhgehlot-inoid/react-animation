import { Menu } from "lucide-react";
import { useState } from "react";

const MobileHeader = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className=" w-screen h-auto sticky top-0 left-0 bg-slate-200 gap-3 px-5 py-4  md:hidden z-30">
      <main className="justify-between flex">
        <aside className=" font-bold text-xl">LOGO</aside>
        <aside>
          <Menu onClick={() => setShowMenu(!showMenu)} />
        </aside>
      </main>
      <aside
        className={` flex gap-5 items-center flex-col py-4 ${
          showMenu ? " transition  delay-150 duration-300 ease-in-out block opacity-100" : " hidden transition  delay-150 duration-300 ease-in-out opacity-0"
        }`}
      >
        <li className=" font-semibold list-none">Home</li>
        <li className=" font-semibold list-none">About</li>
        <li className=" font-semibold list-none">Contact</li>
        <li className=" font-semibold list-none">Projects</li>
        <li className=" font-semibold list-none">Others</li>
      </aside>
    </header>
  );
};

export default MobileHeader;
