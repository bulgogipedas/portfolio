interface CardUserResearch{
    ImageSrc: string;
    Heading: string;
    Description: string;
}

const CardUserResearch: React.FC<CardUserResearch> = ({
    ImageSrc,
    Heading,
    Description
}) => {
    return(
        <div data-aos="fade-up" className="rounded-lg shadow bg-opacity-60 md:w-1/3 p-5 bg-[#40514A] ">
            <div className={`rounded-lg ${ImageSrc} w-full lg:h-20 h-10`}>
            </div>
            <div className="text-white">
                <h2 className="lg:text-xl my-3 font-semibold">{Heading}</h2>
                <p className="lg:text-[18px] text-[12px]">{Description}</p>
            </div>
        </div>
    )
}

export default CardUserResearch;