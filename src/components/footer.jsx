export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-center justify-center text-center p-20">
        <h3 className="font-semibold text-3xl w-[650px] leading-relaxed">
          Block 12, Road 26, Federal Housing Estate, Woji Port Harcourt Rivers
          State
        </h3>
        <div className="flex items-center justify-center gap-5 text-lg mt-10">
          <p>+234(0)703 6888 949</p>
          <p>+234(0)705 7201 140</p>
          <p>+234(0)812 8959 535</p>
        </div>
      </div>
      <div className="bg-[#0A1540] flex px-10 text-white py-4 justif">
        <img
          src="/IT_lady.png"
          alt="Smiling IT Lady"
          className="h-60 rounded-md"
        />
        <div className="flex flex-col items-center gap-10 justify-center">
          <h2 className="font-semibold text-3xl w-[600px] text-center">
            Ready to Enhance your Business Efficiency and Improve
            Communications?
          </h2>
          <button className="bg-[#335CAD] text-lg px-7 py-2 rounded-md">
            Contact Us
          </button>
        </div>
      </div>
      <p className="text-center text-md bg-[#fdf0d5] text-[#000000a4]">
        © 2025 First Signal Global Services Limited. All rights reserved
      </p>
    </footer>
  );
}
