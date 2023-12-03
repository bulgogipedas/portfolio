import { TypeAnimation } from 'react-type-animation';

const ExampleComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        'mindful', // Types 'One'
        1000, // Waits 1s
        'passionate', // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        'resourceful', // Types 'Three' without deleting 'Two'
        3000,
        () => {
          console.log('Done typing!'); // Place optional callbacks anywhere in the array
        }
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      className="font-segoe_ui font-extrabold text-center items-center lg:text-[104px] text-[80px] bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-transparent bg-clip-text"
    />
  );
};

export default ExampleComponent;