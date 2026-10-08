import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section id="inicio" className="relative h-[80vh] min-h-[500px] w-full pt-16 overflow-hidden">
      <motion.div 
        initial={{ scale: 1.08, opacity: 0.8 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
        className="h-full w-full bg-cover bg-center"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=80')` 
        }}
      />
    </section>
  );
};