import Carousel from "./Carousel";

export default function AboutSection() {
  return (
    <section id="about">
        <div className="grid sm:grid-cols-2 grid-cols-1 place-items-stretch h-screen sm:h-full">
          <div className="bg-white">
            <Carousel />
          </div>
          <div className="bg-white relative">
            <div className="flex flex-col items-start gap-6 absolute bottom-32 sm:bottom-8 left-10 right-6">
              <p className="tracking-widest text-xl font-montserrat-light text-[#C4C4C4]">
                #Treatment
              </p>
              <div className="flex flex-row">
                <h1 className="tracking-wide text-4xl sm:text-6xl font-bold text-black">
                  Make You Even More The Best
                </h1>
              </div>
              <span className="text-lg font-montserrat text-black">
                Consult your wishes to get the goods that suit your needs
              </span>
              <button className="text-lg bg-[#262626] text-white px-[28px] py-[16px] hover:bg-slate-700">
                Touch me
              </button>
            </div>
        </div>
      </div>
    </section>
  );
}
