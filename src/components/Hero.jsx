import { motion } from 'framer-motion';
import { HiArrowDown } from 'react-icons/hi';
import { Link } from 'react-scroll';

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: 'easeOut' },
});

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden pt-32 pb-24"
        >
            <div className="mesh-bg" />

            <div
                className="absolute w-72 h-72 rounded-full opacity-10 blur-3xl"
                style={{ background: 'radial-gradient(circle, #10B981, transparent)', top: '15%', left: '10%' }}
            />
            <div
                className="absolute w-56 h-56 rounded-full opacity-8 blur-3xl"
                style={{ background: 'radial-gradient(circle, #34D399, transparent)', bottom: '20%', right: '12%' }}
            />

            <div className="relative z-10 container-inner flex flex-col items-center">
                <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2 glass px-5 py-2.5 rounded-full mb-8 md:mb-10">
                    <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse" />
                    <span className="text-sm md:text-base text-emerald-400 font-medium">Available for Opportunities</span>
                </motion.div>

                <motion.h1 {...fadeUp(0.2)} className="text-5xl md:text-7xl font-extrabold leading-tight text-white mb-6">
                    Hi, I'm{' '}
                    <span className="gradient-text">Prathmesh Kadu</span>
                </motion.h1>

                <motion.p {...fadeUp(0.35)} className="text-xl md:text-2xl text-gray-400 font-medium mb-8">
                    Full Stack Developer{' '}
                    <span className="text-emerald-400 mx-2 md:mx-3">·</span>{' '}
                    Java <span className="text-emerald-400 mx-2 md:mx-3">|</span> React JS <span className="text-emerald-400 mx-2 md:mx-3">|</span> SQL
                </motion.p>

                {/* FIX: Forced text-center and used a hidden <br/> on desktop to perfectly balance the two lines */}
                <motion.p {...fadeUp(0.45)} className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl mb-16 leading-relaxed text-center">
                    BCA Graduate passionate about building{' '}
                    <span className="text-emerald-400 font-medium whitespace-nowrap">scalable enterprise solutions</span>
                    <br className="hidden md:block" /> and{' '}
                    <span className="text-emerald-400 font-medium whitespace-nowrap">elegant web experiences</span>.
                </motion.p>

                <motion.div {...fadeUp(0.55)} className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto mt-4" style={{ marginTop: "15px" }} >
                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex justify-center items-center gap-3 px-12 py-5 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-xl transition-all duration-200 emerald-glow text-base md:text-lg w-full sm:w-auto"
                        style={{ padding: "8px 25px" }}  
                   >
                        View Resume
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                    </a>
                    <Link
                        to="contact"
                        smooth
                        duration={700}
                        className="flex justify-center items-center gap-2 px-12 py-5 glass border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 font-bold rounded-xl transition-all duration-200 cursor-pointer text-base md:text-lg w-full sm:w-auto"
                        style={{ padding: "8px 25px" }} 
                    >
                        Contact Me
                    </Link>
                </motion.div>
            </div>

            <motion.div
                {...fadeUp(0.8)}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
            >
                <span className="text-[11px] tracking-[0.2em] uppercase font-bold">Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                    <HiArrowDown size={22} className="text-emerald-500" />
                </motion.div>
            </motion.div>
        </section>
    );
}