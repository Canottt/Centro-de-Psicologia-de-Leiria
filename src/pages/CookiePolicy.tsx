import React from 'react';
import { motion } from 'motion/react';
import { Cookie, Settings, Info } from 'lucide-react';

const CookiePolicy = () => {
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
            <Cookie className="mx-auto text-clinical-gold mb-6" size={48} />
            <h1 className="text-4xl md:text-5xl mb-6">Política de Cookies</h1>
            <p className="text-lg text-clinical-green/70 max-w-2xl mx-auto font-light">
              Utilizamos cookies para lhe proporcionar uma experiência de navegação mais eficiente e personalizada.
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
                <Info size={24} className="text-clinical-gold" />
                1. O que são cookies?
              </h2>
              <p>
                Cookies são pequenos ficheiros de texto que são guardados no seu dispositivo (computador, smartphone ou tablet) quando visita o nosso website. Estes ficheiros permitem que o site recorde informações sobre a sua visita, como as suas preferências ou idioma, facilitando a próxima visita e tornando o site mais útil.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-clinical-green mb-6">2. Tipos de cookies usados</h2>
              <div className="space-y-6">
                <div className="bg-white p-6 border border-clinical-accent">
                  <h3 className="text-lg font-medium text-clinical-green mb-2">Cookies Essenciais</h3>
                  <p className="text-sm opacity-80 leading-relaxed font-light font-sans">
                    São obrigatórios para o correto funcionamento do website. Sem estes, não é possível navegar corretamente ou aceder a áreas seguras do site.
                  </p>
                </div>
                <div className="bg-white p-6 border border-clinical-accent">
                  <h3 className="text-lg font-medium text-clinical-green mb-2">Cookies de Desempenho</h3>
                  <p className="text-sm opacity-80 leading-relaxed font-light font-sans">
                    Recolhem informações sobre como os utilizadores usam o site (ex: quais as páginas mais visitadas), ajudando-nos a identificar problemas e melhorar a navegação.
                  </p>
                </div>
                <div className="bg-white p-6 border border-clinical-accent">
                  <h3 className="text-lg font-medium text-clinical-green mb-2">Cookies Analíticos</h3>
                  <p className="text-sm opacity-80 leading-relaxed font-light font-sans">
                    Utilizados para fins estatísticos, permitindo analisar o tráfego e o comportamento do utilizador de forma anónima e agregada.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-clinical-green mb-4">3. Finalidade</h2>
              <p>Usamos estas tecnologias com os seguintes objetivos principais:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Melhorar a sua experiência geral de navegação;</li>
                <li>Analisar o tráfego do site para otimizar os nossos serviços digitais;</li>
                <li>Adaptar o conteúdo às suas preferências;</li>
                <li>Garantir a segurança e integridade do nosso website.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-clinical-green mb-4">4. Consentimento</h2>
              <p>
                Ao navegar no nosso website, o utilizador tem a opção de aceitar, recusar ou configurar as suas preferências de cookies através do banner exibido na primeira visita. Os cookies essenciais serão sempre instalados por serem necessários ao serviço solicitado.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-clinical-green mb-4 flex items-center gap-3">
                <Settings size={24} className="text-clinical-gold" />
                5. Gestão de Cookies
              </h2>
              <p className="mb-4">
                Pode optar por desativar ou eliminar os cookies em qualquer altura através das definições do seu navegador (browser). No entanto, note que a desativação de cookies pode afetar a funcionalidade de partes do nosso website.
              </p>
              <p>
                Para saber como gerir cookies nos navegadores mais populares, consulte as páginas de ajuda oficiais:
              </p>
              <div className="flex flex-wrap gap-4 mt-6 text-sm text-clinical-gold underline">
                <span>Google Chrome</span>
                <span>Mozilla Firefox</span>
                <span>Safari</span>
                <span>Microsoft Edge</span>
              </div>
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

export default CookiePolicy;
