import Navbar from "../../components/layout/Navbar";
import DetailButton from "../../components/DetailButton";
import Footer from "../../components/layout/Footer";

export default function Tucome() {
  return (
    <div className="pt-[185px] font-segoe_ui mx-[3%]">
      <Navbar />
      <h1 className="font-segoe_ui text-transparent bg-clip-text bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-800  font-extrabold text-center items-center text-[128px]">
        Ecotions
      </h1>

      <div className="flex gap-10 items-start justify-center text-[20px] text-white mb-16">
        <div className="flex flex-col">
          <h3 className="font-bold">Timeline</h3>
          <p>Oct - Nov 2023</p>
        </div>
        <div className="flex flex-col">
          <h3 className="font-bold">Team</h3>
          <ul>
            <li>Rafli Ardiansyah</li>
            <li>Bernadeta Kusumawardhani</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h3 className="font-bold">Role</h3> 
          <ul>
            <li>UX Research</li>
            <li>UI Designer</li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-800  w-full rounded-2xl  flex flex-wrap gap-10 items-center justify-center mb-10">
        <img
          className="w-full object-cover rounded-2xl"
          src="public/images/ecotionsMockup.jpg"
          alt=""
        />
      </div>

      <div className=" text-white pb-5 px-[150px]">
        <h1 className="text-[64px] font-extrabold pb-4">Project Summary</h1>
        <p className="text-[18px]  text-justify   ">
          In response to Indonesia's significant carbon emissions challenges,
          BesokBisaNgoding presents Ecotions, a groundbreaking application
          designed to elevate user consciousness and behavior towards reducing
          carbon footprints. Ranked 6th globally in CO2 emissions from the
          energy sector, Indonesia faces environmental threats, necessitating a
          transformative solution. Ecotions aims to mitigate these challenges
          through features like carbon emission calculations, reduction
          missions, and saved energy metrics. The app offers insights into air
          quality, health information, waste scanning, and smart home
          integration. By fostering environmentally conscious practices,
          Ecotions contributes to SDGs 3 (good health and well-being) and 11
          (sustainable cities and communities), fostering a healthier,
          sustainable future for Indonesia.
        </p>
      </div>

      <div className="bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-800w-full rounded-2xl py-12 items-center justify-center mb-10 text-white px-[150px] ">
        <h1 className="text-[48px] font-bold ">Achievement</h1>
        <p className="text-[24px]">1st Runner-up Winners UI UX Invofest 2023</p>
        <DetailButton uri="https://www.figma.com/proto/VwrbNxKmxJMMvh9rMjejH9/UI%2FUX-DESIGN-INVOFEST-2023_besokBisaNgoding_Rafli-Ardiansyah?page-id=0%3A1&type=design&node-id=24-731&viewport=278%2C204%2C0.09&t=zDbEmrYmlxSoM533-1&scaling=scale-down&starting-point-node-id=3%3A11&show-proto-sidebar=1&mode=design" />
      </div>

      <div className=" text-white pb-5 px-[150px]">
        <h1 className="text-[64px] font-extrabold pb-4">The Problem</h1>
        <p className="text-[18px]  text-justify   ">
          Indonesia ranks 6th globally for carbon dioxide (CO2) emissions from
          the energy sector, holding the highest greenhouse gas emission volume
          in Southeast Asia as of 2022. Carbon footprint, representing the total
          emissions from human activities, poses severe consequences such as
          water scarcity, extreme weather, natural disasters, disruptions in the
          food chain, and environmental damage. The excessive contribution of
          various greenhouse gases, including carbon dioxide (CO2),
          chlorofluorocarbons (CFCs), water vapor, ozone (O3), methane (CH4),
          and nitrous oxide (N2O), accelerates climate change, raises global
          temperatures, triggers extreme weather events, and causes profound
          environmental degradation. Household activities contribute
          approximately 3.8% of direct CO2 emissions and 20.7% of indirect
          emissions in Indonesia, with a per capita accumulation of 0.58 tons
          CO2. This significantly deviates from the average expected in
          achieving net-zero emissions (Rusyda Al Latifa, 2022).
        </p>
      </div>

      <div className=" text-white pb-5 px-[150px]">
        <h1 className="text-[64px] font-extrabold pb-4">The Solution</h1>
        <p className="text-[18px]  text-justify   ">
          To address these challenges and foster a healthier environment, our
          team, BesokBisaNgoding, introduces the Ecotions app. The primary goal
          of Ecotions is to raise user awareness and behavior towards reducing
          carbon emissions. This is achieved through features such as carbon
          emission calculations for user activities, carbon reduction missions,
          and saved carbon energy calculations. Ecotions also provides
          information on air quality and related health information. The app can
          scan types of waste and guide waste management. Additionally, Ecotions
          can connect with smart home devices to calculate carbon emissions.
          Through these features, we aim to enhance Earth's quality and improve
          public health by steering Indonesian society towards environmentally
          friendly practices and healthy living. This innovation aligns with
          SDGs 3 on good health and well-being and 11 on sustainable cities and
          communities.
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
      <h1 className="text-[64px] font-extrabold pb-4 text-white px-[150px]">Competition Analysis</h1>
      <div className="bg-white w-[70%] rounded-2xl py-10 mx-auto text-center flex flex-wrap gap-10 items-center justify-center mb-10">
        <img className="w-[70%]" src="public/images/positioningEcotions.png" alt="" />
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
      <div className="bg-[#F1ECFF] w-[70%] rounded-2xl py-10 mx-auto text-center flex flex-wrap gap-10 items-center justify-center mb-10">
        <img
          className="w-[70%]"
          src="public/images/positioningEcotions.png"
          alt=""
        />
      </div>

      <Footer />
    </div>
  );
}
