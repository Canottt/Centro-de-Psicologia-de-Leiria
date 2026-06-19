import { motion } from 'motion/react';
import { ShieldCheck, Handshake, Users, Building } from 'lucide-react';

const protocols = [
  { 
    name: 'Medicare', 
    type: 'Seguradora de Saúde', 
    desc: 'Acesso a consultas com condições especiais para beneficiários Medicare.',
    image: 'https://www.dropbox.com/scl/fi/51619s4i2wsvyjjo2d1mg/Logo-Medicare.png?rlkey=g5t7l55fc099k9omsfdstq4ks&st=yhal5sbi&raw=1'
  },
  { 
    name: 'IPL - Instituto Politécnico de Leiria', 
    type: 'Protocolo Académico', 
    desc: 'Condições exclusivas para estudantes, docentes e funcionários do IPL.',
    image: 'https://www.dropbox.com/scl/fi/eopcjuybevvetrjvgg0or/LOGOIPL.png?rlkey=eon3wgej41vbvlywdna7v1xtj&st=9faandhz&raw=1'
  },
  { 
    name: 'SAMP - Sociedade Artística Musical dos Pousos', 
    type: 'Protocolo Cultural & Social', 
    desc: 'Condições especiais destinadas a colaboradores, formandos e associados da SAMP.',
    image: 'https://www.dropbox.com/scl/fi/zmng2tr9rkxz2sbbfupqu/images.png?rlkey=bsfc70r6upre2pgb3woqutzf1&st=f47x5jux&raw=1'
  },
  { 
    name: 'AMITEI', 
    type: 'Associação Solidária', 
    desc: 'Apoio especializado no âmbito da parceria com a AMITEI.',
    image: 'https://www.dropbox.com/scl/fi/z8kb4bvw8n8g3jzw9bx71/Amitei-Logo.png?rlkey=ls05zlp7y1rtrip94p170bbq4&st=uywfihlq&raw=1'
  },
  { 
    name: 'Lar Emanuel', 
    type: 'Instituição Social', 
    desc: 'Acompanhamento psicológico e consultoria clínica para o Lar Emanuel.',
    image: 'https://www.dropbox.com/scl/fi/3yz27gkd6ab2m6zwzqb5r/Lar-Emanuel-Logo.png?rlkey=wzg51pjta41axv4r9ur1pi5af&st=z1pw4g2e&raw=1'
  },
];

export default function Protocols() {
  return (
    <div className="pt-32">
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16 text-center md:text-left mx-auto md:mx-0 flex flex-col items-center md:items-start">
            <span className="text-clinical-green font-sans text-xs uppercase tracking-[0.4em] mb-4 block">Parcerias</span>
            <h1 className="text-5xl md:text-7xl mb-8">Protocolos e Acordos.</h1>
            <p className="text-xl text-clinical-green/70 leading-relaxed font-light">
              Estabelecemos parcerias estratégicas com diversas entidades para facilitar o acesso a cuidados de saúde mental de excelência.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {protocols.map((p, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-10 border border-clinical-accent hover:border-clinical-accent transition-colors duration-500 group flex flex-col items-center text-center"
              >
                <div className="h-40 w-full flex items-center justify-center mb-8 transition-all duration-500">
                  <img 
                    src={p.image} 
                    alt={p.name} 
                    className="max-h-full max-w-[250px] object-contain group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent && !parent.querySelector('.fallback-text')) {
                        const textSpan = document.createElement('span');
                        textSpan.className = 'fallback-text font-serif italic text-2xl text-clinical-green/85 border border-clinical-accent px-8 py-4 bg-clinical-light rounded-2xl shadow-sm text-center';
                        textSpan.innerText = p.name;
                        parent.appendChild(textSpan);
                      }
                    }}
                  />
                </div>
                <div className="w-full text-center md:text-left flex flex-col items-center md:items-start">
                  <div className="flex justify-between items-center mb-4 w-full">
                    <span className="text-[10px] uppercase tracking-widest font-bold opacity-40">{p.type}</span>
                    <Handshake className="text-clinical-green opacity-40 shrink-0" size={20} />
                  </div>
                  <h3 className="text-3xl mb-4 font-serif text-center md:text-left">{p.name}</h3>
                  <p className="text-clinical-green/70 leading-relaxed text-sm text-center md:text-left">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 p-8 sm:p-12 bg-clinical-light border-l-4 border-clinical-accent text-center md:text-left flex flex-col items-center md:items-start rounded-r-3xl">
            <h4 className="text-xl mb-4 font-serif">Deseja estabelecer um protocolo?</h4>
            <p className="text-clinical-green/70 mb-8 max-w-2xl text-center md:text-left">
              Estamos abertos a novas parcerias com empresas, associações e instituições que partilhem o nosso compromisso com a saúde mental.
            </p>
            <button className="btn-primary">Contactar Direção</button>
          </div>
        </div>
      </section>
    </div>
  );
}
