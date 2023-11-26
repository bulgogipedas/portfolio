import Navbar from "../components/layout/Navbar";
import ProjectCard from "../components/ProjectCard";
import ProjectCardReverse from "../components/ProjectCardReverse";
import Footer from "../components/layout/Footer";
export default function Work() {
  return (
    <div className="pt-[185px] font-segoe_ui mx-[3%]">
      <Navbar />
      <h1 className="font-segoe_ui font-extrabold text-center items-center text-[128px] bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-transparent bg-clip-text">
        Hi, I'm Rafli.
      </h1>
      <p className="text-center text-[20px] text-[#DBEFFE] pb-10">
        I'm dedicated to shaping experiences that captivate, resonate, and
        prioritize the needs of our users. Ensuring engagement, accessibility,
        and a user-centric approach are at the core of my product management
        journey.
      </p>
      {/* <div className="bg-[#8255F8] w-full rounded-2xl py-12 flex flex-wrap gap-10 items-center justify-center">
        <img className="w-[50%]" src="public/tucome.svg" alt="" />
        <div className="text-[#DBEFFE] w-[30%] text-justify">
          <h1 className="text-[64px] font-bold">Tucome</h1>
          <p className="pb-10">
            Tucome: An online application that connects freelance workers with
            service requests from the community using artificial intelligence
            (AI). Achievement: 1st Winners UX Challenge 4C National Competition
          </p>
          <button className="py-2 px-4 text-[#8255F8] rounded-full bg-white text-[18px] hover:ring-2 ring-black duration-300 active:font-bold">
            See Project
          </button>
        </div>
      </div> */}
      <ProjectCard
        imageSrc="public/tucome.svg"
        title="Tucome"
        description="Tucome: An online application that connects freelance workers with service requests from the community using artificial intelligence (AI). Achievement: 1st Winners UX Challenge 4C National Competition"
        buttonLink="/Tucome"
        cardColor="#8255F8"
      />

      <ProjectCardReverse
        imageSrc="public/tucome.svg"
        title="Tucome"
        description="Tucome: An online application that connects freelance workers with service requests from the community using artificial intelligence (AI). Achievement: 1st Winners UX Challenge 4C National Competition"
        buttonLink="/Contact"
        cardColor="#8255F8"
      />

      <ProjectCard
        imageSrc="public/tucome.svg"
        title="Tucome"
        description="Tucome: An online application that connects freelance workers with service requests from the community using artificial intelligence (AI). Achievement: 1st Winners UX Challenge 4C National Competition"
        buttonLink="/Notes"
        cardColor="#8255F8"
      />
      <Footer/>
    </div>
  );
}
