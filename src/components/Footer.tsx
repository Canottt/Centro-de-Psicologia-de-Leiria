import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-clinical-green text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 text-center md:text-left">
        <div className="space-y-6 flex flex-col items-center md:items-start">
          <Link to="/" className="inline-block mb-3">
            <img 
              src="https://www.dropbox.com/scl/fi/q1ti8sn5xpun2y6mxyzq0/Sem-Fundo-Photoroom.png?rlkey=km6m0blsjczhjc6abcv50qit4&st=cfl4bpmd&raw=1" 
              alt="Logo Centro de Psicologia de Leiria"
              className="h-24 w-auto brightness-0 invert"
              referrerPolicy="no-referrer"
            />
          </Link>
          <p className="text-sm text-clinical-accent leading-relaxed opacity-80 max-w-xs md:max-w-none">
            Excelência clínica, ética e humanidade ao serviço da sua saúde mental e psicológica.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-clinical-gold transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-clinical-gold transition-colors"><Facebook size={20} /></a>
            <a href="#" className="hover:text-clinical-gold transition-colors"><Linkedin size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-8 text-clinical-gold">Links Rápidos</h4>
          <ul className="space-y-4 text-sm opacity-80">
            <li><Link to="/sobre-nos" className="hover:text-clinical-gold transition-colors">Sobre o Centro</Link></li>
            <li><Link to="/equipa" className="hover:text-clinical-gold transition-colors">A Nossa Equipa</Link></li>
            <li><Link to="/especialidades" className="hover:text-clinical-gold transition-colors">Especialidades</Link></li>
            <li><Link to="/intervencoes" className="hover:text-clinical-gold transition-colors">Intervenções</Link></li>
            <li><Link to="/blog" className="hover:text-clinical-gold transition-colors">Blog & Artigos</Link></li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h4 className="font-serif text-lg mb-8 text-clinical-gold">Contactos</h4>
          <ul className="space-y-4 text-sm opacity-80 w-full">
            <li className="flex flex-col md:flex-row items-center md:items-start md:space-x-3 gap-2 md:gap-0">
              <MapPin size={18} className="text-clinical-gold shrink-0 md:mt-0.5" />
              <span className="max-w-xs md:max-w-none">Rua Prof. Abílio Alves de Brito n19, 2410-201 Leiria</span>
            </li>
            <li className="flex flex-col md:flex-row items-center md:items-start md:space-x-3 gap-2 md:gap-0">
              <Phone size={18} className="text-clinical-gold shrink-0" />
              <span>244 137 365 | 910 012 936</span>
            </li>
            <li className="flex flex-col md:flex-row items-center md:items-start md:space-x-3 gap-2 md:gap-0">
              <Mail size={18} className="text-clinical-gold shrink-0" />
              <span className="break-all">info@centrodepsicologiadeleiria.pt</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h4 className="font-serif text-lg mb-8 text-clinical-gold w-full text-center md:text-left">Horário</h4>
          <ul className="space-y-4 text-sm opacity-80 w-full">
            <li className="flex flex-col md:flex-row justify-between items-center md:items-start gap-1 md:gap-0">
              <span className="font-semibold md:font-normal">Segunda - Sexta</span>
              <span>09:00 - 20:00</span>
            </li>
            <li className="flex flex-col md:flex-row justify-between items-center md:items-start gap-1 md:gap-0">
              <span className="font-semibold md:font-normal">Sábado</span>
              <span>09:00 - 20:00</span>
            </li>
            <li className="flex flex-col md:flex-row justify-between items-center md:items-start gap-1 md:gap-0">
              <span className="font-semibold md:font-normal">Domingo</span>
              <span>Encerrado</span>
            </li>
          </ul>
          <Link to="/marcacoes" className="btn-primary !bg-white !text-clinical-green hover:!bg-clinical-accent hover:!text-white mt-8 w-full text-center inline-block shadow-lg max-w-xs md:max-w-none">
            Marcar Consulta
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 text-[10px] uppercase tracking-widest text-white/50 text-center md:text-left">
        <span>© 2026 Centro de Psicologia de Leiria. Todos os direitos reservados.</span>
        <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2">
          <Link to="/politica-privacidade" className="hover:text-white transition-colors">Privacidade</Link>
          <Link to="/termos-condicoes" className="hover:text-white transition-colors">Termos</Link>
          <Link to="/politica-cookies" className="hover:text-white transition-colors">Cookies</Link>
          <a 
            href="https://www.livroreclamacoes.pt/inicio/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white transition-colors"
          >
            Livro de Reclamações
          </a>
        </div>
      </div>
    </footer>
  );
}
