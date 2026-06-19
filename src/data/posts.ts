export interface Post {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  img: string;
  author: string;
}

export const posts: Post[] = [
  {
    id: 'neuroplasticidade-e-psicoterapia-tcc',
    category: 'Neuropsicologia & Ciência',
    title: 'Neuroplasticidade e Psicoterapia: Como a Terapia Cognitiva Altera o Cérebro',
    excerpt: 'Uma perspetiva científica sobre como as intervenções psicoterapêuticas promovem mudanças estruturais e funcionais reais no sistema nervoso central.',
    content: `
      <p>Durante décadas, a ciência acreditou que o cérebro adulto era uma estrutura estática e imutável. Hoje, sabemos que a <strong>neuroplasticidade</strong> — a capacidade do cérebro de se reorganizar através da criação de novas conexões neuronais — permanece ativa ao longo de toda a vida. A grande revelação da neuropsicologia moderna é que a psicoterapia, em particular a Terapia Cognitivo-Comportamental (TCC), é um dos agentes mais potentes de plasticidade cerebral.</p>
      
      <h3>O Cérebro em Terapia: Mudanças Funcionais Amparadas pela Ciência</h3>
      <p>Estudos recentes de imagiologia cerebral (como fMRI e PET scans) demonstram que doentes com Perturbação de Ansiedade Geral (PAG) ou Depressão que realizam intervenções psicoterapêuticas consistentes apresentam alterações mensuráveis no funcionamento cerebral. Observa-se uma redução significativa na hiperatividade da <strong>amígdala</strong> (o centro de resposta ao medo e à ameaça) e um aumento da densidade cinzenta no <strong>córtex pré-frontal</strong>, responsável pela regulação emocional e tomada de decisões.</p>
      
      <img src="https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=1200" alt="Estudo científico do cérebro e neurociência" />
      
      <h3>A Reestruturação Cognitiva como Treino Sináptico</h3>
      <p>Quando trabalhamos em terapia para identificar e desafiar pensamentos automáticos disfuncionais (comportamento central da TCC), estamos, literalmente, a enfraquecer caminhos sinápticos associados à catastrofização e à negatividade. Ao mesmo tempo, ao treinar novas estratégias de resposta, o cérebro estabelece novos circuitos de calma e resiliência emocional. É o processo conhecido na neurociência como <em>"Neurons that fire together, wire together"</em> (neurónios que disparam juntos, conectam-se).</p>
      
      <h3>Implicações Clínicas no Centro de Psicologia de Leiria</h3>
      <p>No nosso centro, integramos este conhecimento rigoroso nas nossas sessões. A compreensão científica da mudança cerebral oferece aos pacientes uma perspetiva empoderadora: o sofrimento psicológico não é um "estado permanente do cérebro", mas sim um padrão de ativação que pode ser transformado positivamente através do acompanhamento terapêutico sistemático.</p>
    `,
    date: '18 Jun, 2026',
    img: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=800',
    author: 'Dr. Orlando Antunes'
  },
  {
    id: 'tempo-de-ecra-regulacao-emocional-adolescentes',
    category: 'Pedopsiquiatria & Desenvolvimento',
    title: 'O Impacto do Tempo de Ecrã na Regulação Emocional de Adolescentes',
    excerpt: 'Análise clínica de estudos recentes que relacionam a sobressaturação digital com o aumento de ansiedade, depressão e insónia na juventude.',
    content: `
      <p>A ubiquidade dos dispositivos digitais e das redes sociais transformou radicalmente a paisagem social da adolescência. Embora a conectividade traga oportunidades, a investigação clínica recente foca-se cada vez mais num alarmante reverso da medalha: o impacto profundo da estimulação digital constante na arquitetura emocional dos jovens.</p>
      
      <h3>A Dopamina Digital e o "Sequestro" do Circuito de Recompensa</h3>
      <p>Os algoritmos das plataformas sociais modernas são desenhados para capturar a atenção de forma intermitente, gerando picos imprevisíveis de <strong>dopamina</strong> — o neurotransmissor da antecipação e recompensa. No cérebro de um adolescente, que ainda se encontra com o córtex pré-frontal em desenvolvimento, esta enxurrada de estímulos rápidos pode sobrecarregar os canais de regulação emocional, criando uma dependência do imediatismo que reduz a tolerância à frustração e ao tédio no mundo real.</p>
      
      <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200" alt="Adolescente observando ecrã digital em ambiente escuro" />
      
      <h3>Perturbação do Sono: O Inimigo Silencioso da Saúde Mental</h3>
      <p>Estudos empíricos rigorosos apontam a luz azul emitida pelos ecrãs, quando utilizados na hora anterior ao deitar, como a principal responsável pela inibição da secreção de <strong>melatonina</strong> (a hormona reguladora do sono). A privação crónica de sono em adolescentes altera diretamente a homeostasia emocional, aumentando substancialmente a vulnerabilidade à irritabilidade, instabilidade de humor e episódios de ansiedade severa no dia seguinte.</p>
      
      <h3>Recomendações Clínicas para as Famílias</h3>
      <ul>
        <li><strong>Zonas Livres de Tecnologia:</strong> Definir os quartos de dormir como espaços sem telemóvel ou tablet à noite.</li>
        <li><strong>Transição Sem Ecrãs:</strong> Desligar todos os dispositivos pelo menos 60 minutos antes de adormecer.</li>
        <li><strong>Promoção de Atividades Analógicas:</strong> Estimular hobbies que envolvam interação social física, atividade motora e regulação da respiração.</li>
      </ul>
      <p>No Centro de Psicologia de Leiria, acompanhamos ativamente jovens e as suas famílias no estabelecimento de regras saudáveis de utilização tecnológica, resgatando o tempo livre necessário para um desenvolvimento neurobiológico harmonioso.</p>
    `,
    date: '12 Jun, 2026',
    img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800',
    author: 'Dr.ª Carla Rodrigues Alves'
  },
  {
    id: 'hipnoterapia-clinica-modulacao-dor-cronica',
    category: 'Hipnoterapia & Neurofisiologia',
    title: 'Hipnoterapia Clínica e Dor Crónica: Mecanismos de Modulação da Dor',
    excerpt: 'Como o transe hipnótico induzido em consultório atua nos centros corticais de processamento sensorial e emocional da dor crónica.',
    content: `
      <p>A dor crónica é uma experiência multidimensional que envolve não apenas impulsos nociceptivos (físicos), mas também uma forte componente afetiva e cognitiva. Nas neurociências cognitivas, a <strong>Hipnoterapia Clínica</strong> tem ganho uma aceitação científica robusta como uma intervenção não farmacológica extremamente eficaz na modulação da dor.</p>
      
      <h3>O que acontece no Cérebro durante o Transe Hipnótico?</h3>
      <p>Longe dos mitos populares, o transe hipnótico clínico é um estado focado de atenção altamente concentrada e de relaxamento profundo. Através de exames de ressonância magnética funcional, cientistas descobriram que, sob hipnose, a comunicação entre o <strong>córtex somatossensorial</strong> (que deteta a localização e intensidade física da dor) e o <strong>córtex cingulado anterior</strong> (responsável pelo sofrimento emocional associado à dor) é temporariamente atenuada.</p>
      
      <img src="https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80&w=1200" alt="Imagem serena e relaxante de pedras zen em equilíbrio" />
      
      <h3>Desacoplar a Dor do Sofrimento Psicológico</h3>
      <p>A técnica permite ao terapeuta guiar o paciente no sentido de reinterpretar e alterar a perceção dos sinais de dor enviados pelo corpo. Ao sugerir alterações na temperatura do membro afetado, ou relaxamento profundo dos tecidos circundantes, conseguimos diminuir a ansiedade e a hipervigilância em relação aos sintomas, as quais habitualmente exacerbam a própria intensidade da dor sentida.</p>
      
      <h3>Resultados e Longevidade do Tratamento</h3>
      <p>A grande vantagem da hipnoterapia no Centro de Psicologia de Leiria é a capacitação do paciente: ensinamos técnicas personalizadas de autohipnose para que o paciente consiga de forma autónoma aceder a estados de alívio e controlo da dor no seu quotidiano, melhorando consideravelmente o seu bem-estar diário e reduzindo o consumo excessivo de analgésicos.</p>
    `,
    date: '02 Jun, 2026',
    img: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80&w=800',
    author: 'Dr.ª Ana Venâncio'
  }
];
