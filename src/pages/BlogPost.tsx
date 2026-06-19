import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, User, Share2 } from 'lucide-react';
import { posts } from '../data/posts';

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const post = posts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="pt-40 pb-20 text-center">
        <h2 className="text-3xl font-serif mb-6">Artigo não encontrado</h2>
        <Link to="/blog" className="btn-primary">Voltar ao Blog</Link>
      </div>
    );
  }

  return (
    <div className="pt-32">
      <article className="pb-20">
        {/* Header */}
        <header className="section-padding pb-0">
          <div className="max-w-4xl mx-auto px-6">
            <Link to="/blog" className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-bold mb-12 hover:text-clinical-accent transition-colors">
              <ArrowLeft size={14} />
              <span>Voltar ao Blog</span>
            </Link>
            
            <div className="space-y-6 mb-12 text-center md:text-left flex flex-col items-center md:items-start">
              <span className="text-clinical-green font-sans text-xs uppercase tracking-[0.4em] block">{post.category}</span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-tight text-center md:text-left">{post.title}</h1>
              
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-8 pt-6 border-t border-clinical-accent text-[10px] uppercase tracking-widest font-bold opacity-60 w-full">
                <div className="flex items-center space-x-2">
                  <Calendar size={14} className="text-clinical-green" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <User size={14} className="text-clinical-green" />
                  <span>{post.author}</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Image */}
        <div className="max-w-5xl mx-auto px-6 mb-16 group">
          <div className="aspect-video overflow-hidden rounded-3xl border border-clinical-accent shadow-xl">
            <img 
              src={post.img} 
              alt={post.title} 
              className="w-full h-full object-cover grayscale transition-all duration-1000 ease-out group-hover:grayscale-0 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto px-6">
          <div 
            className="prose prose-lg prose-clinical max-w-none text-left sm:text-justify"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          <div className="mt-20 pt-10 border-t border-clinical-accent flex flex-col sm:flex-row justify-between items-center gap-6 text-center sm:text-left">
            <div className="flex items-center space-x-4">
              <span className="text-[10px] uppercase tracking-widest font-bold opacity-40">Partilhar:</span>
              <button className="p-2 hover:text-clinical-accent transition-colors"><Share2 size={18} /></button>
            </div>
            <Link to="/marcacoes" className="text-xs uppercase tracking-widest font-bold border-b border-clinical-accent pb-1">
              Marcar Consulta com Especialista
            </Link>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="section-padding bg-clinical-light text-center md:text-left">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-serif mb-12 text-center md:text-left">Outros Artigos</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:text-left">
            {posts.filter(p => p.id !== id).slice(0, 3).map((p, idx) => (
              <Link key={idx} to={`/blog/${p.id}`} className="group flex flex-col items-center md:items-start text-center md:text-left">
                <div className="aspect-video overflow-hidden rounded-2xl border border-clinical-accent mb-6 w-full">
                  <img 
                    src={p.img} 
                    alt={p.title} 
                    className="w-full h-full object-cover grayscale transition-all duration-1000 ease-out group-hover:grayscale-0 group-hover:scale-110" 
                    referrerPolicy="no-referrer" 
                  />
                </div>
                <h4 className="text-xl font-serif group-hover:text-clinical-accent transition-colors text-center md:text-left">{p.title}</h4>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
