import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Users, Brain, Heart, Activity, Building2, ShieldCheck, Baby, Sparkles, X } from 'lucide-react';
import { posts } from '../data/posts';

const specialties = [
  { title: 'Psicologia Adultos', icon: <Brain className="text-clinical-green" size={32} />, desc: 'Intervenção focada em ansiedade, depressão e desenvolvimento pessoal.' },
  { title: 'Psicologia Infantil', icon: <Baby className="text-clinical-green" size={32} />, desc: 'Acompanhamento especializado para as necessidades de crianças e jovens.' },
  { title: 'Terapia EMDR', icon: <Sparkles className="text-clinical-green" size={32} />, desc: 'Abordagem psicoterapêutica eficaz para o tratamento de traumas e ansiedade.' },
  { title: 'Hipnose Clínica', icon: <Activity className="text-clinical-green" size={32} />, desc: 'Ferramenta terapêutica para promover mudanças comportamentais profundas.' },
];

const interventions = [
  { title: 'Adultos', items: ['Ansiedade', 'Depressão', 'Luto', 'Burnout', 'Trauma'] },
  { title: 'Crianças & Jovens', items: ['PHDA', 'Aprendizagem', 'Comportamento', 'Ansiedade Infantil'] },
  { title: 'Casal & Família', items: ['Conflitos', 'Infidelidade', 'Divórcio', 'Infertilidade'] },
];

const teamPreview = [
  { 
    name: 'Carla Rodrigues Alves', 
    role: 'Fundadora do CPL e Psicóloga Clínica', 
    specialty: 'Psicóloga Clínica',
    image: 'https://www.dropbox.com/scl/fi/b5ouhjextvbm3p0s3kipf/WhatsApp-Image-2026-04-15-at-21.53.23.jpeg?rlkey=81n2dsp5cbv7y94rsvebg3r3l&st=4l3la6qn&raw=1'
  },
  { 
    name: 'Orlando Antunes', 
    role: 'Psicólogo Clínico e da Saúde', 
    specialty: 'Psicólogo Clínico e da Saúde',
    image: 'https://www.dropbox.com/scl/fi/chmvzoujhw1ogh2tdi4b5/WhatsApp-Image-2026-04-15-at-21.39.02.jpeg?rlkey=tfdqr1qm11249yv479ev6brac&st=rucsxc0o&raw=1'
  },
  { 
    name: 'Ana Venâncio', 
    role: 'Psicóloga Clínica e Forense', 
    specialty: 'Psicologia Forense',
    image: 'https://www.dropbox.com/scl/fi/z26q440vi02rggavd01if/WhatsApp-Image-2026-04-28-at-16.47.48.jpeg?rlkey=tl8ohigqq0ugoar4xnwxsdyef&st=p32oicev&raw=1'
  },
];

const protocols = [
  { name: 'Medicare', image: 'https://www.dropbox.com/scl/fi/51619s4i2wsvyjjo2d1mg/Logo-Medicare.png?rlkey=g5t7l55fc099k9omsfdstq4ks&st=yhal5sbi&raw=1' },
  { name: 'IPL', image: 'https://www.dropbox.com/scl/fi/eopcjuybevvetrjvgg0or/LOGOIPL.png?rlkey=eon3wgej41vbvlywdna7v1xtj&st=9faandhz&raw=1' },
  { name: 'SAMP', image: 'https://www.dropbox.com/scl/fi/zmng2tr9rkxz2sbbfupqu/images.png?rlkey=bsfc70r6upre2pgb3woqutzf1&st=f47x5jux&raw=1' },
  { name: 'AMITEI', image: 'https://www.dropbox.com/scl/fi/z8kb4bvw8n8g3jzw9bx71/Amitei-Logo.png?rlkey=ls05zlp7y1rtrip94p170bbq4&st=uywfihlq&raw=1' },
  { name: 'Lar Emanuel', image: 'https://www.dropbox.com/scl/fi/3yz27gkd6ab2m6zwzqb5r/Lar-Emanuel-Logo.png?rlkey=wzg51pjta41axv4r9ur1pi5af&st=z1pw4g2e&raw=1' },
];

