"use client";

import { motion } from "framer-motion";
import { Card, Chip } from "@heroui/react";
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
  SiDocker,
  SiRedux,
} from "react-icons/si";
import { FiCalendar, FiMapPin, FiBriefcase } from "react-icons/fi";

const skills = [
  { name: "Flutter", icon: <SiFlutter />, color: "#02569B", level: 95 },
  { name: "React Native", icon: <SiReact />, color: "#61DAFB", level: 90 },
  { name: "Next.js", icon: <SiNextdotjs />, color: "#ffffff", level: 85 },
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6", level: 90 },
  { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E", level: 92 },
  { name: "Spring Boot", icon: <SiSpringboot />, color: "#6DB33F", level: 80 },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169E1", level: 78 },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248", level: 75 },
  { name: "Redux", icon: <SiRedux />, color: "#764ABC", level: 85 },
  { name: "Docker", icon: <SiDocker />, color: "#2496ED", level: 70 },
];

const experiences = [
  {
    title: "Software Instructor",
    company: "Üçüncü Binyıl Akademi",
    location: "İstanbul",
    period: "Oca 2025 – Devam Ediyor",
    current: true,
    bullets: [
      "Flutter ve React Native üzerine 200+ öğrenciye 10+ eğitim verdim.",
      "Akademinin web sitesinde SEO/GEO optimizasyonu ve UI/UX iyileştirmeleri yaptım.",
      "50+ öğrenciye cross-platform mobil uygulama geliştirme mentörlüğü yaptım.",
      "Hands-on projeler ve kod incelemeleri ile pratik beceriler kazandırdım.",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Happencode",
    location: "İstanbul",
    period: "Mar 2024 – Oca 2025",
    current: false,
    bullets: [
      "15.000+ aktif kullanıcı tarafından kullanılan mobil uygulamalar geliştirdim.",
      "Spring Boot ile RESTful API'ler tasarladım ve optimize ettim.",
      "Monolitik sistemi mikroservis mimarisine dönüştürdüm.",
    ],
  },
  {
    title: "React Native Developer",
    company: "UNCTAD (Birleşmiş Milletler)",
    location: "İsviçre – Uzaktan",
    period: "Eki 2022 – Eki 2023",
    current: false,
    bullets: [
      "React Native ve Redux Toolkit ile merkeziyetsiz kimlik uygulaması geliştirdim.",
      "On-boarding ve kimlik doğrulama akışları oluşturdum.",
      "Hata raporlarını %20 azalttım, state yönetimi ve temiz mimari ile.",
      "Web 3.0 kullanıcı deneyimi standartlarına uyumlu çalıştım.",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company: "Mavinci",
    location: "Ankara",
    period: "Ağu 2022 – Eyl 2022",
    current: false,
    bullets: [
      "React ile harita görselleştirme aracı geliştirdim.",
      "Spring Boot backend ile entegrasyon sağladım.",
      "Docker ile servisleri konteynerize ettim.",
    ],
  },
];

export default function Hakkimda() {
  return (
    <div className="relative">
      {/* Header */}
      <section className="hero-gradient py-24 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="section-container relative text-center">
          <AnimatedSection>
            <h1 className="text-4xl sm:text-6xl font-black mb-4">
              <span className="gradient-text">Hakkımda</span>
            </h1>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
              3+ yıllık deneyime sahip, sonuç odaklı bir Full Stack yazılım
              mühendisiyim. Mobil ve web platformlarında ölçeklenebilir çözümler
              üretiyorum.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Education */}
      <section className="py-16">
        <div className="section-container">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">
              🎓 <span className="gradient-text">Eğitim</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <motion.div whileHover={{ scale: 1.02 }} className="card-gradient rounded-2xl p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Bilgisayar Mühendisliği (Lisans)
                  </h3>
                  <p className="text-orange-400 font-medium">
                    Haliç Üniversitesi, İstanbul
                  </p>
                </div>
                <Chip
                  variant="bordered"
                  className="border-orange-500/30 text-orange-400"
                  startContent={<FiCalendar className="mr-1" />}
                >
                  2019 – 2023
                </Chip>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-16">
        <div className="section-container">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl font-bold mb-12">
              💼 <span className="gradient-text">Deneyim</span>
            </h2>
          </AnimatedSection>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-orange-500 via-orange-500/30 to-transparent" />

            <div className="space-y-8">
              {experiences.map((exp, i) => (
                <AnimatedSection key={exp.company} delay={i * 0.15} direction="left">
                  <div className="relative pl-12 sm:pl-20">
                    {/* Timeline dot */}
                    <motion.div
                      whileHover={{ scale: 1.3 }}
                      className={`absolute left-2 sm:left-6 top-6 w-5 h-5 rounded-full border-2 ${
                        exp.current
                          ? "bg-orange-500 border-orange-400 shadow-lg shadow-orange-500/50"
                          : "bg-zinc-800 border-orange-500/50"
                      }`}
                    >
                      {exp.current && (
                        <motion.div
                          animate={{ scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] }}
                          transition={{ repeat: Infinity, duration: 2 }}
                          className="absolute inset-0 rounded-full bg-orange-500"
                        />
                      )}
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.02 }}>
                      <Card className="card-gradient rounded-2xl p-6 sm:p-8 bg-transparent shadow-none">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <FiBriefcase className="text-orange-500" />
                              <h3 className="text-lg sm:text-xl font-bold text-white">
                                {exp.title}
                              </h3>
                              {exp.current && (
                                <Chip size="sm" className="bg-orange-500/20 text-orange-400 text-xs">
                                  Aktif
                                </Chip>
                              )}
                            </div>
                            <p className="text-orange-400 font-medium">
                              {exp.company}
                            </p>
                          </div>
                          <div className="flex flex-col sm:items-end gap-1 text-sm text-zinc-500">
                            <span className="flex items-center gap-1">
                              <FiCalendar size={14} />
                              {exp.period}
                            </span>
                            <span className="flex items-center gap-1">
                              <FiMapPin size={14} />
                              {exp.location}
                            </span>
                          </div>
                        </div>

                        <ul className="space-y-2">
                          {exp.bullets.map((bullet, j) => (
                            <motion.li
                              key={j}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: j * 0.1 }}
                              className="flex items-start gap-3 text-zinc-400 text-sm leading-relaxed"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
                              {bullet}
                            </motion.li>
                          ))}
                        </ul>
                      </Card>
                    </motion.div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16">
        <div className="section-container">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl font-bold mb-12">
              🛠️ <span className="gradient-text">Yetenekler</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skills.map((skill, i) => (
              <AnimatedSection key={skill.name} delay={i * 0.08}>
                <motion.div
                  whileHover={{ scale: 1.03, x: 5 }}
                  className="card-gradient rounded-xl p-5 flex items-center gap-4 cursor-default"
                >
                  <div
                    className="text-2xl shrink-0"
                    style={{ color: skill.color }}
                  >
                    {skill.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold text-white">
                        {skill.name}
                      </span>
                      <span className="text-xs text-orange-400 font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: i * 0.1,
                          ease: "easeOut",
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-orange-500 to-amber-400"
                      />
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
