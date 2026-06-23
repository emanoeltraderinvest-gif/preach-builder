import { useState, useEffect } from "react";
import ebookCover from "@/assets/ebook-cover.png";
import { BookOpen, Lightbulb, ListChecks, Clock, Shield, Zap, ChevronDown } from "lucide-react";

// ── Countdown hook (2h a partir da primeira visita) ──
function useCountdown() {
  const KEY = "bm_deadline";
  const getDeadline = () => {
    let d = localStorage.getItem(KEY);
    if (!d) {
      d = String(Date.now() + 2 * 60 * 60 * 1000);
      localStorage.setItem(KEY, d);
    }
    return parseInt(d);
  };

  const calc = () => {
    const diff = Math.max(0, getDeadline() - Date.now());
    const h = Math.floor(diff / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  };

  const [time, setTime] = useState(calc);
  useEffect(() => {
    const t = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(t);
  }, []);
  return time;
}

// ── FAQ Item ──
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-lg overflow-hidden">
      <button
        className="w-full flex justify-between items-center px-5 py-4 text-left font-semibold text-accent bg-background hover:bg-secondary transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span>{q}</span>
        <ChevronDown
          className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-5 pb-5 text-muted-foreground leading-relaxed text-sm bg-background">
          {a}
        </div>
      )}
    </div>
  );
}

