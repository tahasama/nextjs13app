"use client";

import { useAppSelector } from "@/app/redux/hooks";
import { getProjectData } from "@/app/redux/features/projectSlice";
import { useRef } from "react";

const Iframe = () => {
  const { code } = useAppSelector(getProjectData);
  const iframe = useRef<any>();
  const srcDoc = `<html>
                    <body>${code?.html}</body>
                    <style>${code?.css}</style>
                    <script>${code?.js}</script> 
                  </html>`;
  return (
    <div className={`preview-wrapper  w-20`}>
      <iframe
        title="preview"
        ref={iframe}
        sandbox="allow-scripts"
        srcDoc={srcDoc}
        className="w-full"
      />
    </div>
  );
};

export default Iframe;
