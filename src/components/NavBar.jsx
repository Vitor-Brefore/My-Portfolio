import { useState, useEffect } from "react";
import { navLinks } from "../constants";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, link) => {
    e.preventDefault();

    const target = document.querySelector(link);

    if (target) {
      const offset = window.innerHeight * 0.15;
      const top =
        target.getBoundingClientRect().top + window.pageYOffset - offset;

      gsap.to(window, {
        duration: 1,
        scrollTo: {
          y: top,
          autoKill: true,
        },
        ease: "power2.out",
      });
    }
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a
          href="#hero"
          className="logo"
          onClick={(e) => handleNavClick(e, "#hero")}
        >
          Vitor Brefore
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link} onClick={(e) => handleNavClick(e, link)}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#contact"
          className="contact-btn group"
          onClick={(e) => handleNavClick(e, "#contact")}
        >
          <div className="inner">
            <span>Contact me</span>
          </div>
        </a>
      </div>
    </header>
  );
};

export default NavBar;
