"use client";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import {
  fetchProjectById,
  getProjectData,
} from "@/app/redux/features/projectSlice";
import ReactCells from "../reactCells";

const page = ({ params: { projectId } }: any) => {
  console.log("🚀 ~ file: page.tsx:13 ~ page ~ projectId:", projectId);
  const dispatch = useAppDispatch();
  const project = useAppSelector(getProjectData);
  console.log("🚀 ~ file: page.tsx:10 ~ page ~ project:", project);
  useEffect(() => {
    dispatch(fetchProjectById(projectId));
  }, []);
  return (
    <div className="text-white grid place-items-center">
      <ReactCells />
    </div>
  );
};

export default page;
