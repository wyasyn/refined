"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  Code2,
  Palette,
  Rocket,
  Heart,
  Coffee,
  Mountain,
  Camera,
  Music,
  BookOpen,
  Award,
  Calendar,
  MapPin,
  Zap,
  Target,
  Users,
  Lightbulb,
} from "lucide-react";

const skills = [
  { name: "React/Next.js", level: 95, color: "from-blue-500 to-cyan-500" },
  { name: "TypeScript", level: 90, color: "from-blue-600 to-indigo-600" },
  { name: "Node.js", level: 85, color: "from-green-500 to-emerald-500" },
  { name: "UI/UX Design", level: 80, color: "from-purple-500 to-pink-500" },
  { name: "Python", level: 75, color: "from-yellow-500 to-orange-500" },
  { name: "Cloud Services", level: 88, color: "from-teal-500 to-blue-500" },
];

const experiences = [
  {
    year: "2024",
    title: "Senior Full-Stack Developer",
    company: "TechCorp Solutions",
    description:
      "Leading development of enterprise applications serving 100K+ users",
    icon: Rocket,
  },
  {
    year: "2022",
    title: "Frontend Engineer",
    company: "StartupX",
    description:
      "Built responsive web applications with React and modern tools",
    icon: Code2,
  },
  {
    year: "2020",
    title: "UI/UX Designer",
    company: "Creative Agency",
    description: "Designed intuitive interfaces and user experiences",
    icon: Palette,
  },
];

const interests = [
  {
    name: "Photography",
    icon: Camera,
    description: "Capturing moments in time",
  },
  {
    name: "Mountain Hiking",
    icon: Mountain,
    description: "Finding peace in nature",
  },
  {
    name: "Music Production",
    icon: Music,
    description: "Creating electronic beats",
  },
  { name: "Reading", icon: BookOpen, description: "Sci-fi and tech books" },
  {
    name: "Coffee Brewing",
    icon: Coffee,
    description: "Perfect pour-over technique",
  },
];

const achievements = [
  { title: "AWS Certified", year: "2023", icon: Award },
  { title: "Open Source Contributor", year: "2022", icon: Heart },
  { title: "Hackathon Winner", year: "2021", icon: Target },
];

