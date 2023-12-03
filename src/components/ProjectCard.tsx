import React from "react";

interface ProjectCardProps {
  imageSrc: string;
  title: string;
  description: string;
  buttonLink: string;
  cardColor: string;
  textColor: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imageSrc,
  title,
  description,
  buttonLink,
  cardColor,
  textColor
}) => {
  return (
    <div data-aos="fade-right"
      className={`${cardColor} w-full rounded-2xl py-12 flex flex-wrap lg:flex-row flex-col gap-10 items-center justify-center mb-10`}
    >
      <img className="md:w-[50%] w-full h-[350px]" src={imageSrc} alt="" />
      <div className={`text-white lg:w-[30%] w-full text-justify lg:px-0 px-10`}>
        <h1 className="text-[64px] font-bold">{title}</h1>
        <p className="pb-10">{description}</p>
        <a href={buttonLink} className="w-full">
          <button
            className={`py-2 px-4 ${textColor} rounded-full bg-white text-[18px] hover:ring-2 ring-black duration-300 active:font-bold `}
          >
            See Project
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
