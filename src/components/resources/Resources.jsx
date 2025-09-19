export default function Resources() {
  const araayOfResources = [
    {
      titel: "Articles & Guides",
      description:
        "Practical tips on stress management, mindfulness, and emotional resilience.",
      btn: "Explore",
      bgbtn: "#EFC01D",
      colorbtn: "#ffff",
    },
    {
      titel: "Meditation & Relaxation",
      description:
        "Audio sessions for guided meditation and deep breathing exercises.",
      btn: "Explore",
      bgbtn: "#4CCBBB",
      colorbtn: "#ffff",
    },
    {
      titel: "Webinars & Workshops",
      description:
        "Live and recorded sessions with mental health professionals.",
      btn: "Explore",
      bgbtn: "#F39CAC",
      colorbtn: "#ffff",
    },
  ];
  return (
    <section id="Resources" className="text-[#00373E] container mx-auto md:px-2 lg:px-0 px-0  ">
      <div className="flex flex-col gap-4 justify-evenly py-10 md:py-20 text-center items-center">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold tracking-wider  lg:max-w-full max-w-70">
          Resources for Your Well-being
        </h1>
        <p className="max-w-96 text-lg md:text-xl ">
          Explore expert insights, self-care guides, and tools to support your
          mental health.
        </p>
      </div>
      <div className="flex md:flex-row flex-col gap-6 md:gap-3 justify-center items-center">
        {/* Cards Container */}
        {araayOfResources.map((resource, index) => (
          <div
            key={index}
            className="bg-white p-10 rounded-4xl shadow-md mb-6 flex flex-col justify-evenly max-w-full gap-5 md:h-96 h-70 items-center md:w-1/3 w-full"
          >
            <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold tracking-wide">
              {resource.titel}
            </h1>
            <p className="text-lg md:text-xl">{resource.description}</p>
            <button
              className="py-4 px-5 rounded-4xl md:w-50 w-40 font-extrabold text-xl cursor-pointer hover:shadow-md duration-300 ease-out hover:scale-110"
              style={{
                backgroundColor: resource.bgbtn,
                color: resource.colorbtn,
              }}
            >
              {resource.btn}{" "}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
