import Navbar from "../components/layout/Navbar";
import Image from "../components/layout/Image";
import Image2 from "../components/layout/Image2";
import { useEffect, useState } from "react";
import axios from 'axios';

export default function Work() {
  const [recentlyPlayedTrack, setRecentlyPlayedTrack] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
        const clientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;

        const tokenResponse = await axios.post(
          'https://accounts.spotify.com/api/token',
          new URLSearchParams({
            grant_type: 'client_credentials',
            client_id: clientId,
            client_secret: clientSecret
          }),
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          }
        );

        console.log(tokenResponse.data.access_token)

        const recentlyPlayedResponse = await axios.get(
          'https://api.spotify.com/v1/me/player/recently-played',
          {
            headers: {
              Authorization: `Bearer ${tokenResponse.data.access_token}`,
            },
          } 
        )

        console.log(recentlyPlayedResponse)

        // setRecentlyPlayedTrack(recentlyPlayedResponse.data.items[0].track);
      } catch (error) {
        console.error('Error fetching data from Spotify API', error);
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
          <p className="text-[#DBEFFE] text-[20px]">
            As an information system student, i've experience in various of
            digital data, including product management, data analyst, data
            engineering, app UI/UX. I adapt quickly and think with data.
          </p>
        </div>
      </div>

      <div className="pt-[120px] text-[#DBEFFE] pb-5">
        <h1 className="text-[48px] font-bold pb-5">
          Let's collaborate if you're committed to sustainability, education,
          equality, or carbon neutrality.
        </h1>
        <p className="text-[20px] text-[#DBEFFE] pb-16">
          As an information system student, i've experience in various of
          digital data, including data analyst, data science, data engineering,
          product management, app UI/UX. I adapt quickly and think with data.
        </p>
      </div>

      <div className="bg-[#1694F6]/10 w-full rounded-3xl py-16 px-24 flex flex-wrap gap-10 items-center justify-center">
        <div className="w-[40%] ">
          <h1 className="text-[48px] text-[#1694F6] font-bold">01</h1>
          <h2 className="text-[32px] text-[#DBEFFE]">asdas</h2>
          <p className="text-[20px] text-[#DBEFFE]">
            As an information system student, i've experience in various of
            digital data, including data analyst, data science, data
            engineering, product management, app UI/UX. I adapt quickly and
            think with data.
          </p>
        </div>
        <div className="w-[40%] ">
          <h1 className="text-[48px] text-[#1694F6] font-bold">01</h1>
          <h2 className="text-[32px] text-[#DBEFFE]">asdas</h2>
          <p className="text-[20px] text-[#DBEFFE]">
            As an information system student, i've experience in various of
            digital data, including data analyst, data science, data
            engineering, product management, app UI/UX. I adapt quickly and
            think with data.
          </p>
        </div>
        <div className="w-[40%] ">
          <h1 className="text-[48px] text-[#1694F6] font-bold">01</h1>
          <h2 className="text-[32px] text-[#DBEFFE]">asdas</h2>
          <p className="text-[20px] text-[#DBEFFE]">
            As an information system student, i've experience in various of
            digital data, including data analyst, data science, data
            engineering, product management, app UI/UX. I adapt quickly and
            think with data.
          </p>
        </div>
        <div className="w-[40%] ">
          <h1 className="text-[48px] text-[#1694F6] font-bold">01</h1>
          <h2 className="text-[32px] text-[#DBEFFE]">asdas</h2>
          <p className="text-[20px] text-[#DBEFFE]">
            As an information system student, i've experience in various of
            digital data, including data analyst, data science, data
            engineering, product management, app UI/UX. I adapt quickly and
            think with data.
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
        <Image Uri="public/images/images1.jpg" caption="Pasupati Bridge, Bandung."/>
        <Image2 Uri="public/images/images3.jpg" caption="Ciwidey, Bandung." />
      </div>

      <div className="flex gap-10 py-10">
        <Image2 Uri="public/images/images4.jpg" caption="Al-jabbar Mosque, Bandung." />
        <Image Uri="public/images/images2.jpg" caption="Asia Afrika street, Bandung." />
      </div>

      <div className="bg-white/10 w-[580px] h-[80px] rounded-full pb-16 flex">
        <div>
          asda
        </div>
      </div>
        <p className="pt-10 text-[#DBEFFE]">© 2023 Rafli Ardiansyah • Bandung</p>
    </div>
  );
}
