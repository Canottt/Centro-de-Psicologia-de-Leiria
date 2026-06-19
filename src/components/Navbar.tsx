import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: 'Início', path: '/' },
  { name: 'Sobre Nós', path: '/sobre-nos' },
  { name: 'Equipa', path: '/equipa' },
  { name: 'Especialidades', path: '/especialidades' },
  { name: 'Intervenções', path: '/intervencoes' },
  { name: 'Clínica Online', path: '/clinica-online' },
  { name: 'Instalações', path: '/instalacoes' },
  { name: 'Protocolos', path: '/protocolos' },
  { name: 'Blog', path: '/blog' },
  { name: 'FAQ', path: '/faq' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav 
      className="absolute w-full z-50 transition-all duration-700 bg-transparent"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 flex justify-between items-center h-24 transition-opacity duration-500">
        <div className="flex items-center h-full">
          <Link to="/" className="relative z-50 h-full flex items-center group">
            <img 
              src="https://www.dropbox.com/scl/fi/q1ti8sn5xpun2y6mxyzq0/Sem-Fundo-Photoroom.png?rlkey=km6m0blsjczhjc6abcv50qit4&st=cfl4bpmd&raw=1" 
              alt="Logo Centro de Psicologia de Leiria"
              className="h-10 sm:h-14 md:h-18 lg:h-22 xl:h-28 w-auto object-contain absolute left-0 top-1/2 -translate-y-[30%]"
              referrerPolicy="no-referrer"
            />
            {/* Invisible placeholder to keep space for the logo */}
            <div className="w-16 sm:w-24 md:w-32 lg:w-40 xl:w-48"></div>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center lg:space-x-4 xl:space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[10px] xl:text-[11px] uppercase tracking-widest font-medium transition-colors hover:text-clinical-accent whitespace-nowrap ${
                location.pathname === link.path ? 'text-clinical-green border-b border-clinical-green' : 'text-clinical-green/70'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/marcacoes" className="btn-primary !py-2.5 !px-5 xl:!px-8 whitespace-nowrap text-[11px]">
            Marcar Consulta
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-clinical-green"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-t border-clinical-accent lg:hidden"
          >
            <div className="flex flex-col p-8 space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm uppercase tracking-widest font-medium ${
                    location.pathname === link.path ? 'text-clinical-green' : 'text-clinical-green/70'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/marcacoes" className="btn-primary text-center">
                Marcar Consulta
              </Link>
              <div className="flex items-center justify-center space-x-2 pt-4 text-clinical-green opacity-70">
                <Phone size={16} />
                <span className="text-sm">244 137 365 | 910 012 936</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
