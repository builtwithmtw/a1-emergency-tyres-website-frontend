"use client";

import { motion } from "framer-motion";
import { Car, Wrench, Unlock, Radio, Zap, Clock } from "lucide-react";
import { SERVICES } from "@/lib/constants";

const iconMap: { [key: string]: any } = {
    Car,
    Tool: Wrench,
    Unlock,
    Radio,
    Zap,
    Clock,
};

export default function Services() {
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
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
        },
    };

    return (
        <section id="services" className="py-24 bg-dark relative overflow-hidden">
            {/* Background patterns */}
            <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="mb-16">
                    <motion.h2
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="font-bebas text-5xl md:text-7xl lg:text-8xl tracking-tight mb-4"
                    >
                        OUR <span className="text-brand">SERVICES</span>
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "120px" }}
                        viewport={{ once: true }}
                        className="h-2 bg-brand mb-12"
                    />
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {SERVICES.map((service, index) => {
                        const Icon = iconMap[service.icon];
                        return (
                            <motion.div
                                key={index}
                                variants={item}
                                className="glass-card group p-8 rounded-sm hover:scale-[1.02] transition-all cursor-default"
                            >
                                <div className="mb-6 text-brand">
                                    <Icon size={48} strokeWidth={1.5} className="group-hover:rotate-12 transition-transform duration-500" />
                                </div>
                                <h3 className="font-bebas text-3xl mb-3 group-hover:text-brand transition-colors tracking-wide">
                                    {service.title.toUpperCase()}
                                </h3>
                                <p className="text-white/60 leading-relaxed font-medium">
                                    {service.description}
                                </p>

                                <div className="mt-8 flex items-center justify-between">
                                    <span className="text-xs font-bold uppercase tracking-widest text-brand opacity-0 group-hover:opacity-100 transition-opacity">
                                        Professional Care
                                    </span>
                                    <div className="w-8 h-[2px] bg-brand/30 group-hover:w-full group-hover:bg-brand transition-all duration-700" />
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
