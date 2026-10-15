"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight, FaGithub, FaLocationArrow } from "react-icons/fa";

const galleryImages = [
  "Screenshot 2025-07-04 122830.png",
  "Screenshot 2025-07-04 122847.png",
  "Screenshot 2025-07-04 123919.png",
  "Screenshot 2025-07-04 123933.png",
  "Screenshot 2025-07-04 132404.png",
  "Screenshot 2025-07-04 132553.png",
  "Screenshot 2025-07-04 132559.png",
  "Screenshot 2025-07-04 132609.png",
  "Screenshot 2025-07-04 132617.png",
  "Screenshot 2025-07-04 132625.png",
  "Screenshot 2025-07-04 132652.png",
  "Screenshot 2025-07-04 132706.png",
  "Screenshot 2025-07-04 132715.png",
  "Screenshot 2025-07-04 132720.png",
  "Screenshot 2025-07-04 132731.png",
  "Screenshot 2025-07-04 132737.png",
  "Screenshot 2025-07-04 132742.png",
  "Screenshot 2025-07-04 132748.png",
  "Screenshot 2025-07-04 132803.png",
  "Screenshot 2025-07-04 132808.png",
  "Screenshot 2025-07-04 132813.png",
  "Screenshot 2025-07-04 132818.png",
  "Screenshot 2025-07-04 132825.png",
  "Screenshot 2025-07-04 132848.png",
  "Screenshot 2025-07-04 132856.png",
  "Screenshot 2025-07-04 132902.png",
  "Screenshot 2025-07-04 133020.png",
  "Screenshot 2025-07-04 133028.png",
  "Screenshot 2025-07-04 133033.png",
  "Screenshot 2025-07-04 133052.png",
  "Screenshot 2025-07-04 133106.png",
  "Screenshot 2025-07-04 133121.png",
  "Screenshot 2025-07-04 133132.png",
  "Screenshot 2025-07-04 133137.png",
  "Screenshot 2025-07-04 133149.png",
  "Screenshot 2025-07-04 133159.png",
  "Screenshot 2025-07-04 133231.png",
  "Screenshot 2025-07-04 133236.png",
  "Screenshot 2025-07-04 133240.png",
  "Screenshot 2025-07-04 133244.png",
  "Screenshot 2025-07-04 133250.png",
  "Screenshot 2025-07-04 133255.png",
  "Screenshot 2025-07-04 133306.png",
  "Screenshot 2025-07-04 133316.png",
  "Screenshot 2025-07-04 133327.png",
  "Screenshot 2025-07-04 133335.png",
  "Screenshot 2025-07-04 133352.png",
  "Screenshot 2025-07-04 133400.png",
  "Screenshot 2025-07-04 133406.png",
  "Screenshot 2025-07-04 133410.png",
  "Screenshot 2025-07-04 133420.png",
  "Screenshot 2025-07-04 133429.png",
  "Screenshot 2025-07-04 133438.png",
  "Screenshot 2025-07-04 133447.png",
  "Screenshot 2025-07-04 133456.png",
  "Screenshot 2025-07-04 133514.png",
  "Screenshot 2025-07-04 133523.png",
  "Screenshot 2025-07-04 133532.png",
  "Screenshot 2025-07-04 133538.png",
  "Screenshot 2025-07-04 133551.png",
  "Screenshot 2025-07-04 133559.png",
  "Screenshot 2025-07-04 133604.png",
  "Screenshot 2025-07-04 133637.png",
  "Screenshot 2025-07-04 133655.png",
  "Screenshot 2025-07-04 133810.png",
  "Screenshot 2025-07-04 134009.png",
  "Screenshot 2025-07-04 134027.png",
  "Screenshot 2025-07-04 134040.png",
  "Screenshot 2025-07-04 134058.png",
];

const buildImageSrc = (fileName: string) => `/tunisair/${encodeURIComponent(fileName)}`;

