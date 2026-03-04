"use client";

import { motion } from "framer-motion";
import { Phone, ChevronDown, MessageSquare } from "lucide-react";
import { PHONE_NUMBER, PHONE_NUMBER_LINK, WHATSAPP_LINK } from "@/lib/constants";

export default function Hero() {
    const words = "TYRES WHEN YOU NEED THEM MOST".split(" ");

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 40,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden diagonal-speed-lines bg-dark">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-4xl pointer-events-none opacity-20">
                <div className="w-full h-full rounded-full bg-brand/30 blur-[150px]" />
            </div>

            {/* Floating Badge */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute top-32 right-6 md:right-12 z-20"
            >
                <div className="bg-white/5 backdrop-blur-xl border border-brand/30 px-4 py-2 rounded-full flex items-center gap-2">
                    <span className="w-2 h-2 bg-brand animate-pulse rounded-full" />
                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-brand">
                        ⚡ Average Response: 35 mins
                    </span>
                </div>
            </motion.div>

            <div className="container mx-auto px-6 z-10 text-center">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-wrap justify-center gap-x-4 md:gap-x-6 gap-y-2 mb-6"
                >
                    {words.map((word, index) => (
                        <motion.span
                            key={index}
                            variants={child}
                            className="font-bebas text-5xl md:text-7xl lg:text-9xl tracking-tight text-white leading-[0.9]"
                        >
                            {word}
                        </motion.span>
                    ))}
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                    className="text-lg md:text-2xl text-white/70 max-w-2xl mx-auto mb-12 font-medium"
                >
                    Professional roadside tyre fitting & puncture repairs 24 hours a day, 7 days a week. We come to you.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8, duration: 0.8 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-6"
                >
                    <a
                        href={PHONE_NUMBER_LINK}
                        className="group relative bg-brand text-dark font-bebas text-2xl md:text-3xl px-10 py-4 rounded-sm transition-all hover:scale-105 active:scale-95 animate-pulse-glow flex items-center gap-3"
                    >
                        <Phone size={24} fill="currentColor" strokeWidth={0} />
                        CALL {PHONE_NUMBER}
                    </a>

                    <a
                        href={WHATSAPP_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-2 border-white/20 hover:border-brand/50 bg-white/5 hover:bg-white/10 backdrop-blur-md text-white font-bebas text-2xl md:text-3xl px-10 py-4 rounded-sm transition-all hover:scale-105 active:scale-95 flex items-center gap-3"
                    >
                        <MessageSquare size={24} />
                        WHATSAPP NOW
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-brand"
            >
                <ChevronDown size={32} />
            </motion.div>

            {/* Bottom Gradient overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent z-0" />
        </section>
    );
}
