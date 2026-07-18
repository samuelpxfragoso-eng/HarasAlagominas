import { motion } from 'motion/react';

export default function Header() {
  const navItems = ["INÍCIO", "O HARAS", "NOSSOS ANIMAIS", "GENÉTICA", "CONTATO"];
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/90 backdrop-blur-sm border-b border-brand-gold/20">
      {/* Ticker Bar */}
      <div className="bg-brand-gold text-brand-dark text-xs font-bold py-1 overflow-hidden">
        <motion.div 
          animate={{ x: ["100%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="whitespace-nowrap flex gap-10"
        >
          <span>🌱 Qualidade superior em Mangalarga Marchador</span>
          <span>📍 Fazenda Malícia - Viçosa, Alagoas</span>
          <span>🏆 Genética premiada e tradição</span>
          <span>📞 Entre em contato e agende sua visita</span>
          <span>🐎 Excelência em marcha e morfologia</span>
        </motion.div>
      </div>

      <div className="container mx-auto flex items-center justify-between p-4">
        <motion.div
          animate={{ scale: [1, 1.05, 1], rotate: [0, 5, -5, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="rounded-full overflow-hidden border-2 border-brand-gold p-1 shadow-[0_0_15px_rgba(197,160,89,0.5)]"
        >
          <img 
            src="https://res.cloudinary.com/snrseezc/image/upload/v1784324971/WhatsApp_Image_2026-07-17_at_6.48.42_PM_tak0qw.jpg" 
            alt="Haras Alagominas Logo" 
            className="h-12 w-12 rounded-full object-cover"
          />
        </motion.div>
        <nav className="flex gap-8 text-brand-gold font-display text-sm tracking-widest">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover:text-white transition-colors">
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
