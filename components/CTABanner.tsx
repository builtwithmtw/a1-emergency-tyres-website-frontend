"use client";

import { motion } from "framer-motion";
import { Phone, MessageSquare } from "lucide-react";
import { PHONE_NUMBER, PHONE_NUMBER_LINK, WHATSAPP_LINK } from "@/lib/constants";

export default function CTABanner() {
    return (
        <section className="bg-brand py-24 relative overflow-hidden group">
            {/* Background Animated Stripes */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="w-full h-full diagonal-speed-lines" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-dark max-w-2xl lg:text-left text-center"
                    >
                        <h2 className="font-bebas text-6xl md:text-8xl lg:text-9xl leading-[0.8] mb-6">
                            STRANDED? WE'RE <span className="text-white">ALREADY</span> ON OUR WAY.
                        </h2>
                        <p className="text-xl md:text-2xl font-bold tracking-tight opacity-90 mb-8 uppercase">
                            Call us now — our engineers are on standby 24 hours a day, 7 days a week.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center gap-6"
                    >
                        <div className="relative">
                            {/* Outer Pulse Circles */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 border-4 border-dark/20 rounded-full animate-ping pointer-events-none" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-56 md:h-56 border-2 border-dark/30 rounded-full animate-pulse-glow pointer-events-none" />

                            <a
                                href={PHONE_NUMBER_LINK}
                                className="relative bg-dark text-brand p-12 md:p-16 rounded-full flex flex-col items-center justify-center gap-2 hover:scale-105 transition-transform duration-500 shadow-2xl z-10"
                            >
                                <div className="text-xs font-bold tracking-[0.3em] uppercase mb-1">Emergency Call</div>
                                <div className="font-bebas text-4xl md:text-6xl tracking-tighter">{PHONE_NUMBER}</div>
                                <Phone size={24} fill="currentColor" strokeWidth={0} className="mt-2 animate-bounce" />
                            </a>
                        </div>

                        <a
                            href={WHATSAPP_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-black text-white px-8 py-4 flex items-center gap-3 font-bebas text-2xl md:text-3xl hover:bg-zinc-900 transition-colors tracking-wide rounded-sm"
                        >
                            <MessageSquare size={24} />
                            WHATSAPP NOW
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
