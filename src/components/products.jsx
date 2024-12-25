import React from "react";

export default function Products() {
  const products = [
    {
      name: "Fibre Optics",
      description:
        "Designing and impelementing fiber optics network to support and make clients buinsess flexible and efficient",
      image: "/fibreoptics.jpg",
      color: "bg-[#D9D9D9]",
    },
    {
      name: "Network Solution",
      description:
        "Providing secure and reliable networking solutins including LAN, WAN and Wireless networking services.",
      image: "/network-solution.jpeg",
      color: "bg-[#D9D9D9]",
    },
    {
      name: "IT Consulting",
      description:
        "providing expert advice and strategies to help businesses make informed technology desisions.",
      image: "/consulting.jpeg",
      color: "bg-[#5FC2947D]",
    },
    {
      name: "CCTV Survelliance",
      description:
        "Security is vital for growth, and video surveillance systems offer a modern solution to protect lives and property.",
      image: "/cctvinstall.jpg",
      color: "bg-[#5FC2947D]",
    },
    {
      name: "IT infrastructure Development",
      description:
        "Designing and implementing robust IT infrastructure that supports business operations and scalability.",
      image: "/infrastructure.jpeg",
      color: "bg-[#FDF0D5B2]",
    },
    {
      name: "IT Executive Training",
      description:
        "Designing, building and maintaing the technology systems and frame work that supports business operation",
      image: "/training.jpg",
      color: "bg-[#FDF0D5B2]",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-5 xl:py-12">
      <h1 className="text-2xl xl:text-4xl font-bold text-center mb-3 xl:mb-12">
        Services we Offer
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className={`${product.color} rounded-xl p-4 xl:p-6 flex flex-col md:flex-row items-center gap-4 xl:gap-6`}
          >
            <div className="flex-1 flex flex-col items-center xl:items-start space-y-2 xl:space-y-4">
              <h2 className="text-xl xl:text-3xl text-center xl:text-left font-bold">
                {product.name}
              </h2>
              <p className="text-sm xl:text-lg text-center xl:text-left">
                {product.description}
              </p>
              <button className="text-white bg-[#335CAD] rounded-md w-[200px] py-2 text-sm xl:text-lg hover:bg-[#2a4b8d] transition-colors">
                Contact Us
              </button>
            </div>
            <div className="w-full md:w-[300px] h-[200px] xl:h-[250px]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
