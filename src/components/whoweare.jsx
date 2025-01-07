import CompanyValues from "./values";
import Missions from "./missions";
export default function Whoweare() {
  return (
    <>
      <section className="px-4 py-6 w-full max-w-[1440px] mx-auto flex justify-between flex-col gap-4 xl:gap-0 xl:flex-row items-center mt-2 xl:mt-7">
        <div className="px-4 xl:px-0 text-center xl:text-left">
          <h1 className="text-2xl xl:text-7xl font-bold xl:w-[550px]">
            Your Partner in Technology and Growth
          </h1>
          <p className="text-sm mt-4  xl:text-lg xl:w-[500px] xl:mt-7">
            First Signal Global services limited is a dynamic and innovative ICT
            company dedicated to delivering cutting edge technology solutions
            that enhance business efficiency, improve communications and drive
            digital transformation.
          </p>

          <button className="text-white bg-[#335CAD] rounded-md w-[350px] xl:w-[450px] py-2 text-sm xl:text-lg mt-4 hover:bg-[#2a4b8d] transition-colors">
            Contact Us
          </button>
        </div>
        <img
          src="about.jpg"
          alt="three men with a fibre cable"
          className="xl:w-[700px] rounded-xl"
        />
      </section>
      <section className="xl:mt-20">
        <h2 className="text-2xl xl:text-4xl font-bold text-center">Our Values</h2>
        <CompanyValues />
      </section>
      <section>
        <Missions />
      </section>
    </>
  );
}
