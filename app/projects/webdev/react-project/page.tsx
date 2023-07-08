import { Abel } from "next/font/google";
import ReactCells from "./reactCells";

const abel = Abel({
  subsets: ["latin"],
  weight: "400",
});

export default function ReactEdit() {
  return <ReactCells />;
}
