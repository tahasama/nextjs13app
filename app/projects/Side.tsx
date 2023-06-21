"use client";

import React, { useEffect } from "react";
import { Kiwi_Maru, Nova_Oval } from "next/font/google";
import Link from "next/link";
import {
  AiFillEdit,
  AiFillHome,
  AiFillSave,
  AiFillDelete,
  AiOutlineFolderOpen,
  AiTwotoneStar,
  AiOutlineStar,
} from "react-icons/ai";
import { DiReact } from "react-icons/di";

import { HiOutlineCode } from "react-icons/hi";
import { ImProfile } from "react-icons/im";
import { FaChartLine, FaRegClone } from "react-icons/fa";
import { MdAddCircleOutline } from "react-icons/md";
import { DiPython } from "react-icons/di";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  StarProject,
  getProjectData,
  projectInitialState,
  updateSaved,
  updateStar,
  cleanUpProjects,
  fetchProjectByUser,
  cleanState,
  deleteProject,
  cloneProject,
  updateCellCode,
  saveProject,
  updateCode,
} from "../redux/features/projectSlice";
import { getAuthData } from "../redux/features/authSlice";
import { barState, sideBArInitialState } from "../redux/features/sideBarSlice";
import Modal from "../modal";

const kiwi = Kiwi_Maru({
  subsets: ["latin"],
  weight: "400",
});

const novaOval = Nova_Oval({
  subsets: ["latin"],
  weight: "400",
});

