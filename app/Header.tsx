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
import { FormEventHandler, useRef, useState, useEffect } from "react";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import { useParams, usePathname, useRouter } from "next/navigation";

import {
  getProjectData,
  projectInitialState,
  cleanState,
  updateSaved,
  cleanUpSearch,
  searchTerms,
} from "./redux/features/projectSlice";
import Logo from "./images/Untitled1.png";
import Modal from "./(user)/modalLR";

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
  { id: 2, name: "PyLab", link: "/projects/python" },
  { id: 3, name: "WebDev", link: "/projects/webdev" },
];

const Header = () => {
  const pythonUrl: string = process.env.NEXT_PUBLIC_PYTHON as string;

  const dispatch = useAppDispatch();
  const { dropDown } = useAppSelector(getBarData);
  const [result, setResult] = useState(false);
  const router = useRouter();
  const { projectId } = useParams();
  const currentUrl = usePathname();

  useEffect(() => {
    const dataToSend = { code: "print('Hello You!')" };

    fetch(pythonUrl!, {
      // fetch("http://localhost:8000/execute-python/", {
      method: "POST",
      body: JSON.stringify(dataToSend),
    });
  });

  const { saved, user, search } = useAppSelector(getProjectData);

  const { uid, displayName, email, image } = useAppSelector(getAuthData);

  const searchRef = useRef<any>(null);
  const [logout, setLogout] = useState(false);

  const [nav, setNav] = useState<boolean>(false);
  const alerted = (destination: string) => {
    if (!saved && uid === user.uid) {
      const result = window.confirm(
        "This work hasn't been saved!\n\n a - Hit 'Cancel' then 'Save' button if you want to save yout work \n b - Hit 'Ok' of you want to leave without saving"
      );
      setResult(result);
      if (result) {
        dispatch(updateSaved(true));

        router.push(destination);
      } else {
        ("none");

        setLogout(false);
      }
    } else {
      router.push(destination);
    }
  };

  const handleProjectSearch: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    dispatch(cleanUpSearch([]));

    projectId
      ? alerted(`/projects/searchResult?search=${searchRef.current?.value}`)
      : router.push(
          `/projects/searchResult?search=${searchRef.current?.value}`
        );
  };

  return (
    <div
      className={` flex overflow-visible justify-evenly md:justify-between items-center w-screen   h-20 z-50 text-white fixed top-0 bg-black `}
    >
      <ul className=" overflow-hidden hidden ml-0 md:flex justify-around items-center flex-grow lg:flex-grow-0 lg:gap-12 lg:w-auto mx-2  text-xl text text-gray-300 font-semibold">
        <a
          target="_self"
          href="/"
          onClick={() =>
            projectId !== undefined ? alerted("/") : router.push("/")
          }
        >
          <Image
            src={Logo}
            alt="Logo"
            width={140}
            className="p-0 m-0 relative left-0 md:-top-1 w-20 md:w-48 lg:w-48 cursor-pointer flex-shrink-0"
          />
        </a>

        {links.map((l: linksProps) => (
          <li key={l.id} className="relative h-full cursor-pointer">
            <a
              href={l.link}
              onClick={() =>
                projectId ? alerted(l.link) : router.push(l.link)
              }
              target="_self" // Add this line to open link in a new tab
              className="group transition duration-300 flex"
            >
              <span className="relative pb-1">{l.name}</span>
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-sky-600 transform scale-x-0 origin-left transition-transform duration-1000 group-hover:scale-x-100"></span>
            </a>
          </li>
        ))}
      </ul>

      <div className="hidden md:flex md:order-2 lg:w-[30rem]">
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
            value={search}
            onChange={() => dispatch(searchTerms(searchRef.current?.value))}
          />
          <button
            type="submit"
            data-collapse-toggle="navbar-search"
            aria-controls="navbar-search"
            aria-expanded="false"
            className=" text-gray-500 dark:text-gray-400 hover:bg-gray-700 focus:outline-none  rounded-full text-sm p-2.5 mx-1 transition-all duration-200 ease-in-out"
          >
            <AiOutlineSearch size={24} />
          </button>
        </form>
      </div>
      <div
        onClick={() => {
          setNav(!nav);
        }}
        className="cursor-pointer mx-1 md:mx-0 text-gray-400 z-10 md:hidden flex"
      >
        {nav ? (
          <>
            <FaTimes size={30} />
          </>
        ) : (
          <>
            <FaBars size={30} className="mr-2 md:mr-5" />
            <AiOutlineSearch size={30} />
          </>
        )}
      </div>

      {dropDown && (
        <div
          className={`z-50 absolute ${
            uid ? "w-fit" : "w-28"
          } top-16 right-5 my-4 text-base list-none  divide-y  rounded-lg shadow bg-gray-700 divide-gray-600`}
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
          <ul className="cursor-pointer" aria-labelledby="user-menu-button ">
            <li>
              <div
                className="block px-4 py-3 text-md  tracking-wider duration-300 transition-all rounded-t-md h-full text-cyan-500 hover:bg-gray-600 hover:text-white"
                onClick={() => {
                  uid && projectId
                    ? alerted(uid && "/profile/" + uid)
                    : router.push(uid ? "/profile/" + uid : currentUrl);
                  uid && dispatch(showHideDropdown(!dropDown));
                }}
              >
                {!uid ? <Modal initialMode="login" /> : " Dashboard"}
              </div>
            </li>

            <li>
              <div
                className="block px-4 py-3 text-md tracking-wider duration-300 transition-all rounded-b-md h-full text-cyan-500 hover:bg-gray-600 hover:text-white"
                onClick={() => {
                  uid &&
                    signOut(auth).then(
                      () => (
                        dispatch(resetUser(userInitialState)),
                        dispatch(cleanState(projectInitialState)),
                        router.push("/"),
                        dispatch(showHideDropdown(!dropDown))
                      )
                    );
                }}
              >
                {uid ? " Sign out" : <Modal initialMode="register" />}
              </div>
            </li>
          </ul>
        </div>
      )}
      <Link href={"/"}>
        <Image
          src={Logo}
          alt="Logo"
          width={200}
          className="p-0 m-0 relative md:hidden left-0 -top-[3px] w-fit cursor-pointer z-0"
        />
      </Link>
      {/* full screen */}
      <div className="flex items-center md:order-2 ">
        <button
          type="button"
          className="flex text-sm items-center justify-center bg-gray-800 rounded-full mx-1 md:mr-8 focus:ring-4 focus:ring-gray-600 h-10 w-10"
          id="user-menu-button"
          aria-expanded="false"
          data-dropdown-toggle="user-dropdown"
          data-dropdown-placement="bottom"
          onClick={() => dispatch(showHideDropdown(!dropDown))}
        >
          {uid && image ? (
            image !== "" && image !== undefined ? (
              <img className="rounded-full z-10" src={image} alt="user photo" />
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
          <div className="flex md:order-2 gap-2 w-full">
            <form
              onSubmit={handleProjectSearch}
              className=" mx-4 flex items-center justify-center pointer-events-auto gap-2 w-full  mt-5 "
            >
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 pl-10 text-sm text-gray-100 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
                ref={searchRef}
                value={search}
                onChange={() => dispatch(searchTerms(searchRef.current?.value))}
              />
              <button
                type="button"
                data-collapse-toggle="navbar-search"
                aria-controls="navbar-search"
                aria-expanded="false"
                className=" text-gray-500 dark:text-gray-400 hover:bg-gray-700 focus:outline-none  rounded-full text-sm  mr-1 transition-all duration-100 ease-in-out"
              >
                <AiOutlineSearch size={22} />
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
