import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'Como marcar uma consulta?',
    a: 'Pode marcar a sua consulta através do nosso formulário online na página de Marcações, por telefone (910 012 936) ou por email (info@centrodepsicologiadeleiria.pt). Entraremos em contacto o mais brevemente possível para confirmar o horário.'
  },
  {
    q: 'As consultas são presenciais ou online?',
    a: 'Oferecemos ambas as modalidades. Dispomos de instalações modernas em Leiria para consultas presenciais e utilizamos plataformas seguras e encriptadas para consultas online, permitindo o acompanhamento de pacientes em qualquer localização.'
  },
  {
    q: 'Quanto tempo dura uma sessão?',
    a: 'Uma sessão individual de psicologia tem, habitualmente, a duração de 50 minutos. As sessões de terapia de casal ou familiar podem ter uma duração superior, geralmente entre 60 a 90 minutos, dependendo do contexto clínico.'
  },
  {
    q: 'Aceitam seguros de saúde?',
    a: 'Temos protocolos estabelecidos com diversas entidades, como a Medicare. Recomendamos que consulte a nossa página de Protocolos ou nos contacte diretamente para verificar as condições específicas do seu seguro ou subsistema de saúde.'
  },
  {
    q: 'Como funciona a primeira consulta?',
    a: 'A primeira consulta é um momento de acolhimento e avaliação inicial. O objetivo é compreender o motivo do pedido de ajuda, recolher informação relevante e definir, em conjunto com o paciente, os objetivos e o plano de intervenção mais adequado.'
  },
  {
    q: 'Qual é o valor das consultas?',
    a: 'Os valores variam consoante a especialidade e a modalidade da consulta. Para informações detalhadas sobre honorários, por favor contacte-nos diretamente.'
  }
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="pt-32">
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16 text-center md:text-left mx-auto md:mx-0 flex flex-col items-center md:items-start">
            <span className="text-clinical-green font-sans text-xs uppercase tracking-[0.4em] mb-4 block">Apoio ao Paciente</span>
            <h1 className="text-5xl md:text-7xl mb-8">Perguntas Frequentes.</h1>
            <p className="text-xl text-clinical-green/70 leading-relaxed font-light">
              Esclareça as suas dúvidas sobre o funcionamento das nossas consultas e services.
            </p>
          </div>

          <div className="max-w-4xl space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-clinical-accent">
                <button
                  onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                  className="w-full flex justify-between items-center py-8 hover:opacity-80 transition-opacity group gap-4"
                >
                  <span className={`text-xl md:text-2xl font-serif transition-colors duration-300 flex-grow text-center md:text-left ${openIdx === idx ? 'text-clinical-accent' : 'text-clinical-green group-hover:text-clinical-accent'}`}>
                    {faq.q}
                  </span>
                  <div className={`transition-transform duration-500 shrink-0 ${openIdx === idx ? 'rotate-180' : ''}`}>
                    {openIdx === idx ? <Minus size={20} className="text-clinical-accent" /> : <Plus size={20} />}
                  </div>
                </button>
                <AnimatePresence>
                  {openIdx === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      <div className="pb-8 text-clinical-green/70 leading-relaxed max-w-3xl text-center md:text-left">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="mt-32 p-12 bg-clinical-light text-center">
            <h4 className="text-xl mb-4 font-serif italic">Não encontrou a resposta que procurava?</h4>
            <p className="text-clinical-green/70 mb-8">Estamos disponíveis para responder a qualquer outra questão.</p>
            <button className="btn-secondary">Enviar Mensagem Direta</button>
          </div>
        </div>
      </section>
    </div>
  );
}
