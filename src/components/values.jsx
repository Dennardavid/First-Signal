"use client";

import { useState } from "react";

export default function CompanyValues() {
  const [activeValue, setActiveValue] = useState("Innovation");

  const values = [
    {
      title: "Innovation",
      description:
        "We embrace new ideas and technologies to push boundaries and create breakthrough solutions.",
      direction: "left",
      bgColor: "#FDF0D5",
    },
    {
      title: "Integrity",
      description:
        "We conduct business with honesty, transparency, and ethical behavior in all our interactions.",
      direction: "left",
      bgColor: "#5FC294",
    },
    {
      title: "Collaboration",
      description:
        "We work together across teams and disciplines to achieve shared goals and foster mutual growth.",
      direction: "right",
      bgColor: "#FDF0D5",
    },
    {
      title: "Excellence",
      description:
        "We strive for the highest standards in everything we do, constantly improving and delivering quality.",
      direction: "right",
      bgColor: "#5FC294",
    },
  ];

  const handleValueClick = (title) => {
    if (activeValue !== title) {
      setActiveValue(title);
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-8">
      <div className="flex justify-center space-x-6">
        {values.map((value) => (
          <div key={value.title} className="flex group">
            <button
              onClick={() => handleValueClick(value.title)}
              className="flex items-center transition-all duration-300 rounded-lg relative h-[500px]"
              style={{ backgroundColor: value.bgColor }}
            >
              {value.direction === "right" ? (
                <>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out
                    ${
                      activeValue === value.title
                        ? "w-[600px] opacity-100"
                        : "w-0 opacity-0"
                    }`}
                  >
                    <div className="p-8 h-full flex items-center text-xl text-right">
                      {value.description}
                    </div>
                  </div>
                  <div
                    className="p-8 font-bold text-4xl"
                    style={{
                      writingMode: "vertical-rl",
                      textOrientation: "mixed",
                    }}
                  >
                    {value.title}
                  </div>
                </>
              ) : (
                <>
                  <div
                    className="p-8 font-bold text-4xl"
                    style={{
                      writingMode: "vertical-rl",
                      textOrientation: "mixed",
                    }}
                  >
                    {value.title}
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out
                    ${
                      activeValue === value.title
                        ? "w-[600px] opacity-100"
                        : "w-0 opacity-0"
                    }`}
                  >
                    <div className="p-8 h-full flex items-center text-left text-xl">
                      {value.description}
                    </div>
                  </div>
                </>
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}