export default function Home() {
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-white">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
          {/* Very subtle glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-clinical-accent/20 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10 w-full text-center mt-20 md:mt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center justify-center space-x-4 mb-10">
              <span className="text-clinical-gold font-sans text-xs md:text-sm lg:text-base uppercase tracking-[0.6em] font-bold">
                Centro de Psicologia de Leiria
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl text-clinical-green mb-12 leading-[0.9] tracking-tighter font-serif">
              Rigor clínico. <br />
              <span className="italic font-light text-clinical-gold">Empatia</span> profunda.
            </h1>
            
            <p className="text-lg md:text-xl text-clinical-green/60 mb-16 font-light leading-relaxed max-w-2xl mx-auto">
              Mais do que uma clínica, somos um lugar de acolhimento. Combinamos a ciência da mente com a proximidade humana para oferecer um espaço onde se pode sentir compreendido, cuidado e em casa, em Leiria ou online em qualquer parte do mundo.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-12">
              <Link to="/marcacoes" className="btn-primary !py-5 !px-12 text-xs tracking-[0.2em]">
                Marcar Consulta
              </Link>
              <Link to="/sobre-nos" className="text-[10px] uppercase tracking-[0.4em] font-bold border-b border-clinical-gold pb-2 hover:text-clinical-gold transition-colors">
                Descobrir o Centro
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Minimal Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-clinical-gold to-transparent"></div>
        </motion.div>
      </section>

      {/* About Summary */}
      <section className="section-padding bg-clinical-light">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            <h2 className="text-4xl md:text-5xl mb-12">Um refúgio de confiança e acolhimento, sustentado pela ética, pela humanidade e pela excelência clínica.</h2>
            <p className="text-clinical-green/70 mb-4 leading-relaxed">
              O Centro de Psicologia de Leiria é uma clínica privada dedicada à saúde mental, pautada por uma abordagem ética, humana e cientificamente sustentada. Contamos com uma equipa de psicólogos com formação diversificada, garantindo um acompanhamento próximo e personalizado a cada cliente.
            </p>
            <p className="text-clinical-green/70 mb-8 leading-relaxed">
              Somos uma equipa jovem, com envolvimento ativo em causas sociais e orientada para um cuidado psicológico de qualidade.
            </p>
          </motion.div>
          <div className="relative group w-full flex justify-center">
            <div 
              onClick={() => setExpandedImage('https://www.dropbox.com/scl/fi/9ne9xrtbbzj5zott0niqs/Lounge.jpeg?rlkey=8jt7s5w1p6qh7sjtbzoz0sjbr&st=2fyebok9&raw=1')}
              className="rounded-3xl overflow-hidden aspect-[4/3] border border-clinical-accent shadow-xl w-full max-w-lg lg:max-w-none cursor-zoom-in hover:border-clinical-gold/50 transition-colors duration-300"
            >
              <img 
                src="https://www.dropbox.com/scl/fi/9ne9xrtbbzj5zott0niqs/Lounge.jpeg?rlkey=8jt7s5w1p6qh7sjtbzoz0sjbr&st=2fyebok9&raw=1" 
                alt="Interior da Clínica - Lounge" 
                className="w-full h-full object-cover grayscale brightness-110 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-out"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-clinical-green text-white p-10 hidden lg:block rounded-2xl shadow-xl pointer-events-none">
              <p className="font-serif text-xl italic">"Conhecimento científico com um coração humano."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-8 text-center md:text-left">
            <div className="max-w-xl w-full flex flex-col items-center md:items-start text-center md:text-left">
              <span className="text-clinical-green font-sans text-xs uppercase tracking-[0.4em] mb-4 block">O que fazemos</span>
              <h2 className="text-4xl md:text-5xl">Especialidades Clínicas</h2>
            </div>
            <Link to="/especialidades" className="text-sm uppercase tracking-widest font-semibold border-b border-clinical-green pb-1 hover:text-clinical-gold hover:border-clinical-gold transition-colors inline-block whitespace-nowrap">
              Ver todas as especialidades
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialties.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="card-clinical group flex flex-col items-center text-center md:items-start md:text-left"
              >
                <div className="mb-6 group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
                <h3 className="text-xl mb-4">{item.title}</h3>
                <p className="text-sm text-clinical-green/60 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interventions */}
      <section className="section-padding bg-clinical-green text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="text-clinical-gold font-sans text-xs uppercase tracking-[0.4em] -mb-4 block">Áreas de Atuação</span>
            <h2 className="text-6xl md:text-7xl mb-0 leading-none font-serif tracking-tighter">Intervenções Especializadas</h2>
            <p className="opacity-70 font-light text-lg md:text-xl leading-tight -mt-12">Abordagens terapêuticas adaptadas a cada fase da vida e contexto familiar.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {interventions.map((cat, idx) => (
              <div key={idx} className="space-y-4 text-center">
                <h3 className="text-2xl font-serif border-b border-white/10 pb-2 inline-block w-full leading-none">{cat.title}</h3>
                <ul className="space-y-2">
                  {cat.items.map((item, i) => (
                    <li key={i} className="flex items-center justify-center space-x-3 opacity-80 hover:opacity-100 transition-opacity leading-tight">
                      <CheckCircle2 size={16} className="text-clinical-gold" />
                      <span className="text-sm md:text-base font-light tracking-wide">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-8 text-center md:text-left">
            <div className="max-w-2xl w-full flex flex-col items-center md:items-start text-center md:text-left">
              <span className="text-clinical-green font-sans text-xs uppercase tracking-[0.4em] mb-4 block">Blog & Artigos</span>
              <h2 className="text-4xl md:text-5xl mb-6">Últimas Publicações</h2>
              <p className="text-clinical-green/60 font-light">Explore os nossos artigos mais recentes sobre saúde mental, psicologia e bem-estar.</p>
            </div>
            <Link to="/blog" className="text-[10px] uppercase tracking-[0.4em] font-bold border-b border-clinical-gold pb-2 hover:text-clinical-gold transition-colors inline-block whitespace-nowrap">
              Ver Todos os Artigos
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {posts.slice(0, 3).map((post, idx) => (
              <motion.article 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group w-full max-w-sm mx-auto md:max-w-none"
              >
                <Link to={`/blog/${post.id}`}>
                  <div className="aspect-video bg-clinical-light mb-6 overflow-hidden rounded-2xl border border-clinical-accent">
                    <img 
                      src={post.img} 
                      alt={post.title}
                      className="w-full h-full object-cover grayscale transition-all duration-1000 ease-out group-hover:grayscale-0 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="space-y-3 text-center md:text-left flex flex-col items-center md:items-start">
                    <div className="flex justify-between items-center text-[9px] uppercase tracking-widest font-bold w-full">
                      <span className="text-clinical-gold">{post.category}</span>
                      <span className="opacity-40">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-serif group-hover:text-clinical-gold transition-colors duration-300">{post.title}</h3>
                    <p className="text-clinical-green/60 leading-relaxed text-xs line-clamp-2">{post.excerpt}</p>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-clinical-green font-sans text-xs uppercase tracking-[0.4em] mb-4 block">Corpo Clínico</span>
            <h2 className="text-4xl md:text-5xl">Os Nossos Especialistas</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {teamPreview.map((member, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/5] bg-clinical-light mb-8 overflow-hidden rounded-2xl border border-clinical-accent">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover grayscale transition-all duration-1000 ease-out group-hover:grayscale-0 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl mb-1">{member.name}</h3>
                  <p className="text-clinical-gold text-xs uppercase tracking-widest mb-3">{member.role}</p>
                  <p className="text-sm text-clinical-green/60 italic">{member.specialty}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/equipa" className="btn-secondary">Conhecer Equipa Completa</Link>
          </div>
        </div>
      </section>

      {/* Facilities Preview */}
      <section className="section-padding bg-clinical-light">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-64 bg-white relative overflow-hidden group/card border border-clinical-accent">
                  <img 
                    src="https://www.dropbox.com/scl/fi/3a99vwmme8vcj7gcusjsm/WhatsApp-Immage-2026-05-17-at-11.01.49.jpeg?rlkey=ggwuxnobl3p7w2mzpmxrradet&st=yj2re8a8&raw=1" 
                    alt="Gabinete 1" 
                    className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-700 group-hover/card:grayscale-0 group-hover/card:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent z-10"></div>
                  <div className="absolute bottom-0 left-0 p-6 text-white z-20">
                    <Building2 className="text-clinical-gold mb-4" size={24} />
                    <h4 className="font-serif text-lg text-white font-medium">Gabinete 1</h4>
                    <p className="text-[10px] uppercase tracking-widest text-white/90 font-bold">Infantil & Parental</p>
                  </div>
                </div>
                <div className="h-48 bg-white relative overflow-hidden group/card border border-clinical-accent">
                  <img 
                    src="https://www.dropbox.com/scl/fi/cp7am39u8qf6aqbvqy3dl/Rece-o.jpeg?rlkey=boa0k7h1yj4ex66ns5t2ha0pw&st=d2msyz10&raw=1" 
                    alt="Receção" 
                    className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-700 group-hover/card:grayscale-0 group-hover/card:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent z-10"></div>
                  <div className="absolute bottom-0 left-0 p-6 text-white z-20">
                    <Building2 className="text-clinical-gold mb-4" size={24} />
                    <h4 className="font-serif text-lg text-white font-medium">Receção</h4>
                    <p className="text-[10px] uppercase tracking-widest text-white/90 font-bold">Lounge & Acolhimento</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="h-48 bg-white relative overflow-hidden group/card border border-clinical-accent">
                  <img 
                    src="https://www.dropbox.com/scl/fi/mokymmw6i3k9orcy92jsx/Gabinete-2.jpeg?rlkey=2ncb27diwdc4syrn8ccnfrtej&st=bdz5ihar&raw=1" 
                    alt="Gabinete 2" 
                    className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-700 group-hover/card:grayscale-0 group-hover/card:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent z-10"></div>
                  <div className="absolute bottom-0 left-0 p-6 text-white z-20">
                    <Building2 className="text-clinical-gold mb-4" size={24} />
                    <h4 className="font-serif text-lg text-white font-medium">Gabinete 2</h4>
                    <p className="text-[10px] uppercase tracking-widest text-white/90 font-bold">Terapia Familiar & Casal</p>
                  </div>
                </div>
                <div className="h-64 bg-white relative overflow-hidden group/card border border-clinical-accent">
                  <img 
                    src="https://www.dropbox.com/scl/fi/iod554f60ndujkxsvruku/Gabinete-3.jpeg?rlkey=biznsxym8nnkk4z5hf6lbezcr&st=1wl17wun&raw=1" 
                    alt="Gabinete 3" 
                    className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-700 group-hover/card:grayscale-0 group-hover/card:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent z-10"></div>
                  <div className="absolute bottom-0 left-0 p-6 text-white z-20">
                    <Building2 className="text-clinical-gold mb-4" size={24} />
                    <h4 className="font-serif text-lg text-white font-medium">Gabinete 3</h4>
                    <p className="text-[10px] uppercase tracking-widest text-white/90 font-bold">Psicologia & Hipnoterapia Clínica</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 text-center lg:text-left flex flex-col items-center lg:items-start w-full">
              <span className="text-clinical-green font-sans text-xs uppercase tracking-[0.4em] mb-4 block">O Nosso Espaço</span>
              <h2 className="text-4xl md:text-5xl mb-8">Instalações Modernas e Acolhedoras</h2>
              <p className="text-clinical-green/70 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Desenhámos a nossa clínica para ser um refúgio de tranquilidade. Cada gabinete foi pensado para garantir a máxima privacidade e conforto, permitindo que o processo terapêutico ocorra num ambiente sereno e profissional.
              </p>
              <Link to="/instalacoes" className="btn-primary">Visita Virtual</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Protocols */}
      <section className="py-12 bg-white border-y border-clinical-accent overflow-hidden relative">
        <div className="w-full relative marquee-container">
          {/* Subtle linear gradients on sides for high-end mask fade look */}
          <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          
          <div className="animate-marquee flex items-center gap-16 md:gap-32 px-4">
            {[...protocols, ...protocols, ...protocols].map((p, idx) => (
              <div key={`${p.name}-${idx}`} className="flex items-center justify-center h-16 md:h-24 w-40 md:w-56 shrink-0">
                <img 
                  src={p.image} 
                  alt={p.name} 
                  className="max-h-full max-w-full object-contain hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent && !parent.querySelector('.fallback-text')) {
                      const textSpan = document.createElement('span');
                      textSpan.className = 'fallback-text font-serif italic text-base md:text-lg text-clinical-green/80 border border-clinical-accent px-4 py-2 md:px-6 md:py-3 rounded-xl bg-white shadow-sm';
                      textSpan.innerText = p.name;
                      parent.appendChild(textSpan);
                    }
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pt-0 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-clinical-green z-0"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10 text-white px-6">
          <h2 className="text-5xl md:text-7xl mb-6 leading-[0.9] font-serif tracking-tighter -mt-16">Dê o primeiro passo para o seu cuidado psicológico.</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl opacity-70 mb-4 font-light leading-relaxed">
              Estamos aqui para o ouvir e apoiar em cada etapa do seu caminho. O nosso compromisso é oferecer um espaço seguro e profissional para o seu desenvolvimento pessoal.
            </p>
            <p className="text-base opacity-60 mb-10 font-light max-w-2xl mx-auto">
              A saúde mental é a base de uma vida plena. A nossa equipa utiliza métodos cientificamente validados e uma abordagem humana para o ajudar a superar desafios e encontrar o equilíbrio.
            </p>
          </div>
          <Link to="/marcacoes" className="btn-primary !bg-white !text-clinical-green hover:!bg-clinical-accent hover:!text-white !py-5 !px-12 text-sm shadow-xl transition-all duration-300">
            Marcar Consulta Agora
          </Link>
          <div className="mt-12 w-24 h-[1px] bg-white/10 mx-auto"></div>
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
