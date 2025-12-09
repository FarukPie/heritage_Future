"use client";

import { motion } from "framer-motion";
import { MapPin, FlaskConical, Box } from "lucide-react";

const features = [
    {
        icon: <MapPin className="w-8 h-8 text-secondary-sand" />,
        title: "Side'de Toplama",
        description: "Apollon Tapınağı ve çevresindeki tarihi alanlardan plastik atıkları özenle topluyoruz.",
        color: "bg-secondary-sand/10",
        borderColor: "border-secondary-sand/20",
        step: "01"
    },
    {
        icon: <FlaskConical className="w-8 h-8 text-primary-turquoise" />,
        title: "Üniversitede Dönüşüm",
        description: "Akdeniz Üniversitesi laboratuvarlarında atıkları temizleyip 3D yazıcı filamentine dönüştürüyoruz.",
        color: "bg-primary-turquoise/10",
        borderColor: "border-primary-turquoise/20",
        step: "02"
    },
    {
        icon: <Box className="w-8 h-8 text-secondary-terra" />,
        title: "Ürün Üretimi",
        description: "Geri dönüştürülmüş filamentlerle eğitici ürünler basıp ihtiyacı olan çocuklara ulaştırıyoruz.",
        color: "bg-secondary-terra/10",
        borderColor: "border-secondary-terra/20",
        step: "03"
    },
];

export default function FeaturesGrid() {
    return (
        <section id="features" className="py-24 bg-neutral-50 dark:bg-neutral-900 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Dönüşüm Yolculuğu</h2>
                    <p className="text-neutral-600 dark:text-neutral-400">
                        Tarihi mirastan geleceğin nesillerine uzanan sürdürülebilir bir köprü.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-neutral-200 dark:bg-neutral-800 -z-10 transform -translate-y-1/2" />

                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            whileHover={{ y: -10 }}
                            className={`group p-8 rounded-3xl bg-white dark:bg-white/5 border ${feature.borderColor} shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden backdrop-blur-sm`}
                        >
                            <div className={`absolute top-0 right-0 w-32 h-32 ${feature.color} rounded-bl-full opacity-50 transition-transform group-hover:scale-110`} />

                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="w-16 h-16 rounded-2xl bg-white dark:bg-neutral-800 shadow-sm flex items-center justify-center group-hover:rotate-6 transition-transform">
                                        {feature.icon}
                                    </div>
                                    <span className="text-4xl font-bold text-neutral-100 dark:text-neutral-800 select-none">{feature.step}</span>
                                </div>

                                <h3 className="text-xl font-bold mb-4 text-foreground">{feature.title}</h3>
                                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
