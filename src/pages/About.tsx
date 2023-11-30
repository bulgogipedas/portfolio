import Navbar from "../components/layout/Navbar";
import Image from "../components/layout/Image";
import Image2 from "../components/layout/Image2";
import { useEffect } from "react";
import axios from "axios";

export default function Work() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
        const clientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;

        const tokenResponse = await axios.post(
          "https://accounts.spotify.com/api/token",
          new URLSearchParams({
            grant_type: "client_credentials",
            client_id: clientId,
            client_secret: clientSecret,
          }),
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );

        console.log(tokenResponse.data.access_token);

        const recentlyPlayedResponse = await axios.get(
          "https://api.spotify.com/v1/me/player/recently-played",
          {
            headers: {
              Authorization: `Bearer ${tokenResponse.data.access_token}`,
            },
          }
        );

        console.log(recentlyPlayedResponse);

        // setRecentlyPlayedTrack(recentlyPlayedResponse.data.items[0].track);
      } catch (error) {
        console.error("Error fetching data from Spotify API", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="pt-[185px] font-segoe_ui ">
      <Navbar />
      <h1 className="font-segoe_ui text-[#B9DFFC] font-extrabold text-center items-center text-[128px]">
        Hi, I'm Rafli.
      </h1>

      <div className="flex items-start justify-center gap-20 pt-10">
        <div className="flex-col">
          <div className="bg-gradient-to-tl from-blue-500 via-blue-600 to-blue-700 w-[345px] h-[300px] rounded-t-3xl"></div>
          <div className="bg-[#DBEFFE] w-[345px] h-[80px] "></div>
        </div>
        <div className="">
          <h2 className=" text-[#DBEFFE] text-[48px] font-bold pt-10 pb-5">
            I'm a Data Enthusiast from Bandung, Indonesia
          </h2>
          <p className="text-[#DBEFFE] text-[20px] text-justify">
            As an information systems student, I have experience working with
            various types of digital data, including roles in data analysis,
            data science, data engineering, product management, and UX Research.
            I adapt quickly and approach problem-solving through a data-driven
            mindset.
          </p>
        </div>
      </div>

      <div className="pt-[120px] text-[#DBEFFE] pb-5">
        <h1 className="text-[48px] font-bold pb-5">
          Let's collaborate if you're committed to sustainability, education,
          equality, or carbon neutrality.
        </h1>
        <p className="text-[20px] text-[#DBEFFE] pb-16 text-justify">
          I am driven by the belief that we should leave this Earth in a
          condition as good as or better than we found it for future
          generations. My goal is to actively contribute to these ideals in any
          way possible. If you share a similar commitment, I would welcome the
          opportunity to engage in a conversation with you.
        </p>
      </div>

      <div className="bg-[#1694F6]/10 w-full rounded-3xl py-16 px-24 flex flex-wrap gap-10 items-center justify-center">
        <div className="w-[40%] text-justify ">
          <h1 className="text-[48px] text-[#1694F6] font-bold">01</h1>
          <h2 className="text-[32px] text-[#DBEFFE] font-bold">Make it</h2>
          <p className="text-[20px] text-[#DBEFFE]">
            I have a strong penchant for visually presenting data, combining
            aesthetics with simplicity. I enjoy crafting compelling yet
            straightforward visualizations that bring data to life. For me, the
            power of data lies in its ability to be translated in a way that is
            understandable to everyone. Let's not only make data informative but
            also inspiring through visually engaging representations
          </p>
        </div>
        <div className="w-[40%] text-justify">
          <h1 className="text-[48px] text-[#1694F6] font-bold">02</h1>
          <h2 className="text-[32px] text-[#DBEFFE] font-bold">Collaborate</h2>
          <p className="text-[20px] text-[#DBEFFE]">
            Effective data analysis doesn't happen in isolation; it thrives in
            collaboration. I believe in involving stakeholders throughout the
            analysis process, fostering a cooperative environment that values
            and welcomes constructive input. The insights we extract from data
            are most powerful when shaped collectively, and I'm committed to
            building a collaborative space for data exploration and
            understanding
          </p>
        </div>
        <div className="w-[40%] ">
          <h1 className="text-[48px] text-[#1694F6] font-bold">03</h1>
          <h2 className="text-[32px] text-[#DBEFFE] font-bold">
            Inclusive Excellence
          </h2>
          <p className="text-[20px] text-[#DBEFFE] text-justify">
            My aim is to ensure that insights derived from data are accessible
            to everyone. Prioritizing inclusivity in data analysis is not merely
            a choice; it's a necessity. Accessible data benefits a broader
            audience, empowering decision-makers with valuable insights that can
            be understood and utilized by all, not just a select few.
          </p>
        </div>
        <div className="w-[40%] text-justify ">
          <h1 className="text-[48px] text-[#1694F6] font-bold">04</h1>
          <h2 className="text-[32px] text-[#DBEFFE] font-bold">
            Keep experimenting
          </h2>
          <p className="text-[20px] text-[#DBEFFE]">
            Every analysis I undertake is open to change and experimentation.
            Not every approach may yield results, but the value lies in the
            attempt - trying new methods and learning from what doesn't work.
            The ever-evolving nature of data demands a flexible mindset, where
            each analysis is an opportunity to refine our approach and gain
            valuable insights.
          </p>
        </div>
      </div>

      <div className="pt-[68px] text-[#DBEFFE] pb-5">
        <p className="text-[20px] px-[150px] text-justify   ">
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

      <div className="bg-white/10 w-[580px] h-[80px] rounded-full pb-16 flex">
        <div>asda</div>
      </div>
      <p className="pt-10 text-[#DBEFFE]">© 2023 Rafli Ardiansyah • Bandung</p>
    </div>
  );
}
