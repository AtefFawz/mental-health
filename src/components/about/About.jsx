import Frame from "../../assets/about/Frame 4.png";
export default function About() {
  return (
    <section id="About" className="container mx-auto  z-0 py-16 md:py-25 relative">
      <div className=" flex flex-col md:flex-row justify-center md:justify-between items-center gap-y-8 w-full ">
        <div className=" flex flex-col justify-start items-start md:w-1/2 lg:w-1/2 lg:px-20 md:px-2 order-2 md:order-1 px-4">

          <span className="text-3 font-light text-[#00373E] absolute md:top-20  hidden">HOW IT WORKS</span>
          <h1 className="font-bold text-lg md:text-2xl lg:text-3xl text-[#00373E] ">
            We Help You Prioritize Your Mental Health
          </h1>
          <p className=" md:text-lg lg:text-xl text-[#00373E]  py-5">
            Browse therapists, book a session, and start your healing journey
            with trusted professionals.
          </p>
          <button className=" bg-[#00373E] text-white rounded-3xl md:px-7 md:py-3 md:my-8 px-5 py-2 my-5 font-bold hover:shadow-md hover:shadow-[#00373E] hover:text-white cursor-pointer  duration-300 ease-out hover:scale-110">Find a Therapist</button>
        </div>
        <img src={Frame} alt="Frame" className="min-20 md:w-sm md-h-md lg:w-lg w-lg  order-1 md:order-2 shadow-md overflow-hidden"/>
      </div>
    </section>
  );
}
