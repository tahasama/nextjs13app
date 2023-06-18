"use client";

import React from "react";
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
} from "../redux/features/projectSlice";
import { getAuthData } from "../redux/features/authSlice";
import { barState, sideBArInitialState } from "../redux/features/sideBarSlice";

const kiwi = Kiwi_Maru({
  subsets: ["latin"],
  weight: "400",
});

const novaOval = Nova_Oval({
  subsets: ["latin"],
  weight: "400",
});

const Side = ({ remove, save, clone }: any) => {
  const { projectId } = useParams();
  const dispatch = useAppDispatch();
  const params = useParams();
  const bar = useAppSelector((state) => state.sideBar);
  const { saved, user, star } = useAppSelector(getProjectData);
  const { uid } = useAppSelector(getAuthData);
  const [result, setResult] = useState(false);
  const router = useRouter();

  console.log("2222222222", projectId && uid === user.uid);
  console.log("5555555555", uid, "7777777777", user.uid);

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

  return (
    <nav
      className={`z-50 fixed mt-16 overflow-auto w-16 h-[calc(100vh-64px)] border-r-2 border-slate-500 shadow-slate-700 text-lg
       bg-black py-3 text-slate-400 flex flex-col items-center justify-around  ${kiwi.className}`}
    >
      {/* <button
        className="side c but"
        onMouseEnter={() => dispatch(barState({ home: true }))}
        onMouseLeave={() => dispatch(barState(sideBArInitialState))}
        onClick={() => alerted("/")}
      >
        <div className="iconSide">
          <AiFillHome className="w-8 h-8 " />
        </div>
        {bar.home && <div className="message">Home</div>}
      </button> */}
      {!uid && (
        <>
          <button
            className="side d but"
            onMouseEnter={() => dispatch(barState({ code: true }))}
            onMouseLeave={() => dispatch(barState(sideBArInitialState))}
            onClick={handleCodeAndRun}
          >
            <div className="iconSide">
              <HiOutlineCode className="w-7 h-7 " />
            </div>{" "}
            {bar.code && <div className="message">Code and Run</div>}
          </button>
          <button
            className="but"
            onMouseEnter={() => dispatch(barState({ react: true }))}
            onMouseLeave={() => dispatch(barState(sideBArInitialState))}
            onClick={handleReactCodeAndRun}
          >
            <div className="iconSide reacticon">
              <DiReact className="w-8 h-8 " />
            </div>{" "}
            {bar.react && (
              <div className="message reactmessage">React and Run</div>
            )}
          </button>
          <button
            className="but"
            onMouseEnter={() => dispatch(barState({ react: true }))}
            onMouseLeave={() => dispatch(barState(sideBArInitialState))}
            onClick={handlePython}
          >
            <div className="iconSide reacticon">
              <DiPython className="w-8 h-8 " />
            </div>{" "}
            {bar.python && (
              <div className="message reactmessage">Python to go</div>
            )}
          </button>
          <button
            className="but"
            onMouseEnter={() => dispatch(barState({ react: true }))}
            onMouseLeave={() => dispatch(barState(sideBArInitialState))}
            onClick={handleDataScience}
          >
            <div className="iconSide reacticon">
              <FaChartLine className="w-6 h-6 " />
            </div>{" "}
            {bar.data && (
              <div className="message reactmessage">data Science</div>
            )}
          </button>
        </>
      )}
      {uid && (
        <>
          <button
            onMouseEnter={() => dispatch(barState({ new: true }))}
            onMouseLeave={() => dispatch(barState(sideBArInitialState))}
            onClick={handleNewProject}
          >
            <div>
              <MdAddCircleOutline className="w-7 h-7" />
            </div>
            {bar.new && <div>New Project</div>}
          </button>
          {projectId && uid === user.uid && (
            <>
              <>
                <button
                  onMouseEnter={() => dispatch(barState({ save: true }))}
                  onMouseLeave={() => dispatch(barState(sideBArInitialState))}
                  onClick={save}
                >
                  <div>
                    <AiFillSave className="w-7 h-7" />
                  </div>
                  {bar.save && <div>Save</div>}
                </button>
                <button
                  onMouseEnter={() => dispatch(barState({ edit: true }))}
                  onMouseLeave={() => dispatch(barState(sideBArInitialState))}
                  onClick={() => alerted("/create")}
                >
                  <div>
                    <AiFillEdit className="w-7 h-7" />{" "}
                  </div>
                  {bar.edit && <div>Edit project's infos</div>}
                </button>
              </>
            </>
          )}

          <s
            onMouseEnter={() => dispatch(barState({ open: true }))}
            onMouseLeave={() => dispatch(barState(sideBArInitialState))}
            onClick={handleOpenProject}
          >
            <div>
              <AiOutlineFolderOpen className="w-7 h-7" />
            </div>
            {bar.open && <div>Open Project</div>}
          </s>
          {projectId &&
            uid === user.uid &&
            !location.pathname.startsWith("/profile") && (
              <button
                onMouseEnter={() => dispatch(barState({ delete: true }))}
                onMouseLeave={() => dispatch(barState(sideBArInitialState))}
                onClick={remove}
              >
                <div>
                  <AiFillDelete className="w-7 h-7" />
                </div>
                {bar.delete && <div>Delete</div>}
              </button>
            )}
          {uid !== user.uid &&
            params.id &&
            !location.pathname.startsWith("/profile") && (
              <>
                <button
                  onMouseEnter={() => dispatch(barState({ delete: true }))}
                  onMouseLeave={() => dispatch(barState(sideBArInitialState))}
                  onClick={clone}
                >
                  <div>
                    <FaRegClone />
                  </div>
                  {bar.delete && <div>Clone Project</div>}
                </button>
                <button
                  onMouseEnter={() => dispatch(barState({ edit: true }))}
                  onMouseLeave={() => dispatch(barState(sideBArInitialState))}
                  onClick={handleAuthorsProfile}
                >
                  <div>
                    <ImProfile />
                  </div>
                  {bar.edit && <div>Authors's Profile</div>}
                </button>
                <button
                  onMouseEnter={() => dispatch(barState({ star: true }))}
                  onMouseLeave={() => dispatch(barState(sideBArInitialState))}
                  onClick={handleStar}
                >
                  {!star.includes(uid) ? (
                    <div>
                      <div>
                        <AiOutlineStar />
                      </div>
                      {bar.star && <div>Give it a Star</div>}
                    </div>
                  ) : (
                    <div>
                      <div>
                        <AiTwotoneStar />
                      </div>
                      {bar.star && (
                        <div>you rated this project. unrate it? </div>
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
