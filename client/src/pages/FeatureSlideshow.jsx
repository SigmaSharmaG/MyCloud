import React, { useState, useEffect } from "react";
import { Cloud, Users, Lock, QrCode, Key } from "lucide-react";

const slides = [
  {
    title: "Cloud Storage",
    desc: "Securely store and access your files anytime, anywhere.",
    icon: <Cloud size={40} />,
  },
  {
    title: "Collaboration",
    desc: "Work with your team in real-time and boost productivity.",
    icon: <Users size={40} />,
  },
  {
    title: "Password Protection",
    desc: "Protect sensitive files with strong password security.",
    icon: <Lock size={40} />,
  },
  {
    title: "QR Sharing",
    desc: "Share files instantly using QR codes for quick access.",
    icon: <QrCode size={40} />,
  },
  {
    title: "One-Time Access",
    desc: "Generate links that expire after a single use.",
    icon: <Key size={40} />,
  },
];

const FeatureSlideshow = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <div className="w-full h-[350px] flex flex-col items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800 text-white relative overflow-hidden">

      {/* 🔹 Slide Content */}
      <div className="text-center transition-all duration-500 ease-in-out">
        <div className="text-blue-400 mb-4 flex justify-center">
          {slides[current].icon}
        </div>
        <h2 className="text-3xl font-bold mb-2">
          {slides[current].title}
        </h2>
        <p className="text-gray-300 max-w-md">
          {slides[current].desc}
        </p>
      </div>

      {/* 🔹 Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 text-2xl bg-white/10 px-3 py-1 rounded-lg hover:bg-white/20"
      >
        ‹
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 text-2xl bg-white/10 px-3 py-1 rounded-lg hover:bg-white/20"
      >
        ›
      </button>

      {/* 🔹 Dots */}
      <div className="absolute bottom-4 flex gap-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              current === index ? "bg-blue-400" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default FeatureSlideshow;