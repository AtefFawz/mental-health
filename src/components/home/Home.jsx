import Image1 from "../../assets/home/Illustration_1.png";
import Image2 from "../../assets/home/Illustration_2.png";

export default function Home() {
  return (
    <section
      id="Home"
      className="container mx-auto  z-0 pt-22 min-px-7 max-px-32 md:pt-30 max-w-9xl"
    >
      <div className="flex relative bg-[#F9E6D0]  min-h-80 md:h-80 lg:h-96 rounded-3xl justify-between items-stretch overflow-hidden shadow-md">
        <img
          src={Image2}
          alt="Image2"
          className="absolute left-[-2.5rem] md:left-0 max-w-32 h-full"
        />
        <div className=" flex flex-col justify-center items-center w-full md:gap-5">
          <h1 className="font-bold  px-20 md:px-20 lg:px-40 py-3 md:text-2xl lg:text-3xl text-[#00373E] text-center">
            Support for Your Mental Well-being
          </h1>
          <p className="text-center px-20 md:px-20 lg:px-40 md:text-lg lg:text-xl text-[#00373E]">
            Connect with licensed therapists, counselors, and wellness coaches
            to support your journey.
          </p>
          <button className=" bg-[#00373E] text-white rounded-3xl md:px-7 md:py-3  px-5 py-2 my-3 md:my-5 font-bold hover:shadow-md hover:shadow-[#00373E] hover:text-white duration-300 ease-out cursor-pointer hover:scale-110">
            Get Started
          </button>
        </div>
        <img
          src={Image1}
          alt="Image2"
          className="absolute right-[-.1rem] md:right-0 max-w-32 h-full"
        />
      </div>
    </section>
  );
}
