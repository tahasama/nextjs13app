"use client";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import {
  fetchProjectById,
  getProjectData,
} from "@/app/redux/features/projectSlice";
import ReactEdit from "../page";

const page = ({ params: { projectId } }: any) => {
  const dispatch = useAppDispatch();
  const project = useAppSelector(getProjectData);
  useEffect(() => {
    dispatch(fetchProjectById(projectId));
  }, []);
  return (
    <div className="text-white grid place-items-center">
      <ReactEdit />
    </div>
  );
};

export default page;
