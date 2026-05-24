"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const categories = [
  { key: "all", label: "All" },
  { key: "living-room", label: "Living Room" },
  { key: "kitchen", label: "Kitchen" },
  { key: "office", label: "Office" },
];

const projects = [
  {
    title: "Minimalist Villa",
    location: "Hanamakonda",
    category: "living-room",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA58GGAY56vJ3voJljPH1PpViuQqAg1hPh-pydCQ9tDwz75vgL9ccf0H9Cj64aHq26zVTQUHoSy7C8LEYjPnj8IH1k84fHkE_D44bBoNVgtHZjFG04K0KSm8PejCfeMFTp0TJV4E6scUjM_6pDBm51auk49Ra-xc-SvlSqRKIHeefGdzJ0lziKDqZusL6MX8-qVi3vFyc5Ew87tK9IKQAA-Uzjo8JB_zduNgyWYXv9sSO5QzkR1KFz7swIpQST5wwAd5gJTB--P2gef",
  },
  {
    title: "Culinary Sanctuary",
    location: "Warangal West",
    category: "kitchen",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDUW_4hOflJpz7-aKJO_rHZE-D73v7Kx7CKLrzUJmVfDky-kKd7OygnBBKkoxSRDKSBr6hcNXhJ-x1BktafchrrS0ga93yoziyBfydmIB5zkBcgqzH0CoKJ25cyJjYJXapzOdbBnPGSskFw7pNy6ybTqSwUUuyX7l8muNJDqvkqtP65iqz_Zq2KwL5UVf0jiM3wwPqIiVomalc_lfm-dCk1nBqEqQ4twn9kH9Nbd2oiuD0eRNGBx6fIVq9V53W5Xsa5ZkOGHNxWWbBd",
  },
  {
    title: "Creative Atelier",
    location: "Knowledge Park",
    category: "office",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDIRsVanuIsTPQMmqLYrJ7QTAmMF6fhk4W1l-dmNMIFmsIXqa_lZQ80Na9l8dDsRNC2FBV4VhlbgX14WqxxvtjDlZlKIjR1MySzbb2258iOfB9D4YvXKqOrJDYSDXHX65rknTExQJjL0iDpeSgSqsNYRnkzjxsiMo1IWF333SVNoj4sDdHYNur2NoeucMK8Y9XPTTh7tf-AFqGrm_8m4qKRz5vjuAbvP-1JzDnaMjCFd8-T6-9ko4QB_QqF1RscoXHNle9dBeAu-B4N",
  },
  {
    title: "Heritage Loft",
    location: "Fort Road",
    category: "living-room",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1zL_C9zbha-drYbO5_fiQnMUoeDaLGUdC1Xnjfygm3D_KBEAAV9rxyP-ifTXX9rjKY98FQwDp8ZLJDoRhsrDZjY7Khfj1v9E-JrFKQ-kqRfn1cDs0TB6UA-bj7TdZFe-1sAEPOFLQ6S9BC8UlHwGsrSWMl_3W2E2zWpN9HBOl0bGZjaUn_lJGeuOJ7RH0TpOx973bKoIaAXP51vUBWRA2h5Lm3TtBgyS6wxqko4twC_PWXyEmqWH9m5c72FMEqBRRdZMDoT4h8cGd",
  },
  {
    title: "The Monolith Kitchen",
    location: "Subedari",
    category: "kitchen",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFy7r5mz3jpe9No_xwbXUt8J1G_BItGuIWQhiW9QA3QyskciSiq-oNHhSsTbXZumei2zwhia9p9wJ_rA6bm8IgcRRiYge-HBVXQZ18kjMgMMaDKoE937ALh5AfwhpBCBCsWWEKpP0CYhHQLgIPbTIZ2UJiX3B0qSLDNLea2TEF5tDuB-Xvar5FUavABfovfwyz09pf8ezTaOtM3kK5014uM2GSaAoc3JuL7dbOxp5EJve9KFFDz_hQ8VQ84JU7pXVbSVJXswZUT9rJ",
  },
  {
    title: "Modern Commons",
    location: "IT Hub",
    category: "office",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBre39kN1YbN-60X_UYNTvT7LLRjQmcVmU6vaB7c9twDKiRnW_KNMK50Uk4d4yRvUHRT9Q4Uaz9XCVg9b1rgqgDj2VL-pl3XReLm5qYV0o7Ji_EnagWDyU2YdB3DXhMDNzq8vwymfa8bjXGo_WrcXA-zd331jZtfoKb0r9M36HqsCleBa10XtuSPpp7ovZTiWuSzwPKi6kBaoDlPmDuTBaRH-Upbv_96CYzPNO5mQDPCCx3_o6cdY6KIQwt5G9eV9rrgWPG6wKvwD7M",
  },
];

export default function Portfolio() {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <>
      {/* Header */}
      <section className="pt-24 pb-16 px-5 md:px-20 max-w-[1280px] mx-auto text-center">
        <h1 className="font-display text-4xl md:text-6xl text-primary mb-6">
          Our Portfolio
        </h1>
        <p className="text-lg text-on-surface-muted max-w-2xl mx-auto leading-relaxed">
          Discover a curated collection of spaces where heritage meets
          modernism. Every project is a testament to our commitment to turning
          visions into timeless architectural realities.
        </p>
      </section>

      {/* Filters */}
      <section className="pb-12 px-5 md:px-20 max-w-[1280px] mx-auto">
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setFilter(cat.key)}
              className={`relative text-xs font-semibold uppercase tracking-[0.1em] transition-colors pb-1 ${
                filter === cat.key
                  ? "text-primary font-bold border-b-2 border-primary"
                  : "text-on-surface-muted hover:text-primary"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="pb-24 md:pb-32 px-5 md:px-20 max-w-[1280px] mx-auto">
        <div className="masonry-grid">
          {filtered.map((project) => (
            <div
              key={project.title}
              className="masonry-item group relative cursor-pointer overflow-hidden"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="reveal-overlay absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-8">
                <h3 className="font-display text-2xl text-white mb-1">
                  {project.title}
                </h3>
                <p className="text-xs text-white/80 uppercase tracking-[0.1em] font-semibold">
                  {project.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-surface-low border-y border-outline-light/20">
        <div className="px-5 md:px-20 max-w-[1280px] mx-auto text-center">
          <h2 className="font-display text-3xl md:text-5xl text-primary mb-8">
            Ready to transform your space?
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-primary text-white px-10 py-4 text-xs font-semibold uppercase tracking-[0.1em] hover:opacity-90 transition-all duration-300"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </>
  );
}
