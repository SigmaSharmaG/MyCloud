import React from "react";
import { Cloud, Users, Lock, QrCode, Key } from "lucide-react";
import FeatureSlideshow from "./FeatureSlideshow";
import Navbar2 from '../components/Navbar2.jsx';

const features = [
  {
    title: "Cloud Storage",
    desc: "Access your files anytime with secure and scalable cloud storage.",
    icon: <Cloud size={28} />,
  },
  {
    title: "Collaboration",
    desc: "Work seamlessly with your team in real-time from anywhere.",
    icon: <Users size={28} />,
  },
  {
    title: "Password Protection",
    desc: "Keep your files safe with advanced password security.",
    icon: <Lock size={28} />,
  },
  {
    title: "QR Sharing",
    desc: "Share files instantly using smart and quick QR code access.",
    icon: <QrCode size={28} />,
  },
  {
    title: "One-Time Access",
    desc: "Ensure privacy with links that expire after a single use.",
    icon: <Key size={28} />,
  },
];

const Features = () => {

  return (
    <>
    <Navbar2/>
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">

      {/* 🔹 Hero Section */}
      <section className="h-[350px] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Smart & Secure Cloud Platform
        </h1>
        <p className="text-gray-300 max-w-xl">
          Store, share, and protect your files with powerful modern tools built for speed and security.
        </p>
      </section>
<FeatureSlideshow/>

      {/* 🔹 Features Grid */}
      <section className="py-16 px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:scale-105 hover:border-blue-400 transition duration-300 shadow-lg"
            >
              <div className="mb-4 text-blue-400">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-300 text-sm">{item.desc}</p>
            </div>
          ))}

        </div>
      </section>

      {/* 🔹 CTA Section */}
      <section className="text-center py-12 px-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Start Managing Your Files Smarter 🚀
        </h2>
        <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl font-medium transition">
          Get Started
        </button>
      </section>

      {/* 🔹 Footer */}
      <footer className="bg-black/40 text-gray-400 text-center py-4">
        © 2026 Your Platform. All rights reserved.
      </footer>

    </div>
    </>
  );
};

export default Features;