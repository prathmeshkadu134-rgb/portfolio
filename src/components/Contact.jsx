import { motion } from 'framer-motion';
import { HiPhone, HiMail } from 'react-icons/hi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const contactItems = [
    {
        icon: HiPhone,
        label: 'Phone',
        value: '+91 9309855771',
        link: 'tel:+919309855771',
    },
    {
        icon: HiMail,
        label: 'Email',
        value: 'prathmeshkadu134@gmail.com',
        link: 'mailto:prathmeshkadu134@gmail.com',
    },
    {
        icon: FaLinkedin,
        label: 'LinkedIn',
        value: 'Prathmesh Kadu',
        link: 'https://www.linkedin.com/in/prathmesh-kadu',
    },
];

export default function Contact() {
    return (
        <section id="contact" className="section-padding relative">
            {/* Top divider gradient */}
            <div className="h-px w-full" style={{ background: 'linear-gradient(to right, transparent, rgba(16,185,129,0.3), transparent)' }} />

            <div className="container-inner">
                <motion.p
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-3"
                >
                    Get In Touch
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ delay: 0.1 }}
                    className="text-3xl md:text-4xl font-bold text-white mb-6"
                    style={{ marginTop: "15px" }}
                >
                    Let's Work Together
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ delay: 0.2 }}
                    className="text-gray-500 max-w-lg mb-16 leading-relaxed"
                    style={{ marginTop: "15px" }}
                >
                    I'm currently open to new opportunities. Whether you have a role or a project in mind — feel free to reach out!
                </motion.p>

                {/* Contact cards */}
                <div className="grid sm:grid-cols-3 gap-5 mb-14">
                    {contactItems.map((item, i) => (
                        <motion.a
                            key={item.label}
                            href={item.link}
                            target={item.label === 'LinkedIn' ? '_blank' : undefined}
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.55, delay: i * 0.1 }}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="glass rounded-2xl card-pad flex flex-col items-start gap-4 group transition-all duration-200"
                            style={{ marginTop: "15px" }}
                        >
                            <div className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-200"
                                style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)' }}>
                                <item.icon className="text-emerald-400 text-lg" />
                            </div>
                            <div>
                                <p className="text-xs text-gray-600 uppercase tracking-widest mb-0.5">{item.label}</p>
                                <p className="text-gray-300 text-sm font-medium group-hover:text-emerald-300 transition-colors duration-200 break-all">
                                    {item.value}
                                </p>
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* Footer bottom */}
                <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ marginTop: "15px" }}>
                    <p className="text-gray-600 text-sm " style={{ marginTop: "15px" }}>
                        © 2025 <span className="text-emerald-500 font-medium">Prathmesh Kadu</span>. Built with React.js & Tailwind CSS.
                    </p>
                    <div className="flex items-center gap-4">
                        <a href="https://www.linkedin.com/in/prathmesh-kadu" target="_blank" rel="noopener noreferrer"
                            className="text-gray-600 hover:text-emerald-400 transition-colors duration-200">
                            <FaLinkedin size={20} />
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                            className="text-gray-600 hover:text-emerald-400 transition-colors duration-200">
                            <FaGithub size={20} />
                        </a>
                        <a href="mailto:prathmeshkadu134@gmail.com"
                            className="text-gray-600 hover:text-emerald-400 transition-colors duration-200">
                            <HiMail size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
