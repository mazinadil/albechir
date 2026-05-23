"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Minus, Plus, X } from "lucide-react";
import { portfolioItems } from "@/data/portfolio";

const gradients = [
  "from-amber-100 via-white to-blue-50",
  "from-blue-100 via-white to-blue-50",
  "from-emerald-100 via-white to-blue-50",
  "from-sky-100 via-white to-blue-50",
];

export function PortfolioSection() {
  const [previewImage, setPreviewImage] = useState<{
    alt: string;
    height: number;
    src: string;
    title: string;
    width: number;
  } | null>(null);
  const [previewZoom, setPreviewZoom] = useState(1);

  useEffect(() => {
    if (!previewImage) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setPreviewImage(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [previewImage]);

  return (
    <section
      id="portfolio"
      className="py-[3.9rem] lg:py-[5.2rem] bg-[#f8fbff] relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_110%,rgba(37,99,235,0.1),transparent)]" />
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(37,99,235,0.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37,99,235,0.045) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="inline-block text-brand-blue text-xs font-bold tracking-[0.2em] uppercase bg-brand-blue/[0.06] border border-brand-blue/10 px-4 py-1.5 rounded-full">
            Selected Work
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-[2.8rem] font-extrabold text-gray-950 leading-tight">
            Work That Generates{" "}
            <span className="text-brand-blue">Results</span>
          </h2>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {portfolioItems.map((item, index) => (
            <motion.button
              type="button"
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={() => {
                if (item.preview) {
                  setPreviewZoom(1);
                  setPreviewImage(item.preview);
                }
              }}
              className="group h-full cursor-pointer text-left"
              aria-label={
                item.preview
                  ? `Open ${item.title} project preview`
                  : `${item.title} project`
              }
            >
              <div className="relative flex h-full min-h-[267px] flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white transition-[border-color,box-shadow] duration-300 hover:border-brand-blue/25 hover:shadow-[0_18px_46px_rgba(37,99,235,0.12)]">
                {/* Image placeholder with gradient */}
                <div className={`h-[183px] shrink-0 bg-gradient-to-br ${gradients[index]} relative overflow-hidden`}>
                  {item.image.includes("-cover.") ? (
                    <>
                      <Image
                        src={item.image}
                        alt={`${item.title} cover preview`}
                        fill
                        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover object-top"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
                    </>
                  ) : (
                    <div className="absolute inset-4 flex flex-col justify-between">
                      <div className="flex gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-white/20" />
                        <div className="w-2 h-2 rounded-full bg-white/15" />
                        <div className="w-2 h-2 rounded-full bg-white/10" />
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 bg-white/10 rounded-full w-3/4" />
                        <div className="h-2 bg-white/8 rounded-full w-1/2" />
                        <div className="flex gap-2 mt-3">
                          <div className="h-5 w-16 bg-brand-blue/30 rounded-md" />
                          <div className="h-5 w-12 bg-white/10 rounded-md" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="flex h-[84px] shrink-0 flex-col justify-center p-4">
                  <h3 className="mb-1 line-clamp-2 min-h-[2.5rem] text-sm font-semibold leading-5 text-gray-950 transition-colors duration-300 group-hover:text-brand-blue">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-xs">{item.category}</p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-14"
        >
          <Link
            href="/portfolio"
            className="cta-attention group inline-flex items-center gap-2.5 px-8 py-3.5 bg-gradient-to-r from-brand-blue to-brand-blue-dark text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(37,99,235,0.25)]"
          >
            View More Work
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>

      <AnimatePresence>
        {previewImage && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={previewImage.alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-brand-navy/85 px-3 py-4 backdrop-blur-xl sm:px-6 sm:py-6"
            onClick={() => setPreviewImage(null)}
          >
            <div className="mx-auto flex h-full max-w-5xl flex-col">
              <div className="mb-3 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-blue">
                    Project Preview
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-white">
                    {previewImage.title}
                  </h3>
                </div>
                <div className="flex shrink-0 items-center gap-2">
                  <div className="flex items-center overflow-hidden rounded-full border border-white/[0.08] bg-white/[0.06] text-white">
                    <button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        setPreviewZoom((zoom) => Math.max(1, zoom - 0.25));
                      }}
                      className="flex h-10 w-10 items-center justify-center transition-colors hover:bg-white/[0.1] disabled:cursor-not-allowed disabled:opacity-40"
                      aria-label="Zoom out"
                      disabled={previewZoom <= 1}
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        setPreviewZoom((zoom) => Math.min(2.5, zoom + 0.25));
                      }}
                      className="flex h-10 w-10 items-center justify-center border-l border-white/[0.08] transition-colors hover:bg-white/[0.1]"
                      aria-label="Zoom in"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() => setPreviewImage(null)}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.06] text-white transition-colors hover:bg-white/[0.12]"
                    aria-label="Close preview"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <motion.div
                initial={{ y: 24, scale: 0.98 }}
                animate={{ y: 0, scale: 1 }}
                exit={{ y: 16, scale: 0.98 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className="max-h-[calc(100dvh-6.5rem)] overflow-auto rounded-2xl border border-white/[0.08] bg-white shadow-[0_28px_90px_rgba(0,0,0,0.45)]"
                onClick={(event) => event.stopPropagation()}
              >
                <Image
                  src={previewImage.src}
                  alt={previewImage.alt}
                  width={previewImage.width}
                  height={previewImage.height}
                  className="block h-auto max-w-none"
                  style={{ width: `${previewZoom * 100}%` }}
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
