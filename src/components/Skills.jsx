import { motion } from 'framer-motion';
import {
    SiReact, SiJavascript, SiHtml5, SiCss, SiTailwindcss,
    SiSpring, SiMysql, SiGit, SiGithub, SiPostman, SiJson,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const categories = [
    {
        name: 'Frontend',
        color: '#10B981',
        skills: [
            { icon: SiReact, name: 'React.js' },
            { icon: SiJavascript, name: 'JavaScript' },
            { icon: SiHtml5, name: 'HTML5' },
            { icon: SiCss, name: 'CSS3' },
            { icon: SiTailwindcss, name: 'Tailwind CSS' },
        ],
    },
    {
        name: 'Backend',
        color: '#34D399',
        skills: [
            { icon: FaJava, name: 'Java' },
            { icon: SiSpring, name: 'Spring Boot' },
            { icon: SiSpring, name: 'Spring Security' },
            { icon: SiMysql, name: 'MySQL' },
            { icon: SiJson, name: 'JSON / REST API' },
        ],
    },
    {
        name: 'Tools',
        color: '#6EE7B7',
        skills: [
            { icon: SiGit, name: 'Git' },
            { icon: SiGithub, name: 'GitHub' },
            { icon: SiPostman, name: 'Postman' },
        ],
    },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Skills() {
    return (
        <section id="skills" className="section-padding relative">
            {/* Bg accent */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(16,185,129,0.04) 0%, transparent 70%)' }}
            />

            <div className="container-inner relative z-10">
                <motion.p
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-3"
                >
                    Tech Stack
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl md:text-4xl font-bold text-white mb-14"
                    style={{ marginTop: "15px" }}
                >
                    Skills & Technologies
                </motion.h2>

                <div className="space-y-12" style={{ marginTop: "10px" }}>
                    {categories.map((cat, ci) => (
                        <div key={cat.name}>
                            {/* Category header */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: ci * 0.1 }}
                                className="flex items-center gap-3 mb-6"
                            >
                                <div className="w-2 h-2 rounded-full" style={{ background: cat.color }} />
                                <h3 className="text-sm font-semibold uppercase tracking-widest" style={{ color: cat.color }}>
                                    {cat.name}
                                </h3>
                                <div className="flex-1 h-px" style={{ background: `linear-gradient(to right, ${cat.color}20, transparent)` }} />
                            </motion.div>

                            {/* Skills grid */}
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4"
                                style={{ marginTop: "15px" }}
                            >
                                {cat.skills.map((skill) => (
                                    <motion.div
                                        key={skill.name}
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.06, y: -4 }}
                                        className="skill-card glass rounded-xl p-6 flex flex-col items-center gap-3 cursor-default group transition-all duration-200"
                                        style={{ marginTop: "15px" }}
                                    >
                                        <skill.icon
                                            className="skill-icon text-4xl text-gray-400 transition-all duration-300"
                                        />
                                        <span className="text-sm text-gray-500 text-center font-medium group-hover:text-emerald-400 transition-colors duration-200">
                                            {skill.name}
                                        </span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