export default function TunisairProjectPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(12);

  const visibleImages = galleryImages.slice(0, visibleCount);
  const hasMoreImages = visibleCount < galleryImages.length;

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (!selectedImage) return;
      if (event.key === "Escape") setSelectedImage(null);
      if (event.key === "ArrowRight") nextImage();
      if (event.key === "ArrowLeft") previousImage();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedImage, activeIndex]);

  const openImage = (index: number) => {
    setActiveIndex(index);
    setSelectedImage(buildImageSrc(galleryImages[index]));
  };

  const nextImage = () => {
    setActiveIndex((prev) => {
      const nextIndex = (prev + 1) % galleryImages.length;
      setSelectedImage(buildImageSrc(galleryImages[nextIndex]));
      return nextIndex;
    });
  };

  const previousImage = () => {
    setActiveIndex((prev) => {
      const previousIndex = (prev - 1 + galleryImages.length) % galleryImages.length;
      setSelectedImage(buildImageSrc(galleryImages[previousIndex]));
      return previousIndex;
    });
  };

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(124,58,237,0.18),_transparent_35%),linear-gradient(135deg,_#020617_0%,_#050816_45%,_#0f172a_100%)] text-white">
      <div className="mx-auto flex max-w-7xl flex-col px-5 py-10 sm:px-10 lg:px-8">
        <Link
          href="/"
          className="mb-8 flex w-fit items-center gap-2 rounded-full border border-purple-500/30 bg-white/5 px-4 py-2 text-sm text-purple-200 transition hover:border-purple-400 hover:bg-purple-500/10"
        >
          <FaArrowLeft />
          Back to portfolio
        </Link>

        <section className="overflow-hidden rounded-[2rem] border border-purple-500/20 bg-black/50 shadow-[0_0_60px_rgba(168,85,247,0.12)]">
          <div className="grid gap-8 p-6 md:grid-cols-[1.1fr_0.9fr] md:p-10">
            <div className="flex flex-col justify-center">
              <span className="mb-4 w-fit rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-cyan-200">
                Internship project • TunisAir
              </span>
              <h1 className="text-3xl font-black sm:text-4xl lg:text-5xl">
                In-Flight Sales &amp; Operations Management Platform
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                An enterprise-grade Blazor application built with .NET 8 to automate Tunisair&apos;s in-flight sales, crew workflows, and financial operations. It brings sales, flight and crew assignments, commission calculations, cash reconciliation, and reporting together in one secure platform—reducing manual work while improving accuracy.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <div className="rounded-2xl border border-purple-500/20 bg-purple-500/10 px-4 py-3">
                  <p className="text-xs uppercase tracking-[0.35em] text-purple-200">Role</p>
                  <p className="mt-1 font-semibold">Full-stack developer • Workflow automation</p>
                </div>
                <div className="rounded-2xl border border-purple-500/20 bg-purple-500/10 px-4 py-3">
                  <p className="text-xs uppercase tracking-[0.35em] text-purple-200">Stack</p>
                  <p className="mt-1 font-semibold">Blazor • .NET 8 • SQL Server</p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-purple-500/20 via-transparent to-cyan-500/20 p-4">
              <img
                src={buildImageSrc("Screenshot 2025-07-04 133020.png")}
                alt="TunisAir project dashboard preview"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="h-[320px] w-full rounded-[1.2rem] object-cover"
              />
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <h2 className="text-2xl font-semibold text-purple-200">Project story</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              This platform centralizes the day-to-day work behind onboard sales: managing sales and offers, matching transactions with flights and crew rosters, calculating commissions, reconciling cash, and reviewing financial performance. Its responsive Blazor interface gives administrative and operational teams a shared, real-time view of their workflows.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Automation replaces repetitive checks and calculations with validated workflows. Sales are associated with the right flight, crew, and articles; commissions adapt to crew assignments, including dynamic PNC allocations; and cash overages or shortages are flagged as soon as a discrepancy is detected.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Built on .NET 8 with ASP.NET Core Identity, the application protects sensitive operations with role-based access for DGF, Agent Saisie, and administrators. PDF report extraction, in-app notifications, detailed logging, and French-ready validation help make the system practical for real operational use.
            </p>
          </div>

          <div className="rounded-[2rem] border border-cyan-400/20 bg-cyan-500/10 p-6 backdrop-blur-xl">
            <h2 className="text-2xl font-semibold text-cyan-200">Automation at the core</h2>
            <ul className="mt-4 space-y-3 text-slate-200">
              <li className="flex gap-3"><span className="mt-2 h-2.5 w-2.5 rounded-full bg-cyan-300" />Automatically calculates crew commissions from sales, with support for dynamic PNC assignments.</li>
              <li className="flex gap-3"><span className="mt-2 h-2.5 w-2.5 rounded-full bg-cyan-300" />Detects cash-register overages and shortages in real time to surface “trou de caisse” discrepancies.</li>
              <li className="flex gap-3"><span className="mt-2 h-2.5 w-2.5 rounded-full bg-cyan-300" />Connects sales and offers to flight manifests, crew rosters, and article catalogs with validation and duplicate checks.</li>
              <li className="flex gap-3"><span className="mt-2 h-2.5 w-2.5 rounded-full bg-cyan-300" />Applies managed exchange rates to transactions and extracts data from PDF reports.</li>
              <li className="flex gap-3"><span className="mt-2 h-2.5 w-2.5 rounded-full bg-cyan-300" />Provides financial dashboards for revenue, sales, offers, commissions, and operational KPIs.</li>
            </ul>

            <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Highlights</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="rounded-full border border-purple-400/20 bg-purple-500/10 px-3 py-1 text-sm text-purple-100">Crew commission automation</span>
                <span className="rounded-full border border-purple-400/20 bg-purple-500/10 px-3 py-1 text-sm text-purple-100">Cash reconciliation</span>
                <span className="rounded-full border border-purple-400/20 bg-purple-500/10 px-3 py-1 text-sm text-purple-100">Flight &amp; crew assignment</span>
                <span className="rounded-full border border-purple-400/20 bg-purple-500/10 px-3 py-1 text-sm text-purple-100">Role-based security</span>
                <span className="rounded-full border border-purple-400/20 bg-purple-500/10 px-3 py-1 text-sm text-purple-100">PDF data extraction</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-[2rem] border border-white/10 bg-black/40 p-6 backdrop-blur-xl">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-purple-200">Gallery</p>
              <h2 className="mt-2 text-2xl font-semibold">Visual walkthrough of the project</h2>
            </div>
            <a
              href="https://github.com/omarprojects99/VAB"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-100 transition hover:bg-purple-500/20"
            >
              <FaGithub />
              View repository
            </a>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {visibleImages.map((image, index) => (
              <button
                key={image}
                type="button"
                onClick={() => openImage(index)}
                className="group overflow-hidden rounded-[1.25rem] border border-white/10 bg-white/5 text-left"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={buildImageSrc(image)}
                    alt={`TunisAir project view ${index + 1}`}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs uppercase tracking-[0.3em] text-slate-200">
                    <FaLocationArrow />
                    Open preview
                  </div>
                </div>
              </button>
            ))}
          </div>

          {hasMoreImages && (
            <button
              type="button"
              onClick={() => setVisibleCount((prev) => Math.min(prev + 12, galleryImages.length))}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-gradient-to-r from-cyan-500/20 via-purple-500/15 to-fuchsia-500/20 px-5 py-2.5 text-sm font-semibold text-cyan-100 shadow-[0_0_30px_rgba(34,211,238,0.12)] transition hover:scale-[1.02] hover:border-cyan-300/50 hover:text-white"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
              Load all screenshots
            </button>
          )}
        </section>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 px-4 py-6 backdrop-blur-sm">
          <div className="relative w-full max-w-6xl rounded-[2rem] border border-white/10 bg-[#020617]/90 p-3 shadow-[0_0_80px_rgba(168,85,247,0.25)]">
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute right-4 top-4 z-10 rounded-full border border-white/10 bg-black/60 px-3 py-2 text-sm text-slate-200"
            >
              Close
            </button>

            <div className="relative overflow-hidden rounded-[1.5rem]">
              <img src={selectedImage} alt="TunisAir detailed preview" className="max-h-[78vh] w-full object-contain" />
            </div>

            <div className="mt-4 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={previousImage}
                className="flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-100"
              >
                <FaArrowLeft />
                Previous
              </button>
              <p className="text-sm text-slate-300">{activeIndex + 1} / {galleryImages.length}</p>
              <button
                type="button"
                onClick={nextImage}
                className="flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-100"
              >
                Next
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
