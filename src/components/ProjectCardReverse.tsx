

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
    <div data-aos="fade-up"
    className={`${cardColor} w-full rounded-2xl py-12 flex lg:flex-row flex-col-reverse flex-wrap gap-10 items-center justify-center mb-10`}
    >
      <div className={`text-white lg:w-[30%] text-justify lg:px-0 px-10`}>
        <h1 className="lg:text-[64px] text-[32px] font-bold">{title}</h1>
        <p className="lg:pb-10 pb-5 lg:text-[20px] text-[12px]">{description}</p>
        <a href={buttonLink}>
          <button
            className={`py-2 px-4 ${textColor} rounded-full bg-white lg:text-[18px] text-[10px] hover:ring-2 ring-black duration-300 active:font-bold `}
          >
            See Project
          </button>
        </a>
      </div>
      <img className="md:w-[50%] w-[70%] lg:h-[350px]" src={imageSrc} alt="" />
    </div>
  );
};

export default ProjectCardReverse;
