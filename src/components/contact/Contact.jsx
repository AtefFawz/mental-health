import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
export default function Contact() {
  return (
    <section
      id="Contact"
      className="container mx-auto mt:10  text-[#00373E] py-25"
    >
      <div className="text-center space-y-9 ">
        <h1 className="text-xl md:text-2xl lg:text-4xl font-extrabold tracking-wider ">
          We’re Here to Support You
        </h1>
        <p className="text-lg md:text-xl">
          Whether you have questions, need help getting started, or want to
          learn more — reach out anytime.
        </p>
      </div>
      {/* Parent  */}
      <div className="flex md:flex-row flex-col justify-around bg-white  py-15 p-5 rounded-4xl mt-20">
        {/* Parent Section One */}
        <div className="md:w-1/2 w-full flex flex-col items-start gap-10">
          <h1 className="text-xl md:text-2xl lg:text-4xl font-extrabold tracking-wider">
            Contact Details:
          </h1>
          <a href="mailto:eng.atef.fawzy@gmail.com" target="blank">
            <span className="text-xl md:text-2xl font-bold">Email:</span>{" "}
            <span className="text-lg md:text-xl ">
              eng.atef.fawzy@gmail.com
            </span>
          </a>
          <span className="block">
            <span className="text-xl md:text-2xl font-bold">Phone:</span>{" "}
            <span className="text-lg md:text-xl">+1 (123) 456-7890</span>
          </span>

          <span className="block">
            <span className="text-xl md:text-2xl font-bold">Address:</span>{" "}
            <span className="text-lg md:text-xl">
              123 Wellness Way, Calm City, CA 90210
            </span>
          </span>
          <div className="flex gap-x-5 text-xl">
            <a
              href="https://www.facebook.com/Atef.Fawzy.Khalaf?mibextid=ZbWKwL"
              className="p-2 rounded-full bg-blue-100 text-center  hover:shadow-blue-300 hover:text-blue-900 duration-300 ease-out cursor-pointer scale-120 hover:shadow-xl"
              target="blank"
            >
              <FacebookIcon />
            </a>
            <a
              target="blank"
              href="https://www.instagram.com/atef.fawzy"
              className="p-2 rounded-full bg-purple-100 text-center  hover:shadow-purple-300 hover:text-purple-900 duration-300 ease-out cursor-pointer scale-120 hover:shadow-xl"
            >
              <InstagramIcon />
            </a>
            <a
              target="blank"
              href="https://wa.me/qr/KSHI43LCU4DJO1"
              className="p-2 rounded-full bg-green-100 text-center 
               hover:shadow-green-300 hover:text-green-900 duration-300 ease-out cursor-pointer scale-120 hover:shadow-xl
              "
            >
              <WhatsAppIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/atef-fawzy-b664b630a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="p-2 rounded-full bg-blue-200 text-center
            hover:shadow-blue-300 hover:text-blue-900 duration-300 ease-out cursor-pointer scale-120 hover:shadow-xl
            "
              target="blank"
            >
              <LinkedInIcon />
            </a>
          </div>
          <p className="text-lg md:text-xl">
            We typically respond within 12 hours.
          </p>
        </div>
        {/* Parent Form  Section Tow*/}
        <div className="w-full md:max-w-1/2 lg:px-1 md:px-3 p-0">
          {/* Head Form  */}
          <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold tracking-wider py-10">
            Send Us a Message
          </h1>
          {/*Box Form */}
          <Box
            component="form"
            sx={{ "& > :not(style)": { m: 3, width: "100%"  ,} }}
            noValidate
            autoComplete="off"
            className="flex flex-col w-full items-center justify-center bg-[#FDF7F1] px-5 rounded-4xl"
          >
            <TextField id="standard-basic" label="Email" variant="standard" />
            <TextField id="standard-basic" label="Message" variant="standard" />
            <button
              className=" bg-[#00373E] text-white rounded-3xl md:px-7 md:py-3  px-5 py-2 my-3 md:my-5 font-bold hover:shadow-md hover:shadow-[#00373E] hover:text-white duration-300 ease-out cursor-pointer hover:scale-110 
            max-w-xl
            "
            >
              Send Message
            </button>
          </Box>
        </div>
      </div>
    </section>
  );
}
