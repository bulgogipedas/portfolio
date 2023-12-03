import Navbar from "../components/layout/Navbar";

export default function Notes() {
  return (
    <div className="pt-[185px] font-segoe_ui lg:mx-[20%]">
      <Navbar />
      <h1 className="font-segoe_ui text-[#B9DFFC] font-extrabold text-center items-center text-[128px]" data-aos="fade-up">
        Notes.
      </h1>
      <p className="text-center text-[20px] text-[#DBEFFE] " data-aos="fade-up">
        Some thoughts, reflections, & notes on visualization and development, along
        with some latest work in progress.
      </p>
    </div>
  );
}
