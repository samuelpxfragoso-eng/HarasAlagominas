import { motion } from 'motion/react';
import { Instagram } from 'lucide-react';

export default function InstagramSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <video 
        src="https://res.cloudinary.com/ltukueen/video/upload/v1784403085/SnapInsta.to_AQNtTyH12T7qfxph0298NjTIFgrTtFd0SYYePWr_sO348b3MYsemcmGZZF0lhioRbxn96N-FJz0rHOSDNMdeDb4LGUOwFM2ICoEQQX4_yxkr0k.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-brand-dark/80" />
      
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center text-center text-white">
        <h2 className="text-4xl md:text-5xl font-display text-brand-gold mb-6 uppercase tracking-tight">Siga-nos no Instagram</h2>
        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed">
            Acompanhe nosso dia a dia, novidades do plantel, bastidores da Fazenda Malícia e vídeos exclusivos da nossa produção.
        </p>
        
        <motion.a 
          href="https://www.instagram.com/harasalagominas/" 
          target="_blank"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-3 bg-gradient-to-tr from-purple-600 via-pink-500 to-yellow-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all"
        >
          <Instagram size={24} />
          Siga @harasalagominas
        </motion.a>
      </div>
    </section>
  );
}
