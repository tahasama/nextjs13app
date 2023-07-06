"use client";
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
import { useParams, useRouter } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";
import { AiOutlineLink, AiOutlineStar, AiTwotoneStar } from "react-icons/ai";
import { FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";
import Loading from "../Loading";
import Modal from "@/app/modal";
import ModalUser from "../modal";
import UploadImage from "../uploadImage";

const page = () => {
  const { all } = useAppSelector(getProjectData);
  console.log("🚀 ~ file: page.tsx:22 ~ page ~ all:", all);
  const [filteredAll, setFilteredAll] = useState([]); // State for filtered results
  const [selectedFilter, setSelectedFilter] = useState("");
  const params = useParams();
  console.log("🚀 ~ file: page.tsx:28 ~ page ~ params:", params);
  const router = useRouter();
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
    obio,
    github,
    twitter,
    insta,
    webSite,
    email,
    oemail,
  } = useAppSelector(getAuthData);
  console.log("🚀 ~ file: page.tsx:49 ~ page ~  oimage,:", oimage);
  console.log("🚀 ~ file: page.tsx:49 ~ page ~ image,:", image);
  console.log("🚀 ~ file: page.tsx:46 ~ page ~ uid:", uid !== params.uid);
  const xxx = useAppSelector(getAuthData);
  console.log("🚀 ~ file: page.tsx:41 ~ page ~ social:0000000000", uid);
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

    setFilteredAll(filteredResults); // Update the filteredAll state with the filtered results
  };
  const getCreatedDate = (createdAt: any) => {
    console.log(
      "🚀 ~ file: page.tsx:67 ~ getCreatedDate ~ createdAt:",
      createdAt
    );
    return new Date(
      // @ts-ignore
      createdAt.seconds * 1000 + createdAt.nanoseconds / 1000000
    );
  };

  // const getUpdatedDate = new Date(
  //   // @ts-ignore
  //   updatedAt.seconds * 1000 + updatedAt.nanoseconds / 1000000
  // );
  return (
    <section className="bg-gray-900 flex flex-col md:flex-row w-full min-h-screen  text-white p-10  relative rounded-lg shadow-lg">
      <div
        className={`w-full md:w-1/3  flex items-center h-full flex-col relative mt-4`}
      >
        <div className="flex items-center justify-start mt-16 ">
          <div className="w-full px-4 flex flex-col  text-center  items-center">
            <div className="relative mb-4 w-fit">
              <div className="rounded-full overflow-hidden w-52 flex items-center justify-center">
                {image !== "" || oimage !== "" ? (
                  <img
                    className="w-full"
                    src={uid !== params.uid ? oimage : image}
                    alt="User's profile picture"
                  />
                ) : (
                  <h1 className="text-8xl w-52 h-52 flex items-center justify-center pb-5 bg-emerald-700 rounded-full">
                    {uid !== params.uid
                      ? odisplayName?.charAt(0)
                      : displayName.charAt(0)}
                  </h1>
                )}
              </div>
              {uid === params.uid && <UploadImage />}
            </div>

            <div className="">
              <h1 className="text-2xl md:text-2xl lg:text-3xl font-bold">
                {uid !== params.uid ? odisplayName : displayName}
              </h1>
              <span className="block text-md font-serif  text-gray-500 truncate dark:text-gray-400">
                {uid !== params.uid ? oemail : email}
              </span>
              {/* <h1 className="text-base md:text-lg font-bold">{email}</h1> */}
              <p className="text-xs md:text-sm text-gray-400 mt-4">
                Joined:{" "}
                {creationTime !== undefined &&
                creationTime !== "" &&
                uid === params.uid
                  ? creationTime.slice(0, 16)
                  : ocreationTime.slice(0, 16)}
              </p>

              <p className="text-xs md:text-sm text-gray-400 mt-1">
                Last visited:{" "}
                {lastSignInTime !== undefined &&
                lastSignInTime !== "" &&
                uid === params.uid
                  ? lastSignInTime.slice(0, 16)
                  : olastSignInTime.slice(0, 16)}
              </p>
            </div>
          </div>
        </div>
        <div className="flex  gap-12 justify-center m-8 items-center">
          {github !== "" && github !== undefined && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300 "
            >
              <FaGithub className="w-10 h-10 md:w-8 md:h-8" />
            </a>
          )}
          {twitter !== "" && twitter !== undefined && (
            <a
              href={twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300"
            >
              <FaTwitter className="w-10 h-10 md:w-8 md:h-8" />
            </a>
          )}
          {insta !== "" && insta !== undefined && (
            <a
              href={insta}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300"
            >
              <FaInstagram className="w-10 h-10 md:w-8 md:h-8" />
            </a>
          )}{" "}
          {webSite !== "" && webSite !== undefined && (
            <a
              href={webSite}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300"
            >
              <AiOutlineLink className="w-10 h-10 md:w-8 md:h-8" />
            </a>
          )}
        </div>
        {uid === params.uid && (
          <div className="flex flex-row mb-3 gap-5">
            <Modal />
            {/* <button className="bg-violet-900 text-white hover:bg-violet-700 font-bold uppercase text-sm  ml-4 px-9 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
              Edit Profile
            </button> */}
            <ModalUser />
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
      {/* <div className={`w-full  ${bio ? "md:w-5/7" : "md:w-2/3"} mt-20`}> */}
      <div className={`w-full md:w-2/3 mt-20`}>
        <div className="flex items-center justify-around md:-ml-3">
          <div className="flex flex-col md:flex-row items-center mb-6 md:mb-12 mt-5 w-full">
            <div className="flex flex-col justify-end gap-3 mt-10 md:mt-5 flex-1">
              <div className="bg-opacity-60 flex justify-center items-center gap-2">
                <div
                  onClick={() =>
                    all.sort((a: any, b: any) => b.star.length - a.star.length)
                  }
                  className="relative text-center cursor-pointer bg-indigo-950 w-24 md:40 lg:w-40 py-2 rounded-2xl"
                >
                  <div className="w-full relative">
                    <div className="absolute top-0 right-0 mt-1 mr-2 gap-0">
                      <BiUpArrow className="w-full" size={13} />
                      <BiDownArrow className="w-full" size={13} />
                    </div>
                  </div>
                  <div className="text-base md:text-2xl lg:text-3xl font-semibold">
                    {all.reduce(
                      (accumulator: any, obj: any) =>
                        accumulator + obj.star?.length,
                      0
                    )}
                  </div>
                  <div className="text-xs md:text-sm text-gray-400">Stars</div>
                </div>

                <div
                  onClick={() => handleFilter("")}
                  className="text-center cursor-pointer bg-indigo-950 w-24 md:36 lg:w-40 py-2 rounded-2xl"
                >
                  <div className="w-full relative">
                    <div className="absolute top-0 right-0 mt-1 mr-2 gap-0">
                      <BiUpArrow className="w-full" size={13} />
                      <BiDownArrow className="w-full" size={13} />
                    </div>
                  </div>
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
                  <div className="w-full relative">
                    <div className="absolute top-0 right-0 mt-1 mr-2 gap-0">
                      <BiUpArrow className="w-full" size={13} />
                      <BiDownArrow className="w-full" size={13} />
                    </div>
                  </div>
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
                  <div className="w-full relative">
                    <div className="absolute top-0 right-0 mt-1 mr-2 gap-0">
                      <BiUpArrow className="w-full" size={13} />
                      <BiDownArrow className="w-full" size={13} />
                    </div>
                  </div>
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
                  <div className="w-full relative">
                    <div className="absolute top-0 right-0 mt-1 mr-2 gap-0">
                      <BiUpArrow className="w-full" size={13} />
                      <BiDownArrow className="w-full" size={13} />
                    </div>
                  </div>
                  <div className="text-base md:text-xl lg:text-2xl font-semibold">
                    {all.filter((x: any) => x.projectType === "py").length}
                  </div>
                  <div className="text-xs md:text-sm text-gray-400">Python</div>
                </div>
                <div
                  onClick={() => handleFilter("ds")}
                  className="text-center cursor-pointer bg-violet-950 w-20 md:w-32 py-2 rounded-2xl"
                >
                  <div className="w-full relative">
                    <div className="absolute top-0 right-0 mt-1 mr-2 gap-0">
                      <BiUpArrow className="w-full" size={13} />
                      <BiDownArrow className="w-full" size={13} />
                    </div>
                  </div>
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
        <Suspense fallback={<Loading />}>
          <div className="flex flex-wrap justify-center gap-3 md:overflow-auto h-80 scrollbar scrollbar-thumb-purple-700 scrollbar-track-violet-900">
            {all !== undefined &&
              (selectedFilter !== "" ? filteredAll : all)

                // .sort((a: any, b: any) => b.stars - a.stars)
                .map((project: any) => (
                  <div
                    key={project._id}
                    className="card-container flex flex-col w-2/5 h-40 bg-gray-800 rounded-lg shadow-lg"
                  >
                    <a
                      href={`/projects/${
                        project.projectType === "rj"
                          ? "webdev/react-project"
                          : project.projectType === "vwd"
                          ? "webdev/vanilla-project"
                          : "python/python-project"
                      }/${project._id}`}
                      rel="noopener noreferrer"
                      className="h-40"
                    >
                      <div className="flex justify-between items-center m-2">
                        <div className="text-lg font-medium text-gray-200 hover:text-gray-300 truncate">
                          {project.title}
                        </div>
                        <div className="flex items-center">
                          <AiTwotoneStar className="w-4 h-4 text-yellow-200" />
                          <p className="text-sm text-gray-400 ml-1">
                            {project.star.length}
                          </p>
                        </div>
                      </div>
                      <p className="mt-2 mx-2 indent-3 text-sm text-gray-400 line-clamp-2">
                        {project.description}
                      </p>
                    </a>
                    <div
                      onClick={() =>
                        router.push("/profile/" + project.user.uid)
                      }
                      className="flex items-center justify-between px-4 py-2 mt-auto bg-gray-700 rounded-b-lg "
                    >
                      <p className="text-sm hover:text-sky-500 cursor-pointer text-gray-400">
                        {project.user.username ||
                          project.user.email ||
                          project.user.displayName}
                      </p>
                      <p className="text-xs text-gray-400">
                        {new Date(
                          // @ts-ignore
                          project.createdAt.seconds * 1000 +
                            project.createdAt.nanoseconds / 1000000
                        )
                          .toString()
                          .slice(0, 16)}
                      </p>
                    </div>
                  </div>
                ))}
          </div>
        </Suspense>
      </div>
    </section>
  );
};

export default page;
