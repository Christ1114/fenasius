import Navbar from "@/components/navbar";
import Image from "next/image";
import HomeModule from "@/app/ui/components/home.module";
export default function Home() {
  return (
    <div className="w-full h-full">
      <main className=" flex flex-col items-center px-3 w-full h-full py-1">
        <Navbar/>
      </main>
    </div>
  );
}
