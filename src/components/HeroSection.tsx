"use client";

import { motion } from "framer-motion";
import { ArrowRight, Printer } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white dark:bg-neutral-950">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 right-0 w-2/3 h-full bg-linear-to-bl from-primary-turquoise/20 to-primary-deep/20 -skew-x-12 transform origin-top-right translate-x-1/4" />
                <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-linear-to-tr from-secondary-sand/20 to-secondary-terra/20 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-8"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-turquoise/10 text-primary-turquoise font-medium text-sm">
                        <Printer className="w-4 h-4" />
                        <span>Side Antik Kenti & 3D Yazıcı Teknolojisi</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
                        Tarihe Saygı <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-primary-turquoise to-secondary-sand">
                            Geleceğe Katkı
                        </span>
                    </h1>
                    <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-lg leading-relaxed">
                        Side Antik Kenti&apos;nden toplanan plastik atıkları, üniversite laboratuvarlarında dönüştürüyor ve 3D yazıcılarla çocuklara ürün olarak yeniden hayat veriyoruz.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a href="/gallery" className="px-8 py-4 bg-primary-turquoise hover:bg-primary-deep text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-primary-turquoise/30 flex items-center gap-2 group">
                            Harekete Katıl
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <button
                            onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-4 bg-white dark:bg-white/10 border border-neutral-200 dark:border-white/10 hover:bg-neutral-50 dark:hover:bg-white/20 text-foreground rounded-full font-semibold transition-all backdrop-blur-sm"
                        >
                            Süreci Keşfet
                        </button>
                    </div>
                </motion.div>

                {/* 3D Illustration Concept: Apollo Temple -> 3D Printer */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative h-[500px] w-full flex items-center justify-center"
                >
                    <div className="relative w-full max-w-md aspect-square">
                        {/* Platform */}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-12 bg-neutral-200 dark:bg-neutral-800 rounded-full blur-xl opacity-50" />

                        {/* Split Composition Container */}
                        <div className="relative w-full h-full flex items-center justify-center">

                            {/* Left Side: Ancient Column (Abstract) */}
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/2 h-3/4 flex flex-col items-center justify-end space-y-2 opacity-80">
                                <div className="w-4 h-full bg-linear-to-t from-secondary-sand to-transparent rounded-t-lg" />
                                <div className="w-4 h-3/4 bg-linear-to-t from-secondary-sand to-transparent rounded-t-lg absolute left-8 bottom-0" />
                                <div className="w-4 h-1/2 bg-linear-to-t from-secondary-sand to-transparent rounded-t-lg absolute left-16 bottom-0" />
                                <div className="absolute bottom-0 w-full h-4 bg-secondary-sand rounded-full" />
                            </div>

                            {/* Right Side: 3D Printer Nozzle (Abstract) */}
                            <div className="absolute right-0 top-0 w-1/2 h-full flex flex-col items-center">
                                {/* Nozzle Head */}
                                <motion.div
                                    animate={{ y: [0, 20, 0] }}
                                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                                    className="relative z-20 flex flex-col items-center"
                                >
                                    <div className="w-16 h-24 bg-neutral-800 rounded-lg shadow-xl flex items-center justify-center border border-neutral-700">
                                        <div className="w-2 h-12 bg-primary-turquoise rounded-full animate-pulse" />
                                    </div>
                                    <div className="w-4 h-8 bg-neutral-600" />
                                    <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[20px] border-t-neutral-600" />
                                </motion.div>

                                {/* Filament / Toy Being Printed */}
                                <div className="absolute bottom-10 w-32 h-32 bg-primary-turquoise/10 border-2 border-primary-turquoise rounded-lg flex items-center justify-center backdrop-blur-sm">
                                    <span className="text-primary-turquoise font-bold">ÜRÜN</span>
                                </div>
                            </div>

                            {/* Connection Particles */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                {[...Array(5)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute w-2 h-2 bg-secondary-sand rounded-full"
                                        animate={{
                                            x: [-50, 50],
                                            y: [20, 80],
                                            opacity: [1, 0],
                                            scale: [1, 0.5]
                                        }}
                                        transition={{
                                            repeat: Infinity,
                                            duration: 2,
                                            delay: i * 0.4,
                                            ease: "linear"
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
