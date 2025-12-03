"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md border-b border-neutral-200 dark:border-white/10">
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                    <div className="w-8 h-8 bg-primary-turquoise rounded-lg flex items-center justify-center text-white font-bold">
                        H
                    </div>
                    <span className="text-xl font-bold tracking-tight text-foreground">
                        Heritage<span className="text-primary-turquoise">&</span>Future
                    </span>
                </a>

                {/* Desktop Menu - Empty now */}
                <div className="hidden md:flex items-center gap-8">
                </div>

                {/* Mobile Menu Button - Hidden since no links */}
                {/* <button
                    className="md:hidden p-2 text-neutral-600 dark:text-neutral-300"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button> */}
            </div>

            {/* Mobile Menu - Hidden */}
            {/* {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-neutral-950 border-b border-neutral-200 dark:border-white/10 p-6 space-y-4 shadow-xl"
                >
                    <a href="/gallery" className="block w-full py-3 bg-primary-turquoise text-white rounded-xl font-semibold text-center">
                        Harekete Katıl
                    </a>
                </motion.div>
            )} */}
        </nav>
    );
}
