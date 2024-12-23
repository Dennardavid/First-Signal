import CompanyValues from "./values";
import Missions from "./missions";
export default function Whoweare() {
  return (
    <>
      <section className="px-4 py-6 w-full max-w-[1440px] mx-auto flex justify-between items-center mt-7">
        <div>
          <h1 className="text-7xl font-bold w-[550px]">
            Your Partner in Technology and Growth
          </h1>
          <p className="text-lg w-[500px] mt-7">
            First Signal Global services limited is a dynamic and innovative ICT
            company dedicated to delivering cutting edge technology solutions
            that enhance business efficiency, improve communications and drive
            digital transformation.
          </p>

          <button className="text-white bg-[#335CAD] rounded-md w-[450px] py-2 text-lg mt-4">
            Contact Us
          </button>
        </div>
        <img
          src="who-we-are.png"
          alt="three men with a fibre cable"
          className="w-[650px]"
        />
      </section>
      <section className="mt-20">
        <h2 className="text-4xl font-bold text-center">Our Values</h2>
        <CompanyValues />
      </section>
      <section>
        <Missions />
      </section>
    </>
  );
}
