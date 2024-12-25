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
          <div className="px-4 py-6 w-full max-w-[1440px] mx-auto flex flex-col-reverse gap-3 xl:flex-row justify-between items-center">
            <div className="flex flex-col gap-4 xl:gap-10 text-center xl:text-left">
              <h2 className="font-semibold text-xl xl:text-2xl">{service.title}</h2>
              <p className="text-[#000033] xl:w-[350px] text-sm xl:text-lg">
                {service.description}
              </p>
              <button className="text-white bg-[#335CAD] mx-auto xl:mx-0 rounded-md w-[200px] py-2 text-sm xl:text-lg hover:bg-[#2a4b8d] transition-colors">
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
    </section>
  );
}
