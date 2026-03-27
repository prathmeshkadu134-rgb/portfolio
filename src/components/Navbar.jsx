import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

const navLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Java Solutions', to: 'java' },
    { name: 'Contact', to: 'contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav shadow-lg' : 'bg-transparent'}`}
        >
            <div className="navbar-inner">

                {/* Logo */}
                <div className="flex-none">
                    <Link to="hero" smooth duration={600} className="cursor-pointer">
                        <span className="inline-flex items-center gap-2">
                            <span className="w-9 h-9 rounded-xl flex items-center justify-center text-black font-black text-base"
                                style={{ background: 'linear-gradient(135deg, #10B981, #34D399)' }}>PK</span>
                            <span className="text-xl font-bold gradient-text tracking-tight">Prathmesh</span>
                        </span>
                    </Link>
                </div>

                {/* Desktop nav */}
                <ul className="hidden md:flex flex-1 justify-center items-center gap-6 lg:gap-8">
                    {navLinks.map((link) => (
                        <li key={link.to}>
                            <Link
                                to={link.to}
                                smooth={true}
                                duration={600}
                                offset={-90}
                                // FIX: Added whitespace-nowrap so "Java Solutions" stays on one line
                                className="text-sm text-gray-400 hover:text-emerald-400 transition-colors duration-200 cursor-pointer font-medium tracking-wide uppercase whitespace-nowrap"
                                style={{ letterSpacing: '0.05em' }}
                                activeClass="text-emerald-400"
                                spy={true}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* CTA & Mobile Toggle */}
                <div className="flex-none flex justify-end">
                    <a
                        href="https://wa.me/919309855771"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:inline-flex items-center gap-2 px-8 py-3 text-base font-bold text-black bg-emerald-500 rounded-xl hover:bg-emerald-400 transition-all duration-200 emerald-glow"    
                        style={{ padding: "8px 25px" }}                >
                        Hire Me
                    </a>

                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden text-gray-300 hover:text-emerald-400 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile menu remains unchanged */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass-nav border-t border-white/5"
                    >
                        <ul className="px-6 py-4 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <li key={link.to}>
                                    <Link
                                        to={link.to}
                                        smooth duration={600}
                                        offset={-90}
                                        onClick={() => setMenuOpen(false)}
                                        className="block text-sm text-gray-400 hover:text-emerald-400 transition-colors cursor-pointer uppercase tracking-widest font-medium whitespace-nowrap"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}