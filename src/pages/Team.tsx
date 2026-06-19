import { motion } from 'motion/react';
import { Mail, Linkedin } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  specialty: string;
  image: string;
  bio: string;
  education: string[];
  quote?: string;
  objectPosition?: string;
  languages?: string[];
}

const team: TeamMember[] = [
  {
    name: 'Carla Rodrigues Alves',
    role: 'Fundadora do CPL e Psicóloga Clínica',
    specialty: 'Psicóloga Clínica (cédula nº 30131)',
    image: 'https://www.dropbox.com/scl/fi/b5ouhjextvbm3p0s3kipf/WhatsApp-Image-2026-04-15-at-21.53.23.jpeg?rlkey=81n2dsp5cbv7y94rsvebg3r3l&st=4l3la6qn&raw=1',
    bio: 'O meu interesse pela saúde mental começou cedo. Antes de ser psicóloga, fui paciente e tinha 16 anos quando iniciei o meu próprio processo terapêutico.\n\nFoi nesse percurso, profundamente transformador, que nasceu a minha paixão pela Psicologia. Aos 19 anos, decidi seguir este caminho.\n\nTive o privilégio de ser escutada, validada e também desafiada. E foi exatamente essa experiência que despertou em mim um propósito: tornar esse espaço acessível a mais pessoas.\n\nHoje, enquanto psicóloga, quero oferecer aquilo que um dia também me foi oferecido: um lugar seguro para crescer, compreender e transformar e, por isso, trabalho com crianças, adolescentes e adultos, de modo a tornar a sua mente um lugar mais tranquilo e agradável para viver. Sou licenciada e mestre pela Faculdade de Psicologia e Ciências da Educação da Universidade de Coimbra.',
    education: [
      'Licenciada e Mestre pela Faculdade de Psicologia e Ciências da Educação da Universidade de Coimbra',
      'Mestre em Neuropsicologia Clínica',
      'Especialização em Avaliação e Reabilitação Neuropsicológica',
      'Experiência como coordenadora de unidade de internamento na área dos comportamentos aditivos',
      'Practitioner em Hipnose Clínica',
      'Formação em Luto em Contexto de Crise',
      'Formação em Prematuridade',
      'Formação em Perturbação do Uso de Álcool'
    ],
    quote: 'Porque não há saúde sem saúde mental.',
    languages: ['Português', 'Inglês']
  },
  {
    name: 'Orlando Antunes',
    role: 'Psicólogo Clínico e da Saúde',
    specialty: 'Psicólogo Clínico e da Saúde',
    image: 'https://www.dropbox.com/scl/fi/chmvzoujhw1ogh2tdi4b5/WhatsApp-Image-2026-04-15-at-21.39.02.jpeg?rlkey=tfdqr1qm11249yv479ev6brac&st=rucsxc0o&raw=1',
    bio: 'O meu interesse pela saúde mental começou há mais de 15 anos, quando percebi que compreender o sofrimento humano era o primeiro passo para poder cuidar, com empatia, presença e intenção.\n\nDesde então, tenho-me dedicado ao estudo da psicologia clínica e à prática terapêutica com adultos. Ao longo do tempo, fui percebendo que aquilo que mais me motiva é criar um espaço onde cada pessoa possa ser vista sem julgamento, e acompanhada com respeito e profundidade.',
    education: [
      'Membro efetivo da Ordem dos Psicólogos Portugueses (cédula n.º 22188)',
      'Membro da Sociedade Portuguesa de Psicoterapias Construtivistas',
      'Formação em Sistemas Familiares Internos (nível 2)',
      'Formação em EMDR (nível 2)',
      'Curso Avançado em Terapia Focada nos Esquemas'
    ],
    languages: ['Português', 'Inglês']
  },
  {
    name: 'Ana Venâncio',
    role: 'Psicóloga Clínica',
    specialty: 'Psicóloga Clínica',
    image: 'https://www.dropbox.com/scl/fi/z26q440vi02rggavd01if/WhatsApp-Image-2026-04-28-at-16.47.48.jpeg?rlkey=tl8ohigqq0ugoar4xnwxsdyef&st=p32oicev&raw=1',
    bio: 'Escolhi a área da saúde mental pelo interesse no bem-estar físico e mental do ser humano. Esta área permite-me através de uma relação de confiança, empatia e compaixão ajudar as pessoas a lidarem melhor com os seus pensamentos e sentimentos, especialmente em momentos mais difíceis. Acredito que ouvir, compreender e apoiar alguém pode fazer diferença na vida de cada pessoa.',
    education: [
      'Membro efetivo da Ordem dos Psicólogos Portugueses (cédula n.º 29902)',
      'Licenciatura em Ciências Psicológicas, pela Faculdade de Psicologia e Ciências da Educação da Universidade de Coimbra',
      'Mestrado em Psicologia Clínica e Forense, pela Faculdade da Maia',
      'Estágio Profissional na Ação Social da Câmara Municipal de Alcobaça',
      'Experiência como Psicóloga coordenadora numa clínica de internacional para comportamentos aditivos e jogo patológico',
      'Especialização Avançada em Psicopatologia da Criança e do Adolescente, pelo Instituto CRIAP',
      'Especialização Avançada em Terapias Cognitivo-Comportamentais com Adultos, pelo Instituto CRIAP'
    ],
    languages: ['Português']
  },
  {
    name: 'Maria João Andrade',
    role: 'Psicóloga Clínica, Terapeuta de Casal e Familiar',
    specialty: 'Psicóloga Clínica, Terapeuta de Casal e Familiar',
    image: 'https://www.dropbox.com/scl/fi/eyuw9ei2ccdwczwd92n2r/WhatsApp-Image-2026-05-22-at-11.21.58.jpeg?rlkey=vv6lupyv4m08ckflz6popszam&st=t57rch06&raw=1',
    bio: 'Sempre senti que a área da saúde mental não era apenas um foco de interesse, mas um propósito: acredito profundamente que cada pessoa merece ser ouvida e apoiada, independentemente da natureza ou gravidade do que enfrenta. A conjugação entre o que vivi, a minha motivação em ajudar outras pessoas, e o que gostava de mudar no mundo, trouxe-me a este caminho no ramo da saúde mental, um caminho que quero continuar a percorrer com empatia, compromisso e integridade.',
    education: [
      'Membro efetivo da Ordem dos Psicólogos Portugueses (cédula n.º 020983)',
      'Psicóloga Clínica formada pelo ISPA-IU',
      'Diversas especializações nas áreas da terapia de casal, sexologia clínica e intervenção com vítimas de trauma',
      'Mais de 10 anos de experiência profissional',
      'Dinamização de grupos e projetos comunitários, incluindo promoção de saúde mental em famílias atípicas',
      'Colaboração com equipas de alto rendimento, nomeadamente no contexto dos Esports, onde trabalhou competências emocionais, desempenho e resiliência',
      'Experiência na área da psicologia organizacional, tendo assumido funções estratégicas em gestão de talento, cultura organizacional e desenvolvimento de equipas',
      'Formadora e oradora'
    ],
    languages: ['Português', 'Inglês']
  },
  {
    name: 'Alejandra Pérez',
    role: 'Psicóloga Clínica',
    specialty: 'Psicóloga Clínica',
    image: 'https://www.dropbox.com/scl/fi/csozu9bpnggxeisbdcocf/WhatsApp-Image-2026-05-30-at-17.17.09.jpeg?rlkey=0gqml0vmz4cokmh8cqulsw68i&st=mvgyxrff&raw=1',
    bio: 'Acredito que ninguém pode conduzir a vida por outra pessoa. Na terapia, o volante está nas suas mãos. Eu sigo ao seu lado, orientando, apoiando e ajudando-o(a) a ganhar confiança para enfrentar curvas, ultrapassar obstáculos e escolher a direção que faz mais sentido para si.\n\nSou pragmática, próxima e apaixonada pela saúde mental. O meu objetivo é criar um lugar seguro onde possa falar sem receios, compreender-se melhor e sentir-se acompanhado(a) no processo de mudança e crescimento.',
    education: [
      'Membro efetivo da Ordem dos Psicólogos Portugueses (cédula n.º 31606)',
      'Psicóloga Clínica licenciada pela Universidade de Salamanca e mestre em Psicologia Clínica pelo Curso de Estudios Universitarios Superior Europeo (CUSE)',
      'Especialidade em Luto e Comportamentos Aditivos'
    ],
    objectPosition: 'center 85%',
    languages: ['Português', 'Espanhol']
  }
];

