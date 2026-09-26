import { useState } from "react";
import BeachAudioPlayer from "@/components/BeachAudioPlayer";
import {
  ArrowDownToLine,
  ArrowUpRight,
  Bluetooth,
  Check,
  ChevronRight,
  CircleGauge,
  Code2,
  Cpu,
  FileDown,
  Github,
  Menu,
  Radio,
  ScanLine,
  ShieldCheck,
  Smartphone,
  TerminalSquare,
  Waves,
  Wifi,
  X,
} from "lucide-react";

const releaseUrl = "https://github.com/dcg0/DC-elm327HC/releases/tag/v0.1.0";
const stableApkUrl =
  "https://github.com/dcg0/DC-elm327HC/releases/download/v0.1.0/app-release.apk";
const debugApkUrl =
  "https://github.com/dcg0/DCecuelm327/releases/download/build-1/androbd-debug.apk";
const debugRepoUrl = "https://github.com/dcg0/DCecuelm327";

const rainModules = [
  { left: "4%", delay: "-4s", duration: "15s", size: "small" },
  { left: "12%", delay: "-11s", duration: "19s", size: "medium" },
  { left: "21%", delay: "-7s", duration: "17s", size: "small" },
  { left: "31%", delay: "-16s", duration: "22s", size: "medium" },
  { left: "43%", delay: "-9s", duration: "18s", size: "small" },
  { left: "56%", delay: "-14s", duration: "20s", size: "medium" },
  { left: "67%", delay: "-3s", duration: "16s", size: "small" },
  { left: "76%", delay: "-18s", duration: "23s", size: "medium" },
  { left: "87%", delay: "-12s", duration: "18s", size: "small" },
  { left: "95%", delay: "-17s", duration: "21s", size: "medium" },
];

const modules = [
  {
    icon: Bluetooth,
    number: "01",
    title: "Bluetooth SPP / BLE",
    copy: "Detecta adaptadores clásicos y BLE para abrir una sesión estable en segundos.",
    tag: "Conectividad",
  },
  {
    icon: ScanLine,
    number: "02",
    title: "Escaneo ELM327",
    copy: "Explora dispositivos cercanos y reconoce el adaptador antes de entrar al tablero.",
    tag: "Diagnóstico",
  },
  {
    icon: TerminalSquare,
    number: "03",
    title: "Terminal AT",
    copy: "Envía comandos AT, revisa respuestas y entiende qué sucede detrás de cada lectura.",
    tag: "Control",
  },
  {
    icon: FileDown,
    number: "04",
    title: "DTC + reporte PDF",
    copy: "Consulta códigos de falla y guarda una evidencia limpia para compartir o archivar.",
    tag: "Resultados",
  },
];

