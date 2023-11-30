import Navbar from "../../components/layout/Navbar";
import DetailButton from "../../components/DetailButton";
import Footer from "../../components/layout/Footer";

export default function Tucome() {
  return (
    <div className="pt-[185px] font-segoe_ui mx-[3%]">
      <Navbar />
      <h1 className="font-segoe_ui text-[#B9DFFC] font-extrabold text-center items-center text-[128px]">
        Savefood
      </h1>

      <div className="flex gap-10 items-start justify-center text-[20px] text-white mb-16">
        <div className="flex flex-col">
          <h3 className="font-bold">Timeline</h3>
          <p>Feb - Mei 2023</p>
        </div>
        <div className="flex flex-col">
          <h3 className="font-bold">Team</h3>
          <ul>
            <li>Rafli Ardiansyah</li>
            <li>Muchammad Saifurrijaal</li>
            <li>Daniswari Yurin Azzahra</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h3 className="font-bold">Role</h3>
          <ul>
            <li>Product Management</li>
            <li>Programmer</li>
            <li>UI UX Designer</li>
          </ul>
        </div>
      </div>

      <div className="bg-[#F6F6F6] w-full rounded-2xl py-12 flex flex-wrap gap-10 items-center justify-center mb-10">
        <img className="w-[70%]" src="public/SavefoodDetail.svg" alt="" />
      </div>

      <div className=" text-white pb-5 px-[150px]">
        <h1 className="text-[64px] font-extrabold pb-4">Project Summary</h1>
        <p className="text-[18px]  text-justify   ">
          Food loss and food waste pose significant challenges in Indonesia,
          impacting both food security and the environment. Approximately 14
          million tons of food are lost annually for various reasons, including
          inadequate post-harvest handling infrastructure and inefficient
          farming practices. According to the UNEP Food Waste Index Report 2021,
          globally, around 931 million tons of food waste are generated each
          year, with households contributing 61 percent of this total. In
          Indonesia, food waste reached 46.35 million tons in 2021, making up
          the largest share of the annual waste composition. Food loss occurs at
          various stages of production and distribution, involving challenges in
          agricultural techniques, limited access to modern technology, and
          issues with transportation and storage. Addressing these issues
          requires collaborative efforts, encompassing infrastructure
          improvement, education, and policies supporting sustainable farming
          and food distribution practices.<br></br>
          <br></br>Savefood app aims to address the challenges of food waste by
          providing a food rescue platform that facilitates donations and
          features a marketplace to combat the issue of food loss. Users can
          actively participate in minimizing food waste by contributing and
          accessing surplus food through the app. This innovative solution not
          only helps reduce food loss but also fosters a sense of community
          engagement. By connecting those with excess food to those in need,
          Savefood contributes to sustainable development goals, specifically
          targeting zero hunger and responsible consumption. The app aligns with
          the broader vision of promoting a sustainable and inclusive future by
          leveraging technology to create positive social and environmental
          impact.
        </p>
      </div>

      <div className="bg-[#8ED7C0] w-full rounded-2xl py-12 items-center justify-center mb-10 text-[#0E5741] px-[150px] ">
        <h1 className="text-[48px] font-bold ">Achievement</h1>
        <ol className="text-[20px] list-disc">
          <li>1st Software Development Switchfest 2023</li>
          <li>1st Winners Business Plan Before 2023</li>
          <li>1st Winners Raion Hackjam 2023</li>
          <li>2nd Runners Up Winners Software Development Invofest 2023</li>
        </ol>

        <DetailButton uri="https://play.google.com/store/apps/details?id=com.msaifurrijaal.savefood&hl=en" />
      </div>

      <div className=" text-white pb-5 px-[150px]">
        <h1 className="text-[64px] font-extrabold pb-4">The Problem</h1>
        <p className="text-[18px]  text-justify   ">
          Food loss and waste pose a significant challenge in Indonesia, with 14
          million tons lost annually due to inadequate infrastructure and
          inefficient practices. Household contributions, accounting for 61% of
          the global 931 million tons of annual waste, exacerbate the issue. In
          2021, Indonesia alone generated 46.35 million tons of food waste.
          Addressing these inefficiencies is vital for achieving sustainable
          development goals, including poverty alleviation and responsible
          consumption. Innovative solutions are crucial to creating a more
          sustainable and inclusive future by connecting surplus food with those
          in need.
        </p>
      </div>

      <div className=" text-white pb-5 px-[150px]">
        <h1 className="text-[64px] font-extrabold pb-4">The Solution</h1>
        <p className="text-[18px]  text-justify   ">
          Introducing Savefood, an innovative app designed to tackle the food
          loss and waste issue in Indonesia. Savefood acts as a food rescue
          platform, allowing users to donate surplus food through a marketplace
          feature. This solution encourages community engagement and facilitates
          the redistribution of excess food to those in need. By leveraging
          technology, Savefood aims to bridge the gap in the food supply chain
          and contribute to sustainable development goals, particularly zero
          hunger and responsible consumption. The app offers a practical and
          user-friendly solution to minimize food waste, fostering a more
          sustainable and inclusive future.
        </p>
      </div>

      <div className=" text-white pb-5 px-[150px]">
        <h1 className="text-[64px] font-extrabold pb-4">User Research</h1>
        <p className="text-[18px]  text-justify   ">
          To understand the needs and pain points of users, we conduct user
          research using the Design Thinking method. The design thinking method
          has proven to be effective in understanding the wishes of the user, as
          evidenced by the results of research from the University of Virginia.
          To further maximize user research, we use 3 different approaches.
        </p>
      </div>
      <div className="flex gap-10">
      <div className="w-[323px] h-[334px] bg-zinc-700 rounded-3xl">
        
      </div>
      <div className="w-[323px] h-[334px] bg-zinc-700 rounded-3xl"></div>
      <div className="w-[323px] h-[334px] bg-zinc-700 rounded-3xl"></div>
      </div>
      <div className=" text-white pb-5 px-[150px]">
      <h1 className="text-[64px] font-extrabold pb-4">Usability Testing</h1>
      <div className="bg-white w-full rounded-2xl py-10 mx-auto text-center flex flex-wrap gap-10 items-center justify-center mb-10">
        <img
          className="w-[70%]"
          src="public/images/positioningSavefood.png"
          alt=""
        />
      </div>
      </div>

      <div className=" text-white pb-5 px-[150px]">
        <p className="text-[18px]  text-justify   ">
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

      <div className=" text-white pb-5 px-[150px]">
        <h1 className="text-[64px] font-extrabold pb-4">Usability Testing</h1>
        <p className="text-[18px]  text-justify   ">
          After we did the application User Interface development. Next, we
          carry out usability testing of the hi-fi UI by assigning tasks to be
          performed by users. After that, we conducted an in-depth interview
          session to dig deeper about user flow, and feedback on the elements in
          the design. We use moderated and unmoderated testing. Moderated
          testing is done by direct interviews, while unmoderated testing is
          done using the Maze platform.
        </p>
      </div>
      <div className="bg-[#F1ECFF] w-[70%] rounded-2xl  mx-auto text-center flex flex-wrap gap-10 items-center justify-center mb-10">
        <img
          className="w-full h-full object-cover rounded-2xl"
          src="public/images/Maze.png"
          alt=""
        />
      </div>

      <Footer />
    </div>
  );
}