export default function Team() {
  return (
    <div className="pt-32">
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16 text-center md:text-left mx-auto md:mx-0 flex flex-col items-center md:items-start">
            <span className="text-clinical-green font-sans text-xs uppercase tracking-[0.4em] mb-4 block">A Nossa Equipa</span>
            <h1 className="text-5xl md:text-7xl mb-8">Especialistas focados no seu bem-estar.</h1>
            <p className="text-xl text-clinical-green/70 leading-relaxed font-light">
              A nossa equipa é composta por psicólogos com formação diversificada e pautada pelo rigor clínico, ética e humanidade.
            </p>
          </div>

          <div className="space-y-32">
            {team.map((member, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
              >
                <div className="lg:col-span-5 w-full flex justify-center">
                  <div className="aspect-[4/5] bg-clinical-light overflow-hidden rounded-3xl border border-clinical-accent shadow-lg group w-full max-w-sm lg:max-w-none">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover grayscale transition-all duration-1000 ease-out group-hover:grayscale-0 group-hover:scale-110"
                      style={{ objectPosition: member.objectPosition || 'center' }}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                <div className="lg:col-span-7 lg:pl-12 space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start">
                  <div>
                    <span className="text-clinical-gold text-xs uppercase tracking-widest font-semibold mb-2 block">{member.role}</span>
                    <h2 className="text-4xl md:text-5xl mb-4">{member.name}</h2>
                    <p className="text-lg italic text-clinical-green/60">{member.specialty}</p>
                    {member.languages && (
                      <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mt-4">
                        <span className="text-[10px] uppercase tracking-widest font-bold text-clinical-gold">Consultas em:</span>
                        {member.languages.map((lang, lIdx) => (
                          <span 
                            key={lIdx} 
                            className="inline-flex items-center px-3 py-1 bg-clinical-light border border-clinical-accent rounded-full text-[10px] font-sans uppercase tracking-widest font-semibold text-clinical-green/80"
                          >
                            {lang}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-6 text-clinical-green/80 leading-relaxed text-center lg:text-left w-full">
                    {member.bio.split('\n\n').map((paragraph, pIdx) => (
                      <p key={pIdx}>{paragraph}</p>
                    ))}
                    {member.quote && (
                      <p className="text-xl font-serif italic text-clinical-green border-y lg:border-y-0 lg:border-l-4 border-clinical-gold py-4 lg:py-2 px-4 lg:px-6 my-8">
                        "{member.quote}"
                      </p>
                    )}
                    <div className="p-6 bg-clinical-light border-y-2 lg:border-y-0 lg:border-l-2 border-clinical-gold rounded-2xl lg:rounded-l-none lg:rounded-r-2xl text-left w-full">
                      <h4 className="font-sans text-[10px] uppercase tracking-widest font-bold mb-4 text-center lg:text-left">Formação e Qualificações</h4>
                      <ul className="space-y-2 text-sm">
                        {Array.isArray(member.education) ? member.education.map((item, iIdx) => (
                          <li key={iIdx} className="flex items-start gap-2">
                            <span className="text-clinical-gold mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        )) : <li>{member.education}</li>}
                      </ul>
                    </div>
                  </div>

                  <div className="flex justify-center lg:justify-start space-x-6 pt-4 w-full">
                    <button className="flex items-center space-x-2 text-xs uppercase tracking-widest font-bold hover:text-clinical-gold transition-colors">
                      <Mail size={16} /> <span>Contacto</span>
                    </button>
                    <button className="flex items-center space-x-2 text-xs uppercase tracking-widest font-bold hover:text-clinical-gold transition-colors">
                      <Linkedin size={16} /> <span>LinkedIn</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
