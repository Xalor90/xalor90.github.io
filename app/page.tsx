import Image from "next/image";
import Headshot from "@/public/headshot.jpg";
import Experience from "@/app/components/resume/experience";

const Home = () => {
  return (
    <main className="
      sm:border-x-2
      sm:border-x-slate-500
      bg-white
      mx-auto
      max-w-full 
      sm:max-w-lg
      md:max-w-xl
      lg:max-w-3xl
      xl:max-w-5xl
      2xl:max-w-7xl">
      <div className="
        grid
        grid-flow-col
        grid-cols-3">
        <div className="
          col-span-1">
          <Image src={Headshot} alt="Derek Temple" priority className="
            rounded-full
            mx-auto
            my-4
            sm:my-5
            md:my-6
            lg:my-10
            size-24
            sm:size-28
            md:size-32
            lg:size-40" />
        </div>
        <div className="
          col-span-2
          pr-1
          sm:pr-3
          md:pr-5
          lg:pr-8">
          <h1 className="
            pt-6
            sm:pt-8
            md:pt-10
            lg:pt-16
            text-center
            text-2xl
            sm:text-3xl
            md:text-4xl
            lg:text-5xl
            font-bold">Derek Temple</h1>
          <p className="
            text-center
            sm:text-lg
            md:text-xl
            lg:text-2xl">Senior Software Engineer & DevOps Engineer</p>
        </div>
      </div>
      <div className="
			  px-2">
        <h2 className="
          text-slate-500
      	  sm:text-lg
          font-bold">Experience</h2>
        <Experience />
      </div>
    </main>
  );
};

export default Home;
