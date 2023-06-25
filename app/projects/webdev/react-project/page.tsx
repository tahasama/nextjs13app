import { Abel } from "next/font/google";
import ReactCells from "./reactCells";

const abel = Abel({
  subsets: ["latin"],
  weight: "400",
});

export default function ReactEdit() {
  return (
    <main className="bg-gray-950 min-h-screen">
      <div className="grid place-items-center  ml-16  w-[calc(100vw-5.1rem)]">
        <ReactCells />
      </div>
    </main>
  );
}
