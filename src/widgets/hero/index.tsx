"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Leaf, Shield, TrendingUp } from "lucide-react";
import { Container } from "@/src/shared/ui";
import { Button } from "@/src/shared/ui/button";
import { useLanguage } from "@/src/shared/providers/language-provider";

const slides = [
  { type: "video" as const, src: "/images/slide/intro1.mp4" },
  { type: "image" as const, src: "/images/slide/hero0.jpg" },
  { type: "video" as const, src: "/images/slide/intro2.mp4" },
  { type: "image" as const, src: "/images/slide/hero3.jpg" },
  { type: "image" as const, src: "/images/slide/hero6.jpg" },
];

const floatingItems = [
  { icon: "🌾", x: "15%", y: "20%", delay: 0 },
  { icon: "🌿", x: "85%", y: "35%", delay: 0.3 },
  { icon: "🌺", x: "10%", y: "60%", delay: 0.6 },
  { icon: "🌱", x: "75%", y: "65%", delay: 0.9 },
  { icon: "🌻", x: "90%", y: "15%", delay: 1.2 },
  { icon: "🍃", x: "20%", y: "80%", delay: 1.5 },
];

export function HeroSection() {
  const { t, lang } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden bg-[var(--color-surface)]">
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute inset-0"
          >
            {slides[currentSlide].type === "video" ? (
              <video
                src={slides[currentSlide].src}
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover"
              />
            ) : (
              <img
                src={slides[currentSlide].src}
                alt=""
                className="h-full w-full object-cover"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-surface)]/70 via-[var(--color-surface)]/30 to-transparent" />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/[0.04] via-transparent to-[var(--color-accent)]/[0.04]" />

      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 40%, var(--color-primary) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {floatingItems.map((item, i) => (
        <motion.div
          key={i}
          className="absolute hidden lg:block pointer-events-none text-3xl"
          style={{ left: item.x, top: item.y }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 0.25, y: 0 }}
          transition={{ delay: item.delay + 0.5, duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          whileInView={{
            y: [-8, 8, -8],
            transition: { repeat: Infinity, duration: 4 + i * 0.5, ease: "easeInOut" },
          }}
        >
          {item.icon}
        </motion.div>
      ))}

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--color-surface)] to-transparent z-10" />

      <Container size="lg" className="relative z-10 pt-28 pb-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div style={{ opacity }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)]/20 bg-[var(--color-primary)]/[0.08] px-4 py-1.5 text-sm font-medium text-[var(--color-primary)] backdrop-blur-md"
            >
              <Leaf className="h-3.5 w-3.5" />
              <span>{t("hero.badge")}</span>
            </motion.div>

            <h1 className="font-serif text-4xl font-light leading-tight tracking-tight md:text-5xl lg:text-6xl"
                style={{ color: "var(--color-text-primary)" }}>
              <span className="block overflow-hidden">
                <motion.span
                  className="inline-block"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  {t("hero.title1")}
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  className="inline-block text-[var(--color-primary)]"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  {t("hero.title2")}
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  className="inline-block"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                  style={{ color: "var(--color-text-primary)" }}
                >
                  {t("hero.title3")}
                </motion.span>
              </span>
            </h1>

            <motion.p
              className="mt-6 max-w-lg text-lg leading-relaxed"
              style={{ color: "var(--color-text-secondary)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              {t("hero.subtitle")}
            </motion.p>

            <motion.div
              className="mt-10 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <Link href="/products">
                <Button variant="primary" size="lg">
                  {t("hero.cta1")}
                  <ArrowRight className={`h-4 w-4 ${lang === "ar" ? "rotate-180" : ""}`} />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="secondary" size="lg">
                  {t("hero.cta2")}
                </Button>
              </Link>
            </motion.div>

            <motion.div
              className="mt-14 flex items-center gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              {[
                { icon: Shield, label: "USDA Organic" },
                { icon: Shield, label: "EU Organic" },
                { icon: TrendingUp, label: "GMP Certified" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--color-success)]/10">
                    <item.icon className="h-3.5 w-3.5 text-[var(--color-success)]" />
                  </div>
                  <span className="text-xs font-medium" style={{ color: "var(--color-text-muted)" }}>
                    {item.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              <div className="rounded-3xl gradient-primary p-1 shadow-premium-lg">
                <div className="rounded-2xl bg-[var(--color-surface)]/95 backdrop-blur-sm p-6">
                  <div className="space-y-4">
                    <div className="glass inline-flex rounded-xl px-4 py-2">
                      <span className="text-sm font-medium text-[var(--color-text-secondary)]">
                        Premium Selection
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { img: "/product/BASIL.jpg", name: "Basil", origin: "Egypt" },
                        { img: "/product/Cinnamon.jpg", name: "Cinnamon", origin: "Sri Lanka" },
                        { img: "/product/Coriander.jpg", name: "Coriander", origin: "Morocco" },
                        { img: "/product/Fennel.jpg", name: "Fennel", origin: "India" },
                        { img: "/product/Ginger.jpg", name: "Ginger", origin: "Nigeria" },
                        { img: "/product/Liquorice.jpg", name: "Liquorice", origin: "Syria" },
                      ].map((item, i) => (
                        <motion.div
                          key={i}
                          className="glass rounded-xl p-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 + i * 0.08, duration: 0.5 }}
                        >
                          <div className="h-14 w-full rounded-lg overflow-hidden bg-[var(--color-surface-alt)] mb-1.5">
                            <img
                              src={item.img}
                              alt={item.name}
                              className="h-full w-full object-cover"
                              onError={(e) => {
                                const el = e.target as HTMLImageElement;
                                el.style.display = "none";
                                el.parentElement!.classList.add("flex", "items-center", "justify-center");
                                el.parentElement!.textContent = "🌿";
                              }}
                            />
                          </div>
                          <div className="font-serif text-[11px] font-medium leading-tight" style={{ color: "var(--color-text-primary)" }}>
                            {item.name}
                          </div>
                          <div className="text-[10px]" style={{ color: "var(--color-text-muted)" }}>
                            {item.origin}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                className="absolute -bottom-5 -left-5 h-24 w-24 rounded-2xl bg-[var(--color-glass)] backdrop-blur-md border border-[var(--color-glass-border)] shadow-premium flex items-center justify-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <div className="text-center">
                  <div className="font-serif text-2xl font-light text-[var(--color-primary)]">30+</div>
                  <div className="text-xs text-[var(--color-text-muted)]">Years</div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -top-3 -right-3 h-20 w-20 rounded-2xl gradient-accent shadow-premium flex items-center justify-center"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <div className="text-center text-white">
                  <div className="text-lg font-bold">50+</div>
                  <div className="text-[10px] opacity-80">Countries</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === currentSlide ? "w-8 bg-[var(--color-primary)]" : "w-1.5 bg-[var(--color-border)]"
              }`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
