"use client";

import React, { useState, useEffect } from "react";
import MemberCard from "../../components/MemberCard";
import Navbar from "../../components/Navbar";
import "../globals.css";

export default function About() {
  const [expandedCard, setExpandedCard] = useState(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleExpand = (cardId) => {
    setExpandedCard((prev) => (prev === cardId ? null : cardId));
  };

  return (
    <Navbar>
      <section className="container mx-auto text-lg flex flex-col justify-center items-center space-y-24 mt-10">
        {/* Logo and Description */}
        <div className="w-2/3 flex flex-col gap-y-6 justify-center items-center">
          <h3 className="text-4xl font-semibold">
            Now, all things can be real!
          </h3>
          <p className="text-lg text-center">
            Our team consist of capable and amazing people. We are well
            organized, prepared, and consistent. Under Hilmi, leadership we are
            ready to make your imagination into reality
          </p>
        </div>
        <div className="w-full mx-auto flex flex-col gap-y-10 justify-center items-center">
          <h3 className="text-4xl font-semibold">Team Members</h3>
          <div className="flex flex-row gap-x-8">
            <MemberCard
              imageSrc="/team/Abel.png"
              name="Abel"
              nrp="5025221005"
              jobdesk={
                "animators, digital artists, and visual effects (VFX) artists"
              }
              isExpanded={expandedCard === "Abel"}
              onExpand={() => handleExpand("Abel")}
            />
            <MemberCard
              imageSrc="/team/Illona.png"
              name="Illona"
              nrp="5025221056"
              jobdesk={
                "animators, digital artists, and visual effects (VFX) artists"
              }
              isExpanded={expandedCard === "Illona"}
              onExpand={() => handleExpand("Illona")}
            />
            <MemberCard
              imageSrc="/team/Hilmi.png"
              name="Hilmi"
              nrp="5025221103"
              jobdesk={"Lead Developer and Frontend Developer"}
              isExpanded={expandedCard === "Hilmi"}
              onExpand={() => handleExpand("Hilmi")}
            />
            <MemberCard
              imageSrc="/team/Fatih.png"
              name="Fatih"
              nrp="5025221191"
              jobdesk={
                "digital artists, visual effects (VFX) artists, and Frontend Developer"
              }
              isExpanded={expandedCard === "Fatih"}
              onExpand={() => handleExpand("Fatih")}
            />
            <MemberCard
              imageSrc="/team/Richo.png"
              name="Richo"
              nrp="5025221242"
              jobdesk={"digital artists"}
              isExpanded={expandedCard === "Richo"}
              onExpand={() => handleExpand("Richo")}
            />
          </div>
        </div>
      </section>
    </Navbar>
  );
}
