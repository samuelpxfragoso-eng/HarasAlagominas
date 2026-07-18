import { useState } from 'react';
import { motion } from 'motion/react';

const cavalos = [
  { nome: "Boca da Mata Alagominas", videoUrl: "https://res.cloudinary.com/snrseezc/video/upload/v1784327512/SnapInsta.to_AQNjqhl8R4U5ufqpaHSWUO9tuyFvPnOAYB72BIPhlLQvWt-5IFk7uDGUe8jGhqdtM8HFlXB4NeHNOyc1RIZqZHYs10SHx3CUZtfoGSM_dkr5us.mp4" },
  { nome: "Carvalhos Yuri Alagominas", videoUrl: "https://res.cloudinary.com/snrseezc/video/upload/v1784327511/SnapInsta.to_AQNCctdoYaGyjyZB0cbgvuDr8mN8fjLHQvl3kEvIovK6GtA-hAkW0u0NVdR2NDWChGy5y1RnLDvAy2gv9ep1OXOEtFC36AzlSt3LGmI_cofvug.mp4" },
  { nome: "Canaa Alagominas", videoUrl: "https://res.cloudinary.com/snrseezc/video/upload/v1784327512/SnapInsta.to_AQMcYs9aXtZNf9iKtd032QEQ4gyNbQO0rnSfqG3itJPEP7yFTjCVgUqlB0pK0jLorsHi1gBBvYj78wtn_xTzPyUxS4wzwgO6o7_XPy4_z3qis3.mp4" },
  { nome: "Buritis Muralha de Pedra Alagominas", videoUrl: "https://res.cloudinary.com/snrseezc/video/upload/v1784327507/SnapInsta.to_AQOpa3cs_j9V1t38bf--B9Eb1Ns0_GiVjtbkaAa3NUh2_-CKWXwfTvI8YjIFJPyjqr3Hmxh4BdDLaqjgzdolK6v453M_0aSDeOkUiMQ_qyojy8.mp4" },
  { nome: "Oliveira Alagominas", videoUrl: "https://res.cloudinary.com/snrseezc/video/upload/v1784327508/SnapInsta.to_AQMTY1M6E1PG_MfrliS2qLbqfzg84nHPOXSe3aqNme7FBU2hqQ3s5eaKafElg3ncOJHZwefazSRYEFJzCt2PHEq1Hd2TCf7-9A6hpbU_pipbq7.mp4" },
  { nome: "Áurea Alagominas", videoUrl: "https://res.cloudinary.com/snrseezc/video/upload/v1784327509/SnapInsta.to_AQPfNRmXVUJRWWz8r0bEPImFVG6F8Xg0rQ1Nd83IgQP5NkRUNn26Cniof7CnAEzSaYiCu1rNB5YFkAlDt4k0cJ6caIp9ljct9wK3GB4_zmrjx9.mp4" },
  { nome: "Amora Alagominas", videoUrl: "https://res.cloudinary.com/snrseezc/video/upload/v1784327514/SnapInsta.to_AQOvSyAsdsKRsQc1WzUQ-Y0kacklA9zy7O3LHR9bE-5v1OqpyRlDTa8acYqm-leIGrfbiRZAI0eifdYu1sChA1kB36qZNycskdWP6H4_vjpvih.mp4" }
];

export default function OportunidadesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="oportunidades" className="py-20 bg-brand-dark text-white">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-5xl text-brand-gold mb-8 text-center uppercase tracking-tighter">Conheça Nossas Oportunidades</h2>
        <p className="text-center text-brand-gold font-semibold mb-12">Clique nos botões abaixo para alternar e analisar cada exemplar</p>

        <div className="grid md:grid-cols-2 gap-12 bg-zinc-900 p-6 md:p-10 rounded-2xl shadow-2xl border border-white/10">
          <div className="relative aspect-video bg-black rounded-lg overflow-hidden border-2 border-brand-gold">
            <video 
              key={cavalos[activeIndex].videoUrl}
              src={cavalos[activeIndex].videoUrl}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-between">
            <div className="mb-6">
              <h3 className="text-3xl font-display text-brand-gold mb-4 uppercase">{cavalos[activeIndex].nome}</h3>
              <p className="text-gray-300 text-lg leading-relaxed">Exemplar de extrema marcha, genética refinada e morfologia superior. Uma oportunidade exclusiva e selecionada para agregar valor ao seu plantel.</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {cavalos.map((cavalo, index) => (
                <button 
                  key={index} 
                  onClick={() => setActiveIndex(index)}
                  className={`p-3 rounded-lg font-semibold text-sm transition-all ${index === activeIndex ? 'bg-brand-gold text-brand-dark shadow-[0_0_15px_rgba(197,160,89,0.5)]' : 'bg-zinc-800 hover:bg-zinc-700 text-white'}`}
                >
                  {cavalo.nome.split(' ')[0]}
                </button>
              ))}
            </div>

            <a href="https://wa.me/5541998009320" target="_blank" className="mt-8 block bg-gradient-to-r from-brand-gold to-yellow-600 text-brand-dark py-4 text-center font-bold text-lg rounded-lg hover:opacity-90 transition-opacity">
              Tenho Interesse Neste Exemplar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
