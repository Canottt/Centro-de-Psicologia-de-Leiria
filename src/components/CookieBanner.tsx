import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cookie, X, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookie-consent', 'all');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'essentials-only');
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookie-consent', 'custom');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:max-w-md z-50"
        >
          <div className="bg-white border border-clinical-accent shadow-2xl p-6 md:p-8">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="bg-clinical-light p-2 text-clinical-gold">
                  <Cookie size={24} />
                </div>
                <h3 className="font-serif text-xl text-clinical-green">Privacidade & Cookies</h3>
              </div>
              <button 
                onClick={() => setIsVisible(false)}
                className="text-clinical-green/40 hover:text-clinical-green p-1"
              >
                <X size={20} />
              </button>
            </div>

            {!showSettings ? (
              <>
                <p className="text-sm text-clinical-green/70 mb-6 leading-relaxed font-light">
                  Este site utiliza cookies para melhorar a sua experiência, analisar o tráfego e personalizar conteúdos. Pode aceitar todos os cookies ou gerir as suas preferências.
                </p>
                <div className="flex flex-col gap-3">
                  <button
                    onClick={handleAcceptAll}
                    className="w-full bg-clinical-green text-white py-3 text-xs uppercase tracking-widest font-medium hover:bg-clinical-accent transition-colors"
                  >
                    Aceitar Todos
                  </button>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={handleReject}
                      className="border border-clinical-accent py-3 text-xs uppercase tracking-widest text-clinical-green hover:bg-clinical-light transition-colors"
                    >
                      Rejeitar
                    </button>
                    <button
                      onClick={() => setShowSettings(true)}
                      className="border border-clinical-accent py-3 text-xs uppercase tracking-widest text-clinical-green hover:bg-clinical-light transition-colors"
                    >
                      Configurar
                    </button>
                  </div>
                  <Link 
                    to="/politica-cookies" 
                    className="text-[10px] text-center text-clinical-gold underline uppercase tracking-widest"
                  >
                    Saiba mais na nossa política
                  </Link>
                </div>
              </>
            ) : (
              <div className="space-y-4">
                <p className="text-xs text-clinical-green/70 mb-4 font-light">
                  Selecione os tipos de cookies que autoriza:
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 bg-clinical-light border border-clinical-accent/30 opacity-60">
                    <div>
                      <span className="text-xs font-medium block">Essenciais</span>
                      <span className="text-[10px]">Obrigatórios para o site funcionar.</span>
                    </div>
                    <div className="w-8 h-4 bg-clinical-green rounded-full flex items-center justify-end px-1">
                      <div className="w-2.5 h-2.5 bg-white rounded-full" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white border border-clinical-accent cursor-pointer hover:bg-clinical-light">
                    <div>
                      <span className="text-xs font-medium block">Analíticos</span>
                      <span className="text-[10px]">Ajudam-nos a melhorar o site.</span>
                    </div>
                    <div className="w-8 h-4 bg-gray-300 rounded-full flex items-center justify-start px-1">
                      <div className="w-2.5 h-2.5 bg-white rounded-full" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white border border-clinical-accent cursor-pointer hover:bg-clinical-light">
                    <div>
                      <span className="text-xs font-medium block">Marketing</span>
                      <span className="text-[10px]">Para conteúdos personalizados.</span>
                    </div>
                    <div className="w-8 h-4 bg-gray-300 rounded-full flex items-center justify-start px-1">
                      <div className="w-2.5 h-2.5 bg-white rounded-full" />
                    </div>
                  </div>
                </div>
                <div className="pt-2 flex flex-col gap-2">
                  <button
                    onClick={handleSavePreferences}
                    className="w-full bg-clinical-green text-white py-3 text-xs uppercase tracking-widest font-medium hover:bg-clinical-accent transition-colors flex items-center justify-center gap-2"
                  >
                    <ShieldCheck size={14} />
                    Guardar Preferências
                  </button>
                  <button
                    onClick={() => setShowSettings(false)}
                    className="text-[10px] text-center text-clinical-green/50 uppercase tracking-widest hover:text-clinical-green"
                  >
                    Voltar
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
