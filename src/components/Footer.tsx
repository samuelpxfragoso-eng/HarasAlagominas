import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark py-12 text-center text-gray-400">
      <motion.div
        animate={{ scale: [1, 1.05, 1], rotate: [0, 5, -5, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      >
        <img 
          src="https://res.cloudinary.com/snrseezc/image/upload/v1784324971/WhatsApp_Image_2026-07-17_at_6.48.42_PM_tak0qw.jpg" 
          alt="Haras Alagominas Logo" 
          className="h-24 mx-auto mb-6 rounded-full object-cover"
        />
      </motion.div>
      <p className="mb-4">@harasalagominas | 5.7k seguidores</p>
      <p>&copy; {new Date().getFullYear()} Haras Alagominas. Todos os direitos reservados.</p>
    </footer>
  );
}
