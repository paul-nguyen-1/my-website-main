import React from "react";
export default function GetInTouch() {
  return (
    <div
      id="GetInTouchSection"
      data-aos="fade-up"
      className="flex flex-col space-y-4 w-full h-96 items-center bg-AAprimary"
    >
      {/* // ? Title === > What's Next?  */}
      <div className="flex flex-row items-center ">
        <div className="flex flex-row space-x-2 items-center">
          <span className="text-AAsecondary font-sans text-sm  sm:text-base"> 04.</span>
          <span className=" font-sans text-AAsecondary text-base">What&apos;s Next?</span>
        </div>
      </div>
      {/* // ? Get In Touch */}
      <span className="text-gray-200 text-3xl sm:text-4xl font-bold tracking-wider opacity-85">Get In Touch</span>
      <p className="flex font-Header tracking-wider text-gray-400 text-center px-6 sm:px-16 md:px-0 md:w-[600px]">
      Currently looking for new jobs opportunities or to network within this industry, so my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
      </p>
      <div className="pt-4">
        <a href="mailto:paul.nguyen.swe@gmail.com" target={"_blank"} rel="noreferrer">
          <button
            className="font-mono text-sm text-AAsecondary border-AAsecondary 
                            px-8 py-4 border-[1.5px] rounded "
          >
            Say Hello
          </button>
        </a>
      </div>
    </div>
  );
}
