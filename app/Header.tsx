"use client";

import { Kiwi_Maru } from "next/font/google";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { getBarData, showHideDropdown } from "./redux/features/barSlice";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";
import { getAuthData, resetUser } from "./redux/features/authSlice";
import { AiOutlineSearch } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { FormEventHandler, useRef, useState } from "react";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import {
  getProjectData,
  // searchProjects,
  searchProjectsData,
  updateProjectInfos,
} from "./redux/features/projectSlice";

const kiwi = Kiwi_Maru({
  subsets: ["latin"],
  weight: "400",
});

interface linksProps {
  id: number;
  link: string;
}

const links: linksProps[] = [
  { id: 1, link: "Home" },
  { id: 2, link: "Python" },
  { id: 3, link: "web dev" },
];

const Header = () => {
  const dispatch = useAppDispatch();
  const { dropDown } = useAppSelector(getBarData);
  // const { search } = useAppSelector(getProjectData);
  // console.log("🚀 ~ file: Header.tsx:39 ~ Header ~ search:", search);
  const { uid, displayName, email, image } = useAppSelector(getAuthData);
  const [openUserMenu, setOpenUserMenu] = useState(false);
  const searchRef = useRef<any>(null);
  const [errorTitle, setErrorTitle] = useState("");
  const [term, setTerm] = useState("");

  const [nav, setNav] = useState<boolean>(false);

  const handleProjectSearch: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    dispatch(searchProjectsData(searchRef.current?.value));
  };
  console.log(
    "🚀 ~ file: Header.tsx:55 ~ consthandleProjectSearch:FormEventHandler<HTMLFormElement>= ~ searchRef.current?.value:",
    searchRef.current?.value
  );

  return (
    <div
      className={` flex overflow-visible justify-between items-center w-screen   h-20 z-50 text-white fixed top-0 bg-black `}
    >
      <ul className="hidden overflow-hidden sm:flex mx-12">
        {links.map((l: linksProps) => (
          <li
            key={l.id}
            className={`capitalize font-medium px-4 cursor-pointer text-lg hover:scale-105 duration-100 `}
          >
            <Link href={l.link}>{l.link}</Link>
          </li>
        ))}
      </ul>
      <div className="hidden sm:flex md:order-2 ">
        <form
          onSubmit={handleProjectSearch}
          className=" inset-y-0 left-0 flex items-center pl-3 pointer-events-auto gap-2"
        >
          <input
            type="text"
            id="search-navbar"
            className="block w-full p-2 pl-10 text-sm text-gray-100 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search..."
            ref={searchRef}
            value={term}
            onChange={() => setTerm(searchRef.current?.value)}
          />
          <button
            type="button"
            data-collapse-toggle="navbar-search"
            aria-controls="navbar-search"
            aria-expanded="false"
            className=" text-gray-500 dark:text-gray-400 hover:bg-gray-700 focus:outline-none ring-2 ring-gray-700  rounded-lg text-sm p-2.5 mr-1"
          >
            <AiOutlineSearch />
          </button>
        </form>
      </div>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer mr-4 text-gray-400 z-10 sm:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} className="mr-5" />}
      </div>
      <div className="flex items-center md:order-2 ">
        <button
          type="button"
          className="flex mr-3 text-sm bg-gray-800 rounded-full md:mx-10  focus:ring-4 focus:ring-gray-600"
          id="user-menu-button"
          aria-expanded="false"
          data-dropdown-toggle="user-dropdown"
          data-dropdown-placement="bottom"
          onClick={() => setOpenUserMenu(!openUserMenu)}
        >
          <img
            className="w-10 h-10 rounded-full"
            src={image}
            alt="user photo"
          />
        </button>
        {openUserMenu && (
          <div
            className="z-50 absolute top-16 right-2 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
            id="user-dropdown"
          >
            <div className="px-4 py-3">
              <span className="block text-sm text-gray-900 dark:text-white">
                {displayName}
              </span>
              <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                {email}
              </span>
            </div>
            <ul className="py-2" aria-labelledby="user-menu-button">
              <li>
                <Link
                  href={!uid ? "/login" : "/profile/" + uid}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  onClick={() => dispatch(showHideDropdown(!dropDown))}
                >
                  {!uid ? "Login" : " Dashboard"}
                </Link>
              </li>

              <li>
                <Link
                  href={uid ? "/" : "/register"}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  onClick={() => {
                    dispatch(showHideDropdown(!dropDown));
                    uid &&
                      signOut(auth).then(() =>
                        dispatch(resetUser({ uid: "", email: "" }))
                      );
                  }}
                >
                  {uid ? " Sign out" : "Register"}
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>

      {nav && (
        <ul className="sm:hidden flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gray-900 text-gray-500">
          {links.map((l: linksProps) => (
            <li
              key={l.id}
              className="px-4 py-4 capitalize cursor-pointer text-xl text-gray-300 hover:text-white hover:underline transition duration-200"
            >
              <div className="h-10 w-44 border-b-2 border-r-2 border-pink-500 rounded-r-md">
                <Link href={l.link} onClick={() => setNav(!nav)}>
                  {l.link}
                </Link>
              </div>
            </li>
          ))}
          <div className="flex md:order-2 gap-2 mt-16">
            <div className=" inset-y-0 left-0 flex items-center pl-3 pointer-events-auto">
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 pl-10 text-sm text-gray-100 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search...!"
                ref={searchRef}
                value={term}
                // onChange={() =>
                //   dispatch(searchProjects(searchRef.current?.value))
                // }
              />
            </div>
            <button
              onClick={() => dispatch(searchProjectsData(term))}
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-700 focus:outline-none ring-2 ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
            >
              <AiOutlineSearch />
            </button>
          </div>
        </ul>
      )}
    </div>
  );
};

export default Header;
