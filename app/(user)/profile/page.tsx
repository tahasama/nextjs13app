"use client";
import Modal from "@/app/modal";
import { getAuthData } from "@/app/redux/features/authSlice";
import {
  fetchProjectByUser,
  getProjectData,
} from "@/app/redux/features/projectSlice";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import React, { useEffect } from "react";
import { FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const page = () => {
  const { lastSignInTime, creationTime, image, displayName, bio, uid } =
    useAppSelector(getAuthData);
  const dispatch = useAppDispatch();
  const { all } = useAppSelector(getProjectData);
  console.log("🚀 ~ file: page.tsx:17 ~ page ~ all:", all);
  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchProjectByUser(uid));
    }, 1000);
  }, []);

  return (
    <section className="bg-gray-900 flex flex-col md:flex-row w-full text-white p-10  relative top-[58px] rounded-lg shadow-lg">
      <div
        className={`w-full ${
          bio ? "md:w-2/7" : "md:w-1/3"
        }  flex items-center h-full flex-col relative top-6 `}
      >
        <div className="flex items-center justify-start ">
          <div className="w-full px-4 flex flex-col  text-center  items-center">
            {image && (
              <div className="relative w-32 mb-4 md:w-36 xl:w-40">
                <div className=" rounded-full overflow-hidden">
                  <img
                    className="object-cover object-center w-full h-full "
                    src={image}
                    alt="User's profile picture"
                  />
                </div>
              </div>
            )}
            <div className="">
              <h1 className="text-2xl md:text-2xl lg:text-3xl font-bold">
                {displayName}
              </h1>
              {/* <h1 className="text-base md:text-lg font-bold">{email}</h1> */}
              <p className="text-xs md:text-sm text-gray-400 mt-4">
                Joined:
                {new Date(creationTime.seconds * 1000)
                  .toDateString()
                  .slice(0, 16)}
              </p>
              {lastSignInTime !== "" && (
                <p className="text-xs md:text-sm text-gray-400 mt-1">
                  Last visited:
                  {new Date(lastSignInTime.seconds * 1000)
                    .toDateString()
                    .slice(0, 16)}
                </p>
              )}
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
        <div className="flex flex-row mb-3">
          <Modal />
          <button className="bg-violet-900 text-white hover:bg-violet-700 font-bold uppercase text-sm  ml-4 px-9 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
            Edit Profile
          </button>
        </div>

        <div className="w-fit mb-8">
          <p className="text-lg leading-relaxed mx-7 indent-10">
            {bio} Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Tempore quasi reiciendis, earum alias repellat nisi ipsa sequi
            maiores fugit, ullam provident reprehenderit, corporis ab?
            Voluptatem sapiente esse enim. Beatae, veniam.
          </p>
        </div>
      </div>
      <div className={`w-full  ${bio ? "md:w-5/7" : "md:w-2/3"}  `}>
        <div className="flex items-center justify-around ">
          <div className="flex flex-col md:flex-row items-center mb-6 md:mb-12 mt-5 w-full">
            <div className="flex flex-col justify-end gap-3 mt-10 md:mt-5 flex-1">
              <div className="bg-opacity-60 flex justify-center items-center gap-2">
                <div className="text-center bg-indigo-950 w-24 md:40 lg:w-40 py-2 rounded-2xl">
                  <div className="text-base md:text-2xl lg:text-3xl font-semibold">
                    3.5K
                  </div>
                  <div className="text-xs md:text-sm text-gray-400">Stars</div>
                </div>
                <div className="text-center bg-indigo-950 w-24 md:36 lg:w-40 py-2 rounded-2xl">
                  <div className="text-base md:text-2xl lg:text-3xl font-semibold">
                    50
                  </div>
                  <div className="text-xs md:text-sm text-gray-400">
                    Projects
                  </div>
                </div>
              </div>
              <div className="bg-opacity-60 flex flex-wrap justify-center items-center gap-2 mt-3 md:mt-0">
                <div className="text-center bg-violet-950 w-20 md:w-32 py-2 rounded-2xl">
                  <div className="text-base md:text-xl lg:text-2xl font-semibold">
                    3
                  </div>
                  <div className="text-xs md:text-sm text-gray-400">
                    React js
                  </div>
                </div>
                <div className="text-center bg-violet-950 w-20 md:w-32 py-2 rounded-2xl">
                  <div className="text-base md:text-xl lg:text-2xl font-semibold">
                    20
                  </div>
                  <div className="text-xs md:text-sm text-gray-400">
                    Js Html Css
                  </div>
                </div>
                <div className="text-center bg-violet-950 w-20 md:w-32 py-2 rounded-2xl">
                  <div className="text-base md:text-xl lg:text-2xl font-semibold">
                    5
                  </div>
                  <div className="text-xs md:text-sm text-gray-400">Python</div>
                </div>
                <div className="text-center bg-violet-950 w-20 md:w-32 py-2 rounded-2xl">
                  <div className="text-base md:text-xl lg:text-2xl font-semibold">
                    12
                  </div>
                  <div className="text-xs md:text-sm text-gray-400">
                    Data Science
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {all !== undefined &&
            all
              .slice(0, 6)
              // .sort((a: any, b: any) => b.stars - a.stars)
              .map((project: any) => (
                <div className="flex flex-col w-1/3 bg-gray-800 rounded-lg p-4">
                  <a
                    key={project._id}
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
