

interface ProjectCardReverseProps {
  imageSrc: string;
  title: string;
  description: string;
  buttonLink: string;
  cardColor: string;
  textColor: string;
}

const ProjectCardReverse = ({
  imageSrc,
  title,
  description,
  buttonLink,
  cardColor,
  textColor
}: ProjectCardReverseProps) => {
  return (
    <div
    className={`${cardColor} w-full rounded-2xl py-12 flex flex-wrap gap-10 items-center justify-center mb-10`}
    >
      <div className={`text-white w-[30%] text-justify`}>
        <h1 className="text-[64px] font-bold">{title}</h1>
        <p className="pb-10">{description}</p>
        <a href={buttonLink}>
          <button
            className={`py-2 px-4 ${textColor} rounded-full bg-white text-[18px] hover:ring-2 ring-black duration-300 active:font-bold `}
          >
            See Project
          </button>
        </a>
      </div>
      <img className="w-[50%] h-[350px]" src={imageSrc} alt="" />
    </div>
  );
};

export default ProjectCardReverse;
