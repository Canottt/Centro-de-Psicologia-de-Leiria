import { motion, AnimatePresence } from 'motion/react';
import { Shield, Target, Eye, Heart, ShieldCheck, Brain, Sparkles, Scale, X } from 'lucide-react';
import { useState } from 'react';

export default function About() {
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  return (
    <div className="pt-32">
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16 text-center md:text-left mx-auto md:mx-0 flex flex-col items-center md:items-start">
            <span className="text-clinical-green font-sans text-xs uppercase tracking-[0.4em] mb-4 block">Sobre o Centro</span>
            <h1 className="text-5xl md:text-7xl mb-8">Rigor científico, empatia e excelência clínica.</h1>
            <p className="text-xl text-clinical-green/70 leading-relaxed font-light">
              O Centro de Psicologia de Leiria é uma clínica privada dedicada à saúde mental, pautada por uma abordagem ética, humana e cientificamente sustentada.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <div 
              onClick={() => setExpandedImage('https://www.dropbox.com/scl/fi/9ne9xrtbbzj5zott0niqs/Lounge.jpeg?rlkey=8jt7s5w1p6qh7sjtbzoz0sjbr&st=dvva6t8i&raw=1')}
              className="aspect-square bg-clinical-light overflow-hidden rounded-3xl border border-clinical-accent shadow-xl group max-w-lg mx-auto lg:max-w-none w-full cursor-zoom-in hover:border-clinical-gold/50 transition-colors duration-300"
            >
              <img 
                src="https://www.dropbox.com/scl/fi/9ne9xrtbbzj5zott0niqs/Lounge.jpeg?rlkey=8jt7s5w1p6qh7sjtbzoz0sjbr&st=dvva6t8i&raw=1" 
                alt="Lounge do Centro de Psicologia de Leiria" 
                className="w-full h-full object-cover grayscale transition-all duration-1000 ease-out group-hover:grayscale-0 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-12 text-center lg:text-left">
              <div>
                <h3 className="text-2xl mb-4 flex items-center justify-center lg:justify-start gap-3">
                  <Target className="text-clinical-gold" size={24} /> Missão
                </h3>
                <p className="text-clinical-green/70 leading-relaxed">
                  Criar um espaço de confiança e acolhimento onde cada pessoa se sinta em casa para cuidar da sua saúde mental. Unimos a excelência científica à proximidade humana para oferecer um acompanhamento psicológico ético, personalizado e transformador.
                </p>
              </div>
              <div>
                <h3 className="text-2xl mb-4 flex items-center justify-center lg:justify-start gap-3">
                  <Eye className="text-clinical-gold" size={24} /> Visão
                </h3>
                <p className="text-clinical-green/70 leading-relaxed">
                  Ser uma referência em saúde mental, reconhecida pela excelência clínica, e pela capacidade de criar relações terapêuticas genuínas. Aspiramos a construir uma comunidade onde o cuidado psicológico seja acessível e transformador, contribuindo para uma sociedade mais saudável, consciente e emocionalmente equilibrada.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#3F5952] p-8 md:p-20 rounded-[3rem] text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-clinical-gold/5 rounded-full blur-3xl -ml-32 -mb-32"></div>
            
            <div className="text-center mb-16 relative z-10">
              <span className="text-clinical-gold font-sans text-xs uppercase tracking-[0.5em] mb-4 block font-semibold">A Nossa Identidade</span>
              <h2 className="text-4xl md:text-5xl font-serif text-white">Os Nossos Valores</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              {[
                { title: 'Rigor Clínico', desc: 'Intervimos com práticas baseadas em evidência científica, formação contínua, intervisão e supervisão de casos.', icon: <ShieldCheck size={32} /> },
                { title: 'Ética', desc: 'Comprometemo-nos a agir com integridade, respeito e responsabilidade, colocando sempre o bem-estar da pessoa acima de tudo.', icon: <Scale size={32} /> },
                { title: 'Empatia', desc: 'Acolhemos cada pessoa com sensibilidade, respeito e genuíno interesse pela sua história, procurando compreender profundamente as suas necessidades, emoções e experiências.', icon: <Sparkles size={32} /> },
              ].map((v, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/10 border border-white/20 p-8 rounded-2xl hover:bg-white/15 transition-all duration-500 group shadow-lg flex flex-col items-center text-center"
                >
                  <div className="w-14 h-14 bg-clinical-gold/30 flex items-center justify-center rounded-xl mb-6 text-clinical-gold group-hover:scale-110 group-hover:bg-clinical-gold/40 transition-all duration-500 shadow-inner">
                    {v.icon}
                  </div>
                  <h4 className="text-2xl font-serif mb-4 text-white font-medium">{v.title}</h4>
                  <p className="text-sm text-white leading-relaxed font-light">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Fundadora Section */}
          <div className="section-padding px-0 mt-32 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 space-y-8">
              <div className="relative group w-full flex justify-center">
                <div className="aspect-[3/4] overflow-hidden rounded-3xl border border-clinical-accent shadow-2xl w-full max-w-sm">
                  <img 
                    src="https://www.dropbox.com/scl/fi/ttd83lc4ezepw0uc7uueb/WhatsApp-Image-2026-04-15-at-21.53.24.jpeg?rlkey=05nhqtjtlge7crs3rznurrz2s&st=iwxtp7t3&raw=1" 
                    alt="Carla Rodrigues Alves - Fundadora do CPL"
                    className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 aspect-square w-48 overflow-hidden rounded-2xl border-4 border-white shadow-xl hidden md:block">
                  <img 
                    src="https://www.dropbox.com/scl/fi/b5ouhjextvbm3p0s3kipf/WhatsApp-Image-2026-04-15-at-21.53.23.jpeg?rlkey=81n2dsp5cbv7y94rsvebg3r3l&st=4l3la6qn&raw=1" 
                    alt="Carla Rodrigues Alves - Detalhe"
                    className="w-full h-full object-cover grayscale transition-all duration-1000 hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start">
              <div>
                <span className="text-clinical-gold font-sans text-xs uppercase tracking-[0.4em] mb-4 block">Mensagem da Fundadora do Centro de Psicologia de Leiria</span>
                <h2 className="text-4xl md:text-5xl mb-2">Carla Rodrigues Alves</h2>
                <p className="text-clinical-gold text-sm uppercase tracking-widest font-medium">Fundadora do CPL e Psicóloga Clínica</p>
              </div>
              <div className="space-y-6 text-clinical-green/80 leading-relaxed text-base md:text-lg font-light text-center lg:text-left">
                <p>
                  Fundei o Centro de Psicologia de Leiria com o profundo desejo de criar um porto de abrigo para quem procura apoio psicológico. Um espaço onde cada pessoa se sinta acolhida, compreendida e acompanhada com rigor e dedicação. Acredito que a qualidade do acompanhamento psicológico nasce da combinação entre a excelência clínica e a construção de relações terapêuticas genuínas, baseadas na confiança e na segurança. Esta visão é também fruto da minha própria experiência. Quando iniciei o meu processo terapêutico, aos 16 anos, carregava comigo dores, emoções e fragilidades que tinha dificuldade em partilhar. Foi nesse espaço seguro que encontrei compreensão, aceitação e, sobretudo, a oportunidade de me conhecer verdadeiramente. A terapia permitiu-me crescer, transformar-me e reencontrar-me.
                </p>
                <p>
                  O Centro de Psicologia de Leiria nasceu dessa vivência e da vontade de proporcionar a outras pessoas aquilo que um dia me foi oferecido: um lugar seguro para parar, sentir, compreender e transformar. Um lugar onde cada história é recebida com respeito e onde cada pessoa encontra o apoio necessário para construir uma vida mais plena e significativa.
                </p>
              </div>
              <div className="flex items-center gap-6 pt-6 w-full justify-center lg:justify-start">
                <div className="h-px flex-grow bg-clinical-accent hidden lg:block"></div>
                <div className="text-center">
                  <p className="font-serif text-xl">Carla Rodrigues Alves</p>
                  <p className="text-[10px] uppercase tracking-tighter opacity-40">Cédula Profissional nº 30131</p>
                </div>
              </div>
            </div>
          </div>
         </div>
      </section>

      {/* Elegant Lightbox Modal for Expanded Image */}
      <AnimatePresence>
        {expandedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setExpandedImage(null)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 cursor-zoom-out select-none"
          >
            <motion.button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors bg-white/10 hover:bg-white/20 p-3 rounded-full"
              onClick={() => setExpandedImage(null)}
            >
              <X size={24} />
            </motion.button>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 120 }}
              className="relative max-w-5xl max-h-[85vh] overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={expandedImage} 
                alt="Vista Expandida" 
                className="max-w-full max-h-[85vh] object-contain"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <p className="text-white/50 text-xs font-mono mt-4 tracking-widest uppercase animate-pulse">
              Clique em qualquer lugar para fechar
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
