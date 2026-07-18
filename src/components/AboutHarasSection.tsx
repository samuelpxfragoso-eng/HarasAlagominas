export default function AboutHarasSection() {
  return (
    <section id="haras" className="py-20 bg-zinc-900 text-white border-t border-zinc-800">
      <div className="container mx-auto px-4 max-w-6xl grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-12">
        
        {/* Bloco de Texto Principal */}
        <div className="space-y-6">
          <video 
            src="https://res.cloudinary.com/snrseezc/video/upload/v1784326413/SnapInsta.to_AQPe5AhtuHAVImXih88DD_B7Om9Z3mWVJHs-SsgZR3gMiG121Eyb_EY02PGo0cixXgVCy724ZC9FbmScr9NPWMSBLg0NzzrSLKX-Ouo_pjuky3.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full rounded-xl shadow-2xl mb-8"
          />
          <span className="text-brand-gold text-sm uppercase tracking-widest font-bold">Tradição e Excelência</span>
          <h2 className="text-4xl md:text-5xl font-display text-white uppercase tracking-tight">Fazenda Malícia</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Localizado em Viçosa, Alagoas, o <strong>Haras Alagominas</strong> é um berço de seleção do cavalo Mangalarga Marchador. Nossa estrutura foi projetada para garantir o máximo bem-estar animal, com piquetes formados, baias arejadas, pistas de treinamento oficiais e uma equipe de profissionais altamente qualificados.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed">
            Focamos na evolução genética, temperamento de sela e na preservação da marcha genuína, oferecendo ao mercado animais de destaque e prontos para pistas ou lazer.
          </p>

          {/* Grid de Informações Rápidas */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
            <div className="bg-zinc-800 p-4 rounded-lg border-l-4 border-brand-gold">
              <h3 className="text-brand-gold font-display text-lg mb-2">Genética</h3>
              <p className="text-gray-500 text-sm">Linhagens consagradas e focadas na evolução da marcha.</p>
            </div>
            <div className="bg-zinc-800 p-4 rounded-lg border-l-4 border-brand-gold">
              <h3 className="text-brand-gold font-display text-lg mb-2">Estrutura</h3>
              <p className="text-gray-500 text-sm">Baias modernas, piquetes e pistas de treinamento.</p>
            </div>
            <div className="bg-zinc-800 p-4 rounded-lg border-l-4 border-brand-gold">
              <h3 className="text-brand-gold font-display text-lg mb-2">Localização</h3>
              <p className="text-gray-500 text-sm">Clima e solo ideais em Viçosa — Alagoas.</p>
            </div>
          </div>
        </div>

        {/* Bloco de Ações */}
        <div className="flex flex-col gap-6 justify-center">
          <div className="bg-zinc-800 p-8 rounded-xl shadow-lg">
            <h3 className="text-xl text-white font-display mb-4">Agende uma Visita</h3>
            <p className="text-gray-400 mb-6 text-sm">Venha conhecer nosso plantel de perto, tomar um café conosco e testar nossos animais na pista.</p>
            <a href="https://wa.me/5541998009320?text=Olá,%20gostaria%20de%20agendar%20uma%20visita%20ao%20Haras" target="_blank" className="block text-center bg-brand-gold text-brand-dark py-3 rounded-md font-bold hover:opacity-90 transition-opacity">
              Falar com Atendimento
            </a>
          </div>

          <div className="bg-zinc-800 p-8 rounded-xl shadow-lg border border-brand-gold/20">
            <h3 className="text-xl text-white font-display mb-4">Como Chegar</h3>
            <p className="text-gray-400 mb-6 text-sm">Estamos localizados na região de Viçosa - AL. Atendemos com horários agendados para sua total privacidade.</p>
            <a href="https://maps.google.com" target="_blank" className="block text-center bg-transparent text-brand-gold border border-brand-gold py-3 rounded-md font-bold hover:bg-brand-gold/10 transition-all">
              Ver no Google Maps
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
