import Navbar from "../components/layout/Navbar";
import Type from "../components/layout/Type";

export default function Contact() {
  return (
    <div className="pt-[185px] font-segoe_ui">
      <Navbar />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-[#B9DFFC] font-extrabold text-center lg:text-[104px] text-[80px] pr-6">
          Hi, I'm a
        </h1>
        <Type />
      </div>
      <div className="lg:mx-[100px] text-center">
        <p className="text-white font-medium lg:text-[64px] text-[32px] pb-8" data-aos="fade-up">
          Let's brew and analyze greatness together
        </p>
        <a href="mailto:rafli.sh@gmail.com" data-aos="fade-up">
          <button className="py-2 px-4 text-white rounded-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-[24px] hover:ring-2 ring-white duration-300 active:font-bold">
            Get in touch
          </button>
          
        </a>
      </div>
    </div>
  );
}
