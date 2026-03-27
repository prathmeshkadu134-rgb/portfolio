import { motion } from 'framer-motion';
import { FaJava } from 'react-icons/fa';
import { SiSpring, SiMysql } from 'react-icons/si';

const javaProjects = [
    {
        title: 'Employee Management System',
        subtitle: 'Full Stack Enterprise App',
        description:
            'A comprehensive HR management system with complete CRUD operations for employee records, department management, and reporting. Built with Spring Boot REST APIs and a MySQL relational database, featuring Spring Data JPA.',
        tech: ['Java', 'Spring Boot', 'Spring Data JPA', 'MySQL', 'REST API'],
        icons: [FaJava, SiSpring, SiMysql],
        highlight: 'Full CRUD · Department Hierarchy · REST API',
    },
    {
        title: 'Payroll Management System',
        subtitle: 'Secure Enterprise Solution',
        description:
            'An enterprise payroll processing system with role-based access control via Spring Security, JWT authentication, automated salary computation, and payslip generation in a secure, multi-role environment.',
        tech: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'MySQL'],
        icons: [FaJava, SiSpring, SiMysql],
        highlight: 'JWT Auth · Role-Based Access · Automated Payslips',
    },
];

export default function JavaProjects() {
    return (
        <section id="java" className="section-padding relative">
            {/* Bg accent */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at 80% 30%, rgba(16,185,129,0.05) 0%, transparent 55%)' }}
            />

            <div className="container-inner relative z-10">
                <motion.p
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-3"
                >
                    Enterprise Solutions
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ delay: 0.1 }}
                    className="text-3xl md:text-4xl font-bold text-white mb-6"
                    style={{ marginTop: "15px" }}
                >
                    Java Backend Systems
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ delay: 0.2 }}
                    className="text-gray-500 max-w-xl mb-16"
                    style={{ marginTop: "10px" }}
                >
                    Production-grade enterprise applications powered by Spring Boot, Spring Security, and MySQL.
                </motion.p>

                <div className="grid md:grid-cols-2 gap-8" style={{ marginTop: "15px" }}>
                    {javaProjects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.65, delay: i * 0.15, ease: 'easeOut' }}
                            whileHover={{ y: -5 }}
                            className="relative overflow-hidden rounded-2xl group flex flex-col"
                            style={{
                                background: 'linear-gradient(135deg, rgba(16,185,129,0.08) 0%, rgba(26,26,26,0.95) 60%)',
                                border: '1px solid rgba(16,185,129,0.15)',
                            }}
                        >
                            {/* Corner accent */}
                            <div
                                className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none"
                                style={{ background: 'radial-gradient(circle at top right, #10B981, transparent),marginTop: "10px",' }}
                            />

                            <div className="card-pad flex-1 flex flex-col">
                                {/* FIX 1: Header stacks on mobile, row on desktop to prevent squishing */}
                                <div className="flex flex-col xl:flex-row xl:items-start justify-between gap-4 mb-5">
                                    <div>
                                        <p className="text-xs text-emerald-400 uppercase tracking-widest font-semibold mb-1">
                                            {project.subtitle}
                                        </p>
                                        <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors duration-200">
                                            {project.title}
                                        </h3>
                                    </div>
                                    {/* Icons wrap safely */}
                                    <div className="flex flex-wrap items-center gap-1.5 shrink-0">
                                        {project.icons.map((Icon, idx) => (
                                            <div key={idx} className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                                                style={{ background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.2)' }}>
                                                <Icon className="text-emerald-400 text-sm" />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1" style={{ marginTop: "10px" }}>{project.description}</p>

                                {/* FIX 2: BULLETPROOF HIGHLIGHT BADGE */}
                                {/* Using absolute positioning for the dot so it NEVER moves even if text wraps 3 lines */}
                                <div className="relative pl-7 pr-4 py-2 rounded-lg mb-5 text-xs text-emerald-300 font-medium w-fit max-w-full" 
                                    style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)' , marginTop: "10px"}}>
                                    
                                    <span className="absolute left-3 top-3 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" style={{ marginTop: "10px" }}/>
                                    
                                    <span className="block leading-relaxed" >{project.highlight}</span>
                                </div>

                                {/* Tech tags */}
                                <div className="flex flex-wrap gap-2" style={{ marginTop: "10px" }}>
                                    {project.tech.map((t) => (
                                        <span key={t} className="tag-pill">{t}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}