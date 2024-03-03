import React, { useState } from "react";

function Accordion() {
  const accordionData = [
    {
      title: "What is game hosting?",
      content: (
        <div className="accordion-content">
          <p>
            Game hosting refers to the process of renting or setting up servers
            to run multiplayer online games. These servers allow players to
            connect and play together in the same game world.
          </p>
        </div>
      ),
    },
    {
      title: "Why do I need game hosting?",
      content: (
        <div className="accordion-content">
          <p>
            Game hosting is essential for multiplayer gaming. It provides a
            dedicated server where players can join, ensuring a smooth and
            lag-free gaming experience. It also allows you to customize game
            settings and mods.
          </p>
        </div>
      ),
    },

    {
      title: "How do I choose a game hosting provider?",
      content: (
        <div className="accordion-content">
          <p>
            Consider factors like server location, performance, scalability,
            customer support, and price when choosing a game hosting provider.
            Read reviews and ask for recommendations from fellow gamers.
          </p>
        </div>
      ),
    },
    {
      title: "What types of games can I host?",
      content: (
        <div className="accordion-content">
          <p>
            You can host various types of games, including first-person
            shooters, role-playing games, survival games, strategy games, and
            more. The type of game hosting you need depends on the game's
            requirements.
          </p>
        </div>
      ),
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex questionns-col gap-6 flex-col">
      {accordionData.map((item, index) => (
        <div key={index} className="accordian-div w-[650px]">
          <div className="w-full flex justify-between">
            <div
              className={`w-[650px] bg-[#252629] p-4 rounded-xl text-white flex justify-between ${
                activeIndex === index ? "open" : ""
              }`}
            >
              <h1 className="font-[Manrope] font-semibold text-lg">
                {item.title}
              </h1>
              <button
                className="p-2 bg-[#5623d8] rounded-lg"
                onClick={() => toggleAccordion(index)}
              >
                <svg
                  className={`accordion-icon ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 5L5 1L1 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <p className="my-3 text-[#ADB7BE] text-lg">
            {activeIndex === index && item.content}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Accordion;
