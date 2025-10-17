
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="container m-auto">
      <nav className=" h-20 bg-lime-400 flex flex-row rounded-lg justify-between items-center ">

          <Link className="flex flex-row items-center" to={"/"}>
            <img className="mx-2" src="/vite.svg" alt="logo" /> 
            <span className="font-bold text-3xl text-slate-900">React Training</span>
          </Link>

          <ul className="flex items-baseline text-lg font-bold space-x-10">
            <li>
              <Link className="p-2 hover:bg-slate-900 hover:text-white transition-all hover:rounded-lg" to={"/"}>Home</Link>
            </li>
            <li>
              <Link className="p-2 hover:bg-slate-900 hover:text-white transition-all hover:rounded-lg" to={"/users"}>Users</Link>
            </li>
            <li>
              <Link className="p-2 hover:bg-slate-900 hover:text-white transition-all hover:rounded-lg" to={"/gallery"}>Gallery</Link>
            </li>
          </ul>

      </nav>
    </div>
  );
}

export default Header;
