import ImageFooter from "../../assets/footer/illustration_7.png";
export default function Footer() {
  return (
    <section className="text-[#00373E] container mx-auto flex md:flex-row flex-col justify-around items-center pb-1 gap-5 overflow-hidden">
      {/* parent Section One */}
      <div className="lg:space-y-10 space-y-5  bg-white rounded-4xl shadow-lg p-8 md:max-w-1/2 w-full h-96">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold tracking-wide">
          Solus
        </h1>
        <div className="flex flex-row flex-wrap gap-10 justify-evenly ">
          <span>About</span>
          <span>Services</span>
          <span>Therapists</span>
          <span>Resources</span>
          <span>Contact</span>
          <span>Instagram</span>
          <span>Facebook</span>
          <a href="">YouTube</a>
          <a href="">LinkedIn</a>
          <a href="">Terms of use</a>
          <a href="">Privacy Policy</a>
        </div>
        <p className="text-lg md:text-xl text-gray-500">
          © [2035] Solus. All rights reserved.
        </p>
      </div>
      {/* parent Section Tow */}

      <div className="md:max-w-1/2 w-full bg-[#00373E] rounded-4xl shadow-lg py-8 text-white flex flex-col items-center justify-center h-96">
        <div className="flex justify-between " >
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-wide pr-32 pl-5 w-1/2 " style={{lineHeight:"1.8em"}}>Find Support, Guidance, and Balance.</h1>
          <img src={ImageFooter} alt="ImageFooter" className="max-w-1/2  "/>
        </div>
        <button
          className=" bg-white rounded-3xl md:px-7 md:py-3 px-5 py-2 my-3 md:my-5 font-bold hover:shadow-md hover:shadow-[#00373E] duration-300 ease-out cursor-pointer hover:scale-110 
            w-[80%] text-[#00373E] text-center
            "
        >
          Find Support now
        </button>
      </div>
    </section>
  );
}
