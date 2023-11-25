import Navbar from "../components/layout/Navbar";
import Type from "../components/layout/Type";

export default function Contact() {
  return (
    <div className="pt-[185px] font-segoe_ui">
      <Navbar />
      <div className="flex items-center justify-center">
        <h1 className="text-[#B9DFFC] font-extrabold text-center text-[104px] pr-6">
          Hi, I'm a
        </h1>
        <Type />
      </div>
      <div className="mx-[100px] text-center">
        <p className="text-white font-medium text-[64px] pb-8">
          Let's brew and analyze greatness together
        </p>
        <a href="mailto:rafli.sh@gmail.com">
          <button className="py-2 px-4 text-white rounded-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-[24px] hover:ring-2 ring-white duration-300 active:font-bold">
            Get in touch
          </button>
        </a>
      </div>
    </div>
  );
}
