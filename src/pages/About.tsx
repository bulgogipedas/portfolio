import Navbar from "../components/layout/Navbar";
import Image from "../components/layout/Image";
import Image2 from "../components/layout/Image2";


export default function Work() {
  return (
    <div className="lg:pt-[185px] pt-[150px] font-segoe_ui ">
      <Navbar />
      <h1 className="font-segoe_ui text-[#B9DFFC] font-extrabold text-center items-center lg:text-[128px] text-[50px]" data-aos="fade-down">
        Hi, I'm Rafli.
      </h1>

      <div className="lg:flex-row flex-col flex items-start justify-center lg:gap-20 pt-10">
        <div className="flex-col lg:w-fit w-full" data-aos="fade-up">
          <div className="bg-gradient-to-tl relative from-blue-500 via-blue-600 to-blue-700 lg:w-[345px] md:w-[300px] sm:w-[200px] w-full h-[380px] rounded-t-3xl">
            <img className="absolute bottom-0" src="/images/profil.png" alt="" />
          </div>
          
        </div>
        <div className="" data-aos="fade-up">
          <h2 className=" text-[#DBEFFE] lg:text-[48px] text-[28px] font-bold pt-10 pb-5">
            I'm a Data Enthusiast from Bandung, Indonesia
          </h2>
          <p className="text-[#DBEFFE] lg:text-[20px] text-[14px] text-justify">
            As an information systems student, I have experience working with
            various types of digital data, including roles in data analysis,
            data science, data engineering, product management, and UX Research.
            I adapt quickly and approach problem-solving through a data-driven
            mindset.
          </p>
        </div>
      </div>

      <div className="lg:pt-[120px] pt-4 text-[#DBEFFE] pb-5">
        <h1 className="lg:text-[48px] text-[28px] font-bold pb-5" data-aos="fade-up">
          Let's collaborate if you're committed to sustainability, education,
          equality, or carbon neutrality.
        </h1>
        <p className="lg:text-[20px] text-[14px] text-[#DBEFFE] pb-16 text-justify" data-aos="fade-up">
          I am driven by the belief that we should leave this Earth in a
          condition as good as or better than we found it for future
          generations. My goal is to actively contribute to these ideals in any
          way possible. If you share a similar commitment, I would welcome the
          opportunity to engage in a conversation with you.
        </p>
      </div>

      <div className="bg-[#1694F6]/10 w-full rounded-3xl py-16 lg:px-24 px-10 flex flex-wrap lg:gap-20 gap-10 items-center justify-center" data-aos="fade-up">
        <div className="lg:w-[40%] text-justify ">
          <h1 className="lg:text-[48px] text-[28px] text-[#1694F6] font-bold">01</h1>
          <h2 className="lg:text-[32px] text-[20px] text-[#DBEFFE] font-bold">Make it</h2>
          <p className="lg:text-[20px] text-[12px] text-[#DBEFFE]">
            I have a strong penchant for visually presenting data, combining
            aesthetics with simplicity. I enjoy crafting compelling yet
            straightforward visualizations that bring data to life. For me, the
            power of data lies in its ability to be translated in a way that is
            understandable to everyone. Let's not only make data informative but
            also inspiring through visually engaging representations
          </p>
        </div>
        <div className="lg:w-[40%] text-justify">
          <h1 className="lg:text-[48px] text-[28px] text-[#1694F6] font-bold">02</h1>
          <h2 className="lg:text-[32px] text-[20px] text-[#DBEFFE] font-bold">Collaborate</h2>
          <p className="lg:text-[20px] text-[12px] text-[#DBEFFE]">
            Effective data analysis doesn't happen in isolation; it thrives in
            collaboration. I believe in involving stakeholders throughout the
            analysis process, fostering a cooperative environment that values
            and welcomes constructive input. The insights we extract from data
            are most powerful when shaped collectively, and I'm committed to
            building a collaborative space for data exploration and
            understanding
          </p>
        </div>
        <div className="lg:w-[40%] ">
          <h1 className="lg:text-[48px] text-[28px] text-[#1694F6] font-bold">03</h1>
          <h2 className="lg:text-[32px] text-[20px] text-[#DBEFFE] font-bold">
            Inclusive Excellence
          </h2>
          <p className="lg:text-[20px] text-[12px] text-[#DBEFFE] text-justify">
            My aim is to ensure that insights derived from data are accessible
            to everyone. Prioritizing inclusivity in data analysis is not merely
            a choice; it's a necessity. Accessible data benefits a broader
            audience, empowering decision-makers with valuable insights that can
            be understood and utilized by all, not just a select few.
          </p>
        </div>
        <div className="lg:w-[40%] text-justify ">
          <h1 className="lg:text-[48px] text-[28px] text-[#1694F6] font-bold">04</h1>
          <h2 className="lg:text-[32px] text-[20px] text-[#DBEFFE] font-bold">
            Keep experimenting
          </h2>
          <p className="lg:text-[20px] text-[12px] text-[#DBEFFE]">
            Every analysis I undertake is open to change and experimentation.
            Not every approach may yield results, but the value lies in the
            attempt - trying new methods and learning from what doesn't work.
            The ever-evolving nature of data demands a flexible mindset, where
            each analysis is an opportunity to refine our approach and gain
            valuable insights.
          </p>
        </div>
      </div>

      <div className="pt-[68px] text-[#DBEFFE] pb-5" data-aos="fade-up">
        <p className="lg:text-[20px] text-[14px] lg:px-[150px] text-justify   ">
          I'm currently in my fifth semester at the Information Technology
          Department, Faculty of Computer Science, Universitas Brawijaya. I
          initially had an interest in the product manager field, but my
          perspective shifted when I became a Product Manager at Raion
          Community. After the first semester, I discovered a passion for Data
          Science and AI. Switching from Java to learn Python was a bit
          challenging, not to mention diving into numbers, statistics, and math,
          which turned out to be surprisingly enjoyable. <br></br>
          <br></br>A few months later, I found pleasure in conducting
          Exploratory Data Analysis and gaining insights from data. This led me
          to stay updated on various technological developments in the field of
          data science and AI. <br></br>
          <br></br>
          Beyond the IT realm, I enjoy engaging in sports like taekwondo,
          running, and soccer. Hanging out with friends at a coffee shop,
          playing games, or simply enjoying music together is something I
          cherish.
        </p>
      </div>

      <div className="flex gap-10">
        <Image
          Uri="/images/images1.jpg"
          caption="Pasupati Bridge, Bandung."
        />
        <Image2 Uri="/images/images3.jpg" caption="Ciwidey, Bandung." />
      </div>

      <div className="flex gap-10 py-10">
        <Image2
          Uri="/images/images4.jpg"
          caption="Al-jabbar Mosque, Bandung."
        />
        <Image
          Uri="/images/images2.jpg"
          caption="Asia Afrika street, Bandung."
        />
      </div>

    
    </div>
  );
}
