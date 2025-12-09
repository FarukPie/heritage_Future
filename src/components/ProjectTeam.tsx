"use client";

import { motion } from "framer-motion";


const teamMembers = [
    {
        name: "Kadir Altun",
        role: "Proje Ekibi",
        image: "https://placehold.co/400x400/D2691E/FFF?text=Kadir Altun"
    },
    {
        name: "Edanur Yiğit",
        role: "Proje Ekibi",
        image: "https://placehold.co/400x400/D2691E/FFF?text=Edanur Yiğit"
    },
    {
        name: "Hüseyin Cem Yoldaş",
        role: "Proje Ekibi",
        image: "https://placehold.co/400x400/E6BE8A/FFF?text=Hüseyin Cem Yoldaş"
    },
    {
        name: "Berke Doğan Güngör",
        role: "Proje Ekibi",
        image: "https://placehold.co/400x400/008B8B/FFF?text=Berke Doğan Güngör"
    },
    {
        name: "Münire Rana Bozkurt",
        role: "Proje Ekibi",
        image: "https://placehold.co/400x400/D2691E/FFF?text=Münire Rana Bozkurt"
    },
    {
        name: "Özdenur Çolak",
        role: "Proje Ekibi",
        image: "https://placehold.co/400x400/E6BE8A/FFF?text=Özdenur Çolak"
    },
    {
        name: "Mustafa Uğur Sağlam",
        role: "Proje Ekibi",
        image: "https://placehold.co/400x400/008B8B/FFF?text=Mustafa Uğur Sağlam"
    },
    {
        name: "Yunus Emre Durgun",
        role: "Proje Ekibi",
        image: "https://placehold.co/400x400/D2691E/FFF?text=Yunus Emre Durgun"
    },
    {
        name: "Rabia Sapan",
        role: "Proje Ekibi",
        image: "https://placehold.co/400x400/E6BE8A/FFF?text=Rabia Sapan"
    }
];

export default function ProjectTeam() {
    return (
        <section className="py-24 bg-white dark:bg-neutral-950 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-secondary-sand/5 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
                        Proje <span className="text-transparent bg-clip-text bg-linear-to-r from-primary-turquoise to-secondary-sand">Ekibimiz</span>
                    </h2>
                    <p className="text-neutral-600 dark:text-neutral-400">
                        Bu sürdürülebilir dönüşüm hikayesinin arkasındaki isimler.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group relative"
                        >
                            <div className="relative aspect-square overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-900 shadow-lg">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <h3 className="text-white font-bold text-lg">{member.name}</h3>
                                    <p className="text-primary-turquoise text-sm">{member.role}</p>
                                </div>
                            </div>

                            {/* Mobile/Default view info (visible if hover not supported or just nice to have below) */}
                            <div className="mt-4 text-center group-hover:opacity-0 transition-opacity duration-300">
                                <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
                                <p className="text-sm text-neutral-500 dark:text-neutral-400">{member.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
