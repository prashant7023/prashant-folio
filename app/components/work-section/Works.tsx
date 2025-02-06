import React, { useEffect } from "react";
import FolioCard from "./FolioCard";
import Title from "../ui/Title";
import { useView } from "@/contexts/ViewContext";

// @ts-ignore
import "intersection-observer";
import { useInView } from "react-intersection-observer";
import Timeline from "./Timeline";

export default function Works() {
  const { setSectionInView } = useView();

  const works = [
    {
      title: "Thrifty",
      // gitLink: "https://github.com/adex-hub/url-shortening-api-landing",
      liveLink: "https://thrifty.buzz/",
      about:
        "Developed a specialized marketplace platform for university students. Inspired by the release of the OpenAI GPT Store, I integrated a bot to generate personalized user profiles. Implemented responsive components using Acertinity UI.",
      stack: ["next.js", "typescript", "Node.js", "Firebase", "framer motion", "tailwindcss"],
      img: "/thrifty.png",
    },
    {
      title: "Payment Gateway for Charity Donations",
      gitLink: "https://github.com/prashant7023/payment-donation-app",
      liveLink: "https://payment-donation-app.vercel.app/",
      about:
        "he Payment Donation App is a platform that simplifies making and receiving donations. It offers secure payment integration, an easy-to-use interface, and real-time donation tracking. With support for multiple payment methods, users can contribute to various causes quickly and safely.",
      stack: ["React", "javascript", "Firebase", "tailwindcss"],
      img: "/payment.png",
    },
    {
      title: "Candle E-commerce",
      gitLink: "https://github.com/prashant7023/blissful_moments",
      liveLink: "https://blissful-moments.vercel.app/",
      about:
        "Blissful Moments is an e-commerce platform dedicated to offering beautifully crafted candles. It features a wide range of high-quality, uniquely designed candles that add a touch of elegance and warmth to any space. .",
      stack: ["React", "react-router", "javascript", "Node.js", "MongoDB" , "tailwindcss"],
      img: "/candle.png",
    },
    // {
    //   title: "Resume Builder",
    //   gitLink: "https://github.com/prashant7023/resume-builder",
    //   liveLink: "/",
    //   about:
    //     "This site features a clean, user-friendly form for creating Resume:
    //     ["html", "sass", "javascript", "ms clarity"],
    //   img: "/resume.png",
    // },
  ];

  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("work");
  }, [inView, setSectionInView]);

  return (
    <section
      className="flex flex-col gap-6 md:gap-10 pt-[110px]"
      ref={ref}
      id="work"
    >
      <Title>Projects</Title>
      <div className="main grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">

      {works.map((work, index) => (
        <FolioCard
        key={index}
        img={work.img}
        title={work.title}
        gitLink={work.gitLink}
        liveLink={work.liveLink}
        about={work.about}
        stack={work.stack}
        />
      ))}

      </div>
      <Timeline />
    </section>
  );
}