export default function AboutMe() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const personalRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroIsInView = useInView(heroRef, { once: true, margin: "-100px" });
  const skillsIsInView = useInView(skillsRef, { once: true, margin: "-100px" });
  const experienceIsInView = useInView(experienceRef, {
    once: true,
    margin: "-100px",
  });
  const personalIsInView = useInView(personalRef, {
    once: true,
    margin: "-100px",
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) =>
      setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div
        className="fixed inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        <motion.div
          style={{ y: prefersReducedMotion ? 0 : backgroundY }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: prefersReducedMotion ? 0 : backgroundY }}
          className="absolute top-1/2 -left-40 w-96 h-96 bg-gradient-to-r from-cyan-400/15 to-blue-600/15 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: prefersReducedMotion ? 0 : backgroundY }}
          className="absolute -bottom-40 right-1/3 w-64 h-64 bg-gradient-to-r from-purple-400/20 to-pink-600/20 rounded-full blur-3xl"
        />
      </div>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center px-6 py-20"
      >
        <motion.div
          style={{ y: prefersReducedMotion ? 0 : textY }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={heroIsInView ? { opacity: 1, scale: 1 } : {}}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.8,
              ease: "easeOut",
            }}
            className="relative"
          >
            <div className="w-32 h-32 mx-auto mb-8 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-lg opacity-50 animate-pulse"></div>
              <div className="relative w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-2xl">
                YW
              </div>
              <motion.div
                animate={prefersReducedMotion ? {} : { rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 border-2 border-blue-300/30 rounded-full"
                aria-hidden="true"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroIsInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.8,
              delay: prefersReducedMotion ? 0 : 0.2,
            }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-slate-800 dark:text-white">
              About{" "}
              <motion.span
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent"
                animate={
                  prefersReducedMotion
                    ? {}
                    : { backgroundPosition: ["0%", "100%", "0%"] }
                }
                transition={{ duration: 3, repeat: Infinity }}
                style={{ backgroundSize: "200% 100%" }}
              >
                Yasin
              </motion.span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              A passionate software developer who loves crafting digital
              experiences that make a difference. Based in{" "}
              <span className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 font-semibold">
                <MapPin className="w-4 h-4" /> Kampala, Uganda
              </span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={heroIsInView ? { opacity: 1 } : {}}
            transition={{
              duration: prefersReducedMotion ? 0 : 1,
              delay: prefersReducedMotion ? 0 : 0.5,
            }}
            className="flex flex-wrap justify-center gap-4 pt-8"
          >
            {[
              { icon: Code2, label: "Developer" },
              { icon: Palette, label: "Designer" },
              { icon: Lightbulb, label: "Innovator" },
              { icon: Heart, label: "Problem Solver" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={heroIsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  duration: prefersReducedMotion ? 0 : 0.5,
                  delay: prefersReducedMotion ? 0 : 0.7 + index * 0.1,
                }}
                whileHover={prefersReducedMotion ? {} : { scale: 1.05, y: -2 }}
                className="flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-slate-700/80 backdrop-blur-sm rounded-full shadow-lg border border-white/20 dark:border-slate-600/20"
              >
                <item.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span className="text-slate-700 dark:text-slate-200 font-medium">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={skillsIsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: prefersReducedMotion ? 0 : 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-4">
              Skills & Expertise
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Technologies I love working with
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={skillsIsInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: prefersReducedMotion ? 0 : 0.6,
                  delay: prefersReducedMotion ? 0 : index * 0.1,
                }}
                whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
                className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-white/20 dark:border-slate-700/20"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-white">
                    {skill.name}
                  </h3>
                  <span className="text-sm text-slate-600 dark:text-slate-400 font-mono">
                    {skill.level}%
                  </span>
                </div>

                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={skillsIsInView ? { width: `${skill.level}%` } : {}}
                    transition={{
                      duration: prefersReducedMotion ? 0 : 1.2,
                      delay: prefersReducedMotion ? 0 : index * 0.2,
                      ease: "easeOut",
                    }}
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden`}
                  >
                    <motion.div
                      animate={
                        prefersReducedMotion ? {} : { x: ["0%", "100%", "0%"] }
                      }
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-0 bg-white/30 w-1/3"
                      aria-hidden="true"
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section ref={experienceRef} className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={experienceIsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: prefersReducedMotion ? 0 : 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-4">
              My Journey
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Professional experience and milestones
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div
              className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 to-purple-600 rounded-full"
              aria-hidden="true"
            ></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  animate={experienceIsInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: prefersReducedMotion ? 0 : 0.8,
                    delay: prefersReducedMotion ? 0 : index * 0.2,
                  }}
                  className={`flex items-center ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`w-5/12 ${
                      index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                    }`}
                  >
                    <motion.div
                      whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
                      className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-white/20 dark:border-slate-700/20"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                          <exp.icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-sm font-mono text-blue-600 dark:text-blue-400 font-semibold">
                          {exp.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-2">
                        {exp.company}
                      </p>
                      <p className="text-slate-600 dark:text-slate-300">
                        {exp.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Timeline dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={experienceIsInView ? { scale: 1 } : {}}
                    transition={{
                      duration: prefersReducedMotion ? 0 : 0.5,
                      delay: prefersReducedMotion ? 0 : index * 0.2 + 0.3,
                    }}
                    className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-white dark:border-slate-900 shadow-lg z-10"
                    aria-hidden="true"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={experienceIsInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.8,
              delay: prefersReducedMotion ? 0 : 0.8,
            }}
            className="mt-20"
          >
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white text-center mb-8">
              Recent Achievements
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={experienceIsInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    duration: prefersReducedMotion ? 0 : 0.5,
                    delay: prefersReducedMotion ? 0 : 1 + index * 0.1,
                  }}
                  whileHover={
                    prefersReducedMotion ? {} : { scale: 1.05, y: -2 }
                  }
                  className="flex items-center gap-3 px-4 py-3 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 dark:border-slate-700/20"
                >
                  <div className="p-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg">
                    <achievement.icon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800 dark:text-white text-sm">
                      {achievement.title}
                    </p>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      {achievement.year}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Personal Section */}
      <section ref={personalRef} className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={personalIsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: prefersReducedMotion ? 0 : 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-4">
              Beyond Code
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              What drives me when I'm not coding
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.name}
                initial={{ opacity: 0, y: 50, rotateY: 15 }}
                animate={
                  personalIsInView ? { opacity: 1, y: 0, rotateY: 0 } : {}
                }
                transition={{
                  duration: prefersReducedMotion ? 0 : 0.8,
                  delay: prefersReducedMotion ? 0 : index * 0.1,
                }}
                whileHover={
                  prefersReducedMotion
                    ? {}
                    : {
                        scale: 1.02,
                        rotateY: -5,
                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                      }
                }
                className="group bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20 dark:border-slate-700/20 text-center"
              >
                <motion.div
                  whileHover={
                    prefersReducedMotion
                      ? {}
                      : {
                          rotate: [0, -10, 10, 0],
                          scale: 1.1,
                        }
                  }
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg"
                >
                  <interest.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
                  {interest.name}
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  {interest.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Fun fact */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={personalIsInView ? { opacity: 1, scale: 1 } : {}}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.8,
              delay: prefersReducedMotion ? 0 : 0.5,
            }}
            className="text-center"
          >
            <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 p-1 rounded-2xl">
              <div className="bg-white dark:bg-slate-900 px-8 py-6 rounded-2xl">
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-2">
                  <strong className="text-slate-800 dark:text-white">
                    Fun fact:
                  </strong>
                </p>
                <p className="text-xl text-slate-800 dark:text-white font-medium">
                  I've climbed over 15 mountains and written over 100k lines of
                  code! 🏔️💻
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to action */}
      <section className="relative py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={personalIsInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.8,
            delay: prefersReducedMotion ? 0 : 0.3,
          }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
            Let's Create Something Amazing
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
            Ready to bring your ideas to life? Let's collaborate!
          </p>

          <motion.button
            whileHover={
              prefersReducedMotion
                ? {}
                : {
                    scale: 1.05,
                    boxShadow: "0 20px 40px -12px rgba(59, 130, 246, 0.5)",
                  }
            }
            whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
            onClick={() => (window.location.href = "/contact")}
          >
            <Users className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
            Get In Touch
            <motion.div
              animate={prefersReducedMotion ? {} : { x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              aria-hidden="true"
            >
              →
            </motion.div>
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}
