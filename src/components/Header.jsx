import { User } from "lucide-react";

const Header = () => {
  return (
    <header className=" w-screen h-auto top-0 left-0 bg-slate-200 gap-3 px-5 py-4  md:block hidden">
      <main className="justify-between  flex">
        <aside className=" font-bold text-xl">LOGO</aside>
        <aside className=" flex gap-5 items-center ">
          <li className=" font-semibold list-none">Home</li>
          <li className=" font-semibold list-none">About</li>
          <li className=" font-semibold list-none">Contact</li>
          <li className=" font-semibold list-none">Projects</li>
          <li className=" font-semibold list-none">Others</li>
        </aside>
        <aside>
          <User />
        </aside>
      </main>
    </header>
  );
};

export default Header;