const Index = () => {
  const ctaUrl = "https://pay.wiapy.com/fvh_RQBAjh";
  const countdown = useCountdown();

  const benefits = [
    {
      icon: Lightbulb,
      title: "Nova perspectiva em cada passagem",
      desc: "Cada mensagem traz um ângulo diferente do óbvio. Ex.: Davi não venceu Golias porque era corajoso — ele venceu porque já tinha intimidade com Deus no secreto.",
    },
    {
      icon: ListChecks,
      title: "Estrutura pronta: 3 pontos + aplicação",
      desc: "Cada mensagem vem com tema central, nova perspectiva, 3 pontos principais, aplicação prática e conclusão. É só contextualizar para sua congregação.",
    },
    {
      icon: BookOpen,
      title: "Textos do AT ao NT abordados",
      desc: "De 1 Samuel a Apocalipse: Davi e Golias, Filho Pródigo, José no cárcere, Pedro sobre as águas, Elias na caverna, Neemias, Laodiceia e muito mais.",
    },
    {
      icon: Zap,
      title: "Reduz horas de preparação",
      desc: "Em vez de partir do zero, você já tem o esqueleto completo. Dedique seu tempo à oração, personalização e cuidado pastoral — não à estrutura.",
    },
  ];

  const testimonials = [
    {
      text: "Esse material mudou minha rotina de preparação. Antes gastava horas para estruturar um sermão. Agora tenho o esqueleto pronto e foco no que realmente importa: o cuidado da congregação.",
      author: "Pr. Marcos Alves",
      role: "Pastor — São Paulo, SP",
    },
    {
      text: "A 'nova perspectiva' de cada mensagem foi o que mais me surpreendeu. São ângulos que nunca tinha pensado, mas que fazem total sentido com o texto. Minha equipe de líderes de célula adorou.",
      author: "Liderança Cristã",
      role: "Líder de células — Belo Horizonte, MG",
    },
    {
      text: "Uso nas quartas e domingos. A estrutura com 3 pontos + aplicação + conclusão é exatamente o que eu precisava. Material honesto, que respeita as Escrituras e é prático ao mesmo tempo.",
      author: "Pr. José Santos",
      role: "Pastor — Recife, PE",
    },
  ];

  const faqs = [
    {
      q: "Como recebo o material após a compra?",
      a: "Imediatamente após a confirmação do pagamento, você receberá o link de download por e-mail. O acesso é instantâneo — não precisa esperar.",
    },
    {
      q: "Funciona no celular, tablet e computador?",
      a: "Sim. O material é entregue em formato PDF, que abre em qualquer dispositivo sem precisar instalar nenhum programa adicional.",
    },
    {
      q: "Esse material substitui o estudo pessoal e a oração?",
      a: "Não, e nem pretende. O Banco de Mensagens é uma ferramenta de apoio que oferece estrutura e perspectiva. A responsabilidade pela exposição da Palavra, o estudo contextualizado e a direção do Espírito Santo continuam sendo insubstituíveis.",
    },
    {
      q: "Para quem é esse material?",
      a: "Para pastores, evangelistas, líderes de célula, professores de escola bíblica dominical e qualquer pessoa que ministra a Palavra regularmente e deseja ter uma base organizada para suas mensagens.",
    },
    {
      q: "Posso compartilhar o material com outros líderes da minha equipe?",
      a: "A licença é individual. Cada líder que queira utilizar o material deve adquirir seu próprio acesso.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">

      {/* ── BARRA DE URGÊNCIA ── */}
      <div className="bg-accent text-accent-foreground text-center py-2 px-4 text-sm font-semibold">
        🔥 Oferta especial:{" "}
        <span className="text-primary">R$97 por apenas R$27</span>{" "}
        — Válida por tempo limitado
      </div>

      {/* ── HERO ── */}
      <section className="container py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="flex-shrink-0 w-full max-w-[420px] md:w-1/2 flex justify-center">
            <img
              src={ebookCover}
              alt="Capa do ebook Banco de Mensagens Bíblicas"
              className="w-[320px] md:w-[460px] rounded-lg drop-shadow-2xl"
              style={{ transform: "perspective(800px) rotateY(-4deg)" }}
            />
          </div>

          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight text-accent">
              Banco de Mensagens Bíblicas
            </h1>
            <p className="mt-3 text-lg md:text-xl font-heading font-semibold text-primary">
              Nova Perspectiva para Pregações Impactantes
            </p>
            <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg">
              Mensagens bíblicas completamente estruturadas para pastores e líderes que querem pregar com profundidade, sem gastar horas preparando cada sermão do zero.
            </p>
            <a
              href={ctaUrl}
              className="inline-block mt-8 px-8 py-4 bg-primary hover:bg-gold-dark text-primary-foreground font-button font-semibold text-lg rounded-lg transition-colors shadow-lg"
            >
              Garantir Meu Acesso por R$27 →
            </a>
            <div className="mt-4 flex flex-col gap-1 text-sm text-muted-foreground">
              <span>✓ Acesso imediato após a compra</span>
              <span>✓ Material digital em formato PDF</span>
            </div>
            {/* Badges */}
            <div className="mt-5 flex flex-wrap gap-3 justify-center md:justify-start">
              {["⭐ +200 líderes usando", "📖 Mensagens estruturadas", "⚡ Acesso imediato"].map((b) => (
                <span key={b} className="bg-secondary border border-border text-xs font-semibold px-3 py-1.5 rounded-md text-muted-foreground">
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── DESAFIO ── */}
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

      {/* ── BENEFÍCIOS ── */}
      <section className="container py-16 md:py-20">
        <h2 className="text-2xl md:text-3xl font-bold text-accent text-center">O que você encontrará</h2>
        <div className="mt-10 grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {benefits.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex items-start gap-4 bg-secondary rounded-xl p-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-bold text-accent">{title}</p>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── O QUE VOCÊ RECEBERÁ ── */}
      <section className="bg-secondary py-16 md:py-20">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-accent text-center">O que você receberá</h2>
          <div className="mt-10 max-w-xl mx-auto">
            <div className="bg-background rounded-xl p-8 shadow-sm border border-border">
              <h3 className="text-xl font-bold text-accent">Banco de Mensagens Bíblicas</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed text-sm">
                Material completo com mensagens estruturadas para auxiliar na preparação de pregações impactantes.
              </p>
              <ul className="mt-5 space-y-2">
                {[
                  "Mensagens prontas (do AT ao NT)",
                  "Tema central e nova perspectiva em cada uma",
                  "3 pontos principais por mensagem",
                  "Aplicação prática e conclusão",
                  "Organizadas em 4 blocos temáticos",
                  "Fundamentos da Fé, Vida Espiritual, Caráter e Perseverança",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary font-bold flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── DEPOIMENTOS ── */}
      <section className="container py-16 md:py-20">
        <h2 className="text-2xl md:text-3xl font-bold text-accent text-center">O que líderes estão dizendo</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map(({ text, author, role }) => (
            <div key={author} className="bg-secondary rounded-xl p-6 border-l-4 border-primary">
              <p className="text-primary text-base mb-3">★★★★★</p>
              <p className="text-sm text-muted-foreground italic leading-relaxed mb-4">"{text}"</p>
              <p className="font-bold text-accent text-sm">{author}</p>
              <p className="text-xs text-muted-foreground">{role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── OFERTA / PREÇO ── */}
      <section className="bg-secondary py-16 md:py-20">
        <div className="container max-w-2xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-accent">Acesso ao material completo</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Material ministerial de apoio à liderança cristã — desenvolvido para fortalecer sua preparação semana a semana.
          </p>

          {/* Urgência */}
          <div className="mt-6 inline-flex items-center gap-2 bg-background border border-border rounded-lg px-5 py-3 text-sm font-semibold text-muted-foreground">
            <Clock className="w-4 h-4 text-primary" />
            Oferta especial encerra em:{" "}
            <span className="text-primary font-extrabold tracking-widest">{countdown}</span>
          </div>

          <div className="mt-6">
            <p className="text-muted-foreground line-through text-lg">Valor normal: R$97</p>
            <p className="text-sm text-muted-foreground mt-1">Disponível hoje por apenas:</p>
            <p className="text-5xl md:text-6xl font-extrabold text-primary mt-1">R$27</p>
            <p className="text-sm text-muted-foreground mt-1">Pagamento único · Acesso imediato</p>
          </div>

          <a
            href={ctaUrl}
            className="inline-block mt-8 px-10 py-4 bg-primary hover:bg-gold-dark text-primary-foreground font-button font-semibold text-lg rounded-lg transition-colors shadow-lg"
          >
            Quero Acessar o Material Agora →
          </a>
          <div className="mt-3 flex items-center justify-center gap-1 text-sm text-muted-foreground">
            <Shield className="w-4 h-4" />
            Pagamento 100% seguro · Download imediato após a compra
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="container py-16 md:py-20">
        <h2 className="text-2xl md:text-3xl font-bold text-accent text-center">Perguntas Frequentes</h2>
        <div className="mt-10 max-w-2xl mx-auto space-y-3">
          {faqs.map(({ q, a }) => (
            <FaqItem key={q} q={q} a={a} />
          ))}
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="bg-accent py-14 md:py-16">
        <div className="container max-w-2xl text-center">
          <p className="text-lg text-accent-foreground italic leading-relaxed">
            "Que este material fortaleça sua preparação e sirva como instrumento de edificação da Igreja."
          </p>
          <a
            href={ctaUrl}
            className="inline-block mt-6 px-8 py-4 bg-primary hover:bg-gold-dark text-primary-foreground font-button font-semibold text-lg rounded-lg transition-colors shadow-lg"
          >
            Garantir Meu Acesso por R$27 →
          </a>
        </div>
      </section>

      {/* ── RODAPÉ ── */}
      <footer className="py-8 border-t border-border">
        <p className="text-center text-sm text-muted-foreground">Material de Apoio à Liderança Cristã</p>
      </footer>
    </div>
  );
};

export default Index;