function DownloadCard({
  eyebrow,
  title,
  description,
  filename,
  href,
  meta,
  featured = false,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  filename: string;
  href: string;
  meta: string;
  featured?: boolean;
  children: React.ReactNode;
}) {
  return (
    <article className={`download-card ${featured ? "download-card--featured" : ""}`}>
      <div className="download-card__topline">
        <span className="download-card__icon">{children}</span>
        <span className="download-card__eyebrow">{eyebrow}</span>
        {featured && <span className="download-card__pill">Recomendado</span>}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="download-card__file">
        <span>{filename}</span>
        <span>{meta}</span>
      </div>
      <a className="download-card__button" href={href} target="_blank" rel="noreferrer">
        <ArrowDownToLine size={17} />
        Descargar APK
        <ArrowUpRight size={16} className="download-card__arrow" />
      </a>
    </article>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyRelease = async () => {
    try {
      await navigator.clipboard.writeText(releaseUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  return (
    <main className="site-shell">
      <BeachAudioPlayer />
      <div className="module-rain" aria-hidden="true">
        {rainModules.map((module, index) => (
          <span
            className={`rain-module rain-module--${module.size}`}
            key={index}
            style={{ left: module.left, animationDelay: module.delay, animationDuration: module.duration }}
          >ELM327</span>
        ))}
      </div>
      <section className="hero" id="inicio">
        <div className="hero__backdrop" />
        <div className="hero__grain" />
        <nav className="nav container" aria-label="Navegación principal">
          <a className="brand" href="#inicio" aria-label="DC-ELM327 inicio">
            <span className="brand__mark"><Waves size={20} strokeWidth={2.4} /></span>
            <span>
              <strong>DC<span>·</span>ELM327</strong>
              <small>DIAGNÓSTICO HC</small>
            </span>
          </a>
          <div className={`nav__links ${menuOpen ? "nav__links--open" : ""}`}>
            <a href="#modulos" onClick={() => setMenuOpen(false)}>Módulos</a>
            <a href="/campamento" onClick={() => setMenuOpen(false)}>Campamento</a>
            <a href="#descargas" onClick={() => setMenuOpen(false)}>Descargas</a>
            <a href={releaseUrl} target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>GitHub <ArrowUpRight size={14} /></a>
          </div>
          <a className="nav__cta" href="#descargas">Ver APKs <ChevronRight size={16} /></a>
          <button className="nav__menu" type="button" aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"} onClick={() => setMenuOpen((value) => !value)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        <div className="hero__content container">
          <div className="hero__copy">
            <div className="eyebrow"><span className="eyebrow__dot" /> Release v0.1.0 · Android</div>
            <h1>Tu auto.<br /><em>Más claro.</em></h1>
            <p className="hero__lead">Una herramienta directa para conectar, leer y entender tu vehículo con un adaptador ELM327.</p>
            <div className="hero__actions">
              <a className="button button--primary" href="#descargas">Explorar descargas <ArrowDownToLine size={17} /></a>
              <a className="button button--ghost" href={releaseUrl} target="_blank" rel="noreferrer"><Github size={17} /> Ver release</a>
            </div>
            <div className="hero__proof">
              <span className="proof__avatars"><span>OB</span><span>II</span><span>HC</span></span>
              <span>Hecho para pruebas reales<br /><strong>con un ELM327 conectado</strong></span>
            </div>
          </div>

          <div className="hero__panel" aria-label="Resumen del módulo ELM327">
            <div className="hero__panel-head">
              <span className="live-dot" /> MÓDULO ACTIVO
              <span className="hero__panel-code">HC / 01</span>
            </div>
            <div className="hero__panel-main">
              <div className="radar"><span className="radar__ring radar__ring--one" /><span className="radar__ring radar__ring--two" /><span className="radar__cross" /><span className="radar__signal"><Radio size={17} /></span></div>
              <div><span className="hero__panel-label">Estado de conexión</span><strong>Listo para escanear</strong></div>
            </div>
            <div className="hero__panel-stats">
              <div><span>PROTOCOLO</span><strong>OBD-II</strong></div>
              <div><span>ENLACE</span><strong>BLE / SPP</strong></div>
              <div><span>FORMATO</span><strong>PDF</strong></div>
            </div>
            <div className="hero__panel-foot"><span><ShieldCheck size={15} /> Prueba en Android físico</span><span>01:42:08</span></div>
          </div>
        </div>
        <a className="scroll-cue" href="#modulos"><span>Desliza para conocer el módulo</span><ChevronRight size={16} /></a>
      </section>

      <section className="section section--modules" id="modulos">
        <div className="container">
          <div className="section-heading">
            <div><span className="section-kicker">01 / DENTRO DEL MÓDULO</span><h2>Todo lo que necesitas,<br /><em>sin ruido.</em></h2></div>
            <p>DC-ELM327 reúne las herramientas clave para pasar de una conexión incierta a una lectura que puedes interpretar y compartir.</p>
          </div>
          <div className="module-grid">
            {modules.map((module) => {
              const Icon = module.icon;
              return <article className="module-card" key={module.number}>
                <div className="module-card__top"><span className="module-card__number">{module.number}</span><Icon size={21} /></div>
                <div><span className="module-card__tag">{module.tag}</span><h3>{module.title}</h3><p>{module.copy}</p></div>
                <span className="module-card__line" />
              </article>;
            })}
          </div>
        </div>
      </section>

      <section className="section section--signal">
        <div className="container signal-wrap">
          <div className="signal-copy"><span className="section-kicker section-kicker--light">02 / LA IDEA</span><h2>Menos adivinar.<br /><em>Más diagnosticar.</em></h2><p>Conecta el adaptador, revisa el estado de tu vehículo y conserva la información importante en un solo flujo.</p><a className="text-link" href="#descargas">Ir a las descargas <ArrowUpRight size={16} /></a></div>
          <div className="signal-visual"><div className="signal-orbit signal-orbit--outer" /><div className="signal-orbit signal-orbit--inner" /><div className="signal-core"><Cpu size={28} /><span>ELM<br />327</span></div><span className="orbit-label orbit-label--top">READ</span><span className="orbit-label orbit-label--right">LIVE</span><span className="orbit-label orbit-label--bottom">SAVE</span></div>
        </div>
      </section>

      <section className="section section--downloads" id="descargas">
        <div className="container">
          <div className="section-heading section-heading--downloads">
            <div><span className="section-kicker">03 / DESCARGAS</span><h2>Elige tu punto<br /><em>de partida.</em></h2></div>
            <div className="release-meta"><span className="release-meta__dot" /><span>Release público<br /><strong>15 SEP 2026 · v0.1.0</strong></span><a href={releaseUrl} target="_blank" rel="noreferrer" aria-label="Abrir release en GitHub"><Github size={19} /></a></div>
          </div>
          <div className="download-grid">
            <DownloadCard eyebrow="Versión recomendada" title="DC-carECU" description="La experiencia completa para Bluetooth clásico SPP/BLE, escaneo de adaptadores, sensores OBD-II, terminal AT, DTC y reporte PDF." filename="app-release.apk" meta="52.5 MB · Android" href={stableApkUrl} featured><Smartphone size={21} /></DownloadCard>
            <DownloadCard eyebrow="Construcción de debug" title="DCecuELM327 Debug" description="Una alternativa de construcción para diagnóstico y pruebas del flujo ELM327. Ideal para revisar el comportamiento del módulo." filename="androbd-debug.apk" meta="build-1 · Android" href={debugApkUrl}><Code2 size={21} /></DownloadCard>
          </div>
          <div className="download-note"><span><ShieldCheck size={18} /> <strong>Antes de instalar:</strong> prueba en un Android físico con un ELM327 real antes de usarlo profesionalmente.</span><a href={debugRepoUrl} target="_blank" rel="noreferrer">Abrir repositorio debug <ArrowUpRight size={15} /></a></div>
          <div className="release-row"><span>¿Quieres guardar el enlace del release?</span><button type="button" onClick={copyRelease}>{copied ? <><Check size={15} /> Enlace copiado</> : <><Wifi size={15} /> Copiar release</>}</button></div>
        </div>
      </section>

      <section className="section section--promo" id="dc-lab">
        <div className="container promo-wrap">
          <div className="promo-copy">
            <span className="section-kicker">04 / DC-LAB</span>
            <h2>La tecnología<br /><em>también viaja.</em></h2>
            <p>Una postal de DC-Lab: ideas azules, rutas abiertas y herramientas listas para acompañarte donde empieza el camino.</p>
            <a className="text-link text-link--dark" href="#inicio">Volver al inicio <ArrowUpRight size={16} /></a>
          </div>
          <a className="promo-art" href={releaseUrl} target="_blank" rel="noreferrer" aria-label="Abrir el release de DC-ELM327 en GitHub">
            <img src="/manus-storage/DC-Lab(6)_f216be23.png" alt="Vehículo promocional de DC-Lab en una playa" />
            <span className="promo-art__badge"><Waves size={15} /> DC-LAB / 06</span>
            <span className="promo-art__link"><ArrowUpRight size={15} /> Ver release</span>
          </a>
        </div>
      </section>

      <footer className="footer"><div className="container footer__inner"><a className="brand brand--footer" href="#inicio"><span className="brand__mark"><Waves size={18} /></span><span><strong>DC<span>·</span>ELM327</strong><small>DIAGNÓSTICO HC</small></span></a><span className="footer__copy">Conecta. Lee. Entiende.</span><a href={releaseUrl} target="_blank" rel="noreferrer" className="footer__github"><Github size={16} /> GitHub <ArrowUpRight size={13} /></a></div></footer>
    </main>
  );
}
