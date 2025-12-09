"use client";

import { motion } from "framer-motion";

export default function TechElements() {
    return (
        <section className="py-24 bg-white dark:bg-neutral-950 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-linear-to-r from-secondary-sand/5 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

                <div className="order-2 lg:order-1 space-y-8">
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                        Teknoloji ile <br />
                        <span className="text-primary-turquoise">Yeniden Üretim.</span>
                    </h2>
                    <p className="text-lg text-neutral-600 dark:text-neutral-300">
                        Atık plastikleri yüksek kaliteli 3D yazıcı filamentine dönüştürüyoruz. Her 1kg plastik atık, yaklaşık 20 adet eğitici ürün parçasına dönüşüyor.
                    </p>

                    <div className="space-y-6">
                        {/* Progress Bars */}
                        <div className="space-y-2">
                            <div className="flex justify-between text-sm font-medium">
                                <span>Filament Üretimi</span>
                                <span className="text-primary-turquoise">1,250 kg</span>
                            </div>
                            <div className="h-3 bg-neutral-100 dark:bg-neutral-800 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "75%" }}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                    className="h-full bg-primary-turquoise rounded-full"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between text-sm font-medium">
                                <span>Basılan Ürün</span>
                                <span className="text-secondary-terra">840 Adet</span>
                            </div>
                            <div className="h-3 bg-neutral-100 dark:bg-neutral-800 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "60%" }}
                                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                                    className="h-full bg-secondary-terra rounded-full"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6 pt-4">
                        <div className="p-6 bg-neutral-50 dark:bg-neutral-900 rounded-2xl border-l-4 border-primary-turquoise shadow-sm">
                            <div className="text-3xl font-bold text-foreground">PET-G</div>
                            <div className="text-sm text-neutral-500 font-medium">Kullanılan Materyal</div>
                        </div>
                        <div className="p-6 bg-neutral-50 dark:bg-neutral-900 rounded-2xl border-l-4 border-secondary-sand shadow-sm">
                            <div className="text-3xl font-bold text-foreground">200°C</div>
                            <div className="text-sm text-neutral-500 font-medium">Baskı Sıcaklığı</div>
                        </div>
                    </div>
                </div>

                <div className="order-1 lg:order-2 relative">
                    {/* 3D Printer Simulation Visual */}
                    <div className="relative h-[500px] w-full bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl border border-neutral-800 flex items-center justify-center">

                        {/* Printer Bed */}
                        <div className="absolute bottom-12 w-3/4 h-4 bg-neutral-700 rounded-sm shadow-lg transform rotate-x-12" />

                        {/* Printing Object (Layered Animation) */}
                        <div className="absolute bottom-16 flex flex-col items-center gap-0.5">
                            {[...Array(12)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scaleX: 0 }}
                                    animate={{ opacity: 1, scaleX: 1 }}
                                    transition={{ delay: i * 0.2, duration: 0.5 }}
                                    className={`h-4 rounded-sm ${i % 2 === 0 ? 'bg-primary-turquoise' : 'bg-primary-deep'}`}
                                    style={{ width: `${160 - i * 10}px` }}
                                />
                            ))}
                        </div>

                        {/* Moving Nozzle */}
                        <motion.div
                            animate={{ x: [-80, 80], y: [0, -5] }}
                            transition={{ repeat: Infinity, duration: 2, ease: "linear", repeatType: "reverse" }}
                            className="absolute bottom-[220px] z-20"
                        >
                            <div className="w-8 h-12 bg-neutral-600 rounded-b-lg shadow-xl flex justify-center">
                                <div className="w-2 h-4 bg-secondary-sand absolute -bottom-2" />
                            </div>
                        </motion.div>

                        {/* Interface Overlay */}
                        <div className="absolute top-6 left-6 right-6 flex justify-between font-mono text-xs text-primary-turquoise opacity-80">
                            <div>
                                <p>STATUS: PRINTING...</p>
                                <p>LAYER: 12/45</p>
                            </div>
                            <div className="text-right">
                                <p>TEMP: 200°C</p>
                                <p>TIME: 04:20</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
