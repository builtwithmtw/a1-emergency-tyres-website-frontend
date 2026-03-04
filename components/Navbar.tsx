"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import { COMPANY_NAME, PHONE_NUMBER, PHONE_NUMBER_LINK } from "@/lib/constants";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const updateScroll = () => {
            setIsScrolled(window.scrollY > 80);
        };
        window.addEventListener("scroll", updateScroll);
        return () => window.removeEventListener("scroll", updateScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "Services", href: "#services" },
        { name: "Coverage", href: "#coverage" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-dark/95 backdrop-blur-md py-4 border-b border-brand/10" : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <a href="#" className="font-bebas text-2xl md:text-3xl tracking-wider flex items-center">
                        A1 <span className="text-brand ml-2">EMERGENCY TYRES</span>
                        <span className="w-2 h-2 bg-brand rounded-full ml-1" />
                    </a>
                </div>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-10">
                    <div className="flex gap-8 text-sm font-medium tracking-wide">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="hover:text-brand transition-colors uppercase"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 text-brand">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
                            </span>
                            <span className="text-xs font-bold uppercase tracking-tighter">Live Support</span>
                        </div>

                        <a
                            href={PHONE_NUMBER_LINK}
                            className="bg-brand text-dark font-bebas px-6 py-2 rounded-sm hover:bg-white transition-colors flex items-center gap-2"
                        >
                            <Phone size={18} fill="currentColor" />
                            CALL NOW
                        </a>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden text-brand"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={32} /> : <Menu size={32} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "100vh" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="fixed inset-0 bg-dark z-40 lg:hidden flex flex-col items-center justify-center gap-8"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="font-bebas text-5xl hover:text-brand transition-colors tracking-widest"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href={PHONE_NUMBER_LINK}
                            className="mt-8 bg-brand text-dark font-bebas text-2xl px-12 py-4 rounded-sm flex items-center gap-4"
                        >
                            <Phone size={24} fill="currentColor" />
                            {PHONE_NUMBER}
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
