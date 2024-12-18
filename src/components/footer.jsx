export default function Footer() {
  return (
    <footer>
      <div className="bg-[#0A1540] flex px-10 text-white py-4 justif">
        <img src="/IT_lady.png" alt="Smiling IT Lady" className="h-60 rounded-md"/>
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
      <p className="text-center text-lg">© 2025 First Signal Global Services Limited. All rights reserved</p>
    </footer>
  );
}
