import { motion } from 'framer-motion';
import { HiExternalLink } from 'react-icons/hi';

export default function ProjectCard({ title, description, tags, link, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: index * 0.12, ease: 'easeOut' }}
            whileHover={{ y: -6, scale: 1.015 }}
            className="glass rounded-2xl card-pad flex flex-col gap-5 group relative overflow-hidden transition-all duration-300 cursor-default"
        >
            {/* Emerald hover shimmer */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.06) 0%, transparent 60%)' }}
            />

            {/* Top accent line */}
            <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="flex items-start justify-between">
                {/* Icon */}
                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)' }}>
                    <span className="text-emerald-400 text-lg">⬡</span>
                </div>
                {/* Link */}
                {link && (
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-emerald-400 transition-colors duration-200"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <HiExternalLink size={20} />
                    </a>
                )}
            </div>

            <div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors duration-200">
                    {title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-auto pt-2">
                {tags.map((tag) => (
                    <span key={tag} className="tag-pill">{tag}</span>
                ))}
            </div>
        </motion.div>
    );
}
