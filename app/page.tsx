import Image from "next/image";
import Headshot from "@/public/headshot.jpg";

export default function Home() {
  return (
    <main>
      <div className="flex justify-center">
        <div className="flex-none px-4 py-6">
          <Image src={Headshot} alt="Derek Temple" className="size-32 rounded-full" priority />
        </div>
        <div className="flex-auto px-4 my-auto max-w-64">
          <h1 className="text-xl font-bold">Derek Temple</h1>
          <p>Senior Software Engineer & DevOps Engineer</p>
        </div>
      </div>
    </main>
  );
}
