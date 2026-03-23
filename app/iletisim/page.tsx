"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, Button, TextField, Input, TextArea, Label } from "@heroui/react";
import AnimatedSection from "@/components/AnimatedSection";
import {
  FiMail,
  FiPhone,
  FiLinkedin,
  FiGithub,
  FiSend,
  FiMapPin,
  FiArrowUpRight,
} from "react-icons/fi";

const contactInfo = [
  {
    icon: <FiMail className="text-xl" />,
    label: "Email",
    value: "bedirhangiden.info@gmail.com",
    href: "mailto:bedirhangiden.info@gmail.com",
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    icon: <FiPhone className="text-xl" />,
    label: "Telefon",
    value: "+90 536 890 45 28",
    href: "tel:+905368904528",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    icon: <FiLinkedin className="text-xl" />,
    label: "LinkedIn",
    value: "Bedirhan Giden",
    href: "https://linkedin.com/in/bedirhangiden",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: <FiGithub className="text-xl" />,
    label: "GitHub",
    value: "bedirhangiden",
    href: "https://github.com/bedirhangiden",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: <FiMapPin className="text-xl" />,
    label: "Konum",
    value: "İstanbul, Türkiye",
    href: null,
    color: "from-amber-500/20 to-orange-500/20",
  },
];

export default function Iletisim() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="relative">
      {/* Header */}
      <section className="hero-gradient py-24 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="section-container relative text-center">
          <AnimatedSection>
            <h1 className="text-4xl sm:text-6xl font-black mb-4">
              <span className="gradient-text">İletişim</span>
            </h1>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Bir projeniz mi var? Birlikte çalışmak mı istiyorsunuz? Benimle
              iletişime geçin!
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info Cards */}
            <div>
              <AnimatedSection>
                <h2 className="text-2xl font-bold mb-8 text-white">
                  📬 <span className="gradient-text">İletişim Bilgileri</span>
                </h2>
              </AnimatedSection>

              <div className="space-y-4">
                {contactInfo.map((info, i) => (
                  <AnimatedSection key={info.label} delay={i * 0.1} direction="left">
                    <motion.div whileHover={{ scale: 1.03, x: 8 }}>
                      {info.href ? (
                        <a
                          href={info.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block"
                        >
                          <Card className="card-gradient rounded-xl p-5 bg-transparent shadow-none flex-row items-center gap-4 cursor-pointer group">
                            <div
                              className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center text-white shrink-0`}
                            >
                              {info.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-xs text-zinc-500 uppercase tracking-wider mb-0.5">
                                {info.label}
                              </p>
                              <p className="text-white font-medium text-sm truncate">
                                {info.value}
                              </p>
                            </div>
                            <FiArrowUpRight className="text-zinc-600 group-hover:text-orange-400 transition-colors shrink-0" />
                          </Card>
                        </a>
                      ) : (
                        <Card className="card-gradient rounded-xl p-5 bg-transparent shadow-none flex-row items-center gap-4">
                          <div
                            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center text-white shrink-0`}
                          >
                            {info.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-0.5">
                              {info.label}
                            </p>
                            <p className="text-white font-medium text-sm">
                              {info.value}
                            </p>
                          </div>
                        </Card>
                      )}
                    </motion.div>
                  </AnimatedSection>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <AnimatedSection direction="right">
                <h2 className="text-2xl font-bold mb-8 text-white">
                  ✉️ <span className="gradient-text">Mesaj Gönder</span>
                </h2>
              </AnimatedSection>

              <AnimatedSection delay={0.2} direction="right">
                <motion.div whileHover={{ scale: 1.01 }}>
                  <Card className="card-gradient rounded-2xl p-6 sm:p-8 bg-transparent shadow-none">
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <TextField
                        isRequired
                        value={formData.name}
                        onChange={(v) => setFormData({ ...formData, name: v })}
                      >
                        <Label className="text-zinc-400 text-sm mb-1">İsim</Label>
                        <Input
                          placeholder="Adınızı girin"
                          className="bg-zinc-900/50 border border-zinc-700 hover:border-orange-500/50 focus:border-orange-500 rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors"
                        />
                      </TextField>

                      <TextField
                        isRequired
                        type="email"
                        value={formData.email}
                        onChange={(v) => setFormData({ ...formData, email: v })}
                      >
                        <Label className="text-zinc-400 text-sm mb-1">Email</Label>
                        <Input
                          placeholder="Email adresinizi girin"
                          className="bg-zinc-900/50 border border-zinc-700 hover:border-orange-500/50 focus:border-orange-500 rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors"
                        />
                      </TextField>

                      <TextField
                        isRequired
                        value={formData.message}
                        onChange={(v) => setFormData({ ...formData, message: v })}
                      >
                        <Label className="text-zinc-400 text-sm mb-1">Mesaj</Label>
                        <TextArea
                          placeholder="Mesajınızı yazın..."
                          rows={5}
                          className="bg-zinc-900/50 border border-zinc-700 hover:border-orange-500/50 focus:border-orange-500 rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors resize-none"
                        />
                      </TextField>

                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          type="submit"
                          size="lg"
                          className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-shadow"
                          isDisabled={submitted}
                        >
                          {submitted ? (
                            <motion.span
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="flex items-center gap-2"
                            >
                              ✓ Mesaj Gönderildi!
                            </motion.span>
                          ) : (
                            <span className="flex items-center gap-2">
                              Gönder <FiSend />
                            </span>
                          )}
                        </Button>
                      </motion.div>
                    </form>
                  </Card>
                </motion.div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
