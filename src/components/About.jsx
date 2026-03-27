import { motion } from 'framer-motion';

const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.65, ease: 'easeOut' },
};

export default function About() {
    return (
        <section id="about" className="section-padding relative">
            <div className="container-inner">
                {/* Section label */}
                <motion.p {...fadeUp} className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-3">
                    About Me
                </motion.p>
                <motion.h2
                    {...fadeUp}
                    transition={{ duration: 0.65, delay: 0.1, ease: 'easeOut' }}
                    className="text-3xl md:text-4xl font-bold text-white mb-14" style={{ marginTop: "15px" }}
                >
                    My Journey
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-12 items-center" style={{ marginTop: "15px" }}>
                    
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                        className="relative"
                    >
                        <div className="glass rounded-2xl card-pad-lg relative overflow-hidden">
                            {/* Emerald accent bar */}
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-400 to-emerald-600 rounded-l-2xl" />

                            <div className="card-content-indent">
                                <p className="text-5xl font-black gradient-text mb-2">2025</p>
                                <p className="text-gray-400 text-sm mb-8">BCA Graduate</p>

                                <div className="space-y-5">
                                    {[
                                        { label: 'Degree', value: 'Bachelor of Computer Applications' },
                                        { label: 'University', value: 'Tilak Maharashtra Vidyapeeth' },
                                        { label: 'Certification', value: 'Full Stack Java Developer' },
                                        { label: 'Focus', value: 'Enterprise Apps & Web Solutions' },
                                    ].map((item) => (
                                        <div key={item.label}>
                                            <p className="text-xs text-emerald-400 uppercase tracking-widest mb-0.5">{item.label}</p>
                                            <p className="text-gray-200 font-medium">{item.value}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Decorative circles */}
                            <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full border border-emerald-500/20" />
                            <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full border border-emerald-500/10" />
                        </div>
                    </motion.div>

                    {/* Right: text */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                        className="space-y-5"
                    >
                        <p className="text-gray-300 text-base leading-relaxed">
                            I'm <span className="text-white font-semibold">Prathmesh Kadu</span>, a passionate Full Stack Developer and a proud{' '}
                            <span className="text-emerald-400 font-medium">BCA Graduate (2025)</span> from Tilak Maharashtra Vidyapeeth.
                            My journey into software development started with a deep curiosity for building things that work — and look great doing it.
                        </p>
                        <p className="text-gray-300 text-base leading-relaxed">
                            I hold a certification as a{' '}
                            <span className="text-emerald-400 font-medium">Full Stack Java Developer</span>, specializing in enterprise-grade backend systems
                            with <span className="text-white font-medium">Spring Boot</span> and{' '}
                            <span className="text-white font-medium">Spring Security</span>, paired with modern,
                            component-driven frontends in <span className="text-white font-medium">React.js</span>.
                        </p>
                        <p className="text-gray-300 text-base leading-relaxed">
                            Whether it's crafting RESTful APIs, designing relational databases in MySQL, or building
                            pixel-perfect UIs with Tailwind CSS — I bring a structured, end-to-end mindset to every project.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 pt-4" style={{ marginTop: "10px" }}>
                            {[
                                { value: '5+', label: 'Projects Built' },
                                { value: '2', label: 'Tech Stacks' },
                                { value: '1', label: 'Year Experience' },
                            ].map((s) => (
                                <div key={s.label} className="glass rounded-xl p-4 text-center">
                                    <p className="text-2xl font-bold gradient-text">{s.value}</p>
                                    <p className="text-gray-500 text-xs mt-1">{s.label}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
