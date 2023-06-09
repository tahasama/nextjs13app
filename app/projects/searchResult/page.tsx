"use client";
import {
  getProjectData,
  searchProjectsData,
  searchTerms,
} from "@/app/redux/features/projectSlice";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import React, { Suspense, useEffect } from "react";
import Loading from "./Loading";
import { AiTwotoneStar } from "react-icons/ai";
import { useRouter, useSearchParams } from "next/navigation";

const page = () => {
  const { searchAll } = useAppSelector(getProjectData);
  const router = useRouter();
  const search = useSearchParams().get("search");
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(searchProjectsData(search)).then(() => dispatch(searchTerms("")));
  }, [search]);

  return (
    <section className="bg-gray-900 flex flex-col md:flex-row w-full min-h-screen  text-white p-10  relative rounded-lg shadow-lg">
      <Suspense fallback={<Loading />}>
        <p className="top-28 md:top-24 w-4/5 md:left-16 left-10 py-4 absolute text-white text-xl font-serif">
          {searchAll.length} results for: {search}
        </p>

        <div className="flex flex-wrap justify-center gap-3 mt-3 md:mt-0 top-36 md:top-40 relative overflow-auto h-96 scrollbar scrollbar-thumb-purple-700 scrollbar-track-violet-900">
          {searchAll.length !== 0 ? (
            searchAll.map((project: any) => (
              <div
                key={project._id}
                className="card-container flex flex-col w-full md:w-2/5 h-44 bg-gray-800 mx-1 rounded-lg shadow-lg hover:ring-2 mt-1 hover:ring-purple-950 hover:bg-purple-950 hover:text-white transition-all duration-500 ease-in"
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
                  onClick={() => router.push("/profile/" + project.user.uid)}
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
            ))
          ) : (
            <div>No Results</div>
          )}
        </div>
      </Suspense>
    </section>
  );
};

export default page;
