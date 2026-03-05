import ebookCover from "@/assets/ebook-cover.png";
import { BookOpen, Lightbulb, ListChecks, Layout } from "lucide-react";

const Index = () => {
  const ctaUrl = "#";

  return (
    <div className="min-h-screen bg-background">
      {/* HERO */}
      <section className="container py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Ebook mockup */}
          <div className="flex-shrink-0 w-full max-w-[420px] md:w-1/2 flex justify-center">
            <img
              src={ebookCover}
              alt="Capa do ebook Banco de Mensagens Bíblicas"
              className="w-[320px] md:w-[460px] rounded-lg drop-shadow-2xl"
              style={{ transform: "perspective(800px) rotateY(-4deg)" }}
            />
          </div>

          {/* Text */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight text-accent">
              Banco de Mensagens Bíblicas
            </h1>
            <p className="mt-3 text-lg md:text-xl font-heading font-semibold text-primary">
              Nova Perspectiva para Pregações Impactantes
            </p>
            <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg">
              Material de apoio para líderes cristãos que desejam preparar mensagens relevantes, profundas e edificantes.
            </p>
            <a
              href={ctaUrl}
              className="inline-block mt-8 px-8 py-4 bg-primary hover:bg-gold-dark text-primary-foreground font-button font-semibold text-lg rounded-lg transition-colors shadow-lg"
            >
              Acessar o Material Agora
            </a>
            <p className="mt-3 text-sm text-muted-foreground">Acesso imediato após a compra</p>
            <p className="text-sm text-muted-foreground">Material digital em formato PDF</p>
          </div>
        </div>
      </section>

      {/* DESAFIO */}
      <section className="bg-secondary py-16 md:py-20">
        <div className="container max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-accent leading-snug">
            Preparar mensagens bíblicas relevantes nem sempre é simples.
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
            Muitos líderes enfrentam o desafio de preparar mensagens semana após semana sem repetir ideias ou perder profundidade espiritual.
          </p>
          <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
            Este material foi desenvolvido como apoio ministerial para auxiliar na construção de reflexões bíblicas com novas perspectivas e aplicações práticas.
          </p>
        </div>
      </section>

      {/* O QUE VOCÊ ENCONTRARÁ */}
      <section className="container py-16 md:py-20">
        <h2 className="text-2xl md:text-3xl font-bold text-accent text-center">O que você encontrará</h2>
        <div className="mt-10 grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {[
            { icon: Lightbulb, text: "Novas perspectivas bíblicas para mensagens" },
            { icon: Layout, text: "Estrutura clara para construção de reflexões" },
            { icon: BookOpen, text: "Aplicações práticas da Palavra" },
            { icon: ListChecks, text: "Conteúdo organizado para facilitar a preparação de ministrações" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <p className="text-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* O QUE VOCÊ RECEBERÁ */}
      <section className="bg-secondary py-16 md:py-20">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-accent text-center">O que você receberá</h2>
          <div className="mt-10 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-background rounded-xl p-8 shadow-sm border border-border">
              <h3 className="text-xl font-bold text-accent">Banco de Mensagens Bíblicas</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Material com reflexões estruturadas para auxiliar na preparação de mensagens impactantes.
              </p>
            </div>
            <div className="bg-background rounded-xl p-8 shadow-sm border border-border">
              <h3 className="text-xl font-bold text-accent">Aplicações Bíblicas para a Vida</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Reflexões e princípios práticos que conectam a Palavra de Deus com situações reais da vida.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OFERTA */}
      <section className="container py-16 md:py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-accent">Acesso ao material completo</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Este material foi desenvolvido como apoio à liderança cristã e pode auxiliar na preparação de reflexões, estudos bíblicos e ministrações.
          </p>
          <div className="mt-8">
            <p className="text-muted-foreground line-through text-lg">Valor normal do material: R$97</p>
            <p className="text-sm text-muted-foreground mt-1">Disponível hoje por apenas:</p>
            <p className="text-5xl md:text-6xl font-extrabold text-primary mt-1">R$27</p>
          </div>
          <a
            href={ctaUrl}
            className="inline-block mt-8 px-10 py-4 bg-primary hover:bg-gold-dark text-primary-foreground font-button font-semibold text-lg rounded-lg transition-colors shadow-lg"
          >
            Quero acessar o material
          </a>
          <p className="mt-3 text-sm text-muted-foreground">Download imediato após a compra.</p>
        </div>
      </section>

      {/* FINAL */}
      <section className="bg-secondary py-14 md:py-16">
        <div className="container max-w-2xl text-center">
          <p className="text-lg text-muted-foreground italic leading-relaxed">
            Que este material fortaleça sua preparação e sirva como instrumento de edificação.
          </p>
          <a
            href={ctaUrl}
            className="inline-block mt-6 px-8 py-3 bg-primary hover:bg-gold-dark text-primary-foreground font-button font-semibold rounded-lg transition-colors"
          >
            Acessar o material agora
          </a>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="py-8 border-t border-border">
        <p className="text-center text-sm text-muted-foreground">Material de Apoio à Liderança Cristã</p>
      </footer>
    </div>
  );
};

export default Index;
