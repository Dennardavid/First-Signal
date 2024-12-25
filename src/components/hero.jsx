export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center mt-5 xl:mt-10">
      <h1 className="text-2xl w-[300px] md:text-5xl xl:text-7xl font-bold xl:w-[850px]">
        We are First Signal Global Services limited
      </h1>
      <p className="text-sm w-[350px] xl:text-lg xl:w-[750px] mt-4">
        An ICT company that transforms your business by Improving Communication,
        Connecting Networks, Simplifying Work, and Driving Growth
      </p>
      <img src="/hero.png" alt="Network cables" className="px-4 mt-5 xl:mt-10" />
      <div className="bg-[#0F1E5A] text-white pt-5 pb-5 xl:pt-20 xl:pb-10 -mt-16 xl:-mt-48 w-[100%] flex items-center flex-col">
        <h2 className="text-2xl w-[300px] xl:text-6xl font-bold xl:w-[1000px] text-[#CCD6EB]">Unleash Your Business potential with smart tech solutions</h2>
        <p className="text-sm w-[350px] xl:w-[750px] mt-4 xl:mt-8 xl:leading-7 xl:text-lg">
          First Signal Global services limited is a dynamic and innovative ICT
          company dedicated to delivering cutting edge technology solutions that
          enhance business efficiency, improve communications and drive digital
          transformation
        </p>
        <div className="flex flex-col gap-5 mt-5 px-5 xl:flex-row xl:gap-20 xl:mt-12">
          <img src="/left.png" alt="two men soldering" />
          <img src="/right.png" alt="one man soldering" />
        </div>
      </div>
    </section>
  );
}
