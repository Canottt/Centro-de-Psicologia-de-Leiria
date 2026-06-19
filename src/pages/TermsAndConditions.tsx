import React from 'react';
import { motion } from 'motion/react';
import { FileText, Scale, Landmark } from 'lucide-react';

const TermsAndConditions = () => {
  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="bg-clinical-light py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <FileText className="mx-auto text-clinical-gold mb-6" size={48} />
            <h1 className="text-4xl md:text-5xl mb-6">Termos e Condições</h1>
            <p className="text-lg text-clinical-green/70 max-w-2xl mx-auto font-light">
              As regras e orientações para uma utilização segura e informada do nosso website.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 gap-12 text-clinical-green/80 font-light leading-relaxed">
            
            <section>
              <h2 className="text-2xl font-serif text-clinical-green mb-4 flex items-center gap-3">
                <Scale size={24} className="text-clinical-gold" />
                1. Introdução
              </h2>
              <p>
                Os presentes Termos e Condições regulam o acesso e a utilização do website do Centro de Psicologia de Leiria. Ao navegar neste site, o utilizador aceita integralmente as condições aqui descritas. Caso não concorde com algum dos termos, deve cessar imediatamente o uso das nossas plataformas digitais.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-clinical-green mb-4">2. Utilização do Site</h2>
              <p>
                Este website destina-se exclusivamente a fins informativos sobre os serviços de saúde mental prestados pela clínica. O utilizador compromete-se a:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Não utilizar o site de forma fraudulenta ou para fins ilícitos;</li>
                <li>Não tentar comprometer a segurança da infraestrutura tecnológica da clínica;</li>
                <li>Fazer um uso responsável e diligente da informação aqui disponibilizada.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-clinical-green mb-4">3. Propriedade Intelectual</h2>
              <p>
                Todo o conteúdo deste website (textos, logótipos, imagens, design gráfico e software) é propriedade do Centro de Psicologia de Leiria ou de terceiros sob licença. É proibida a reprodução, cópia ou distribuição de qualquer elemento sem autorização prévia por escrito.
              </p>
            </section>

            <section className="bg-clinical-green text-white p-8">
              <h2 className="text-2xl font-serif text-white mb-4">4. Limitação de Responsabilidade</h2>
              <p className="mb-4">
                A informação disponibilizada neste website é de natureza genérica e informativa.
              </p>
              <div className="p-4 border border-white/20 bg-white/5 font-medium italic">
                Aviso Legal: O conteúdo deste site não substitui, em circunstância alguma, o aconselhamento médico, diagnóstico ou intervenção direta de um profissional de saúde qualificado.
              </div>
              <p className="mt-4">
                A clínica não se responsabiliza por quaisquer danos resultantes do uso incorreto da informação presente no site ou da interrupção temporária do serviço.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-clinical-green mb-4">5. Ligações Externas</h2>
              <p>
                O nosso website pode conter ligações (links) para sites de terceiros que consideramos relevantes. Não exercemos qualquer controlo sobre as políticas de privacidade ou conteúdos desses sites externos, pelo que a clínica não assume qualquer responsabilidade sobre os mesmos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-clinical-green mb-4">6. Alterações</h2>
              <p>
                O Centro de Psicologia de Leiria reserva-se o direito de alterar, suspender ou descontinuar qualquer parte do website, bem como atualizar estes Termos e Condições, sem aviso prévio. Recomendamos a consulta regular desta página.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-clinical-green mb-4 flex items-center gap-3">
                <Landmark size={24} className="text-clinical-gold" />
                7. Lei Aplicável e Foro
              </h2>
              <p>
                Os presentes Termos e Condições são regidos e interpretados de acordo com a <strong>Legislação Portuguesa</strong> em vigor. Para a resolução de qualquer litígio emergente da utilização deste website, as partes elegem o foro da Comarca de Leiria, com renúncia expressa a qualquer outro.
              </p>
            </section>

            <section className="text-sm border-t pt-8 opacity-60">
              <p className="italic">Última atualização: Abril de 2024</p>
            </section>

          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditions;
