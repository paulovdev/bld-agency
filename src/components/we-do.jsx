import Image from "next/image";

const WeDo = () => {
  return (
    <div className="relative h-screen flex bg-bg-2" id="we-do">
      <div className="p-5 h-full flex-[2] flex flex-col items-start justify-center">
        <span className="mb-12 text-[.75rem] text-p uppercase">[02] We Do</span>
        <h2 className="text-[6vw] text-s font-bigger leading-[1] tracking-wide uppercase">
          Disrupting the fashion system
        </h2>
        <p className="mt-8 text-[.85rem] text-s/75 max-w-[500px] leading-tight">
          We don’t just connect design to delivery — we rebuild the pipeline.
          Fast, fearless, and fully integrated. BLD transforms fashion supply
          into a creative engine where speed meets substance. From bold ideas to
          global execution, this is the new standard. Loud by default.
        </p>
      </div>
      <div className="flex flex-[calc(25%_+_20px)]">
        <Image
          src="/photos/home/img-6.jpg"
          width={1000}
          height={1000}
          alt=""
          className="w-full h-screen object-cover"
        />
      </div>
    </div>
  );
};

export default WeDo;
