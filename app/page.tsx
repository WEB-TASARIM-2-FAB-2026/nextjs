"use client";

import { motion } from "framer-motion";
import { Button, Chip } from "@heroui/react";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import {
  SiReact,
  SiFlutter,
  SiNextdotjs,
  SiSpringboot,
  SiTypescript,
  SiJavascript,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";
import { FiArrowRight, FiCode, FiUsers, FiClock, FiStar } from "react-icons/fi";

const techStack = [
  { name: "React Native", icon: <SiReact />, color: "#61DAFB" },
  { name: "Flutter", icon: <SiFlutter />, color: "#02569B" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "#ffffff" },
  { name: "Spring Boot", icon: <SiSpringboot />, color: "#6DB33F" },
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
  { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169E1" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
];

const stats = [
  { icon: <FiClock />, value: "3+", label: "Yıl Deneyim" },
  { icon: <FiUsers />, value: "15K+", label: "Aktif Kullanıcı" },
  { icon: <FiCode />, value: "200+", label: "Eğitim Verilen Öğrenci" },
  { icon: <FiStar />, value: "4", label: "Şirket Deneyimi" },
];

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="hero-gradient relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Floating background orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 left-10 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, -80, 0],
              y: [0, 60, 0],
              scale: [1, 0.8, 1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 w-64 h-64 bg-orange-400/3 rounded-full blur-3xl"
          />
        </div>

        {/* Dot pattern overlay */}
        <div className="absolute inset-0 dot-pattern opacity-30" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          {/* Badge */}
          <AnimatedSection delay={0.1}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-orange-500/20 text-orange-400 text-sm font-medium mb-8"
            >
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-2 h-2 rounded-full bg-green-400 inline-block"
              />
              İşe alıma açık
            </motion.div>
          </AnimatedSection>

          {/* Name & Title */}
          <AnimatedSection delay={0.2}>
            <h1 className="text-5xl sm:text-7xl font-black mb-4 tracking-tight">
              <span className="text-white">Merhaba, ben </span>
              <span className="gradient-text">Bedirhan</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <p className="text-xl sm:text-2xl text-zinc-400 font-light mb-3">
              Full Stack Software Engineer
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <p className="text-base sm:text-lg text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed">
              React Native, Flutter, Next.js ve Spring Boot ile ölçeklenebilir
              mobil ve web platformları oluşturuyorum. Mikro servis mimarileri
              tasarlıyor, kullanıcı deneyimini iyileştiriyorum.
            </p>
          </AnimatedSection>

          {/* CTA Buttons */}
          <AnimatedSection delay={0.5}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/projelerim">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold px-8 py-6 text-base shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-shadow"
                  >
                    Projelerimi Gör <FiArrowRight className="ml-2" />
                  </Button>
                </motion.div>
              </Link>
              <Link href="/iletisim">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    variant="bordered"
                    className="border-orange-500/30 text-orange-400 hover:bg-orange-500/10 px-8 py-6 text-base font-semibold"
                  >
                    İletişime Geç
                  </Button>
                </motion.div>
              </Link>
            </div>
          </AnimatedSection>

          {/* Floating Tech Icons */}
          <div className="mt-16 relative h-20">
            {techStack.slice(0, 5).map((tech, i) => (
              <motion.div
                key={tech.name}
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3,
                }}
                className="absolute text-2xl opacity-30"
                style={{
                  left: `${15 + i * 17}%`,
                  color: tech.color,
                }}
              >
                {tech.icon}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/3 to-transparent" />
        <div className="section-container relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.08, y: -5 }}
                  className="card-gradient rounded-2xl p-6 text-center cursor-default"
                >
                  <div className="text-orange-500 text-2xl mb-3 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl sm:text-4xl font-black gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-zinc-500">{stat.label}</div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20">
        <div className="section-container">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
              <span className="gradient-text">Teknoloji</span> Yığınım
            </h2>
            <p className="text-zinc-500 text-center mb-12 max-w-lg mx-auto">
              Modern ve ölçeklenebilir çözümler üretmek için kullandığım teknolojiler
            </p>
          </AnimatedSection>

          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, i) => (
              <AnimatedSection key={tech.name} delay={i * 0.08}>
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    y: -5,
                    boxShadow: `0 10px 30px ${tech.color}20`,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Chip
                    size="lg"
                    variant="bordered"
                    className="px-5 py-5 text-sm font-medium border-zinc-700 hover:border-orange-500/50 transition-all cursor-pointer"
                    startContent={
                      <span style={{ color: tech.color }} className="text-lg">
                        {tech.icon}
                      </span>
                    }
                  >
                    {tech.name}
                  </Chip>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20">
        <div className="section-container">
          <AnimatedSection>
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="relative overflow-hidden rounded-3xl p-10 sm:p-16 text-center"
              style={{
                background:
                  "linear-gradient(135deg, rgba(249,115,22,0.15), rgba(251,191,36,0.1))",
                border: "1px solid rgba(249,115,22,0.2)",
              }}
            >
              {/* Animated shimmer */}
              <div className="absolute inset-0 animate-shimmer opacity-50" />

              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
                  Birlikte çalışalım mı?
                </h2>
                <p className="text-zinc-400 mb-8 max-w-md mx-auto">
                  Projeniz için doğru kişiyi arıyorsanız, benimle iletişime
                  geçmekten çekinmeyin.
                </p>
                <Link href="/iletisim">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block"
                  >
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold px-10 py-6 text-base shadow-lg shadow-orange-500/25"
                    >
                      İletişime Geç <FiArrowRight className="ml-2" />
                    </Button>
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
