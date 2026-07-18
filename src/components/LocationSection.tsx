export default function LocationSection() {
  return (
    <section id="contato" className="py-20 bg-brand-dark text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-display text-3xl md:text-5xl text-brand-gold mb-8">Onde Estamos</h2>
        <p className="text-gray-300 mb-8">Fazenda Malícia, Viçosa, Alagoas</p>
        <div className="h-96 w-full rounded-lg overflow-hidden border border-brand-gold/50 mb-8">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.327685651515!2d-36.25565548523315!3d-9.381395993246473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x708a3d3c754d923%3A0xc3c518b532938b25!2sFazenda%20Mal%C3%ADcia!5e0!3m2!1sen!2sbr!4v1689617000000!5m2!1sen!2sbr" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={true} 
                loading="lazy">
            </iframe>
        </div>
        <a href="https://maps.app.goo.gl/example" target="_blank" className="bg-brand-gold text-brand-dark px-10 py-4 font-bold text-lg rounded-lg hover:opacity-90 transition-opacity">
            Como Chegar
        </a>
      </div>
    </section>
  );
}
