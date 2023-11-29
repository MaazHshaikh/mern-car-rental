import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <header className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to={"/"}>
            <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
              <span className="text-slate-300">zois</span>
              <span className="text-slate-500">Motors</span>
            </h1>
          </Link>
          <form className="bg—slate-100 p—3 rounded—lg flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent focus:outline-none w-24 sm:w-64 text-slate-400"
            />
            <FaSearch className="text-slate-500" />
          </form>

          <ul className="flex gap-4">
            <li className="hidden sm:inline py-2 px-3 text-white bg-slate-600 hover:underline rounded">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="hidden sm:inline py-2 px-3 text-white bg-slate-600 hover:underline rounded">
              <Link to={"/about"}>About</Link>
            </li>
            <li className="py-2 px-3 text-white bg-blue-600 hover:underline rounded">
              <Link to={"/sign-in"}>Sign In </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
