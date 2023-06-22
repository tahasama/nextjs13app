"use client";
import Modal from "@/app/modal";
import {
  getAuthData,
  getOtherUserByUid,
  getUserByUid,
} from "@/app/redux/features/authSlice";
import {
  fetchProjectByUser,
  getProjectData,
} from "@/app/redux/features/projectSlice";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const page = () => {
  const { all } = useAppSelector(getProjectData);
  const [filteredAll, setFilteredAll] = useState([]); // State for filtered results
  console.log("🚀 ~ file: page.tsx:20 ~ page ~ filteredAll:", filteredAll);
  const [selectedFilter, setSelectedFilter] = useState("");
  const params = useParams();
  const {
    lastSignInTime,
    creationTime,
    image,
    displayName,
    bio,
    uid,
    odisplayName,
    ocreationTime,
    olastSignInTime,
    oimage,
  } = useAppSelector(getAuthData);

  const dispatch = useAppDispatch();

  useEffect(() => {
    uid !== params.uid && dispatch(getOtherUserByUid({ uid: params.uid })),
      setTimeout(() => {
        dispatch(fetchProjectByUser(uid !== params.uid ? params.uid : uid));
      }, 1000);
  }, []);

  const handleFilter = (filter: any) => {
    setSelectedFilter(filter); // Update the selected filter state

    // Filter the "all" array based on the selected filter
    const filteredResults = all.filter(
      (project: any) => project.projectType === filter
    );
    console.log(
      "🚀 ~ file: page.tsx:52 ~ handleFilter ~ filteredResults:",
      filteredResults
    );

    setFilteredAll(filteredResults); // Update the filteredAll state with the filtered results
  };

  return (
    <section className="bg-gray-900 flex flex-col md:flex-row w-full min-h-screen  text-white p-10  relative rounded-lg shadow-lg">
      <div
        className={`w-full ${
          bio ? "md:w-2/7" : "md:w-1/3"
        }  flex items-center h-full flex-col relative  mt-16`}
      >
        <div className="flex items-center justify-start mt-16 ">
          <div className="w-full px-4 flex flex-col  text-center  items-center">
            <div className="relative mb-4 w-fit">
              <div className="rounded-full overflow-hidden flex items-center justify-center">
                {image || oimage ? (
                  <img
                    className=""
                    src={uid !== params.uid ? oimage : image}
                    alt="User's profile picture"
                  />
                ) : (
                  <h1 className="text-5xl w-24 h-24 flex items-center justify-center pb-5 bg-emerald-700 rounded-full">
                    {uid !== params.uid
                      ? odisplayName?.charAt(0)
                      : displayName.charAt(0)}
                  </h1>
                )}
              </div>
            </div>

            <div className="">
              <h1 className="text-2xl md:text-2xl lg:text-3xl font-bold">
                {uid !== params.uid ? odisplayName : displayName}
              </h1>
              {/* <h1 className="text-base md:text-lg font-bold">{email}</h1> */}
              <p className="text-xs md:text-sm text-gray-400 mt-4">
                Joined:
                {creationTime !== undefined &&
                creationTime !== "" &&
                uid !== params.uid
                  ? ocreationTime
                  : creationTime.slice(0, 16)}
              </p>

              <p className="text-xs md:text-sm text-gray-400 mt-1">
                Last visited:{" "}
                {lastSignInTime !== undefined &&
                lastSignInTime !== "" &&
                uid !== params.uid
                  ? olastSignInTime
                  : lastSignInTime.slice(0, 16)}
              </p>
            </div>
          </div>
        </div>
        <div className="flex  gap-12 justify-center m-8 items-center">
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-300"
          >
            <FaGithub className="w-10 h-10 md:w-8 md:h-8" />
          </a>

          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-300"
          >
            <FaTwitter className="w-10 h-10 md:w-8 md:h-8" />
          </a>

          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-300"
          >
            <FaInstagram className="w-10 h-10 md:w-8 md:h-8" />
          </a>
        </div>
        {uid === params.uid && (
          <div className="flex flex-row mb-3">
            <Modal />
            <button className="bg-violet-900 text-white hover:bg-violet-700 font-bold uppercase text-sm  ml-4 px-9 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
              Edit Profile
            </button>
          </div>
        )}

        <div className="w-fit mb-8">
          <p
            className={`text-lg leading-relaxed ${
              bio ? "indent-10" : "indent-10"
            }mx-7`}
          >
            {bio
              ? bio
              : "no bio? talk a litle bit about yourself, hit edit profile"}
          </p>
        </div>
      </div>
      <div className={`w-full  ${bio ? "md:w-5/7" : "md:w-2/3"} mt-16 `}>
        <div className="flex items-center justify-around ">
          <div className="flex flex-col md:flex-row items-center mb-6 md:mb-12 mt-5 w-full">
            <div className="flex flex-col justify-end gap-3 mt-10 md:mt-5 flex-1">
              <div className="bg-opacity-60 flex justify-center items-center gap-2">
                <div
                  onClick={() =>
                    all
                      .slice(0, 6)
                      .sort((a: any, b: any) => b.star.length - a.star.length)
                  }
                  className="text-center cursor-pointer bg-indigo-950 w-24 md:40 lg:w-40 py-2 rounded-2xl"
                >
                  <div className="text-base md:text-2xl lg:text-3xl font-semibold">
                    {all.reduce(
                      (accumulator, obj: any) => accumulator + obj.star.length,
                      0
                    )}
                  </div>
                  <div className="text-xs md:text-sm text-gray-400">Stars</div>
                </div>

                <div
                  onClick={() => handleFilter("")}
                  className="text-center cursor-pointer bg-indigo-950 w-24 md:36 lg:w-40 py-2 rounded-2xl"
                >
                  <div className="text-base md:text-2xl lg:text-3xl font-semibold">
                    {all.length}
                  </div>
                  <div className="text-xs md:text-sm text-gray-400">
                    Projects
                  </div>
                </div>
              </div>
              <div className="bg-opacity-60 flex flex-wrap justify-center items-center gap-2 mt-3 md:mt-0">
                <div
                  onClick={() => handleFilter("rj")}
                  className="text-center cursor-pointer bg-violet-950 w-20 md:w-32 py-2 rounded-2xl"
                >
                  <div className="text-base md:text-xl lg:text-2xl font-semibold">
                    {all.filter((x: any) => x.projectType === "rj").length}
                  </div>
                  <div className="text-xs md:text-sm text-gray-400">
                    React js
                  </div>
                </div>
                <div
                  onClick={() => handleFilter("vwd")}
                  className="text-center  cursor-pointer bg-violet-950 w-20 md:w-32 py-2 rounded-2xl"
                >
                  <div className="text-base md:text-xl lg:text-2xl font-semibold">
                    {all.filter((x: any) => x.projectType === "vwd").length}
                  </div>
                  <div className="text-xs md:text-sm text-gray-400">
                    Js Html Css
                  </div>
                </div>
                <div
                  onClick={() => handleFilter("py")}
                  className="text-center cursor-pointer bg-violet-950 w-20 md:w-32 py-2 rounded-2xl"
                >
                  <div className="text-base md:text-xl lg:text-2xl font-semibold">
                    {all.filter((x: any) => x.projectType === "py").length}
                  </div>
                  <div className="text-xs md:text-sm text-gray-400">Python</div>
                </div>
                <div
                  onClick={() => handleFilter("ds")}
                  className="text-center cursor-pointer bg-violet-950 w-20 md:w-32 py-2 rounded-2xl"
                >
                  <div className="text-base md:text-xl lg:text-2xl font-semibold">
                    {all.filter((x: any) => x.projectType === "ds").length}
                  </div>
                  <div className="text-xs md:text-sm text-gray-400">
                    Data Science
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 md:overflow-auto h-80 scrollbar scrollbar-thumb-gray-800 scrollbar-track-gray-600">
          {all !== undefined &&
            (selectedFilter !== "" ? filteredAll : all)
              .slice(0, 6)
              // .sort((a: any, b: any) => b.stars - a.stars)
              .map((project: any) => (
                <div
                  className="flex flex-col w-1/3 h-40 bg-gray-800 rounded-lg p-4"
                  key={project._id}
                >
                  <a
                    href={`/projects/${
                      project.projectType === "rj"
                        ? "webdev/react-project"
                        : project.projectType === "vwd"
                        ? "webdev/vanilla-project"
                        : "python/python-project"
                    }/${project._id}`}
                    // target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-medium hover:text-gray-300 mb-2"
                  >
                    {project.title}
                  </a>
                  <p className="text-sm text-gray-400">
                    Stars: {project.star.length}
                  </p>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
};

export default page;
