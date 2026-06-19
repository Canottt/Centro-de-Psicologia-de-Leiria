import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

export default function Appointments() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-32">
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Info */}
            <div className="space-y-12 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div>
                <span className="text-clinical-gold font-sans text-xs uppercase tracking-[0.4em] mb-4 block">Marcações</span>
                <h1 className="text-5xl md:text-7xl mb-8">Marque a sua consulta.</h1>
                <p className="text-xl text-clinical-green/70 leading-relaxed font-light">
                  Estamos prontos para o acolher. Escolha o método de contacto que lhe for mais conveniente.
                </p>
              </div>

              <div className="space-y-8 w-full flex flex-col items-center lg:items-start">
                <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-6 space-y-4 lg:space-y-0 group text-center lg:text-left">
                  <div className="w-12 h-12 bg-clinical-light flex items-center justify-center group-hover:bg-clinical-gold group-hover:text-white transition-colors duration-500 shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-sans text-[10px] uppercase tracking-widest font-bold mb-1">Telefone</h4>
                    <p className="text-2xl font-serif">910 012 936</p>
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-6 space-y-4 lg:space-y-0 group text-center lg:text-left">
                  <div className="w-12 h-12 bg-clinical-light flex items-center justify-center group-hover:bg-clinical-gold group-hover:text-white transition-colors duration-500 shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-sans text-[10px] uppercase tracking-widest font-bold mb-1">Email</h4>
                    <p className="text-lg font-serif break-all">info@centrodepsicologiadeleiria.pt</p>
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-6 space-y-4 lg:space-y-0 group text-center lg:text-left">
                  <div className="w-12 h-12 bg-clinical-light flex items-center justify-center group-hover:bg-clinical-gold group-hover:text-white transition-colors duration-500 shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-sans text-[10px] uppercase tracking-widest font-bold mb-1">Localização</h4>
                    <p className="text-lg font-serif">Leiria, Portugal</p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-clinical-light border border-clinical-accent w-full max-w-md lg:max-w-none flex flex-col items-center lg:items-start">
                <div className="flex items-center space-x-3 mb-4 text-clinical-gold justify-center lg:justify-start">
                  <Clock size={20} />
                  <h4 className="font-serif text-lg">Horário de Atendimento</h4>
                </div>
                <div className="space-y-3 text-sm opacity-70 w-full text-center lg:text-left">
                  <p className="flex flex-col sm:flex-row justify-between gap-1 border-b border-clinical-accent/20 pb-2 sm:border-none sm:pb-0">
                    <span className="font-semibold lg:font-normal">Segunda - Sexta</span> 
                    <span>09:00 - 20:00</span>
                  </p>
                  <p className="flex flex-col sm:flex-row justify-between gap-1">
                    <span className="font-semibold lg:font-normal">Sábado</span> 
                    <span>09:00 - 20:00</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white border border-clinical-accent p-6 sm:p-10 md:p-16 shadow-2xl relative">
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center space-y-6"
                >
                  <div className="w-20 h-20 bg-clinical-green text-white rounded-full flex items-center justify-center mb-4">
                    <Send size={32} />
                  </div>
                  <h3 className="text-3xl font-serif">Mensagem Enviada</h3>
                  <p className="text-clinical-green/70">Obrigado pelo seu contacto. Entraremos em contacto o mais brevemente possível.</p>
                  <button onClick={() => setSubmitted(false)} className="btn-secondary">Enviar nova mensagem</button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold opacity-50 block text-center md:text-left">Nome Completo</label>
                      <input required type="text" className="w-full border-b border-clinical-accent py-3 focus:border-clinical-gold outline-none transition-colors bg-transparent text-center md:text-left" placeholder="Ex: Maria Silva" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold opacity-50 block text-center md:text-left">Email</label>
                      <input required type="email" className="w-full border-b border-clinical-accent py-3 focus:border-clinical-gold outline-none transition-colors bg-transparent text-center md:text-left" placeholder="Ex: maria@email.com" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold opacity-50 block text-center md:text-left">Telefone</label>
                      <input required type="tel" className="w-full border-b border-clinical-accent py-3 focus:border-clinical-gold outline-none transition-colors bg-transparent text-center md:text-left" placeholder="Ex: 912 345 678" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold opacity-50 block text-center md:text-left">Motivo da Consulta</label>
                      <select className="w-full border-b border-clinical-accent py-3 focus:border-clinical-gold outline-none transition-colors bg-transparent appearance-none text-center md:text-left">
                        <option>Psicologia Adultos</option>
                        <option>Psicologia Infantil & Juvenil</option>
                        <option>Terapia de Casal & Familiar</option>
                        <option>Terapia EMDR & Hipnose</option>
                        <option>Avaliação Psicológica / Neuropsicológica</option>
                        <option>Outro Motivo</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold opacity-50 block text-center md:text-left">Melhor Horário para Contacto</label>
                    <input type="text" className="w-full border-b border-clinical-accent py-3 focus:border-clinical-gold outline-none transition-colors bg-transparent text-center md:text-left" placeholder="Ex: Manhã (10h-12h)" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold opacity-50 block text-center md:text-left">Mensagem (Opcional)</label>
                    <textarea rows={4} className="w-full border border-clinical-accent p-4 focus:border-clinical-gold outline-none transition-colors bg-transparent resize-none text-center md:text-left" placeholder="Como o podemos ajudar?"></textarea>
                  </div>

                  <button type="submit" className="btn-primary w-full py-5 flex items-center justify-center space-x-3">
                    <span>Enviar Pedido de Marcação</span>
                    <Send size={16} />
                  </button>
                  
                  <p className="text-[10px] text-center opacity-40 uppercase tracking-widest leading-relaxed">
                    Ao enviar este formulário, concorda com a nossa política de tratamento de dados pessoais.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
