import Navbar from "../components/layout/Navbar";
import ProjectCard from "../components/ProjectCard";
import ProjectCardReverse from "../components/ProjectCardReverse";
import Footer from "../components/layout/Footer";
export default function Work() {
  return (
    <div className="pt-[185px] font-segoe_ui w-full lg:mx-[3%]">
      <Navbar />
      <h1 data-aos="fade-up" className="font-segoe_ui font-extrabold text-center items-center lg:text-[128px] text-[100px] bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-transparent bg-clip-text">
        Hi, I'm Rafli.
      </h1>
      <p data-aos="fade-up" className="text-center text-[20px] text-[#DBEFFE] pb-10">
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
        imageSrc="/tucome.svg"
        title="Tucome"
        description="Tucome: An online application that connects freelance workers with service requests from the community using artificial intelligence (AI). Achievement: 1st Winners UX Challenge 4C National Competition"
        buttonLink="/Tucome"
        cardColor="bg-[#8255F8]"
        textColor="text-[#8255F8]"
      />

      <ProjectCardReverse
        imageSrc="/savefood.svg"
        title="Savefood"
        description="Food waste solution with donation fiture and marketplace. Achievement:
        1st Winners Software Development Switchfest 2023,
        3rd Winners Software Development Invofest 2023,
        1st Winners Raion Hackjam 2023,
        1st Business Case Competition Before"
        buttonLink="/Savefood"
        cardColor="bg-[#61A894]"
        textColor="text-[#61A894]"
      />

      <ProjectCard
        imageSrc="/Coddie.svg"
        title="Coddie"
        description="Mobile-Based Coding Learning App for Kids with Integrated Gamification Features. Achievement:
        1st Winners UI/UX Design Invention 2023"
        buttonLink="/Coddie"
        cardColor="bg-[#FFBA81]"
        textColor="text-[#FFBA81]"
      />

      <ProjectCardReverse
        imageSrc="/nutrisyncs.svg"
        title="NutriSync"
        description="Smart platform to design personalized diet plans and workout programs tailored to users' daily routines with the assistance of artificial intelligence (AI). Achievement:
        1st Runners-up Winners UI UX ICOM UAD 2023"
        buttonLink="/NutriSync"
        cardColor="bg-[#68B83C]"
        textColor="text-[#68B83C]"
      />

      <ProjectCard
        imageSrc="/ecotions.svg"
        title="Ecotions"
        description="An Application for Lowering Carbon Emissions with Monitoring and Carbon Footprint Reduction Features. Achievment:
        1st Runners Up UI UX Infovest 2023"
        buttonLink="/Ecotions"
        cardColor="bg-[#4F8C7B]"
        textColor="text-[#4F8C7B]"
      />
      <Footer />
    </div>
  );
}
