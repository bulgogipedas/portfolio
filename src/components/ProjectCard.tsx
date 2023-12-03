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
    <div data-aos="fade-up"
      className={`${cardColor} w-full rounded-2xl py-12 flex flex-wrap lg:flex-row flex-col gap-10 items-center justify-center mb-10`}
    >
      <img className="md:w-[50%] w-[70%] lg:h-[350px] " src={imageSrc} alt="" />
      <div className={`text-white lg:w-[30%] w-full text-justify lg:px-0 px-10`}>
        <h1 className="lg:text-[64px] text-[32px] font-bold">{title}</h1>
        <p className="lg:pb-10 pb-5 lg:text-[20px] text-[12px]">{description}</p>
        <a href={buttonLink} className="w-full">
          <button
            className={`py-2 px-4 ${textColor} rounded-full bg-white lg:text-[18px] text-[10px] hover:ring-2 ring-black duration-300 active:font-bold `}
          >
            See Project
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
