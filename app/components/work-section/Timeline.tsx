"use client";
import { Syne } from "next/font/google";
import Title from "../ui/Title";
import TimelineItem from "./TimelineItem";

const syne = Syne({ subsets: ["latin"] });

const TimelineData = [
  {
    companyImg: "/codeclause_logo.jpeg",
    jobTitle: "Web Development Intern",
    company: "CodeCaluse",
    jobType: "Internship-Remote",
    duration: "July 2024 - Aug 2024",
    stuffIDid: [
      " Developed responsive frontend projects using HTML, CSS, and JavaScript. Improved user experience with interactive and mobile-friendly designs . Optimized code for better performance and resolved bugs efficiently..",
    ],
  },
  {
    companyImg: "/buildspace_logo.jpeg",
    jobTitle: "nights & weekends s5 apprentice",
    company: "Buildspace",
    jobType: "Remote",
    duration: "Aug 2024 - Nov 2024",
    stuffIDid: [
      "Actively worked on innovative projects during nights and weekends, including a social marketplace leveraging AI APIs like Gemini 1.5 Pro and an e-commerce platform. Focused on connecting users seamlessly while honing skills in project development, teamwork, and advanced AI integration...",
    ],
  },
];

export default function Timeline() {
  return (
    <div className="mt-10 md:mt-[110px]">
      <Title> Work experience</Title>

      {/* THE THING, AFTER WHICH I WOULD DETERMINE THE HEIGHT */}
      <div className="flex mt-6 gap-4 pl-3">
        <div className="w-3 h-auto bg-gradient-to-b from-white to-transparent" />

        <div className="flex flex-col gap-10">
          {TimelineData.map((item, index) => (
            <TimelineItem
              key={index}
              companyImg={item.companyImg}
              jobTitle={item.jobTitle}
              company={item.company}
              jobType={item.jobType}
              duration={item.duration}
              stuffIDid={item.stuffIDid}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
