"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

// Placeholder data - will be replaced with generated images
const galleryItems = [
    {
        id: 1,
        category: "field_work",
        src: "/field_work.png", // Placeholder
        alt: "Students collecting plastic in Side Ancient Theater",
        title: "Saha Çalışması",
        desc: "Side Antik Tiyatrosu'nda atık toplama etkinliği."
    },
    {
        id: 2,
        category: "workshop",
        src: "/3d_printer_nozzle.png", // Placeholder
        alt: "3D printer nozzle extruding blue filament",
        title: "Dönüşüm Atölyesi",
        desc: "Atık plastiklerin filament haline getirilmesi."
    },
    {
        id: 3,
        category: "toys",
        src: "/recycled_toy.png", // Placeholder
        alt: "Low-poly blue plastic toy horse",
        title: "Son Ürün",
        desc: "Geri dönüştürülmüş oyuncak at."
    },
    {
        id: 4,
        category: "field_work",
        src: "https://placehold.co/600x800/E6BE8A/FFF?text=Field+Work+2",
        alt: "Sorting plastic waste",
        title: "Ayrıştırma",
        desc: "Toplanan atıkların türlerine göre ayrıştırılması."
    },
    {
        id: 5,
        category: "workshop",
        src: "https://placehold.co/600x400/008B8B/FFF?text=Lab+Process",
        alt: "Lab equipment",
        title: "Kalite Kontrol",
        desc: "Filament üretiminde kalite standartları."
    },
    {
        id: 6,
        category: "toys",
        src: "https://placehold.co/600x600/D2691E/FFF?text=Toy+Set",
        alt: "Set of printed toys",
        title: "Oyuncak Seti",
        desc: "Okullara dağıtılmak üzere hazırlanan setler."
    }
];

const categories = [
    { id: "all", label: "Tümü" },
    { id: "field_work", label: "Saha Çalışması" },
    { id: "workshop", label: "Atölye" },
    { id: "toys", label: "Oyuncaklar" },
];

export default function GalleryGrid() {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredItems = activeCategory === "all"
        ? galleryItems
        : galleryItems.filter(item => item.category === activeCategory);

    return (
        <section className="py-12">
            <div className="container mx-auto px-6">

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === cat.id
                                    ? "bg-primary-turquoise text-white shadow-lg shadow-primary-turquoise/25"
                                    : "bg-white dark:bg-white/5 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-white/10"
                                }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Masonry Grid */}
                <motion.div
                    layout
                    className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8"
                >
                    {filteredItems.map((item) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.4 }}
                            key={item.id}
                            className="break-inside-avoid group relative rounded-2xl overflow-hidden bg-white dark:bg-neutral-900 shadow-xl"
                        >
                            <div className="relative aspect-[4/5] w-full overflow-hidden">
                                {/* Image Placeholder until real images are generated */}
                                {item.src.startsWith("/") ? (
                                    <div className="w-full h-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-neutral-400">
                                        {/* Once images are generated, use Next/Image */}
                                        {/* <Image src={item.src} alt={item.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-110" /> */}
                                        <span>{item.alt}</span>
                                    </div>
                                ) : (
                                    <img src={item.src} alt={item.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                )}

                                {/* Glassmorphism Overlay on Hover */}
                                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <h3 className="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{item.title}</h3>
                                    <p className="text-neutral-200 text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{item.desc}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
