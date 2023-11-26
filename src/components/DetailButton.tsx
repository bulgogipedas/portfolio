// ContactButton.tsx
import React from 'react';

interface ContactButtonProps {
  uri: string;
}

const ContactButton: React.FC<ContactButtonProps> = ({ uri}) => {
  return (
    <a href={`${uri}`} target='_blank'>
      <button className="py-2 px-4 text-black rounded-full bg-white text-[18px] hover:ring-2 mt-5 ring-black duration-300 active:font-bold">
        See Project
      </button>
    </a>
  );
};

export default ContactButton;
