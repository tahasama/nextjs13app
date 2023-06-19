import * as Yup from "yup";
import { getAuthData } from "@/app/redux/features/authSlice";
import {
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
import { useRouter } from "next/navigation";

export default function Modal() {
  const router = useRouter();
  const projectTypeRef = useRef<any>(null);
  const [showModal, setShowModal] = React.useState(false);
  const nameRef = useRef<any>(null);
  const descriptionRef = useRef<any>(null);
  const [toUpdate, setToUpdate] = useState<boolean>(true);
  const dispatch = useAppDispatch();
  // const [error, setError] = useState("");
  const { title, description, code, projectType } =
    useAppSelector(getProjectData);
  const { displayName, email, uid } = useAppSelector(getAuthData);
  const Proj = useAppSelector(getProjectData);
  const { _id } = useAppSelector(getProjectData);
  console.log("🚀 ~ file: modal.tsx:27 ~ Modal ~ Proj:", Proj);
  // const router = useRouter();

  const projectDestination = useMemo(
    () =>
      projectType === "py"
        ? "python/python-project?type=basic"
        : projectType === "ds"
        ? "python/python-project?type=data"
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
      }
    };

    // Add event listener to window on mount
    window.addEventListener("click", handleOutsideClick);

    // Remove event listener from window on unmount
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const schema = Yup.object().shape({
    title: Yup.string().required("Please add a project name!!!!!"),
    projectType: Yup.string().required("Please choose a project projectType!"),
  });

  const handleNewProjectCreate: FormEventHandler<HTMLFormElement> = async (
    e
  ) => {
    e.preventDefault();

    await schema.validate({ title, projectType });
    // Validation passed, create project
    const serializableProject = {
      user: { uid: uid, username: displayName },
      title: title,
      description: description,
      projectType: projectType,
      star: [],
    };
    setToUpdate(false);
    dispatch(createProject(serializableProject)).then(({ payload }: any) => {
      dispatch(cleanState(projectInitialState)),
        setShowModal(false),
        // }) .then(({ payload }: any) => dispatch(fetchProjectById(payload.id)))

        setTimeout(() => {
          payload._id &&
            router.push(`/projects/${projectDestination}/${payload._id}`);
        }, 50);
    });
    // );
    // .then(() =>
    //   router.push(`{projects/webdev/vanilla-project/${projectId}}`)
    // );
  };

  return (
    <>
      <button
        className="bg-pink-700 text-white hover:bg-pink-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Create Project
      </button>
      {showModal ? (
        <>
          <div className="closeModal text-stone-200 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 ">
            <div className=" relative w-[24rem] max-h-screen my-6 mx-auto max-w-4xl">
              {/*content*/}
              <div className="mt-16 border-0 px-6 pb-6 bg-indigo-950 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
                {/*header*/}
                <div className="flex justify-between font-bold items-center p-5 rounded-t">
                  <button
                    className="p-1 ml-auto border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className=" text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      X
                    </span>
                  </button>
                </div>
                {/*body*/}
                <form
                  onSubmit={handleNewProjectCreate}
                  className="flex flex-col gap-3"
                >
                  <header className="">
                    <h4 className=""> Project name : </h4>
                  </header>
                  <footer className="">
                    <input
                      className="createInput border bg-slate-50 rounded w-full py-2 px-3 text-gray-900 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      ref={nameRef}
                      value={title}
                      onChange={() =>
                        dispatch(
                          updateProjectInfos({ title: nameRef.current?.value })
                        )
                      }
                    />
                    {/* <p className="text-rose-600">{error}</p> */}
                  </footer>
                  <header className="modalHeader">
                    <h4 className="modalHeaderTitle"> Description : </h4>
                  </header>
                  <textarea
                    className="createInput border bg-slate-50 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    rows={8}
                    ref={descriptionRef}
                    value={description}
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
                    <option value="rj">React js</option>
                  </select>
                  {/* <p className="text-rose-600">{error}</p> */}

                  <button
                    className="createButton bg-blue-500 mb-8 mt-1 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    type="submit"
                  >
                    Create project
                  </button>
                </form>

                {/*footer*/}
              </div>
            </div>
          </div>
          {/* {(title === "" || projectType === "") && ( */}
          {/* )} */}
        </>
      ) : null}
    </>
  );
}
