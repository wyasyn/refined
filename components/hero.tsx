"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { socials } from "@/lib/nav-links";
import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { Send, Eye } from "lucide-react";
import { DotBackground } from "./dot-background";

export default function Hero() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    const handleMouseMove = (e: MouseEvent) => {
      if (!prefersReducedMotion) {
        setMousePosition({
          x: (e.clientX / window.innerWidth) * 100,
          y: (e.clientY / window.innerHeight) * 100,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [prefersReducedMotion]);

  return (
    <DotBackground>
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden max-lg:py-10"
        aria-label="Hero section"
      >
        {/* Subtle Background Effects */}
        <div className="absolute inset-0 " aria-hidden="true">
          {/* Gentle floating orbs */}
          <motion.div
            className="absolute top-1/3 left-1/5 w-64 h-64 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-full blur-3xl"
            animate={
              prefersReducedMotion
                ? {}
                : {
                    x: [0, 50, 0],
                    y: [0, -30, 0],
                    scale: [1, 1.1, 1],
                  }
            }
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            aria-hidden="true"
          />

          <motion.div
            className="absolute bottom-1/3 right-1/5 w-48 h-48 bg-gradient-to-r from-blue-500/8 to-primary/8 rounded-full blur-3xl"
            animate={
              prefersReducedMotion
                ? {}
                : {
                    x: [0, -40, 0],
                    y: [0, 40, 0],
                    scale: [1, 0.9, 1],
                  }
            }
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3,
            }}
            aria-hidden="true"
          />

          {/* Subtle mouse follower */}
          <motion.div
            className="absolute w-24 h-24 bg-gradient-to-r from-primary/5 to-purple-500/5 rounded-full blur-2xl pointer-events-none"
            style={{
              left: `${mousePosition.x}%`,
              top: `${mousePosition.y}%`,
              transform: "translate(-50%, -50%)",
              opacity: prefersReducedMotion ? 0 : 1,
            }}
            transition={{ type: "spring", stiffness: 30, damping: 40 }}
            aria-hidden="true"
          />
        </div>

        <div ref={containerRef} className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Content */}
            <div className="space-y-8">
              {/* Welcome Badge */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: prefersReducedMotion ? 0 : 0.6,
                  ease: "easeOut",
                }}
                className="lg:mb-0 mb-2"
              >
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium text-sm tracking-wide">
                  <motion.div
                    className="w-2 h-2 bg-primary rounded-full mr-2"
                    animate={
                      prefersReducedMotion
                        ? {}
                        : {
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 1, 0.5],
                          }
                    }
                    transition={{ duration: 2, repeat: Infinity }}
                    aria-hidden="true"
                  />
                  <span className="sr-only">Status: </span>Available for work
                </span>
              </motion.div>

              {/* Main Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: prefersReducedMotion ? 0 : 0.2,
                  duration: prefersReducedMotion ? 0 : 0.8,
                }}
                className="space-y-6"
              >
                {/* Greeting */}
                <div className="space-y-2">
                  <motion.p
                    className="text-xl text-muted-foreground font-light"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{
                      delay: prefersReducedMotion ? 0 : 0.4,
                      duration: prefersReducedMotion ? 0 : 0.6,
                    }}
                  >
                    Hello, I'm
                  </motion.p>

                  {/* Name with accessible gradient */}
                  <motion.h1
                    className="text-5xl lg:text-6xl font-serif text-foreground tracking-tight font-bold"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      delay: prefersReducedMotion ? 0 : 0.5,
                      duration: prefersReducedMotion ? 0 : 0.8,
                    }}
                  >
                    Yasin{" "}
                    <motion.span
                      className={`bg-gradient-to-r from-primary via-purple-500 to-blue-500 bg-clip-text text-transparent ${
                        prefersReducedMotion ? "" : "bg-[length:200%_100%]"
                      }`}
                      animate={
                        prefersReducedMotion
                          ? {}
                          : {
                              backgroundPosition: [
                                "0% 50%",
                                "100% 50%",
                                "0% 50%",
                              ],
                            }
                      }
                      transition={{ duration: 3, repeat: Infinity }}
                      style={{
                        // Fallback color for better accessibility
                        color: prefersReducedMotion
                          ? "hsl(var(--primary))"
                          : undefined,
                      }}
                    >
                      Walum
                    </motion.span>
                  </motion.h1>

                  {/* Title */}
                  <motion.h2
                    className="text-2xl lg:text-3xl font-light text-muted-foreground"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      delay: prefersReducedMotion ? 0 : 0.7,
                      duration: prefersReducedMotion ? 0 : 0.8,
                    }}
                  >
                    Software Developer
                  </motion.h2>
                </div>

                {/* Description */}
                <motion.p
                  className="text-lg text-muted-foreground leading-relaxed max-w-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    delay: prefersReducedMotion ? 0 : 0.9,
                    duration: prefersReducedMotion ? 0 : 0.8,
                  }}
                >
                  I craft beautiful, scalable software solutions that solve
                  real-world problems. Passionate about clean code, user
                  experience, and innovative technologies.
                </motion.p>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: prefersReducedMotion ? 0 : 1.1,
                  duration: prefersReducedMotion ? 0 : 0.8,
                }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.div
                  whileHover={prefersReducedMotion ? {} : { y: -2 }}
                  whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                >
                  <Button asChild className="group">
                    <Link
                      href="/contact"
                      className="flex items-center justify-center min-w-[200px]"
                    >
                      <Send className="w-4 h-4 mr-2 group-hover:translate-x-0.5 transition-transform duration-200" />
                      Let's work together
                    </Link>
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={prefersReducedMotion ? {} : { y: -2 }}
                  whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                >
                  <Button asChild variant="outline" className="group">
                    <Link
                      href="/projects"
                      className="flex items-center justify-center min-w-[200px]"
                    >
                      <Eye className="w-4 h-4 mr-2 group-hover:scale-105 transition-transform duration-200" />
                      View my work
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: prefersReducedMotion ? 0 : 1.3,
                  duration: prefersReducedMotion ? 0 : 0.8,
                }}
                className="flex gap-4 pt-4"
                role="list"
                aria-label="Social media links"
              >
                {socials.map((social, index) => (
                  <motion.div
                    key={social.title}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      delay: prefersReducedMotion ? 0 : 1.4 + index * 0.1,
                      duration: prefersReducedMotion ? 0 : 0.5,
                    }}
                    whileHover={
                      prefersReducedMotion ? {} : { scale: 1.1, y: -2 }
                    }
                    whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
                    role="listitem"
                  >
                    <Link
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-card/80 hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-lg border border-border/50 hover:border-primary/50 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                      title={social.title}
                      aria-label={`Visit my ${social.title} profile`}
                    >
                      {social.icon}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right Side - Enhanced Video */}
            <motion.div
              initial={{ opacity: 0, x: 50, rotateY: 15 }}
              animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
              transition={{
                delay: prefersReducedMotion ? 0 : 0.8,
                duration: prefersReducedMotion ? 0 : 1,
                ease: "easeOut",
              }}
              className="relative"
            >
              <div className="relative group">
                {/* Glow effect */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-primary/20 via-purple-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 scale-105 opacity-60"
                  aria-hidden="true"
                ></div>

                {/* Video container */}
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-muted to-muted/50 border border-border/20 group-hover:shadow-3xl transition-all duration-500">
                  <video
                    src="/videos/hero-demo.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    aria-label="Demo video showcasing my work"
                  />

                  {/* Subtle overlay */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    aria-hidden="true"
                  ></div>

                  {/* Play indicator (decorative) */}
                  <motion.div
                    className="absolute bottom-4 right-4 w-3 h-3 bg-primary rounded-full"
                    animate={
                      prefersReducedMotion
                        ? {}
                        : {
                            scale: [1, 1.2, 1],
                            opacity: [0.7, 1, 0.7],
                          }
                    }
                    transition={{ duration: 2, repeat: Infinity }}
                    aria-hidden="true"
                  />
                </div>

                {/* Floating elements */}
                <motion.div
                  className="absolute -top-2 -right-2 w-4 h-4 bg-primary/60 rounded-full"
                  animate={
                    prefersReducedMotion
                      ? {}
                      : {
                          scale: [1, 1.3, 1],
                          opacity: [0.6, 1, 0.6],
                        }
                  }
                  transition={{ duration: 3, repeat: Infinity }}
                  aria-hidden="true"
                />
                <motion.div
                  className="absolute -bottom-2 -left-2 w-3 h-3 bg-purple-500/40 rounded-full"
                  animate={
                    prefersReducedMotion
                      ? {}
                      : {
                          scale: [1, 1.4, 1],
                          opacity: [0.4, 0.8, 0.4],
                        }
                  }
                  transition={{ duration: 4, repeat: Infinity, delay: 1.5 }}
                  aria-hidden="true"
                />
              </div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{
              delay: prefersReducedMotion ? 0 : 2,
              duration: prefersReducedMotion ? 0 : 0.8,
            }}
            className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 hidden lg:block"
            aria-label="Scroll down indicator"
          >
            <motion.div
              animate={prefersReducedMotion ? {} : { y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2 text-muted-foreground/60"
            >
              <span className="text-sm font-medium">Scroll</span>
              <div className="w-px h-12 bg-gradient-to-b from-muted-foreground/40 to-transparent"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </DotBackground>
  );
}
