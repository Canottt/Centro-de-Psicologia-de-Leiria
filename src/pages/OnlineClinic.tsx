import { motion } from 'motion/react';
import { Video, ShieldCheck, Globe, CalendarCheck, ArrowRight, Calendar, FileText, CreditCard, Laptop } from 'lucide-react';
import { Link } from 'react-router-dom';

const benefits = [
  { title: 'Conforto e Privacidade', desc: 'Realize a sua sessão num ambiente familiar onde se sinta seguro e confortável.', icon: <ShieldCheck size={24} /> },
  { title: 'Flexibilidade Geográfica', desc: 'Ideal para quem reside fora de Leiria ou no estrangeiro, mantendo o acompanhamento em português.', icon: <Globe size={24} /> },
  { title: 'Gestão de Tempo', desc: 'Elimine tempos de deslocação e facilite a conciliação com a sua agenda profissional e pessoal.', icon: <CalendarCheck size={24} /> },
];

export default function OnlineClinic() {
  return (
    <div className="pt-32">
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="text-center lg:text-left flex flex-col items-center lg:items-start w-full">
              <span className="text-clinical-green font-sans text-xs uppercase tracking-[0.4em] mb-4 block">Clínica Online</span>
              <h1 className="text-5xl md:text-7xl mb-8">Terapia sem fronteiras.</h1>
              <p className="text-xl text-clinical-green/70 leading-relaxed font-light mb-12 max-w-2xl mx-auto lg:mx-0">
                Oferecemos consultas online por videochamada com a mesma qualidade, rigor e confidencialidade das sessões presenciais.
              </p>
              <div className="space-y-6 w-full flex flex-col items-center lg:items-start text-center lg:text-left">
                {benefits.map((b, i) => (
                  <div key={i} className="flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-4 max-w-md lg:max-w-none">
                    <div className="text-clinical-gold shrink-0">{b.icon}</div>
                    <div>
                      <h4 className="font-serif text-lg mb-1">{b.title}</h4>
                      <p className="text-sm text-clinical-green/60 leading-relaxed">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative group w-full flex flex-col items-center">
              <div className="aspect-[4/3] sm:aspect-square bg-clinical-light overflow-hidden rounded-[2.5rem] border border-clinical-accent shadow-2xl relative w-full max-w-lg lg:max-w-none">
                <img 
                  src="https://images.unsplash.com/photo-1588702547919-26089e690ecc?auto=format&fit=crop&q=80&w=1000" 
                  alt="Consulta Online" 
                  className="w-full h-full object-cover grayscale opacity-90 transition-all duration-1000 ease-out group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-clinical-green/10 group-hover:bg-transparent transition-colors duration-700"></div>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="relative lg:absolute mt-8 lg:mt-0 mx-auto lg:-bottom-10 lg:-right-4 bg-clinical-green/95 backdrop-blur-xl text-white p-10 max-w-[340px] rounded-[2.5rem] shadow-[0_20px_50px_rgba(63,89,82,0.3)] border border-white/10 z-10 flex flex-col items-center lg:items-start text-center lg:text-left w-full"
              >
                <div className="w-16 h-16 bg-clinical-gold/20 rounded-2xl flex items-center justify-center mb-8 text-clinical-gold shadow-inner group-hover:scale-110 transition-transform duration-500 shrink-0">
                  <Video size={36} />
                </div>
                <h3 className="text-2xl mb-4 font-serif text-white uppercase tracking-tight">Privacidade Absoluta</h3>
                <p className="text-sm text-white/80 leading-relaxed font-light">
                  Sessões realizadas através de plataformas encriptadas, garantindo o sigilo total e o rigor ético no meio digital.
                </p>
              </motion.div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#3F5952] p-6 sm:p-12 md:p-24 rounded-[3.5rem] text-center shadow-2xl relative overflow-hidden text-white"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-clinical-gold/5 rounded-full blur-3xl -ml-32 -mb-32"></div>
            
            <div className="text-center mb-16 relative z-10">
              <span className="text-clinical-gold font-sans text-xs uppercase tracking-[0.5em] mb-4 block font-semibold">Protocolo Digital</span>
              <h2 className="text-4xl md:text-5xl font-serif text-white">Como funciona?</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {[
                { step: '01', title: 'Marcação', desc: 'Agende a sua sessão através do formulário ou contacto telefónico direto.', icon: <Calendar size={28} /> },
                { step: '02', title: 'Consentimento', desc: 'Receção e leitura cuidada do contrato terapêutico e consentimento informado.', icon: <FileText size={28} /> },
                { step: '03', title: 'Pagamento & Link', desc: 'Após a confirmação, recebe um link seguro e encriptado para a videochamada.', icon: <CreditCard size={28} /> },
                { step: '04', title: 'Consulta', desc: 'No horário estabelecido, aceda ao link para iniciar o seu acompanhamento.', icon: <Laptop size={28} /> },
              ].map((s, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/10 border border-white/20 p-8 rounded-[2.5rem] hover:bg-white/15 hover:scale-[1.02] transition-all duration-500 group text-center lg:text-left flex flex-col items-center lg:items-start shadow-lg"
                >
                  <div className="flex lg:justify-between items-center justify-center gap-6 lg:gap-0 w-full mb-8">
                    <span className="text-4xl font-serif text-clinical-gold/40 group-hover:text-clinical-gold/70 transition-colors">{s.step}</span>
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-clinical-gold group-hover:scale-110 group-hover:bg-white/20 transition-all duration-500 shadow-inner shrink-0">
                      {s.icon}
                    </div>
                  </div>
                  <h4 className="text-2xl font-serif mb-4 text-white group-hover:text-clinical-gold transition-colors">{s.title}</h4>
                  <p className="text-sm text-white/80 leading-relaxed font-light group-hover:text-white transition-colors">{s.desc}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-20 relative z-10">
              <Link to="/marcacoes" className="btn-primary !bg-clinical-gold !text-[#3F5952] hover:!bg-white hover:!text-clinical-green !px-12 !py-5 shadow-xl transition-all font-bold">
                Marcar Consulta Online
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
