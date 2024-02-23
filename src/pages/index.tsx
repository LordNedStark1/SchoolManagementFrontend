
import { Inter } from "next/font/google";
import Index from "./createCohort/Index";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <Index/>
    </>
  );
}
