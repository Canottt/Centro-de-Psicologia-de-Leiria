import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Brain, Users, Heart, Shield, Activity, Sparkles, Baby, Home, Search, ClipboardCheck, Map, X } from 'lucide-react';

const specialtiesList = [
  { 
    title: 'Psicologia Adultos', 
    icon: <Brain size={24} />, 
    desc: 'Intervenção focada em perturbações de ansiedade, depressão, stress e desenvolvimento pessoal.',
    longDesc: 'A Psicologia Clínica para adultos foca-se na compreensão e tratamento de dificuldades emocionais e comportamentais que surgem na idade adulta. Através de uma aliança terapêutica sólida, trabalhamos questões como a depressão, ansiedade, gestão de stress, luto, dificuldades de relacionamento e crises de identidade. O objetivo é promover o autoconhecimento e desenvolver estratégias de coping saudáveis para enfrentar os desafios da vida.'
  },
  { 
    title: 'Psicologia Infantil e Juvenil', 
    icon: <Baby size={24} />, 
    desc: 'Acompanhamento especializado para as necessidades emocionais e comportamentais de crianças e adolescentes.',
    longDesc: 'Esta especialidade foca-se no desenvolvimento saudável da criança e do adolescente. Intervimos em áreas como dificuldades de aprendizagem, problemas de comportamento, ansiedade infantil, medos, fobias e dificuldades de socialização. Utilizamos métodos lúdicos e adaptados à idade, envolvendo sempre a família no processo para garantir um suporte contínuo e eficaz.'
  },
  { 
    title: 'Terapia EMDR', 
    icon: <Sparkles size={24} />, 
    desc: 'Abordagem psicoterapêutica eficaz para o tratamento de traumas e experiências adversas.',
    longDesc: 'O EMDR (Eye Movement Desensitization and Reprocessing) é uma abordagem psicoterapêutica inovadora e cientificamente validada, especialmente eficaz no tratamento de traumas, stress pós-traumático, fobias e ansiedade. Através da estimulação bilateral (visual, auditiva ou tátil), ajudamos o cérebro a processar memórias traumáticas que ficaram "bloqueadas", reduzindo a carga emocional negativa associada a essas experiências.'
  },
  { 
    title: 'Hipnose Clínica', 
    icon: <Activity size={24} />, 
    desc: 'Ferramenta terapêutica para aceder a recursos internos e promover mudanças comportamentais.',
    longDesc: 'A Hipnose Clínica é uma ferramenta terapêutica segura e eficaz que utiliza um estado de relaxamento profundo e foco concentrado para aceder ao subconsciente. É utilizada para tratar uma variedade de questões, como controlo da dor, cessação tabágica, gestão de ansiedade, fobias e melhoria da performance. Ao contrário dos mitos, o paciente mantém sempre o controlo e a consciência durante todo o processo.'
  },
  { 
    title: 'Neuropsicologia', 
    icon: <Activity size={24} />, 
    desc: 'Avaliação e reabilitação de funções cognitivas relacionadas com o sistema nervoso.',
    longDesc: 'A Neuropsicologia estuda a relação entre o cérebro e o comportamento. Esta especialidade é fundamental para diagnosticar e tratar alterações cognitivas resultantes de lesões cerebrais, doenças neurodegenerativas (como Alzheimer) ou perturbações do desenvolvimento. O foco está na avaliação detalhada de funções como memória, atenção, linguagem e funções executivas, seguida de programas de reabilitação personalizados.'
  },
  { 
    title: 'Terapia de Casal', 
    icon: <Heart size={24} />, 
    desc: 'Espaço para mediação de conflitos, melhoria da comunicação e fortalecimento da relação.',
    longDesc: 'A Terapia de Casal oferece um espaço neutro e seguro para que os parceiros possam explorar as suas dificuldades e fortalecer a relação. Trabalhamos a comunicação, a gestão de conflitos, a intimidade, a infidelidade e a adaptação a novas fases da vida (como a parentalidade). O objetivo é ajudar o casal a encontrar novas formas de se relacionar ou a tomar decisões conscientes sobre o futuro da relação.'
  },
  { 
    title: 'Terapia Familiar', 
    icon: <Home size={24} />, 
    desc: 'Intervenção sistémica focada na dinâmica e harmonia do núcleo familiar.',
    longDesc: 'A Terapia Familiar foca-se nas interações e dinâmicas entre os membros da família. Entendemos que o bem-estar individual está profundamente ligado ao sistema familiar. Intervimos em situações de conflito, crises familiares, luto ou quando um membro da família apresenta dificuldades que afetam todo o grupo. O foco é melhorar a comunicação e fortalecer os laços afetivos.'
  },
  { 
    title: 'Avaliação Psicológica', 
    icon: <ClipboardCheck size={24} />, 
    desc: 'Processo rigoroso de diagnóstico e compreensão do funcionamento psicológico.',
    longDesc: 'A Avaliação Psicológica é um processo estruturado que utiliza testes psicométricos, entrevistas e observação clínica para compreender o funcionamento intelectual, emocional e da personalidade de um indivíduo. É essencial para o diagnóstico diferencial, orientação terapêutica e para responder a solicitações de entidades externas (escolas, tribunais, etc.).'
  },
  { 
    title: 'Avaliação Neuropsicológica', 
    icon: <Search size={24} />, 
    desc: 'Exame detalhado das capacidades cognitivas como memória, atenção e linguagem.',
    longDesc: 'Este exame é uma avaliação profunda das funções cerebrais superiores. Através de testes específicos, quantificamos o desempenho em áreas como a memória, atenção, raciocínio, linguagem e planeamento. É crucial para identificar precocemente declínios cognitivos, avaliar o impacto de lesões cerebrais e monitorizar a eficácia de tratamentos neurológicos.'
  },
  { 
    title: 'Orientação Vocacional', 
    icon: <Map size={24} />, 
    desc: 'Apoio na tomada de decisões escolares e profissionais baseada no perfil individual.',
    longDesc: 'A Orientação Vocacional ajuda jovens e adultos a tomar decisões conscientes sobre o seu percurso escolar e profissional. Através da avaliação de interesses, aptidões e valores, ajudamos a identificar as áreas que melhor se ajustam ao perfil de cada um, facilitando a escolha de cursos ou a reorientação de carreira.'
  },
  { 
    title: 'Aconselhamento Parental', 
    icon: <Users size={24} />, 
    desc: 'Orientação para pais sobre estratégias educativas e gestão de comportamentos.',
    longDesc: 'O Aconselhamento Parental visa apoiar os pais nos desafios da educação dos filhos. Fornecemos estratégias práticas para lidar com comportamentos difíceis, promover a autonomia, melhorar a comunicação e fortalecer o vínculo afetivo. É um espaço de reflexão sobre o papel parental e de desenvolvimento de competências educativas positivas.'
  }
];

