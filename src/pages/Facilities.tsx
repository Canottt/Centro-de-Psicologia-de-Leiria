import { motion, AnimatePresence } from 'motion/react';
import { Building2, Coffee, Shield, Sparkles, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const spaces = [
  {
    title: 'Receção e Lounge',
    desc: 'Um espaço de acolhimento desenhado para transmitir calma e serenidade desde o primeiro momento.',
    features: ['Ambiente climatizado', 'Música ambiente suave', 'Privacidade garantida'],
    images: [
      'https://www.dropbox.com/scl/fi/cp7am39u8qf6aqbvqy3dl/Rece-o.jpeg?rlkey=boa0k7h1yj4ex66ns5t2ha0pw&st=d2msyz10&raw=1',
      'https://www.dropbox.com/scl/fi/9ne9xrtbbzj5zott0niqs/Lounge.jpeg?rlkey=8jt7s5w1p6qh7sjtbzoz0sjbr&st=2fyebok9&raw=1'
    ]
  },
  {
    title: 'Gabinete 1: Infantil e Parental',
    desc: 'Espaço lúdico e adaptado para crianças, permitindo que a terapia ocorra de forma natural e segura.',
    features: ['Material didático especializado', 'Área de jogo terapêutico', 'Conforto para pais'],
    images: [
      'https://www.dropbox.com/scl/fi/3a99vwmme8vcj7gcusjsm/WhatsApp-Immage-2026-05-17-at-11.01.49.jpeg?rlkey=ggwuxnobl3p7w2mzpmxrradet&st=yj2re8a8&raw=1',
      'https://www.dropbox.com/scl/fi/h0cwyts12ovdsd3ta4524/WhatsApp-Image-2026-05-27-at-14.41.27.jpeg?rlkey=o9lkr3i0eo6ba1m41b2chqpll&st=0v2xmdwy&raw=1',
      'https://www.dropbox.com/scl/fi/ejb4hlbt9y3gyllooj3bf/WhatsApp-Image-2026-05-27-at-14.37.39.jpeg?rlkey=0oiwclk3g5faioktwzolme1jb&st=eaijzcdx&raw=1'
    ]
  },
  {
    title: 'Gabinete 2: Terapia Familiar e Casal',
    desc: 'Ambiente sóbrio e sofisticado, ideal para sessões de casal ou familiares que exigem foco, introspeção e serenidade.',
    features: ['Isolamento acústico premium', 'Iluminação regulável', 'Design minimalista'],
    images: ['https://www.dropbox.com/scl/fi/mokymmw6i3k9orcy92jsx/Gabinete-2.jpeg?rlkey=2ncb27diwdc4syrn8ccnfrtej&st=bdz5ihar&raw=1']
  },
  {
    title: 'Gabinete 3: Psicologia e Hipnoterapia Clínica',
    desc: 'Espaço versátil preparado para técnicas de relaxamento profundo e intervenção clínica especializada.',
    features: ['Poltronas ergonómicas', 'Ambiente imersivo', 'Tecnologia de apoio'],
    images: ['https://www.dropbox.com/scl/fi/iod554f60ndujkxsvruku/Gabinete-3.jpeg?rlkey=biznsxym8nnkk4z5hf6lbezcr&st=1wl17wun&raw=1']
  }
];

function ImageSlider({ images, title, onImageClick }: { images: string[], title: string, onImageClick: (src: string) => void }) {
  const [current, setCurrent] = useState(0);
  const [isLoaded, setIsLoaded] = useState<boolean[]>(new Array(images.length).fill(false));

  // Preload all images to ensure fast transitions
  useEffect(() => {
    images.forEach((src, index) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        handleImageLoad(index);
      };
    });
  }, [images]);

  const handleImageLoad = (index: number) => {
    setIsLoaded(prev => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };

  if (images.length <= 1) {
    return (
      <div 
        onClick={() => onImageClick(images[0])}
        className="aspect-video bg-clinical-light overflow-hidden rounded-3xl border border-clinical-accent shadow-xl relative cursor-zoom-in hover:border-clinical-gold/50 transition-colors duration-300"
      >
        <div className={`absolute inset-0 bg-clinical-light animate-pulse transition-opacity duration-500 ${isLoaded[0] ? 'opacity-0' : 'opacity-100'}`} />
        <img 
          src={images[0]} 
          alt={title}
          onLoad={() => handleImageLoad(0)}
          className={`w-full h-full object-cover grayscale transition-all duration-1000 ease-out hover:grayscale-0 hover:scale-105 ${isLoaded[0] ? 'opacity-100' : 'opacity-0'}`}
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  const prev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div 
      onClick={() => onImageClick(images[current])}
      className="aspect-video bg-clinical-light overflow-hidden rounded-3xl border border-clinical-accent shadow-xl relative group/slider cursor-zoom-in hover:border-clinical-gold/50 transition-colors duration-300"
    >
      {/* Skeleton Loader */}
      <div className={`absolute inset-0 bg-clinical-light flex items-center justify-center transition-opacity duration-500 ${isLoaded[current] ? 'opacity-0' : 'opacity-100'}`}>
        <div className="w-8 h-8 border-2 border-clinical-gold/30 border-t-clinical-gold rounded-full animate-spin"></div>
      </div>

      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={images[current]}
          alt={`${title} - image ${current + 1}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded[current] ? 1 : 0 }}
          exit={{ opacity: 0 }}
          onLoad={() => handleImageLoad(current)}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 w-full h-full object-cover grayscale group-hover/slider:grayscale-0 transition-all duration-700"
          referrerPolicy="no-referrer"
        />
      </AnimatePresence>

      <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300">
        <button 
          type="button"
          onClick={(e) => { e.stopPropagation(); prev(); }}
          className="w-10 h-10 rounded-full bg-black/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-black/40 transition-colors z-10"
        >
          <ChevronLeft size={20} />
        </button>
        <button 
          type="button"
          onClick={(e) => { e.stopPropagation(); next(); }}
          className="w-10 h-10 rounded-full bg-black/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-black/40 transition-colors z-10"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
            className={`w-1.5 h-1.5 rounded-full transition-all ${current === i ? 'w-6 bg-clinical-gold' : 'bg-white/50 hover:bg-white'}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Facilities() {
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  return (
    <div className="pt-32">
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16 text-center md:text-left mx-auto md:mx-0 flex flex-col items-center md:items-start">
            <span className="text-clinical-gold font-sans text-xs uppercase tracking-[0.4em] mb-4 block">Instalações</span>
            <h1 className="text-5xl md:text-7xl mb-8">Espaços desenhados para o seu conforto.</h1>
            <p className="text-xl text-clinical-green/70 leading-relaxed font-light">
              A nossa clínica em Leiria foi projetada sob os mais altos padrões de design clínico moderno, priorizando a privacidade, a luz natural e a serenidade.
            </p>
          </div>

          <div className="space-y-32">
            {spaces.map((space, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-center group ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={idx % 2 !== 0 ? 'lg:order-2' : ''}>
                  <ImageSlider images={space.images} title={space.title} onImageClick={setExpandedImage} />
                </div>
                <div className={`space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <h2 className="text-4xl">{space.title}</h2>
                  <p className="text-clinical-green/70 leading-relaxed">{space.desc}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                    {space.features.map((f, i) => (
                      <li key={i} className="flex items-center justify-center lg:justify-start space-x-3 text-sm opacity-70">
                        <Sparkles size={14} className="text-clinical-gold" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-32 p-12 md:p-24 bg-clinical-green text-white text-center">
            <Building2 size={48} className="mx-auto mb-8 text-clinical-gold" />
            <h2 className="text-3xl md:text-4xl mb-6">Uma clínica premium em constante evolução.</h2>
            <p className="max-w-2xl mx-auto opacity-70 font-light leading-relaxed">
              Investimos continuamente na melhoria dos nossos espaços para garantir que o Centro de Psicologia de Leiria se mantém na vanguarda do conforto e da excelência clínica.
            </p>
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
            <p className="text-white/50 text-xs font-mono mt-4 tracking-widest uppercase">
              Clique em qualquer lugar para fechar
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
