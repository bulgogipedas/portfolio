import Navbar from "../../components/layout/Navbar";
import DetailButton from "../../components/DetailButton";
import Footer from "../../components/layout/Footer";

export default function Tucome() {
  return (
    <div className="pt-[185px] font-segoe_ui mx-[3%]">
      <Navbar />
      <h1 className="font-segoe_ui text-transparent bg-gradient-to-br from-[#53963C] via-[#72CA3C] to-[#E2E548] bg-clip-text font-extrabold text-center items-center text-[128px]">
        NutriSync
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
            <li>Talitha Agus Shakira</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h3 className="font-bold">Role</h3>
          <ul>
            <li>UX Researcher</li>
            <li>UI Designer</li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-br from-[#53963C] via-[#72CA3C] to-[#E2E548] w-full rounded-2xl py-12 flex flex-wrap gap-10 items-center justify-center mb-10">
        <img className="w-[70%]" src="public/images/nutriScan.png" alt="" />
      </div>

      <div className=" text-white pb-5 px-[150px]">
        <h1 className="text-[64px] font-extrabold pb-4">Project Summary</h1>
        <p className="text-[18px]  text-justify   ">
          In tackling Indonesia's prevalent health challenges, we present
          NutriSync—an intelligent application crafted to guide individuals in
          crafting personalized diet plans and exercise routines. Harnessing the
          power of artificial intelligence (AI), NutriSync not only facilitates
          the achievement of personal health objectives but also aligns with
          Sustainable Development Goal 3: Good Health and Well-being. Addressing
          the issue of unhealthy dietary practices in Indonesia, NutriSync
          regulates food types and quantities to meet nutritional needs without
          excessive salt, sugar, and trans fats. The application emphasizes
          improving nutritional literacy by considering individual factors such
          as physical condition, age, and food allergies, ensuring the delivery
          of personalized and effective diet plans. <br></br>
          <br></br>NutriSync's core features involve the smart utilization of AI
          technology to design meal and exercise plans tailored to users' daily
          routines. Guided by nutrition experts, NutriSync assists users in
          avoiding unhealthy eating patterns commonly associated with excessive
          sugar, salt, and fats. Through NutriSync, our aim is to empower the
          Indonesian community to embrace healthier lifestyles and contribute to
          the realization of SDG Goal 3, fostering a healthier and more
          prosperous society.
        </p>
      </div>

      <div className="bg-gradient-to-r from-[#53963C] via-[#72CA3C] to-[#E2E548] w-full rounded-2xl py-12 items-center justify-center mb-10 text-white px-[150px] ">
        <h1 className="text-[48px] font-bold ">Achievement</h1>
        <p className="text-[24px]">
          1st Runner-up Winners UI UX Design ICOM Universitas Ahmad Dahlan
          Competition 2023
        </p>
        <DetailButton uri="https://www.figma.com/proto/XaaHKqHUDEUlSxDp65KuDz/RaTa-yby_UIUX_ICOM23?page-id=2%3A8&type=design&node-id=496-13433&viewport=1961%2C-367%2C0.11&t=J3q6DtZSAGyI6IIw-1&scaling=scale-down&starting-point-node-id=496%3A13433&mode=design" />
      </div>

      <div className=" text-white pb-5 px-[150px]">
        <h1 className="text-[64px] font-extrabold pb-4">The Problem</h1>
        <p className="text-[18px]  text-justify   ">
          Dietary practices in Indonesia are marred by widespread misconceptions
          and unhealthy patterns. Diet, often misunderstood as a form of food
          restriction, poses the risk of nutritional deficiencies. According to
          the Ministry of Health, a staggering 95.5% of Indonesians follow
          unhealthy diets, a significant increase from the 2013 Basic Health
          Research findings. This unhealthy trend is evident in the excessive
          intake of sugar, salt, and fats, surpassing recommended levels. The
          majority resort to reducing meal frequency or portion sizes, while a
          significant portion avoids essential nutrients like carbohydrates and
          fats. Only a small percentage explores alternative diets, and a
          substantial number fails to achieve their diet goals.
        </p>
      </div>

      <div className=" text-white pb-5 px-[150px]">
        <h1 className="text-[64px] font-extrabold pb-4">The Solution</h1>
        <p className="text-[18px]  text-justify   ">
          To address this pervasive issue, we present NutriSync—a revolutionary
          solution designed to guide individuals towards healthier dietary
          practices. NutriSync leverages artificial intelligence (AI) to create
          personalized diet plans and exercise routines tailored to users' daily
          routines. By improving nutritional literacy and considering individual
          factors such as physical condition, age, and food allergies, NutriSync
          aims to shift the narrative on diets. This application not only
          empowers users to make informed choices but also aligns with
          Sustainable Development Goal 3: Good Health and Well-being. Through
          NutriSync, we aspire to foster a healthier lifestyle nationwide,
          contributing to a prosperous and sustainable society.
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
      <div className="bg-white w-[70%] rounded-2xl py-10 mx-auto text-center flex flex-wrap gap-10 items-center justify-center mb-10">
        <img
          className="w-[80%]"
          src="public/images/positioningNutrisync.png"
          alt=""
        />
      </div>
      <div className=" text-white pb-5 px-[150px]">
        <p className="text-[18px]  text-justify   ">
          In navigating the dynamic health-tech landscape, we've employed
          perceptual mapping to delineate NutriSync's standing relative to
          competitors, with a keen focus on pricing and offered features. This
          comprehensive analysis hinges on two pivotal dimensions:
          sophistication and the breadth of health services provided.
          Sophistication gauges the level of innovative technology integrated
          into the application, while variety illuminates the diversity of
          health services offered. Through this strategic perceptual mapping,
          NutriSync firmly secures its place in the quadrant synonymous with
          high sophistication and diversity. This affirms NutriSync's standing
          as a sophisticated and multifaceted solution, poised to redefine the
          health-tech category.
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
      <div className="bg-white w-[70%] rounded-2xl py-10 mx-auto text-center flex flex-wrap gap-10 items-center justify-center mb-10">
        <img
          className="w-[70%]"
          src="public/images/testingNutrisync.png"
          alt=""
        />
      </div>

      <Footer />
    </div>
  );
}
