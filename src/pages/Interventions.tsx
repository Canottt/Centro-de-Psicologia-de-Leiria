import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const interventionsData = [
  {
    category: 'Adultos',
    items: [
      { title: 'Ansiedade e Pânico', desc: 'Tratamento focado na gestão de sintomas físicos e cognitivos da ansiedade.' },
      { title: 'Depressão', desc: 'Apoio especializado para quadros depressivos e perturbações do humor.' },
      { title: 'Luto', desc: 'Acompanhamento no processo de perda e reconstrução emocional.' },
      { title: 'Burnout', desc: 'Intervenção em esgotamento profissional e gestão de stress.' },
      { title: 'Trauma', desc: 'Processamento de experiências traumáticas através de abordagens validadas.' },
      { title: 'Adições', desc: 'Tratamento de dependências químicas e comportamentais.' },
      { title: 'PHDA no Adulto', desc: 'Estratégias de gestão e organização para adultos com défice de atenção.' },
      { title: 'Perturbações Alimentares', desc: 'Abordagem clínica especializada para anorexia, bulimia e compulsão.' },
      { title: 'Sono', desc: 'Higiene do sono e tratamento de insónias.' },
      { title: 'OCD', desc: 'Intervenção em perturbação obsessivo-compulsiva.' },
      { title: 'Fobias', desc: 'Terapia de exposição e dessensibilização para medos específicos.' },
      { title: 'Personalidade', desc: 'Acompanhamento de perturbações da personalidade.' },
      { title: 'Gravidez e Pós-parto', desc: 'Saúde mental perinatal e apoio à parentalidade precoce.' },
      { title: 'Demências', desc: 'Apoio a doentes e cuidadores em quadros demenciais.' },
    ]
  },
  {
    category: 'Crianças',
    items: [
      { title: 'PHDA', desc: 'Avaliação e intervenção em défice de atenção e hiperatividade.' },
      { title: 'Aprendizagem', desc: 'Dificuldades escolares, dislexia e outras NEE.' },
      { title: 'Comportamento', desc: 'Gestão de oposição, agressividade e impulsividade.' },
      { title: 'Enurese / Encoprese', desc: 'Tratamento de dificuldades no controlo de esfíncteres.' },
      { title: 'Ansiedade Infantil', desc: 'Medos, ansiedade de separação e fobias escolares.' },
      { title: 'Depressão Infantil', desc: 'Identificação e tratamento de sinais depressivos na infância.' },
      { title: 'Sono na Infância', desc: 'Dificuldades em adormecer e terrores noturnos.' },
    ]
  },
  {
    category: 'Casal e Família',
    items: [
      { title: 'Conflitos Conjugais', desc: 'Mediação e melhoria da comunicação no casal.' },
      { title: 'Ciúmes e Infidelidade', desc: 'Reconstrução da confiança e gestão emocional.' },
      { title: 'Infertilidade', desc: 'Apoio psicológico em processos de PMA.' },
      { title: 'Gravidez', desc: 'Adaptação à nova dinâmica familiar.' },
      { title: 'Divórcio', desc: 'Mediação e apoio aos filhos em processos de separação.' },
      { title: 'Disfunções Sexuais', desc: 'Abordagem clínica de dificuldades na esfera sexual.' },
    ]
  }
];

export default function Interventions() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <div className="pt-32">
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16 text-center md:text-left mx-auto md:mx-0 flex flex-col items-center md:items-start">
            <span className="text-clinical-green font-sans text-xs uppercase tracking-[0.4em] mb-4 block">Áreas de Intervenção</span>
            <h1 className="text-5xl md:text-7xl mb-8">Abordagens estruturadas para cada contexto.</h1>
            <p className="text-xl text-clinical-green/70 leading-relaxed font-light">
              As nossas intervenções são desenhadas à medida, respeitando a individualidade e as necessidades específicas de cada fase da vida.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-4 mb-12 border-b border-clinical-accent pb-4 justify-center md:justify-start">
            {interventionsData.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => { setActiveCategory(idx); setOpenItem(null); }}
                className={`text-xs uppercase tracking-[0.2em] font-bold py-2 px-6 transition-all duration-300 ${
                  activeCategory === idx ? 'text-clinical-gold border-b-2 border-clinical-gold' : 'text-clinical-green/40 hover:text-clinical-green'
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>

          {/* Accordion List */}
          <div className="space-y-4">
            {interventionsData[activeCategory].items.map((item, idx) => (
              <div key={idx} className="border border-clinical-accent overflow-hidden">
                <button
                  onClick={() => setOpenItem(openItem === item.title ? null : item.title)}
                  className="w-full flex justify-between items-center p-6 hover:bg-clinical-light transition-colors text-center md:text-left gap-4"
                >
                  <span className="text-xl font-serif flex-grow text-center md:text-left">{item.title}</span>
                  <ChevronDown 
                    size={20} 
                    className={`transition-transform duration-300 shrink-0 ${openItem === item.title ? 'rotate-180' : ''}`} 
                  />
                </button>
                <AnimatePresence>
                  {openItem === item.title && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-clinical-green/70 leading-relaxed text-sm text-center md:text-left">
                        {item.desc}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
