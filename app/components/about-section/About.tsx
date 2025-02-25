import React, { useEffect } from "react";
import Link from "next/link";
import { Syne } from "next/font/google";
import { useView } from "@/contexts/ViewContext";
import { useInView } from "react-intersection-observer";
import AnimatedBody from "../ui/AnimatedBody";
import AnimatedTitle from "../ui/AnimatedTitle";

const syne = Syne({ subsets: ["latin"] });

export default function About() {
  const { setSectionInView } = useView();

  const { ref, inView } = useInView({
    threshold: 0.2,
    rootMargin: "-100px 0px",
  });
  const AnimatedBody: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
    return <div className={className}>{children}</div>; // Use <div> instead of <p>
  };


  useEffect(() => {
    if (inView) setSectionInView("about");
  }, [inView, setSectionInView]);

  return (
    <section ref={ref} className="pt-24 md:pt-[150px]" id="about">
      <AnimatedTitle
        wordSpace={"mr-[14px]"}
        charSpace={"mr-[0.001em]"}
        className={`uppercase ${syne.className} antialiased text-2xl md:text-4xl xl:text-5xl font-bold opacity-80`}
      >
        About & Skills
      </AnimatedTitle>

      <div className="grid grid-cols-1 lg:grid-cols-[8.5fr_3.5fr] gap-8 mt-6">
        <div className="grid grid-cols-1 antialiased gap-6 text-white/80 text-xl md:text-2xl">
          <AnimatedBody className="leading-[34px] md:leading-[39px]">
            My passion lies in creating strong business solutions that aid
            business growth. Whether it&apos;s a website to boost brand
            publicity or software solutions that streamline otherwise manual
            processes. From writing my first lines of code back in late 2023 to this point
            I have continually refined my development skills overtime.
          </AnimatedBody>
          <AnimatedBody className="leading-[34px] md:leading-[39px]">
          Apart from development, I am deeply passionate about competitive programming.
          Here are my some profile:
            <div className="mt-3 space-y-2 text-blue-500">
              <div>
                🔹 <Link href="https://leetcode.com/u/prashant7023/" className="underline" target="_blank">LeetCode</Link> (Problem Solving & DSA)
              </div>
              <div>
                🔹 <Link href="https://www.codechef.com/users/prashantsh7023" className="underline" target="_blank" >CodeChef</Link> (Rated Competitive Programmer)
              </div>
              <div>
                🔹 <Link href="https://codeforces.com/profile/prashant7023" className="underline" target="_blank" >Codeforces</Link> (Algorithmic Challenges)
              </div>
            </div>
          </AnimatedBody>
          <AnimatedBody className="inline leading-[34px] md:leading-[39px]">
            Each challenge is unique so I ensure that I learn and grow through
            each one. Wanna learn
            more? Here&apos;s <br className="hidden md:block" />
            <Link
              className="underline text-blue-600"
              href={
                "https://drive.google.com/file/d/1PQ9TFhWYzi-X1hCHh80qADM0lRfeUtaC/view"
              }
            >
              my Résumè
            </Link>
            .
          </AnimatedBody>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              WebDevelopment
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              JavaScript, React.js, Next.js, TypeScript, Node.js, Express.js,
              Firebase, MongoDB, HTML5, Git/GitHub, CSS3, Tailwind CSS, Framer
              Motion, Bootstrap, ReCharts.
            </AnimatedBody>
          </div>
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              Programming Languages
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              C++, JavaScript, Python, C language.
            </AnimatedBody>
          </div>
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              Design Tools
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              Figma, Framer, Canva, UI Design, Prototyping.
            </AnimatedBody>
          </div>
        </div>
      </div>
    </section>
  );
}
