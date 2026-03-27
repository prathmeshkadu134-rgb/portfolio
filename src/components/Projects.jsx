import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const reactProjects = [
    {
        title: 'PS Builders.com',
        description:
            'A premium real estate platform featuring interactive property carousels, dynamic listing pages, and a glassmorphism-inspired UI. Built with React.js and component-driven architecture for seamless property browsing.',
        tags: ['React.js', 'JavaScript', 'CSS3', 'Carousel', 'Glassmorphism'],
        link: '#',
    },
    {
        title: 'Tripzy.com',
        description:
            'A full-featured travel booking platform with a "Full Journey" system — search, select, and book trips end-to-end. Integrates JSON Server for real-time mock API data, React Router DOM for multi-page navigation.',
        tags: ['React.js', 'JSON Server', 'React Router DOM', 'REST API', 'Tailwind CSS'],
        link: '#',
    },
    {
        title: 'Heartz.com',
        description:
            'An e-commerce store with a fully functional Add-to-Cart system, product filtering, and order management. Uses React Context API for state management and React Router DOM for seamless page transitions.',
        tags: ['React.js', 'Context API', 'React Router DOM', 'E-commerce', 'JavaScript'],
        link: '#',
    },
];

export default function Projects() {
    return (
        <section id="projects" className="section-padding relative">
            <div className="container-inner">
                <motion.p
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-3"
                >
                    Featured Work
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ delay: 0.1 }}
                    className="text-3xl md:text-4xl font-bold text-white mb-6"
                    style={{ marginTop: "15px" }}
                >
                    React Projects
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ delay: 0.2 }}
                    className="text-gray-500 max-w-xl mb-16"
                    style={{ marginTop: "10px" }}
                >
                    End-to-end web applications built with React.js — each showcasing a focused set of features and real-world patterns.
                </motion.p>

                <div className="grid md:grid-cols-3 gap-6" style={{ marginTop: "10px" }}>
                    {reactProjects.map((project, i) => (
                        <ProjectCard key={project.title} {...project} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
