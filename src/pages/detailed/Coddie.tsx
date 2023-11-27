import Navbar from "../../components/layout/Navbar";
import DetailButton from "../../components/DetailButton";
import Footer from "../../components/layout/Footer";

export default function Tucome() {
  return (
    <div className="pt-[185px] font-segoe_ui mx-[3%]">
      <Navbar />
      <h1 className="font-segoe_ui text-transparent bg-gradient-to-tl from-lime-300 via-lime-500 to-lime-600 bg-clip-text font-extrabold text-center items-center text-[128px]">
        Coddie
      </h1>

      <div className="flex gap-10 items-start justify-center text-[20px] text-white mb-16">
        <div className="flex flex-col">
          <h3 className="font-bold">Timeline</h3>
          <p>Aug - Oct 2023</p>
        </div>
        <div className="flex flex-col">
          <h3 className="font-bold">Team</h3>
          <ul>
            <li>Rafli Ardiansyah</li>
            <li>Naufal Ammar Rauf</li>
            <li>Zauhair Dwi Yulfan</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h3 className="font-bold">Role</h3>
          <ul>
            <li>Product Management</li>
            <li>UX Research</li>
            <li>UI Designer</li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-br from-lime-300 via-lime-500 to-lime-600 w-full rounded-2xl py-12 flex flex-wrap gap-10 items-center justify-center mb-10">
        <img className="w-[70%]" src="public/images/coddieScan.png" alt="" />
      </div>

      <div className=" text-white pb-5 px-[150px]">
        <h1 className="text-[64px] font-extrabold pb-4">Project Summary</h1>
        <p className="text-[18px]  text-justify   ">
          So, check this out, peeps! Digital literacy in Indo is like 62%,
          lagging behind our ASEAN pals. We gotta up our game, you feel me?
          Gov's like, "We need 50k digital wizards monthly!" But guess what?
          We're just churning out 100k-200k a year. Big gap, right? Now,
          internet use is high – 210 million users! But here's the plot twist:
          kiddos are the real MVPs, with 62.43% (ages 5-12) and a whopping
          99.16% (ages 13-18) using the web. We did a survey, and guess what?
          77% of these cool cats are into coding. But, hold up! They're facing
          roadblocks like no coding lessons, language barriers, and the struggle
          to find good resources. Enter Coddie, our superhero app! With
          game-like coding lessons, we're leveling up digital literacy for the
          young guns. Woro Srihastuti Sulistyaningrum from Kemenko PMK is vibing
          with us, saying we need a special digital literacy plan for these
          young internet explorers. Together, we're building a solid foundation
          for the future tech champs! Coddie: Teaching Code, Playing Smart – our
          move to boost Indo's digital game
        </p>
      </div>

      <div className="bg-gradient-to-l from-lime-300 via-lime-500 to-lime-600 w-full rounded-2xl py-12 items-center justify-center mb-10 text-white px-[150px] ">
        <h1 className="text-[48px] font-bold ">Achievement</h1>
        <p className="text-[24px]">1st Winners UI UX Design Invention 2023</p>
        <DetailButton uri="https://www.figma.com/proto/X6Iy6g6OCZzgWzGHv7x3jq/UI%2FUX-Udayana_GeprekWatuGong?page-id=606%3A11523&type=design&node-id=761-19099&viewport=-1160%2C-310%2C0.1&t=zCCMbQoFs9egEQlf-1&scaling=contain&starting-point-node-id=761%3A19099&mode=design  " />
      </div>

      <div className=" text-white pb-5 px-[150px]">
        <h1 className="text-[64px] font-extrabold pb-4">The Problem</h1>
        <p className="text-[18px]  text-justify   ">
          Alright, let's craft it in English with that laid-back vibe: The snag
          we're tackling? Digital literacy in Indo is only at 62%, way below our
          ASEAN buddies. The gov shouts, "We need 50k digital talents monthly!"
          But reality check, we're churning out only 100k-200k annually. That's
          a massive gap, ain't it? Now, the internet users in Indo are a
          whopping 210 million, and the real fire comes from the kiddos. It's
          62.43% for the age group 5-12 and a mind-blowing 99.16% for 13-18. Did
          a survey, and guess what? 77% of them want to code. But here's the
          hitch, bro! Coding classes are almost non-existent, English is a
          struggle, and finding good learning resources? Tough luck.
        </p>
      </div>

      <div className=" text-white pb-5 px-[150px]">
        <h1 className="text-[64px] font-extrabold pb-4">The Solution</h1>
        <p className="text-[18px]  text-justify   ">
          Enter the hero – Coddie, the cool app for learning to code! With
          engaging coding lessons, we're supercharging digital literacy for the
          kiddos. Woro Srihastuti Sulistyaningrum from Kemenko PMK is on board
          too; we need a special approach for digital literacy in Indo's young
          guns. Together, let's build a rock-solid foundation to shine in the
          ever-evolving global tech scene! Coddie: Teach Code, Play Smart – our
          movement to make Indo ace the digital world! 💻🚀
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
      <h1 className="text-[64px] font-extrabold  text-white pb-5 px-[150px]">
        Competitor Analysis
      </h1>
      <div className="bg-white w-[70%] rounded-2xl py-10 mx-auto text-center flex flex-wrap gap-10 items-center justify-center mb-10">
        <img
          className="w-[70%]"
          src="public/images/coddiePositioning.png"
          alt=""
        />
      </div>
      <div className=" text-white pb-5 px-[150px]">
        <p className="text-[18px]  text-justify   ">
          In positioning our app, Coddie rocks it with a killer combo. First
          off, it's all about that Bahasa Indonesia vibe – we're keeping it
          real, local, and relatable. And check this out, our bullseye target?
          Students, no doubt. But that's not all, peeps. Coddie brings the
          thunder with a unique value proposition. How? Picture this –
          gamification on steroids! We're talking animated videos and
          magazine-style stories, all jazzed up with eye-catching animations.
          It's not just coding; it's a whole experience, wrapped up in a
          tech-savvy, engaging package.
        </p>
      </div>

      <div className=" text-white pb-5 px-[150px]">
        <h1 className="text-[64px] font-extrabold pb-4">Usability Testing</h1>
        <p className="text-[18px]  text-justify   ">
          Post the high-fidelity UI development, we rolled into usability
          testing, where users tackled tasks, followed by in-depth interviews to
          dissect user flow and gather feedback on design elements. Our dynamic
          duo of moderated interviews and unmoderated testing on the Maze
          platform ensured a comprehensive usability assessment
        </p>
      </div>
      <div className="bg-white w-[70%] rounded-2xl py-10 mx-auto text-center flex flex-wrap gap-10 items-center justify-center mb-10">
        <img
          className="w-[70%]"
          src="public/images/testingCoddie.png"
          alt=""
        />
      </div>

      <Footer />
    </div>
  );
}
