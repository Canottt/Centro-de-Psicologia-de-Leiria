import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Mail, MapPin, Phone } from 'lucide-react';

const PrivacyPolicy = () => {
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
            <ShieldCheck className="mx-auto text-clinical-gold mb-6" size={48} />
            <h1 className="text-4xl md:text-5xl mb-6">Política de Privacidade</h1>
            <p className="text-lg text-clinical-green/70 max-w-2xl mx-auto font-light">
              A transparência é fundamental na nossa relação. Saiba como tratamos e protegemos os seus dados pessoais.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto prose prose-clinical max-w-none">
          <div className="grid grid-cols-1 gap-12 text-clinical-green/80 font-light leading-relaxed">
            
            <section>
              <h2 className="text-2xl font-serif text-clinical-green mb-4">1. Introdução</h2>
              <p>
                O Centro de Psicologia de Leiria respeita a sua privacidade e está empenhado em proteger os dados pessoais de todos os utilizadores do nosso website. Esta Política de Privacidade explica como recolhemos, utilizamos e salvaguardamos a sua informação, em estrita conformidade com o Regulamento Geral de Proteção de Dados (RGPD) da União Europeia e a legislação portuguesa aplicável.
              </p>
            </section>

            <section className="bg-white border border-clinical-accent p-8 text-center sm:text-left flex flex-col items-center sm:items-start">
              <h2 className="text-2xl font-serif text-clinical-green mb-6">2. Responsável pelo Tratamento de Dados</h2>
              <div className="space-y-4 text-center sm:text-left flex flex-col items-center sm:items-start">
                <p className="flex flex-col sm:flex-row items-center gap-1 sm:gap-3">
                  <span className="font-medium text-clinical-green">Nome:</span> Centro de Psicologia de Leiria
                </p>
                <p className="flex flex-col sm:flex-row items-center gap-1 sm:gap-3">
                  <MapPin size={20} className="text-clinical-gold flex-shrink-0" />
                  <span className="text-center sm:text-left">Rua Prof. Abílio Alves de Brito nº19, 2410-201 Leiria</span>
                </p>
                <p className="flex flex-col sm:flex-row items-center gap-1 sm:gap-3">
                  <Mail size={20} className="text-clinical-gold flex-shrink-0" />
                  <span>info@centrodepsicologiadeleiria.pt</span>
                </p>
                <p className="flex flex-col sm:flex-row items-center gap-1 sm:gap-3">
                  <Phone size={20} className="text-clinical-gold flex-shrink-0" />
                  <span>910 012 936</span>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-clinical-green mb-4">3. Dados Recolhidos</h2>
              <p className="mb-4">
                Através do nosso website, podemos recolher as seguintes informações fornecidas voluntariamente pelo utilizador:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Nome completo</li>
                <li>Endereço de correio eletrónico (email)</li>
                <li>Número de contacto telefónico</li>
                <li>Qualquer outra informação fornecida através do formulário de mensagem</li>
              </ul>
              <p className="mt-4 italic">
                Nota: Recolhemos apenas os dados estritamente necessários para o fim a que se destinam.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-clinical-green mb-4">4. Finalidade do Tratamento</h2>
              <p>Os dados recolhidos destinam-se exclusivamente às seguintes finalidades:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Responder a pedidos de contacto e esclarecimento;</li>
                <li>Gestão e agendamento de consultas (presenciais ou online);</li>
                <li>Comunicação institucional e informativa relevante para o cliente.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-clinical-green mb-4">5. Base Legal</h2>
              <p>O tratamento dos seus dados pessoais é legitimado pelas seguintes bases legais:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Consentimento:</strong> Ao preencher os nossos formulários, dá o seu consentimento explícito para o tratamento dos dados fornecidos;</li>
                <li><strong>Execução de Serviços:</strong> Tratamento necessário para o fornecimento dos serviços de saúde psicológica solicitados.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-clinical-green mb-4">6. Partilha de Dados</h2>
              <p>
                O Centro de Psicologia de Leiria garante que os seus dados <strong>não são vendidos, alugados ou cedidos a terceiros</strong> para fins comerciais. Poderão ser partilhados, apenas quando estritamente necessário, com prestadores de serviços técnicos (ex: manutenção do website) sob rigorosos acordos de confidencialidade.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-clinical-green mb-4">7. Conservação dos Dados</h2>
              <p>
                Conservamos os seus dados pessoais apenas pelo período de tempo estritamente necessário para cumprir as finalidades descritas ou durante o tempo exigido por obrigações legais em vigor.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-clinical-green mb-4">8. Direitos do Utilizador</h2>
              <p className="mb-4">De acordo com o RGPD, o utilizador tem o direito de solicitar a qualquer momento:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: 'Acesso', desc: 'Saber quais os dados que temos sobre si.' },
                  { title: 'Retificação', desc: 'Corrigir dados inexatos ou desatualizados.' },
                  { title: 'Eliminação', desc: 'Solicitar a remoção total dos seus dados.' },
                  { title: 'Limitação', desc: 'Restringir temporariamente o tratamento.' },
                  { title: 'Portabilidade', desc: 'Receber os seus dados num formato comum.' },
                  { title: 'Oposição', desc: 'Opor-se ao tratamento para finalidades específicas.' },
                ].map((direito) => (
                  <div key={direito.title} className="p-4 bg-gray-50 border-l-4 border-clinical-gold">
                    <span className="font-medium block">{direito.title}</span>
                    <span className="text-sm opacity-80">{direito.desc}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-clinical-green mb-4">9. Segurança</h2>
              <p>
                Implementamos medidas de segurança técnicas e organizativas adequadas (incluindo certificados SSL e proteção contra acessos não autorizados) para proteger os seus dados pessoais contra perda, uso indevido ou alteração.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-clinical-green mb-4">10. Contacto para Questões de Privacidade</h2>
              <p>
                Para exercer os seus direitos ou colocar qualquer questão sobre esta política, por favor contacte-nos através do email: <a href="mailto:info@centrodepsicologiadeleiria.pt" className="text-clinical-gold underline">info@centrodepsicologiadeleiria.pt</a>.
              </p>
            </section>

            <section className="text-sm border-t pt-8 opacity-60">
              <h2 className="text-lg font-serif mb-2">11. Alterações</h2>
              <p>
                Reservamos o direito de atualizar esta política a qualquer momento. Quaisquer alterações serão publicadas nesta página com a respetiva data de atualização.
              </p>
              <p className="mt-4 italic">Última atualização: Abril de 2024</p>
            </section>

          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
