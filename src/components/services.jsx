export default function Services() {
  let Services = [
    {
      title: "Fibre Optics",
      description:
        "Designing, building and maintaing the technology systems and frame work that supports business operation",
      image: "/cables.png",
      color: "bg-[#D9D9D933]",
    },
    {
      title: "CCTV Surveillance",
      description:
        "Installing closed-circuit television cameras to monitor and record activities in specific areas for security purpose",
      image: "/cctv.png",
      color: "bg-[#5FC2947D]",
    },
    {
      title: "Network Solutions",
      description:
        "Creating a range of services, technologies and strategies designed to manage and optimize your company’s network infrastracture",
      image: "/codeguy.png",
      color: "bg-[#FDF0D5B2]",
    },
  ];
  return (
    <section className="flex flex-col items-center">
      {Services.map((service) => (
        <div key={service.title} className={`w-full ${service.color}`}>
          <div className="px-4 py-6 w-full max-w-[1440px] mx-auto flex justify-between items-center">
            <div className="flex flex-col gap-10">
              <h2 className="font-semibold text-2xl">{service.title}</h2>
              <p className="text-[#000033] w-[350px] text-lg">
                {service.description}
              </p>
              <button className="text-white bg-[#335CAD] rounded-md w-[200px] py-2 text-lg">
                Book Service
              </button>
            </div>
            <div>
              <img
                src={service.image}
                alt={service.title}
                className="w-[500px]"
              />
            </div>
          </div>
        </div>
      ))}

      <div className="text-center p-20">
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
    </section>
  );
}
