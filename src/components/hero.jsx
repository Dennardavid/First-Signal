export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center mt-10">
      <h1 className="text-7xl font-bold w-[850px]">
        We are First Signal Global Services limited
      </h1>
      <p className="text-lg w-[750px] mt-4">
        An ICT company that transforms your business by Improving Communication,
        Connecting Networks, Simplifying Work, and Driving Growth
      </p>
      <img src="/hero.png" alt="Network cables" className="w-[1000px] mt-10" />
      <div className="bg-[#0F1E5A] text-white pt-20 pb-10 -mt-48 w-[100%] flex items-center flex-col">
        <h2 className="text-6xl font-bold w-[1000px] text-[#CCD6EB]">Unleash Your Business potential with smart tech solutions</h2>
        <p className="w-[750px] mt-8 leading-7 text-lg">
          First Signal Global services limited is a dynamic and innovative ICT
          company dedicated to delivering cutting edge technology solutions that
          enhance business efficiency, improve communications and drive digital
          transformation
        </p>
        <div className="flex gap-20 mt-12">
          <img src="/left.png" alt="two men soldering" />
          <img src="/right.png" alt="one man soldering" />
        </div>
      </div>
    </section>
  );
}
