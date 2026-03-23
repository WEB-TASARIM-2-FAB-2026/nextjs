"use client";

import { motion } from "framer-motion";
import { Card, Chip, Button } from "@heroui/react";
import AnimatedSection from "@/components/AnimatedSection";
import {
  SiReact,
  SiFlutter,
  SiNextdotjs,
  SiSpringboot,
  SiRedux,
  SiDocker,
} from "react-icons/si";
import { FiExternalLink, FiLayers, FiSmartphone, FiGlobe, FiMap } from "react-icons/fi";

const projects = [
  {
    title: "Merkeziyetsiz Kimlik Uygulaması",
    subtitle: "UNCTAD – Birleşmiş Milletler",
    description:
      "Web 3.0 standartlarına uygun, React Native ve Redux Toolkit ile geliştirilmiş merkeziyetsiz kimlik yönetim uygulaması. Modüler mimari, persistent state storage ve async logic handling ile güvenli on-boarding ve kimlik doğrulama akışları.",
    icon: <FiSmartphone className="text-2xl" />,
    tags: [
      { name: "React Native", icon: <SiReact /> },
      { name: "Redux", icon: <SiRedux /> },
    ],
    gradient: "from-blue-500/20 to-purple-500/20",
    borderColor: "border-blue-500/30",
    achievements: ["Hata raporlarında %20 azalma", "Web 3.0 uyumluluk"],
  },
  {
    title: "Mobil Uygulama Platformu",
    subtitle: "Happencode",
    description:
      "15.000+ aktif kullanıcıya hizmet veren mobil uygulama ekosistemi. Yükleme sürelerinde %40 iyileştirme sağlandı. RESTful API tasarımı ve monolitik sistemden mikroservis mimarisine geçiş.",
    icon: <FiLayers className="text-2xl" />,
    tags: [
      { name: "Spring Boot", icon: <SiSpringboot /> },
      { name: "React Native", icon: <SiReact /> },
    ],
    gradient: "from-orange-500/20 to-red-500/20",
    borderColor: "border-orange-500/30",
    achievements: ["15K+ aktif kullanıcı", "%40 hız iyileştirme"],
  },
  {
    title: "Akademi Web Sitesi",
    subtitle: "Üçüncü Binyıl Akademi",
    description:
      "SEO ve GEO (Generative Engine Optimization) stratejileri uygulanan, UI/UX açısından optimize edilmiş eğitim platformu web sitesi. 200+ öğrenciye hizmet veren kurs yönetim sistemi.",
    icon: <FiGlobe className="text-2xl" />,
    tags: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Flutter", icon: <SiFlutter /> },
    ],
    gradient: "from-green-500/20 to-emerald-500/20",
    borderColor: "border-green-500/30",
    achievements: ["200+ öğrenci", "SEO/GEO optimizasyonu"],
  },
  {
    title: "Harita Görselleştirme Aracı",
    subtitle: "Mavinci",
    description:
      "React ve Spring Boot ile geliştirilmiş, Docker ile konteynerize edilmiş dahili harita görselleştirme aracı. Backend iletişimi ve servis yönetimi.",
    icon: <FiMap className="text-2xl" />,
    tags: [
      { name: "React", icon: <SiReact /> },
      { name: "Spring Boot", icon: <SiSpringboot /> },
      { name: "Docker", icon: <SiDocker /> },
    ],
    gradient: "from-cyan-500/20 to-blue-500/20",
    borderColor: "border-cyan-500/30",
    achievements: ["Docker entegrasyonu", "Harita API entegrasyonu"],
  },
];

export default function Projelerim() {
  return (
    <div className="relative">
      {/* Header */}
      <section className="hero-gradient py-24 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="section-container relative text-center">
          <AnimatedSection>
            <h1 className="text-4xl sm:text-6xl font-black mb-4">
              <span className="gradient-text">Projelerim</span>
            </h1>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Çalıştığım projelerde oluşturduğum ürünler ve katkılarım
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <AnimatedSection
                key={project.title}
                delay={i * 0.15}
                direction={i % 2 === 0 ? "left" : "right"}
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  <Card className={`card-gradient rounded-2xl p-0 bg-transparent shadow-none h-full overflow-hidden ${project.borderColor}`}>
                    {/* Top gradient bar */}
                    <div
                      className={`h-1.5 bg-gradient-to-r ${project.gradient}`}
                    />

                    <div className="p-6 sm:p-8 flex flex-col h-full">
                      {/* Header */}
                      <div className="flex items-start gap-4 mb-4">
                        <motion.div
                          whileHover={{ rotate: 15, scale: 1.1 }}
                          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-white shrink-0`}
                        >
                          {project.icon}
                        </motion.div>
                        <div>
                          <h3 className="text-lg font-bold text-white">
                            {project.title}
                          </h3>
                          <p className="text-orange-400 text-sm font-medium">
                            {project.subtitle}
                          </p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-zinc-400 text-sm leading-relaxed mb-5 flex-1">
                        {project.description}
                      </p>

                      {/* Achievements */}
                      <div className="flex flex-wrap gap-2 mb-5">
                        {project.achievements.map((ach) => (
                          <motion.div key={ach} whileHover={{ scale: 1.05 }}>
                            <Chip
                              size="sm"
                              className="bg-orange-500/10 text-orange-400 text-xs border border-orange-500/20"
                            >
                              ✦ {ach}
                            </Chip>
                          </motion.div>
                        ))}
                      </div>

                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-800">
                        {project.tags.map((tag) => (
                          <motion.div key={tag.name} whileHover={{ scale: 1.08 }}>
                            <Chip
                              size="sm"
                              variant="soft"
                              className="border border-zinc-700 text-zinc-400 text-xs"
                            >
                              <span className="flex items-center gap-1">
                                <span className="text-xs">{tag.icon}</span>
                                {tag.name}
                              </span>
                            </Chip>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Open Source CTA */}
      <section className="py-16">
        <div className="section-container">
          <AnimatedSection>
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="rounded-2xl p-8 sm:p-12 text-center card-gradient"
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-white">
                Daha fazla proje görmek ister misiniz?
              </h2>
              <p className="text-zinc-400 mb-6 max-w-md mx-auto">
                GitHub profilimi ziyaret ederek açık kaynak projelerime ve
                katkılarıma göz atabilirsiniz.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <a
                  href="https://github.com/bedirhangiden"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold px-8 shadow-lg shadow-orange-500/25"
                  >
                    GitHub Profilim <FiExternalLink className="ml-2" />
                  </Button>
                </a>
              </motion.div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
