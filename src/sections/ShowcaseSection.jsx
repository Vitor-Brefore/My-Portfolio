import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];

    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.3 * (index * 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        },
      );
    });
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 },
    );
  }, []);
  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* LEFT */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="Movie-Database" />
            </div>
            <div className="text-content">
              <h2>
                User Friendly Movies Database with API Requests from TMDB -{" "}
                <a href="https://banco-de-filmes.vercel.app" target="_blank">
                  <span className="font-semibold underline">View</span>
                </a>
              </h2>
              <p className="text-white-50 md:text-xl">
                An app built with React, Firebase, TailwindCss and TMDB API to
                search for movies and view their rates and datas.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#ffefdb]">
                <img
                  className="py-4"
                  src="/images/project2.png"
                  alt="SkillsForge"
                />
              </div>
              <h2>
                SkillsForge - IA Interview Helper -{" "}
                <a href="https://entrevistas-com-ia.vercel.app" target="_blank">
                  <span className="font-semibold underline">View</span>
                </a>
              </h2>
            </div>

            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#ffe7eb]">
                <img
                  className="py-4"
                  src="/images/project3.png"
                  alt="SkillsForge"
                />
              </div>
              <h2>
                PokéTips - Pokédex App -{"  "}
                <a href="https://poke-tips.vercel.app" target="_blank">
                  <span className="font-semibold underline">View</span>
                </a>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
