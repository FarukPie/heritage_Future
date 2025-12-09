"use client";

import { motion } from "framer-motion";
import { useState } from "react";
const galleryItems = [
    {
        id: 1,
        category: "field_work",
        src: "https://i.hizliresim.com/8fzbzlp.jpg",
        alt: "Saha çalışması",
        title: "Saha Çalışması",
        desc: "Proje kapsamında gerçekleştirilen saha etkinlikleri."
    },
    {
        id: 2,
        category: "field_work",
        src: "https://i.hizliresim.com/229ete3.jpg",
        alt: "Eğitim etkinliği",
        title: "Eğitim",
        desc: "Çevre bilinci ve geri dönüşüm eğitimleri."
    },
    {
        id: 3,
        category: "field_work",
        src: "https://i.hizliresim.com/hrsq65q.jpg",
        alt: "Atölye çalışması",
        title: "Atölye",
        desc: "Öğrencilerle birlikte yapılan atölye çalışmaları."
    },
    {
        id: 4,
        category: "field_work",
        src: "https://i.hizliresim.com/kh7ov2t.jpg",
        alt: "Grup çalışması",
        title: "Takım Çalışması",
        desc: "Birlikte üretmenin ve öğrenmenin keyfi."
    },
    {
        id: 5,
        category: "field_work",
        src: "https://i.hizliresim.com/aidr6fb.jpg",
        alt: "Atık toplama",
        title: "Atık Toplama",
        desc: "Sürdürülebilir bir gelecek için atık toplama."
    },
    {
        id: 6,
        category: "field_work",
        src: "https://i.hizliresim.com/6w8kk09.jpg",
        alt: "Proje sunumu",
        title: "Sunum",
        desc: "Proje çıktılarının değerlendirilmesi."
    },
    {
        id: 7,
        category: "field_work",
        src: "https://i.hizliresim.com/hc6g8ew.jpg",
        alt: "Genel etkinlik",
        title: "Etkinlik Anı",
        desc: "Proje sürecinden renkli kareler."
    },
    {
        id: 14,
        category: "field_work",
        src: "https://i.hizliresim.com/douxqrx.jpg",
        alt: "Saha çalışması",
        title: "Saha Çalışması",
        desc: "Proje çalışmalarından kareler."
    },
    {
        id: 8,
        category: "workshop",
        src: "https://i.hizliresim.com/3sp4w88.jpg",
        alt: "Atölye üretim süreci",
        title: "Üretim",
        desc: "3D yazıcılarla üretim süreci."
    },



    {
        id: 12,
        category: "workshop",
        src: "https://i.hizliresim.com/fdgwuee.jpg",
        alt: "Kalite kontrol",
        title: "Kontrol",
        desc: "Üretilen parçaların kontrolü."
    },

    {
        id: 13,
        category: "workshop",
        src: "https://i.hizliresim.com/khphzln.jpg",
        alt: "Atölye",
        title: "Atölye",
        desc: "Atölye çalışmaları."
    },

];

const categories = [
    { id: "all", label: "Tümü" },
    { id: "field_work", label: "Saha Çalışması" },
    { id: "workshop", label: "Atölye" },

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

                {/* Grid Layout (Strict 3 columns) */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {filteredItems.map((item) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.4 }}
                            key={item.id}
                            className="group relative rounded-2xl overflow-hidden bg-white dark:bg-neutral-900 shadow-xl aspect-[4/5]"
                        >
                            <div className="relative w-full h-full overflow-hidden">
                                {item.src.startsWith("/") ? (
                                    <div className="w-full h-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-neutral-400">
                                        {/* Local Placeholder */}
                                        {item.src.includes("placechold") || item.src.endsWith(".png") ?
                                            <img src={item.src} alt={item.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                            : <span>{item.alt}</span>
                                        }
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
