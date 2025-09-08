import { motion } from 'framer-motion';
import type { Props } from '../types';

export default function MotionOnScroll({ children, className = '', delay = 0, y = 20 }: Props) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay }}
        >
            {children}
        </motion.div>
    );
}
