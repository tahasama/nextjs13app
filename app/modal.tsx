import * as Yup from "yup";
import { getAuthData } from "@/app/redux/features/authSlice";
import {
  cleanForm,
  cleanState,
  createProject,
  fetchProjectById,
  fetchProjectByUser,
  getProjectData,
  projectInitialState,
  updateProjectInfos,
} from "@/app/redux/features/projectSlice";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import React, {
  FormEventHandler,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useRouter, usePathname } from "next/navigation";
import { MdAddCircleOutline } from "react-icons/md";
import { AiOutlineCloseCircle } from "react-icons/ai";
import {
  barState,
  getSideBarData,
  iseditState,
} from "./redux/features/sideBarSlice";

export default function Modal() {
  const router = useRouter();
  const projectTypeRef = useRef<any>(null);
  const [showModal, setShowModal] = React.useState(false);
  const nameRef = useRef<any>(null);
  const descriptionRef = useRef<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const { title, description, projectType } = useAppSelector(getProjectData);
  const { displayName, uid } = useAppSelector(getAuthData);
  const { titleErr, projectTypeErr } = useAppSelector(getProjectData);
  const { newP } = useAppSelector(getSideBarData);

  const pathname = usePathname();

  const projectDestination = useMemo(
    () =>
      projectType === "py"
        ? "python/python-project"
        : projectType === "ds"
        ? "python/python-project"
        : projectType === "rj"
        ? "webdev/react-project"
        : projectType === "vwd" && "webdev/vanilla-project",
    [projectType]
  );

  useEffect(() => {
    const handleOutsideClick = (event: any) => {
      // Check if click event target is outside of the modal content
      if (event.target.classList.contains("closeModal")) {
        setShowModal(false);
        dispatch(barState(false));
      }
    };

    // Add event listener to window on mount
    window.addEventListener("click", handleOutsideClick);

    // Remove event listener from window on unmount
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [showModal]);

  const handleNewProjectCreate: FormEventHandler<HTMLFormElement> = async (
    e
  ) => {
    e.preventDefault();
    setLoading(true);
    const serializableProject = {
      user: { uid: uid, username: displayName },
      title: title,
      description: description,
      projectType: projectType,
      star: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    if (title === "") {
      setLoading(false);
      dispatch(cleanForm({ titleErr: "Please add a project name!" }));
      return; // Prevent form submission
    } else {
      dispatch(cleanForm({ titleErr: "" }));
    }

    if (projectType === "") {
      setLoading(false);
      dispatch(cleanForm({ projectTypeErr: "Please choose a project type!" }));
      return; // Prevent form submission
    } else {
      dispatch(cleanForm({ projectTypeErr: "" }));
    }

    if (title !== "" && projectType !== "") {
      dispatch(createProject(serializableProject))
        .then(({ payload }: any) => {
          if (payload._id) {
            router.push(`/projects/${projectDestination}/${payload._id}`);
          }
        })
        .then(() =>
          setTimeout(() => {
            dispatch(barState(false));
            setLoading(false);
            setShowModal(false);
            dispatch(cleanState(projectInitialState));
          }, 3000)
        );
    }
  };

  return (
    <>
      {pathname.includes("profile") ? (
        <button
          className={
            pathname.includes("profile")
              ? "bg-pink-700 text-white hover:bg-pink-800 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              : ""
          }
          type="button"
          onClick={() => {
            setShowModal(true);
            dispatch(iseditState(false));
          }}
        >
          Create Project
        </button>
      ) : (
        <div
          className="flex gap-14 "
          onClick={() => {
            setShowModal(true);
            dispatch(barState(!newP));
          }}
        >
          <MdAddCircleOutline className="w-7 h-7" />
          <div className="md:group-hover:block hidden ">New</div>
        </div>
      )}
      {showModal && (
        <div className="closeModal backdrop-brightness-50 backdrop-blur-sm -backdrop-hue-rotate-15  text-stone-200 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50">
          <div className="relative w-[24rem] max-h-screen my-6 mx-auto max-w-4xl">
            <div className="mt-16 border-0 font-semibold px-6 pb-6 bg-gray-900 outline-2  outline-slate-700 rounded-lg relative flex flex-col w-full outline-none focus:outline-none">
              <button
                className="absolute top-0 right-0 p-2 text-gray-400 hover:text-gray-500 focus:outline-none"
                onClick={() => {
                  setShowModal(false);
                  dispatch(barState(false));
                }}
              >
                <AiOutlineCloseCircle size={28} />
              </button>
              <form
                onSubmit={handleNewProjectCreate}
                className="flex flex-col gap-3 mt-10"
              >
                <header>
                  <h4>Project Name:</h4>
                </header>
                <footer>
                  <input
                    className="createInput border bg-slate-200 rounded w-full h-9 px-1 text-gray-900 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    ref={nameRef}
                    value={nameRef.current?.value}
                    onChange={() =>
                      dispatch(
                        updateProjectInfos({ title: nameRef.current?.value })
                      )
                    }
                  />
                  <p className="text-rose-600">{titleErr}</p>
                </footer>
                <header className="modalHeader">
                  <h4 className="modalHeaderTitle">Description:</h4>
                </header>
                <textarea
                  className="createInput border bg-slate-200  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  rows={8}
                  ref={descriptionRef}
                  value={descriptionRef.current?.value}
                  onChange={() =>
                    dispatch(
                      updateProjectInfos({
                        description: descriptionRef.current?.value,
                      })
                    )
                  }
                />
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  htmlFor="project-projectType"
                >
                  Select an option
                </label>
                <select
                  ref={projectTypeRef}
                  id="project-projectType"
                  onChange={() =>
                    dispatch(
                      updateProjectInfos({
                        projectType: projectTypeRef.current?.value,
                      })
                    )
                  }
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option defaultValue="">Choose a project</option>
                  <option value="py">Python</option>
                  <option value="ds">Data Science</option>
                  <option value="vwd">Vanilla Web Dev</option>
                  <option value="rj">React JS</option>
                </select>
                <p className="text-rose-600">{projectTypeErr}</p>
                <button
                  className="createButton bg-blue-500 mb-4 mt-1 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  type="submit"
                >
                  {!loading ? (
                    "Create Project"
                  ) : (
                    <div className="flex w-full items-center justify-center">
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
                    </div>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
