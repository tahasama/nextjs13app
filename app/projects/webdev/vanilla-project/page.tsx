import EditorChoice from "./components/EditorChoice";
import FrameEeditor from "./components/FrameEditor";

export default function vanillaEdit() {
  return (
    <div className="flex flex-col items-center ml-16 w-[calc(100vw-5.1rem)] bg-gray-950 min-h-screen">
      <div className="mt-20"></div>

      <div className="my-16 flex flex-col ">
        <div
          style={{
            height: "100%",

            display: "flex",
            flexDirection: "column",
          }}
        >
          <EditorChoice />
          <FrameEeditor />
        </div>
      </div>
    </div>
  );
}
