import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faq = [
  { p: "Qual a localização do Haras?", r: "Estamos na Fazenda Malícia, em Viçosa, Alagoas." },
  { p: "Como agendar uma visita?", r: "Entre em contato pelo nosso WhatsApp." },
  { p: "Quais cavalos estão à venda?", r: "Temos diversas opções, confira em nossas oportunidades." },
  { p: "O Haras é aberto ao público?", r: "Sim, mediante agendamento prévio." },
  { p: "Vocês realizam treinamentos?", r: "Sim, trabalhamos com treinamento profissional." },
  { p: "Como funciona a linhagem?", r: "Focamos em linhagens de marcha picada e batida de alta performance." },
  { p: "Quais são as formas de pagamento?", r: "Trabalhamos com opções facilitadas, consulte-nos." },
  { p: "Vocês entregam os animais?", r: "Sim, auxiliamos com logística de transporte." },
  { p: "Como conhecer a genética?", r: "Podemos enviar o registro genealógico de cada animal." },
  { p: "O Haras tem premiações?", r: "Sim, possuímos diversos títulos nacionais." },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-display text-3xl md:text-5xl text-brand-gold mb-12 text-center">Perguntas Frequentes</h2>
        <div className="space-y-4">
          {faq.map((item, i) => (
            <div key={i} className="bg-zinc-800 rounded-lg overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left p-6 flex justify-between items-center font-semibold"
              >
                {item.p}
                <ChevronDown className={`transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    className="px-6 pb-6 text-gray-400"
                  >
                    {item.r}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
