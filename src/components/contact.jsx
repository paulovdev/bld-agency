import React from "react";

const Contact = () => {
  return (
    <div
      className="h-screen flex flex-col items-start justify-center bg-bg-2 max-lg:h-full "
      id="contact"
    >
      <div className="size-full flex items-center max-lg:flex-col">
        <div className="w-[50vw] h-full px-10 bg-bg-2 flex flex-col items-start justify-center max-lg:w-full max-lg:p-3 max-lg:py-16">
          <h2 className="mb-8 text-[6vw] text-s font-bigger leading-[1] tracking-wide uppercase max-md:text-[8vw]">
            Contact
          </h2>
          <form className="max-w-[800px] w-full space-y-6 max-lg:max-w-full">
            <div className="grid grid-cols-2 gap-4 max-lg:grid-cols-1">
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="mb-2 text-[1.5rem] text-s uppercase tracking-[-1px] "
                >
                  e-mail
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full py-5 border-b border-brd-2 text-s text-[.8rem] outline-none uppercase"
                  placeholder="Your e-mail"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="phone"
                  className="mb-2 text-[1.5rem] text-s uppercase tracking-[-1px] "
                >
                  phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full py-5 border-b border-brd-2 text-s text-[.8rem] outline-none uppercase"
                  placeholder="Your phone"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="message"
                className="mb-2 text-[1.5rem] text-s uppercase tracking-[-1px] "
              >
                message
              </label>
              <textarea
                id="message"
                className="w-full h-[150px] py-5 border-b border-brd-2 text-s text-[.8rem] uppercase outline-none resize-none"
                placeholder="Your message..."
                rows={4}
              />
            </div>
            <button className="w-full px-8 h-[42px] rounded-full bg-bg max-lg:h-[32px]">
              <span className="text-p text-[.8rem] tracking-wide uppercase max-lg:text-[.75rem]">
                send
              </span>
            </button>
          </form>
        </div>
        <div className="w-[50vw] h-full px-10 bg-bg flex flex-col items-start justify-center max-lg:w-full max-lg:p-3 max-lg:py-16">
          <h2 className="mb-8 text-[6vw] text-p font-bigger leading-[1] tracking-wide uppercase max-md:text-[8vw]">
            Socials
          </h2>
          <div className="w-full grid grid-cols-2 max-lg:grid-cols-2">
            <div className="w-full">
              <h3 className="mb-6 text-[2rem] text-p uppercase tracking-[-2px] hover:underline cursor-pointer max-md:text-[1.5rem] max-md:mb-2">
                Instagram
              </h3>
              <h3 className="mb-6 text-[2rem] text-p uppercase tracking-[-2px] hover:underline cursor-pointer max-md:text-[1.5rem] max-md:mb-2">
                X
              </h3>
              <h3 className="mb-6 text-[2rem] text-p uppercase tracking-[-2px] hover:underline cursor-pointer max-md:text-[1.5rem] max-md:mb-2">
                Youtube
              </h3>
              <h3 className="mb-6 text-[2rem] text-p uppercase tracking-[-2px] hover:underline cursor-pointer max-md:text-[1.5rem] max-md:mb-2">
                Facebook
              </h3>
              <h3 className="mb-6 text-[2rem] text-p uppercase tracking-[-2px] hover:underline cursor-pointer max-md:text-[1.5rem] max-md:mb-2">
                Pinterest
              </h3>
              <h3 className="mb-6 text-[2rem] text-p uppercase tracking-[-2px] hover:underline cursor-pointer max-md:text-[1.5rem] max-md:mb-2">
                TikTok
              </h3>
            </div>
            <div className="w-full">
              <h3 className="mb-6 text-[2rem] text-p uppercase tracking-[-2px] hover:underline cursor-pointer max-md:text-[1.5rem] max-md:mb-2">
                LinkedIn
              </h3>
              <h3 className="mb-6 text-[2rem] text-p uppercase tracking-[-2px] hover:underline cursor-pointer max-md:text-[1.5rem] max-md:mb-2">
                Threads
              </h3>
              <h3 className="mb-6 text-[2rem] text-p uppercase tracking-[-2px] hover:underline cursor-pointer max-md:text-[1.5rem] max-md:mb-2">
                Snapchat
              </h3>
              <h3 className="mb-6 text-[2rem] text-p uppercase tracking-[-2px] hover:underline cursor-pointer max-md:text-[1.5rem] max-md:mb-2">
                Reddit
              </h3>
              <h3 className="mb-6 text-[2rem] text-p uppercase tracking-[-2px] hover:underline cursor-pointer max-md:text-[1.5rem] max-md:mb-2">
                Tumblr
              </h3>
              <h3 className="mb-6 text-[2rem] text-p uppercase tracking-[-2px] hover:underline cursor-pointer max-md:text-[1.5rem] max-md:mb-2">
                Discord
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
