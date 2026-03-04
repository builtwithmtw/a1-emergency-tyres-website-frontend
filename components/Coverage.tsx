"use client";

import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { COVERAGE_AREAS, PHONE_NUMBER_LINK } from "@/lib/constants";

export default function Coverage() {
    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1 },
    };

    return (
        <section id="coverage" className="py-24 bg-dark/95 diagonal-speed-lines relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center mb-20 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-bebas text-5xl md:text-7xl lg:text-8xl tracking-tight mb-4"
                    >
                        WHERE WE <span className="text-brand">OPERATE</span>
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "200px" }}
                        viewport={{ once: true }}
                        className="h-2 bg-brand mb-12"
                    />
                    <p className="text-white/60 text-lg md:text-xl max-w-2xl font-medium">
                        Strategic placement ensures our engineers reach you within 35-45 minutes across these primary regions.
                    </p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {COVERAGE_AREAS.map((area, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            className="group relative h-48 overflow-hidden rounded-sm bg-white/5 border border-white/10 glass-card"
                        >
                            {/* Front Side Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-between transition-transform duration-500 group-hover:-translate-y-full">
                                <div className="flex items-center gap-3">
                                    <div className="bg-brand/10 p-2 rounded-sm text-brand">
                                        <MapPin size={24} />
                                    </div>
                                    <h3 className="font-bebas text-3xl tracking-wide">{area.name.toUpperCase()}</h3>
                                </div>
                                <p className="text-white/60 text-sm line-clamp-2 mt-2 font-medium">
                                    {area.description}
                                </p>
                            </div>

                            {/* Reveal Slide-Up Content */}
                            <div className="absolute inset-0 bg-brand p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex flex-col items-center justify-center text-center">
                                <a
                                    href={PHONE_NUMBER_LINK}
                                    className="flex flex-col items-center text-dark hover:scale-105 transition-transform"
                                >
                                    <MapPin size={40} className="mb-4" />
                                    <span className="font-bebas text-3xl mb-2">GET HELP NOW</span>
                                    <div className="flex items-center gap-2 font-bold tracking-tighter group/btn">
                                        RAPID DISPATCH <ArrowRight size={16} className="group-hover/btn:translate-x-2 transition-transform" />
                                    </div>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
