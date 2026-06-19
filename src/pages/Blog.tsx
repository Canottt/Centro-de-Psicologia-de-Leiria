import { motion } from 'motion/react';
import { Search, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { posts } from '../data/posts';

export default function Blog() {
  return (
    <div className="pt-32">
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-8">
            <div className="max-w-3xl text-center md:text-left flex flex-col items-center md:items-start">
              <span className="text-clinical-gold font-sans text-xs uppercase tracking-[0.4em] mb-4 block">Blog & Artigos</span>
              <h1 className="text-5xl md:text-7xl mb-8">Perspetivas sobre a mente humana.</h1>
              <p className="text-xl text-clinical-green/70 leading-relaxed font-light">
                Partilhamos conhecimento científico e reflexões para promover a literacia em saúde mental.
              </p>
            </div>
            <div className="relative w-full md:w-64">
              <input type="text" placeholder="Procurar artigos..." className="w-full border-b border-clinical-accent py-2 pr-8 outline-none focus:border-clinical-gold transition-colors text-sm text-center md:text-left" />
              <Search className="absolute right-0 top-2 text-clinical-green/30" size={18} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {posts.map((post, idx) => (
              <motion.article 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <Link to={`/blog/${post.id}`}>
                  <div className="aspect-video bg-clinical-light mb-8 overflow-hidden rounded-2xl border border-clinical-accent shadow-md">
                    <img 
                      src={post.img} 
                      alt={post.title}
                      className="w-full h-full object-cover grayscale transition-all duration-1000 ease-out group-hover:grayscale-0 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="space-y-4 text-center md:text-left flex flex-col items-center md:items-start">
                    <div className="flex justify-between items-center text-[10px] uppercase tracking-widest font-bold w-full">
                      <span className="text-clinical-gold">{post.category}</span>
                      <span className="opacity-40">{post.date}</span>
                    </div>
                    <h3 className="text-3xl font-serif group-hover:text-clinical-gold transition-colors duration-300 text-center md:text-left">{post.title}</h3>
                    <p className="text-clinical-green/60 leading-relaxed text-sm text-center md:text-left">{post.excerpt}</p>
                    <div className="pt-4 w-full flex justify-center md:justify-start">
                      <div className="flex items-center space-x-2 text-xs uppercase tracking-widest font-bold group-hover:translate-x-2 transition-transform duration-300">
                        <span>Ler Artigo Completo</span>
                        <ArrowRight size={14} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          <div className="mt-32 border-t border-clinical-accent pt-20 text-center">
            <h4 className="text-xl mb-8 font-serif italic text-center">Subscreva a nossa newsletter clínica</h4>
            <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <input type="email" placeholder="O seu email" className="flex-grow border border-clinical-accent px-6 py-4 outline-none focus:border-clinical-gold transition-colors text-center sm:text-left bg-transparent" />
              <button className="btn-primary py-4 px-8">Subscrever</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
