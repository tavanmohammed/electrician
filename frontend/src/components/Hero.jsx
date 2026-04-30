import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.webp";

export default function Hero() {
  const slides = useMemo(
    () => [
      {
        image: hero1,
        title: "Professional Electrical Services",
        description:
          "Safe, reliable, and high-quality electrical solutions for residential and commercial projects.",
      },
      {
        image: hero2,
        title: "Residential & Commercial Expertise",
        description:
          "From wiring and panel upgrades to lighting and maintenance, Stareye delivers trusted results.",
      },
      {
        image: hero3,
        title: "Fast Response. Clean Work. Trusted Team.",
        description:
          "We focus on safety, efficiency, and workmanship that lasts for every client and every job.",
      },
    ],
    []
  );

  const [currentSlide, setCurrentSlide] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const currentTitle = slides[currentSlide].title;

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTypedText("");
      setIsDeleting(false);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  useEffect(() => {
    const typingSpeed = isDeleting ? 35 : 70;

    const typingInterval = setTimeout(() => {
      if (!isDeleting && typedText.length < currentTitle.length) {
        setTypedText(currentTitle.slice(0, typedText.length + 1));
      } else if (!isDeleting && typedText.length === currentTitle.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && typedText.length > 0) {
        setTypedText(currentTitle.slice(0, typedText.length - 1));
      } else if (isDeleting && typedText.length === 0) {
        setIsDeleting(false);
      }
    }, typingSpeed);

    return () => clearTimeout(typingInterval);
  }, [typedText, currentTitle, isDeleting]);

  return (
    <section className="relative h-[90vh] min-h-[700px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        />
      ))}

      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute left-0 top-0 h-full w-[42%] bg-black/40" />

      <div
        className="absolute left-[8%] top-0 hidden h-full w-[22%] bg-orange-500/40 lg:block"
        style={{ clipPath: "polygon(0 0, 72% 0, 100% 100%, 0% 100%)" }}
      />

      <div
        className="absolute bottom-0 left-[18%] hidden h-[180px] w-[220px] bg-orange-500/55 lg:block"
        style={{ clipPath: "polygon(20% 0, 100% 0, 65% 100%, 0 100%)" }}
      />

      <div className="relative z-10 mx-auto flex h-full max-w-[1400px] items-center px-8">
        <div className="max-w-[760px] text-white">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-orange-400 md:text-base">
            Stareye Electrical
          </p>

          <h1 className="min-h-[120px] text-4xl font-black uppercase leading-tight md:min-h-[150px] md:text-6xl xl:text-7xl">
            {typedText}
            <span className="ml-1 inline-block animate-pulse text-orange-400">
              |
            </span>
          </h1>

          <p className="mt-6 max-w-[700px] text-base leading-8 text-white/90 md:text-xl md:leading-9">
            {slides[currentSlide].description}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="bg-white px-8 py-4 text-sm font-extrabold uppercase tracking-wide text-black transition hover:bg-gray-100"
            >
              Contact Us
            </Link>

            <Link
              to="/services"
              className="bg-orange-500 px-8 py-4 text-sm font-extrabold uppercase tracking-wide text-black transition hover:bg-orange-600"
            >
              Our Services
            </Link>
          </div>

          <div className="mt-10 flex gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSlide(index);
                  setTypedText("");
                  setIsDeleting(false);
                }}
                className={`h-3 w-10 transition ${
                  currentSlide === index ? "bg-orange-500" : "bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}