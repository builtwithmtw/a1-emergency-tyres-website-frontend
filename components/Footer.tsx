import { PHONE_NUMBER, PHONE_NUMBER_LINK, WHATSAPP_LINK, SERVICES, COVERAGE_AREAS } from "@/lib/constants";
import { Phone, Mail, Instagram, Facebook, ArrowUpRight } from "lucide-react";

export default function Footer() {
    return (
        <footer className="py-20 bg-dark/95 border-t border-white/5 font-medium text-white/50">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20 text-center md:text-left">
                    {/* Brand/Tagline */}
                    <div className="flex flex-col items-center md:items-start gap-6 max-w-sm">
                        <a href="#" className="font-bebas text-3xl text-white tracking-widest flex items-center">
                            A1 <span className="text-brand ml-2">EMERGENCY TYRES</span>
                            <span className="w-2 h-2 bg-brand rounded-full ml-1" />
                        </a>
                        <p className="text-lg leading-relaxed italic opacity-80">
                            Your professional 24/7 mobile tyre fitting partner. We provide rapid response, reliable engineers, and premium service across the UK.
                        </p>
                        <div className="flex items-center gap-4 text-white">
                            <a href="#" className="p-2 bg-white/5 hover:bg-white/10 rounded-sm transition-colors cursor-pointer"><Facebook size={20} /></a>
                            <a href="#" className="p-2 bg-white/5 hover:bg-white/10 rounded-sm transition-colors cursor-pointer"><Instagram size={20} /></a>
                            <a href="#" className="p-2 bg-white/5 hover:bg-white/10 rounded-sm transition-colors cursor-pointer"><Mail size={20} /></a>
                        </div>
                    </div>

                    {/* Services List */}
                    <div className="flex flex-col items-center md:items-start gap-6 whitespace-nowrap overflow-hidden">
                        <h4 className="font-bebas text-2xl text-white tracking-widest uppercase border-b-2 border-brand/30 pb-2">Our Services</h4>
                        <div className="flex flex-col gap-4">
                            {SERVICES.slice(0, 5).map((service, index) => (
                                <a key={index} href="#services" className="hover:text-brand transition-colors flex items-center gap-2">
                                    <ArrowUpRight size={14} className="text-brand opacity-0 hover:opacity-100 transition-opacity" />
                                    {service.title.toUpperCase()}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Coverage Areas */}
                    <div className="flex flex-col items-center md:items-start gap-6 whitespace-nowrap overflow-hidden">
                        <h4 className="font-bebas text-2xl text-white tracking-widest uppercase border-b-2 border-brand/30 pb-2">Quick Access</h4>
                        <div className="flex flex-col gap-4">
                            <a href="#coverage" className="hover:text-brand transition-colors">COVERAGE AREAS</a>
                            <a href={PHONE_NUMBER_LINK} className="hover:text-brand transition-colors">CALL US: {PHONE_NUMBER}</a>
                            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors">WHATSAPP SUPPORT</a>
                            <a href="#" className="hover:text-brand transition-colors">TERMS OF SERVICE</a>
                            <a href="#" className="hover:text-brand transition-colors">PRIVACY POLICY</a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/5 gap-6 text-sm uppercase tracking-widest font-bold">
                    <p className="text-zinc-600">© {new Date().getFullYear()} A1 EMERGENCY MOBILE TYRES. ALL RIGHTS RESERVED.</p>
                    <div className="flex items-center gap-2 group text-brand/60 hover:text-brand transition-colors cursor-default">
                        <span>Built for speed, built for you</span>
                        <div className="w-8 h-[2px] bg-brand animate-pulse" />
                    </div>
                </div>
            </div>
        </footer>
    );
}
