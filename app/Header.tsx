"use client";

import { Kiwi_Maru } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { getBarData, showHideDropdown } from "./redux/features/barSlice";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";
import {
  getAuthData,
  resetUser,
  userInitialState,
} from "./redux/features/authSlice";
import { AiOutlineSearch } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { FormEventHandler, useRef, useState } from "react";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import {
  getProjectData,
  projectInitialState,
  // searchProjects,
  searchProjectsData,
  updateProjectInfos,
  cleanState,
} from "./redux/features/projectSlice";
import Logo from "./images/Logo.png";

const kiwi = Kiwi_Maru({
  subsets: ["latin"],
  weight: "400",
});

interface linksProps {
  id: number;
  link: string;
  name: string;
}

const links: linksProps[] = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Python", link: "projects/python" },
  { id: 3, name: "webdev", link: "projects/webdev" },
];

const Header = () => {
  const dispatch = useAppDispatch();
  const { dropDown } = useAppSelector(getBarData);
  // const { search } = useAppSelector(getProjectData);
  // console.log("🚀 ~ file: Header.tsx:39 ~ Header ~ search:", search);
  const { uid, displayName, email, image } = useAppSelector(getAuthData);
  console.log("🚀 ~ file: Header.tsx:52 ~ Header ~ image:", image);
  const user = useAppSelector(getAuthData);
  console.log(
    "🚀 ~ file: Header.tsx:44 ~ Header ~ user:lllllllllllllllllll",
    user
  );
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
      <ul className=" overflow-hidden hidden ml-0 md:flex justify-around items-center flex-grow lg:flex-grow-0 lg:gap-12 lg:w-auto mx-16  text-xl text text-gray-300 font-semibold">
        <Link href={"/"}>
          <Image
            src={Logo}
            alt="Logo"
            width={220}
            className="p-0 m-0 relative left-0 xl:-top-1 cursor-pointer w-36 lg:w-full flex-shrink-0"
          />
        </Link>

        {links.map((l: linksProps) => (
          <li key={l.id} className="relative h-full ">
            <Link href={l.link} className="group transition duration-300">
              <span className="relative pb-1">{l.name}</span>
              <span className="absolute left-0 -bottom-0  w-full h-0.5 bg-sky-600 transform scale-x-0 origin-left transition-transform duration-1000 group-hover:scale-x-100"></span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="hidden md:flex md:order-2  lg:w-[30rem]">
        <form
          onSubmit={handleProjectSearch}
          className="flex items-center pointer-events-auto  lg:w-96"
        >
          <input
            type="text"
            id="search-navbar"
            className="block p-2 w-full  text-sm text-gray-100 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
            className=" text-gray-500 dark:text-gray-400 hover:bg-gray-700 focus:outline-none    text-sm p-2.5 mr-1"
          >
            <AiOutlineSearch size={24} />
          </button>
        </form>
      </div>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer mx-3 text-gray-400 z-10 md:hidden flex"
      >
        {nav ? (
          <>
            <FaTimes size={30} />
          </>
        ) : (
          <>
            <FaBars size={30} className="mr-5" />
            <AiOutlineSearch size={30} />
          </>
        )}
      </div>
      <Link href={"/"}>
        <Image
          src={Logo}
          alt="Logo"
          width={220}
          className="p-0 m-0 relative md:hidden left-0 xl:-top-1 cursor-pointer lg:w-full flex-shrink-0"
        />
      </Link>
      {dropDown && (
        <div
          className={`z-50 absolute ${
            uid ? "w-fit" : "w-28"
          } top-16 right-4 my-4 text-base list-none  divide-y  rounded-lg shadow bg-gray-700 divide-gray-600`}
          id="user-dropdown"
        >
          {uid && (
            <div className="px-4 py-3">
              <span className="block text-sm text-gray-900 dark:text-white">
                {displayName}
              </span>
              <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                {email}
              </span>
            </div>
          )}
          <ul className="" aria-labelledby="user-menu-button ">
            <li>
              <Link
                href={!uid ? "/login" : "/profile/" + uid}
                className="block px-4 py-3 text-md tracking-wider duration-300 transition-all rounded-t-md h-full text-cyan-500 hover:bg-gray-600 hover:text-white"
                onClick={() => dispatch(showHideDropdown(!dropDown))}
              >
                {!uid ? "Login" : " Dashboard"}
              </Link>
            </li>

            <li>
              <Link
                href={uid ? "/" : "/register"}
                className="block px-4 py-3 text-md tracking-wider duration-300 transition-all rounded-b-md h-full text-cyan-500 hover:bg-gray-600 hover:text-white"
                onClick={() => {
                  dispatch(showHideDropdown(!dropDown));
                  uid &&
                    signOut(auth).then(
                      () => (
                        dispatch(resetUser(userInitialState)),
                        dispatch(cleanState(projectInitialState))
                      )
                    );
                }}
              >
                {uid ? " Sign out" : "Register"}
              </Link>
            </li>
          </ul>
        </div>
      )}
      <div className="flex items-center md:order-2 ">
        <button
          type="button"
          className="flex mr-3 text-sm bg-gray-800 rounded-full md:mx-10  focus:ring-4 focus:ring-gray-600"
          id="user-menu-button"
          aria-expanded="false"
          data-dropdown-toggle="user-dropdown"
          data-dropdown-placement="bottom"
          onClick={() => dispatch(showHideDropdown(!dropDown))}
        >
          {uid && image ? (
            image !== "" ? (
              <img
                className="rounded-full h-10 w-10"
                src={image}
                alt="user photo"
              />
            ) : (
              <h1 className="text-5xl w-24 h-24 flex items-center justify-center pb-5 bg-emerald-700 rounded-full">
                {displayName.charAt(0)}
              </h1>
            )
          ) : (
            <FaUserCircle size={30} color="gray" />
          )}
        </button>
      </div>

      {nav && (
        <ul className="md:hidden flex flex-col justify-around items-center absolute top-0 left-0 w-full h-screen bg-gray-900 text-gray-500">
          <div className="flex md:order-2 gap-2 w-full ">
            <form
              onSubmit={handleProjectSearch}
              className=" inset-y-0 left-0 flex items-center pl-3 pointer-events-auto gap-2 w-full mx-3"
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
          <div className="relative -top-20">
            {links.map((l: linksProps) => (
              <li
                key={l.id}
                className="px-4 py-4 capitalize cursor-pointer text-xl text-gray-300 hover:text-white hover:underline transition duration-200"
              >
                <div className=" w-36 border-b-2 border-l-2 px-4 py-2 border-red-700 rounded-md">
                  <Link href={l.link} onClick={() => setNav(!nav)}>
                    {l.name}
                  </Link>
                </div>
              </li>
            ))}
          </div>
        </ul>
      )}
    </div>
  );
};

export default Header;
