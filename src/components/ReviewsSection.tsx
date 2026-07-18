import { Star } from 'lucide-react';

const reviews = [
  { nome: "Carlos Silva", texto: "Animais excepcionais e atendimento impecável. O Haras Alagominas é referência!" },
  { nome: "Mariana Souza", texto: "Experiência incrível. Profissionalismo e dedicação com os cavalos." },
  { nome: "Ricardo Oliveira", texto: "Comprei meu primeiro marchador aqui e estou muito satisfeito. Genética de ponta!" },
  { nome: "Fernanda Lima", texto: "Ambiente maravilhoso e equipe muito capacitada. Recomendo de olhos fechados." },
  { nome: "Pedro Santos", texto: "Qualidade inigualável. O Haras é realmente um dos melhores do país." },
  { nome: "Juliana Costa", texto: "Atendimento nota 10! A equipe tirou todas as minhas dúvidas com muita paciência." },
  { nome: "Lucas Pereira", texto: "Cavalos com morfologia e marcha de encher os olhos. Parabéns pelo trabalho!" },
  { nome: "Beatriz Almeida", texto: "Visitar a Fazenda Malícia é sempre um prazer. O haras é um verdadeiro exemplo de cuidado." },
  { nome: "Rafael Martins", texto: "Adorei a transparência durante todo o processo de negociação. Muito obrigado!" },
  { nome: "Camila Rocha", texto: "A estrutura do Haras Alagominas é simplesmente fantástica. Estrutura de primeiro mundo." },
];

export default function ReviewsSection() {
  return (
    <section id="avaliacoes" className="py-20 bg-brand-dark text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-4 mb-8">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-10 h-10" />
            <h2 className="font-display text-3xl">Avaliações Google</h2>
        </div>
        
        <div className="flex overflow-x-auto gap-6 pb-8 snap-x">
          {reviews.map((r, i) => (
            <div key={i} className="bg-zinc-900 p-6 rounded-lg min-w-[300px] snap-start border border-brand-gold/30">
              <div className="flex text-brand-gold mb-2">
                {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
              </div>
              <p className="text-gray-300 mb-4">{r.texto}</p>
              <p className="font-bold">{r.nome}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#" className="bg-brand-gold text-brand-dark px-8 py-3 rounded-sm font-bold text-lg hover:bg-white transition-colors">
            Avaliar no Google
          </a>
        </div>
      </div>
    </section>
  );
}
