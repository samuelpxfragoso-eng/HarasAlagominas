import { motion } from 'motion/react';
import { Leaf, Award, Home } from 'lucide-react';

export default function Hero() {
  const features = [
    { icon: Leaf, title: "GENÉTICA DE PONTA", desc: "Linhagens selecionadas com excelência." },
    { icon: Award, title: "RESULTADOS COMPROVADOS", desc: "Campeões nas principais pistas do país." },
    { icon: Home, title: "ESTRUTURA COMPLETA", desc: "Bem-estar, manejo e dedicação em cada detalhe." },
  ];

  return (
    <section id="hero" className="relative min-h-screen bg-brand-dark text-white pt-40 pb-12 flex flex-col justify-between overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ backgroundImage: "url('https://res.cloudinary.com/snrseezc/image/upload/v1784326096/WhatsApp_Image_2026-07-17_at_7.07.40_PM_b8yhy4.jpg')", filter: 'blur(8px)' }}
      />
      <div className="absolute inset-0 bg-brand-dark/70 z-10" />
      <div className="container mx-auto px-4 z-20 flex flex-col md:flex-row items-center gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2"
        >
          <p className="font-display text-brand-gold text-xs tracking-[0.2em] mb-4">— TRADIÇÃO QUE GERA CAMPEÕES —</p>
          <h1 className="font-display text-4xl md:text-5xl text-white mb-6 uppercase tracking-tighter leading-tight">
            PAIXÃO PELO <br/><span className="text-brand-gold">MANGALARGA MARCHADOR</span>
          </h1>
          <p className="text-base text-gray-300 mb-8 max-w-md">
            Tradição, genética de ponta e excelência na Fazenda Malícia – Viçosa, Alagoas.
          </p>
          <button className="bg-brand-gold text-brand-dark px-8 py-3 font-semibold text-sm hover:bg-white transition-colors flex items-center gap-2">
            CONHEÇA NOSSO PLANTEL
          </button>
        </motion.div>
        
        <div className="md:w-1/2">
          <video 
            src="https://res.cloudinary.com/snrseezc/video/upload/v1784324973/SnapInsta.to_AQMykNhu3Yh4pSnG42lgas1xeJ3qUCgsxhG8Cr6reyUdGfs0fg7O_9ja1lQw8ZeVLeDCmnRGtapBMHMzo6dMbNUYXeneNN_yF8P5VkI_aetzo0.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full rounded-sm shadow-2xl"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 mt-20 border-t border-white/10 pt-12 z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="flex items-center gap-4 text-brand-gold">
              <f.icon size={48} className="stroke-[1]" />
              <div>
                <h3 className="font-display text-xs tracking-widest">{f.title}</h3>
                <p className="text-gray-400 text-[10px] mt-1">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
