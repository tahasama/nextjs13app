"use client";
import React, { useEffect } from "react";
import PythonEdit from "../page";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import {
  fetchProjectById,
  getProjectData,
} from "@/app/redux/features/projectSlice";

const page = ({ params: { projectId } }: any) => {
  const dispatch = useAppDispatch();
  const project = useAppSelector(getProjectData);
  console.log("🚀 ~ file: page.tsx:10 ~ page ~ project:", project);
  useEffect(() => {
    dispatch(fetchProjectById(projectId));
  }, []);
  return (
    <div className="text-white grid h-full place-items-center">
      <PythonEdit id={projectId} />
    </div>
  );
};

export default page;
