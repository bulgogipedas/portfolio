import { useState } from "react";

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  Uri: string;
  caption: string;
}
export default function Image(props: Props) {
  const [isHovered, setIsHover] = useState(false);

  return (
    <div className="relative">
      <img
        onMouseOver={() => {
          setIsHover(true);
        }}
        onMouseLeave={() => {
          setIsHover(false);
        }}
        src={props.Uri}
        className="w-[619px] h-[371px] bg-[#D9D9D9] rounded-3xl"
      />
        <div 
        onMouseOver={() => { setIsHover(true) }} 
        onMouseLeave={() => { setIsHover(false) }}
        className={`absolute bottom-10 left-10 bg-[#233931] text-[#B9DFFC] px-3 py-1 rounded-lg transition duration-300 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {props.caption}
        </div>
    </div>
  );
}
