"use client";

import { TRUST_SIGNALS } from "@/lib/constants";

export default function TrustBar() {
    const repeatedSignals = [...TRUST_SIGNALS, ...TRUST_SIGNALS, ...TRUST_SIGNALS, ...TRUST_SIGNALS];

    return (
        <div className="bg-brand text-dark overflow-hidden py-4 border-y-2 border-dark/10 relative z-20">
            <div className="flex items-center gap-12 whitespace-nowrap animate-marquee">
                {repeatedSignals.map((signal, index) => (
                    <div key={index} className="flex items-center gap-4 font-bebas text-xl md:text-2xl tracking-widest shrink-0">
                        <span className="text-dark/40">⚡</span>
                        <span>{signal.toUpperCase()}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