const Side = () => {
  const { projectId } = useParams();
  const dispatch = useAppDispatch();
  const params = useParams();
  const bar = useAppSelector((state) => state.sideBar);
  const [result, setResult] = useState(false);
  const router = useRouter();
  const [saveMessage, setSaveMessage] = useState("");
  const { uid, email } = useAppSelector(getAuthData);
  const [loading, setLoading] = useState(false);
  const {
    title,
    description,
    selectedDiv,
    code,
    updatedAt,
    saved,
    reactCode,
    cells,
    user,
    star,
    projectType,
    pythonCode,
  } = useAppSelector(getProjectData);
  console.log("🚀 ~ saved121342423424234234234:", saved);
  console.log(
    "🚀 ~ file: Side.tsx:79 ~ Side ~ pythonCode:777777777777777777",
    pythonCode
  );

  console.log("2222222222", projectId && uid === user.uid);
  console.log("5555555555", uid, "7777777777", user);

  useEffect(() => {
    dispatch(updateSaved(false));
  }, []);

  const alerted = (destination: string) => {
    if (!saved) {
      const result = window.confirm("are you sure you want to leave? ");
      setResult(result);
      console.log("DONT LEAVE....", result);
      if (result) {
        dispatch(updateSaved(true));
        router.push(destination);
      } else {
        router.push("");
      }
    } else {
      router.push(destination);
    }
  };
  const handleStar = (e: any) => {
    e.preventDefault();
    const starArray: any[] = [...star];

    if (star.includes(uid)) {
      const starArrayIndex = starArray.indexOf(uid);
      if (starArrayIndex !== -1) {
        starArray.splice(starArrayIndex, 1);
      }
      dispatch(StarProject({ _id: projectId, star: starArray }));
      dispatch(updateStar({ star: starArray }));
    } else {
      starArray.push(uid);
      dispatch(StarProject({ _id: projectId, star: starArray }));
      dispatch(updateStar({ star: starArray }));
    }
  };
  const handleOpenProject = () => {
    dispatch(cleanUpProjects([projectInitialState]));
    dispatch(fetchProjectByUser(uid));
    alerted("/projects");
  };
  const handleNewProject = () => {
    if (!saved) {
      const result = window.confirm("are you sure you want to leave? ");

      if (result) {
        dispatch(updateSaved(true));
        dispatch(cleanState(projectInitialState));
        router.push("/create");
      } else {
        router.push("");
      }
    } else {
      dispatch(cleanState(projectInitialState));
      router.push("/create");
    }
  };

  const handleCodeAndRun = () => {
    router.push("projects/webdev/vanilla-project");
    dispatch(cleanState(projectInitialState));
  };
  const handleReactCodeAndRun = () => {
    router.push("projects/webdev/react-project");
    dispatch(cleanState(projectInitialState));
  };
  const handlePython = () => {
    router.push("projects/python/python-project?type=basic");
    dispatch(cleanState(projectInitialState));
  };
  const handleDataScience = () => {
    router.push("projects/python/python-project?type=data");
    dispatch(cleanState(projectInitialState));
  };

  const handleAuthorsProfile = () => {
    dispatch(cleanUpProjects([projectInitialState]));
    dispatch(fetchProjectByUser(user));
    alerted("/profile/" + user);
  };

  const handleUpdateTitle = (e: any) => {
    e.preventDefault();
    try {
      dispatch(
        saveProject({
          _id: projectId,
          title: title,
          description: description,
          code: { html: code?.html, css: code?.css, js: code?.js },
          cells: cells,
          user: {
            uid: uid,
            email: email,
          },
          star: [],
          projectType: projectType,
          pythonCode: pythonCode,
        })
      );

      dispatch(
        updateCode({ code: { html: code?.html, css: code?.css, js: code?.js } })
      );
      dispatch(updateCellCode(cells));
      dispatch(updateSaved(true));
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } catch (error) {
      setLoading(true);
    }
  };

  const handleClone = () => {
    dispatch(
      cloneProject({
        user: { email: email, uid: uid },
        title: title,
        description: description,
        code: { html: code?.html, css: code?.css, js: code?.js },
        star: [],
        projectType: "",
      })
    );
    // setSaveMessage("Cloned ! ");
    // setTimeout(() => {
    //   setSaveMessage("");
    // }, 1000);
  };

  const handleDeleteProject = async () => {
    const result = window.confirm("are you sure you want to delete ");
    if (result) {
      dispatch(deleteProject(projectId));
      dispatch(cleanState(projectInitialState));
      //   navigate("/projects");
      // } else {
      //   navigate("");
      // }
    }
  };

  return (
    <nav
      className={`z-50 bottom-0 fixed bg-black overflow-auto w-full h-16 md:w-36 md:h-[calc(100vh-64px)] md:border-r-2 border-slate-500 shadow-slate-700 text-md
       py-3 text-slate-400 flex flex-row md:flex-col items-center md:items-end md:hover:items-stretch justify-around  ${kiwi.className} md:-translate-x-20 md:hover:translate-x-0 md:hover:w-28  transition-all duration-1000 ease-in-out group`}
    >
      {!uid && (
        <>
          <button
            className="flex items-center justify-around mr-2 md:mr-5 md:group-hover:mr-0"
            onClick={handleCodeAndRun}
          >
            <div>
              <HiOutlineCode className="w-7 h-7 " />
            </div>{" "}
            <div className="md:group-hover:block hidden ">Code and Run</div>
          </button>
          <button
            className="flex items-center justify-around mr-2 md:mr-5 md:group-hover:mr-0"
            onClick={handleReactCodeAndRun}
          >
            <div>
              <DiReact className="w-8 h-8 " />
            </div>{" "}
            <div className="md:group-hover:block hidden ">React and Run</div>
          </button>
          <button
            className="flex items-center justify-around mr-2 md:mr-5 md:group-hover:mr-0"
            onClick={handlePython}
          >
            <div>
              <DiPython className="w-8 h-8 " />
            </div>{" "}
            <div className="md:group-hover:block hidden ">Python to go</div>
          </button>
          <button
            className="flex items-center justify-around mr-2 md:mr-5 md:group-hover:mr-0"
            onClick={handleDataScience}
          >
            <div>
              <FaChartLine className="w-6 h-6 " />
            </div>{" "}
            <div className="md:group-hover:block hidden ">data Science</div>
          </button>
        </>
      )}
      {uid && (
        <>
          <button className="flex items-center justify-around mr-2 md:mr-5 md:group-hover:mr-0">
            <div>
              <Modal />
            </div>
            <div className="md:group-hover:block hidden ">New</div>
          </button>
          {projectId && uid === user.uid && (
            <>
              <>
                <button
                  onClick={handleUpdateTitle}
                  className="flex items-center justify-around mr-2 md:mr-5 md:group-hover:mr-0"
                >
                  <div>
                    {!loading ? (
                      <AiFillSave className="w-7 h-7" />
                    ) : (
                      <>
                        <svg
                          aria-hidden="true"
                          className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                          />
                        </svg>
                      </>
                    )}{" "}
                  </div>
                  <div className="md:group-hover:block hidden ">Save</div>
                </button>
                <button
                  onClick={() => alerted("/create")}
                  className="flex items-center justify-around mr-2 md:mr-5 md:group-hover:mr-0"
                >
                  <div>
                    <AiFillEdit className="w-7 h-7" />{" "}
                  </div>
                  <div className="md:group-hover:block hidden ">Edit</div>
                </button>
              </>
            </>
          )}

          <button
            className="flex items-center justify-around mr-2 md:mr-5 md:group-hover:mr-0"
            onClick={handleOpenProject}
          >
            <div>
              <AiOutlineFolderOpen className="w-7 h-7" />
            </div>
            <div className="md:group-hover:block hidden ">Open</div>
          </button>
          {projectId && uid === user.uid && (
            <button
              className="flex items-center justify-around mr-2 md:mr-5 md:group-hover:mr-0"
              onClick={handleDeleteProject}
            >
              <div>
                <AiFillDelete className="w-7 h-7" />
              </div>
              <div className="md:group-hover:block hidden ">Delete</div>
            </button>
          )}
          {uid !== user.uid && projectId && (
            <>
              <button
                className="flex items-center justify-around mr-2 md:mr-5 md:group-hover:mr-0"
                onClick={handleClone}
              >
                <div>
                  <FaRegClone className="w-6 h-6" />
                </div>
                <div className="md:group-hover:block hidden ">Clone</div>
              </button>
              <button
                className="flex items-center justify-around mr-2 md:mr-5 md:group-hover:mr-0"
                onClick={handleAuthorsProfile}
              >
                <div>
                  <ImProfile className="w-6 h-6" />
                </div>
                <div className="md:group-hover:block hidden ">Profile</div>
              </button>
              <button
                className="flex items-center justify-around mr-2 md:mr-5 md:group-hover:mr-0"
                onClick={handleStar}
              >
                {!star.includes(uid) ? (
                  <div className="flex items-center justify-around w-full">
                    <div>
                      <AiOutlineStar className="w-7 h-7" />
                    </div>
                    <div className="md:group-hover:block hidden ">Star</div>
                  </div>
                ) : (
                  <div className="flex items-center justify-around w-full">
                    <div>
                      <AiTwotoneStar />
                    </div>
                    {bar.star && (
                      <div className="md:group-hover:block hidden ">
                        unrate it?{" "}
                      </div>
                    )}
                  </div>
                )}
              </button>
            </>
          )}
        </>
      )}
    </nav>
  );
};

export default Side;
