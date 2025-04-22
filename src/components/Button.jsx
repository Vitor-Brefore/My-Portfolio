import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useEffect } from "react";

gsap.registerPlugin(ScrollToPlugin);

const Button = ({ text, className, id }) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();

    const target = document.getElementById("counter");

    if (target && id) {
      const offset = window.innerHeight * 0.15;

      const top =
        target.getBoundingClientRect().top + window.pageYOffset - offset;

      gsap.to(window, {
        duration: 1,
        scrollTo: { y: top, autoKill: true },
        ease: "power2.out",
      });
    }
  };

  return (
    <a onClick={handleClick} className={`${className ?? ""} cta-wrapper`}>
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;