export default function Specialties() {
  const [selectedSpecialty, setSelectedSpecialty] = useState<typeof specialtiesList[0] | null>(null);

  return (
    <div className="pt-32">
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16 text-center md:text-left mx-auto md:mx-0 flex flex-col items-center md:items-start">
            <span className="text-clinical-green font-sans text-xs uppercase tracking-[0.4em] mb-4 block">Serviços Clínicos</span>
            <h1 className="text-5xl md:text-7xl mb-8">Especialidades de Excelência.</h1>
            <p className="text-xl text-clinical-green/70 leading-relaxed font-light">
              Oferecemos uma gama de serviços especializados em psicologia e saúde mental, garantindo uma resposta ética, humana e personalizada para cada necessidade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialtiesList.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="card-clinical group h-full flex flex-col items-center text-center md:items-start md:text-left"
              >
                <div className="mb-6 text-clinical-gold group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
                <h3 className="text-2xl mb-4 font-serif">{item.title}</h3>
                <p className="text-sm text-clinical-green/60 leading-relaxed flex-grow">{item.desc}</p>
                <div className="mt-8 pt-6 border-t border-clinical-accent w-full text-center md:text-left">
                  <button 
                    onClick={() => setSelectedSpecialty(item)}
                    className="text-[10px] uppercase tracking-[0.2em] font-bold hover:text-clinical-gold transition-colors"
                  >
                    Saber Mais
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Modal */}
      <AnimatePresence>
        {selectedSpecialty && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSpecialty(null)}
              className="absolute inset-0 bg-clinical-green/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white w-full max-w-2xl p-8 md:p-12 shadow-2xl border border-clinical-accent text-center sm:text-left flex flex-col items-center sm:items-start"
            >
              <button 
                onClick={() => setSelectedSpecialty(null)}
                className="absolute top-6 right-6 text-clinical-green/40 hover:text-clinical-green transition-colors"
              >
                <X size={24} />
              </button>
              
              <div className="text-clinical-gold mb-8">{selectedSpecialty.icon}</div>
              <h2 className="text-4xl md:text-5xl mb-6 font-serif">{selectedSpecialty.title}</h2>
              <div className="h-[1px] w-12 bg-clinical-gold mb-8"></div>
              <p className="text-clinical-green/70 leading-relaxed text-base md:text-lg font-light text-center sm:text-left">
                {selectedSpecialty.longDesc}
              </p>
              
              <div className="mt-12 flex flex-col sm:flex-row gap-6 w-full justify-center sm:justify-start">
                <button 
                  onClick={() => setSelectedSpecialty(null)}
                  className="btn-primary !py-4"
                >
                  Marcar Consulta
                </button>
                <button 
                  onClick={() => setSelectedSpecialty(null)}
                  className="btn-secondary !py-4"
                >
                  Voltar
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
