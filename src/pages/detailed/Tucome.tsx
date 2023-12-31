import Navbar from "../../components/layout/Navbar";
import DetailButton from "../../components/DetailButton";
import CardUserResearch from "../../components/pages/about/CardUserResearch";
import Footer from "../../components/layout/Footer";

export default function Tucome() {
  return (
    <div className="pt-[185px] font-segoe_ui mx-[3%]">
      <Navbar />
      <h1 data-aos="fade-up" className="font-segoe_ui text-[#B9DFFC] font-extrabold text-center items-center lg:text-[128px] text-[64px] ">
        Tucome
      </h1>

      <div className="flex gap-10 items-start justify-center lg:text-[20px] text-[12px] text-white mb-16">
        <div data-aos="fade-up" className="flex flex-col">
          <h3 className="font-bold">Timeline</h3>
          <p>Oct - Nov 2023</p>
        </div>
        <div data-aos="fade-up" className="flex flex-col">
          <h3 className="font-bold">Team</h3>
          <ul>
            <li>Rafli Ardiansyah</li>
            <li>Paula Sugiarto</li>
            <li>Noory Azyza</li>
            <li>Anda Bagas Priyanto</li>
          </ul>
        </div>
        <div data-aos="fade-up" className="flex flex-col">
          <h3 className="font-bold">Role</h3>
          <ul>
            <li>Product Management</li>
            <li>UX Research</li>
            <li>UI Designer</li>
          </ul>
        </div>
      </div>

      <div data-aos="fade-up" className="bg-[#8255F8] w-full rounded-2xl py-12 flex flex-wrap gap-10 items-center justify-center mb-10">
        <img className="w-[70%]" src="/tucomeBarcode.svg" alt="" />
      </div>

      <div className=" text-white pb-5 lg:px-[150px]">
        <h1 data-aos="fade-up" className="lg:text-[64px] text-[40px] font-extrabold pb-4">
          Project Summary
        </h1>
        <p data-aos="fade-up" className="lg:text-[18px] text-[12px] text-justify   ">
          Indonesia, ranked 91st among the world's economically challenged
          nations in 2022, grapples with systemic issues such as insufficient
          minimum wages, substandard living conditions, and a persistent rise in
          unemployment rates. This predicament significantly impacts skilled
          laborers, including builders, service providers, and tailors, who play
          vital roles in daily life. Unfortunately, their contributions often go
          unrecognized, compounded by a lack of educational opportunities.
          According to 2022 data from the Central Statistics Agency (BPS),
          workers with a high school education earn an average monthly net
          income of Rp1,490,000.00, a figure that incrementally rises to
          Rp1,541,700.00 in 2023, though it remains below subsistence levels. In
          response to these challenges and with a commitment to contributing to
          Indonesia's Sustainable Development Goals (SDGs) by 2030, the BCC x
          RAION team proposes Tucome, a pioneering application. <br></br>
          <br></br>Tucome seeks to bridge the gap between skilled workers and
          potential clients by introducing the innovative Kangbot feature. This
          functionality allows users to engage in consultations through photos,
          text, or voice, obtaining AI-driven insights and tailored
          recommendations for suitable skilled workers. By fostering connections
          between skilled workers and the community, Tucome aims to support
          Indonesia in achieving SDG objectives related to poverty alleviation
          and promoting decent work and economic growth. This innovative
          solution holds the potential to benefit both skilled workers and those
          seeking their services, aligning with the overarching goals of a
          sustainable and inclusive future.
        </p>
      </div>

      <div data-aos="fade-up" className="bg-gradient-to-l from-blue-500 via-blue-600 to-blue-700 w-full rounded-2xl py-12 items-center justify-center mb-10 text-white lg:px-[150px] px-10 ">
        <h1 className="lg:text-[48px] text-[32px] font-bold ">Achievement</h1>
        <p className="lg:text-[24px] text-[12px]">
          1st Winners UX Challenge 4C National Competition 2023
        </p>
        <DetailButton uri="https://bit.ly/PrototypeTucome" />
      </div>

      <div className=" text-white pb-5 lg:px-[150px]">
        <h1 data-aos="fade-up" className="lg:text-[64px] text-[40px] font-extrabold pb-4">
          The Problem
        </h1>
        <p data-aos="fade-up" className="lg:text-[18px] text-[12px] text-justify   ">
          Indonesia, positioned 91st among nations facing economic challenges,
          contends with issues such as insufficient minimum wages, substandard
          living conditions, and a steadily increasing unemployment rate,
          notably impacting skilled workers. Despite playing vital roles in
          daily life, these workers encounter economic struggles exacerbated by
          limited recognition and educational opportunities. The existing income
          disparity among skilled workers, as indicated by 2022 data from the
          Central Statistics Agency (BPS), highlights the need for targeted
          solutions to address these challenges.
        </p>
      </div>

      <div className=" text-white pb-5 lg:px-[150px]">
        <h1 data-aos="fade-up" className="lg:text-[64px] text-[40px] font-extrabold pb-4">
          The Solution
        </h1>
        <p data-aos="fade-up" className="lg:text-[18px] text-[12px]  text-justify   ">
          The proposed solution to address the economic challenges faced by
          skilled workers in Indonesia is the introduction of Tucome, an
          innovative application. Tucome serves as a platform connecting skilled
          workers with potential clients and features the Kangbot functionality,
          allowing users to engage in consultations through photos, text, or
          voice. This AI-driven feature provides tailored insights and
          recommendations for suitable skilled workers. By facilitating these
          connections, Tucome aims to alleviate the economic hardships faced by
          skilled workers, contribute to poverty reduction, and support
          Indonesia in achieving Sustainable Development Goals related to decent
          work and economic growth.
        </p>
      </div>

      <div className=" text-white pb-5 lg:px-[150px]">
        <h1 data-aos="fade-up" className="lg:text-[64px] text-[40px] font-extrabold pb-4">
          User Research
        </h1>
        <p data-aos="fade-up" className="lg:text-[18px] text-[12px]  text-justify   ">
          To understand the needs and pain points of users, we conduct user
          research using the Design Thinking method. The design thinking method
          has proven to be effective in understanding the wishes of the user, as
          evidenced by the results of research from the University of Virginia.
          To further maximize user research, we use 3 different approaches.
        </p>
      </div>
      <div className="flex justify-between gap-4 mt-10 px-24 mb-20">
        <CardUserResearch
          ImageSrc="bg-[url(https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]"
          Heading="Survey"
          Description="The purpose of surveys is to get answers to important questions. We used to find out what users think and why they feel that way about it."
        />
        <CardUserResearch
          ImageSrc="bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVVtL0jb6yJRRe5XmIJdi58ftrYBjs4fxJYKWHQLHokA&s)]"
          Heading="Interview"
          Description="Asked potential users questions to gain an understanding of their preferences, thoughts, and feelings"
        />
        <CardUserResearch
          ImageSrc="bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVVtL0jb6yJRRe5XmIJdi58ftrYBjs4fxJYKWHQLHokA&s)]"
          Heading="Secondary Research"
          Description="We conducted secondary research to validate findings from surveys and interviews. Our main focus was data validation."
        />
      </div>

      <div data-aos="fade-up" className="lg:px-[150px]">
        <h1 className="lg:text-[64px] text-[40px] font-extrabold pb-4 text-white">
          Competition Analysis
        </h1>
        <div data-aos="fade-up" className="bg-white rounded-2xl py-10 mx-auto text-center flex flex-wrap gap-10 items-center justify-center mb-10">
          <img className="w-full" src="/positioningApp.svg" alt="" />
        </div>
      </div>
      <div className=" text-white pb-5 lg:px-[150px]">
        <p data-aos="fade-up" className="text-[12px] lg:text-[18px]  text-justify   ">
          We have also developed perceptual mapping to chart the position of our
          product in comparison to competitors, focusing on the aspects of price
          and features offered. This analysis is divided into two key
          dimensions: sophistication and the variety of job services. The first
          dimension, sophistication, denotes the level of innovative technology
          embedded in the application. The second dimension, variety,
          illustrates the diversity of job services available. In this
          perceptual mapping, we place the Tucome application in the segment
          representing high sophistication and diversity, affirming its position
          as a sophisticated and diverse solution in this category.
        </p>
      </div>

      <div className=" text-white pb-5 lg:px-[150px]">
        <h1 data-aos="fade-up" className="text-[40px] lg:text-[64px] font-extrabold pb-4">
          Usability Testing
        </h1>
        <p data-aos="fade-up" className="text-[12px] lg:text-[18px]  text-justify   ">
          After we did the application User Interface development. Next, we
          carry out usability testing of the hi-fi UI by assigning tasks to be
          performed by users. After that, we conducted an in-depth interview
          session to dig deeper about user flow, and feedback on the elements in
          the design. We use moderated and unmoderated testing. Moderated
          testing is done by direct interviews, while unmoderated testing is
          done using the Maze platform.
        </p>
      </div>
      <div data-aos="fade-up" className="bg-[#F1ECFF] w-[70%] rounded-2xl py-10 mx-auto text-center flex flex-wrap gap-10 items-center justify-center">
        <img className="w-[70%]" src="/images/usabilityTesting.png" alt="" />
      </div>

      <Footer />
    </div>
  );
}
