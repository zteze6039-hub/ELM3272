import { ArrowDownToLine, ArrowUpRight, CheckCircle2, Github, Moon, Radio, ShieldCheck, Sparkles, Waves } from "lucide-react";
import BeachAudioPlayer from "@/components/BeachAudioPlayer";

const debugUrl = "https://github.com/dcg0/DCecuelm327/releases/download/build-1/androbd-debug.apk";
const releaseUrl = "https://github.com/dcg0/DCecuelm327/releases/tag/build-1";

const fallingModules = [
  ["7%", "-3s", "15s"], ["18%", "-11s", "21s"], ["32%", "-6s", "17s"],
  ["47%", "-15s", "23s"], ["63%", "-8s", "19s"], ["78%", "-18s", "22s"], ["92%", "-4s", "16s"],
];

const features = [
  ["01", "Conexión SPP / BLE", "Abre el canal con tu adaptador y revisa el estado de enlace."],
  ["02", "Terminal AT", "Prueba comandos y entiende cada respuesta del módulo."],
  ["03", "DTC y reporte", "Guarda la lectura para consultarla cuando vuelvas del camino."],
];

export default function Campamento() {
  return (
    <main className="camp-page">
      <BeachAudioPlayer />
      <div className="camp-rain" aria-hidden="true">
        {fallingModules.map(([left, delay, duration], index) => <span key={index} style={{ left, animationDelay: delay, animationDuration: duration }}>ELM327</span>)}
      </div>
      <section className="camp-hero">
        <div className="camp-hero__bg" />
        <header className="camp-nav container">
          <a className="camp-brand" href="/"><span><Waves size={18} /></span><strong>DC·ELM327 <small>CAMPAMENTO</small></strong></a>
          <div className="camp-nav__links"><a href="/">Versión playa</a><a href="#descarga">Descarga debug <ArrowDownToLine size={14} /></a></div>
        </header>
        <div className="container camp-hero__content">
          <div className="camp-hero__copy">
            <div className="camp-kicker"><Moon size={13} /> Modo campamento · noche</div>
            <h1>Diagnóstico<br /><em>bajo las estrellas.</em></h1>
            <p>Conecta, prueba y guarda la lectura de tu vehículo mientras el lago se queda en silencio.</p>
            <a className="camp-button camp-button--neon" href="#descarga"><ArrowDownToLine size={17} /> Descargar debug <span>v2.7.10</span></a>
            <div className="camp-proof"><CheckCircle2 size={15} /> Probada para pruebas en Android físico</div>
          </div>
          <div className="camp-status">
            <div className="camp-status__top"><span><i /> SESIÓN NOCTURNA</span><span>HC / 02</span></div>
            <div className="camp-status__center"><div className="camp-radar"><Radio size={22} /></div><div><small>Estado de enlace</small><strong>Buscando ELM327</strong></div></div>
            <div className="camp-status__data"><span>LAKE LINK<strong>BLE / SPP</strong></span><span>AMBIENTE<strong>22°C</strong></span><span>SEÑAL<strong>94%</strong></span></div>
          </div>
        </div>
        <div className="camp-hero__caption"><span>01 / RUTA ABIERTA</span><span>Pescadores · lago · campers</span></div>
      </section>

      <section className="camp-section camp-section--intro">
        <div className="container camp-intro"><div><span className="camp-section-kicker">02 / HERRAMIENTAS DE NOCHE</span><h2>Lo mismo que necesitas.<br /><em>En otro paisaje.</em></h2></div><p>La experiencia DC-ELM327 se muda al campamento: misma lectura, otra atmósfera y un debug preparado para probar el flujo con calma.</p></div>
        <div className="container camp-feature-grid">{features.map(([number, title, copy]) => <article className="camp-feature" key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p><i /></article>)}</div>
      </section>

      <section className="camp-section camp-section--download" id="descarga">
        <div className="container camp-download-layout">
          <div className="camp-download-copy"><span className="camp-section-kicker camp-section-kicker--green">03 / DESCARGA DESTACADA</span><h2>Debug listo<br /><em>para la ruta.</em></h2><p>La construcción debug que ya conoces, ahora al frente de la experiencia campamento.</p><a className="camp-text-link" href={releaseUrl} target="_blank" rel="noreferrer"><Github size={16} /> Ver publicación / releases <ArrowUpRight size={15} /></a></div>
          <article className="camp-download-card"><div className="camp-download-card__seal"><ShieldCheck size={27} /><span>SELLO DE<br /><strong>SEGURIDAD</strong></span></div><div className="camp-download-card__eyebrow">Construcción de debug · build-1</div><h3>androbd-debug.apk</h3><div className="camp-download-card__meta"><span>8.31 MB</span><span>Android 9.0+</span><span>Firmada para pruebas</span></div><div className="camp-safe"><Sparkles size={16} /><strong>Probada · descarga segura</strong></div><a className="camp-button camp-button--download" href={debugUrl} target="_blank" rel="noreferrer"><ArrowDownToLine size={18} /> Descargar APK <ArrowUpRight size={15} /></a></article>
        </div>
      </section>

      <section className="camp-section camp-section--proof">
        <div className="container camp-proof-layout"><div className="camp-proof-copy"><span className="camp-section-kicker">04 / REFERENCIA</span><h2>La pantalla de<br /><em>tu próxima salida.</em></h2><p>La captura de la APK queda al final como referencia visual de la descarga debug.</p></div><a className="camp-proof-image" href={debugUrl} target="_blank" rel="noreferrer"><img src="/manus-storage/Screenshot_20260925_175358_GitHub_2b5d4db6.jpg" alt="Captura de la descarga de DC-ELM327 debug" /><span><ArrowDownToLine size={15} /> Abrir descarga</span></a></div>
      </section>
      <footer className="camp-footer"><div className="container"><a href="/">DC·ELM327 / <span>CAMPAMENTO</span></a><span>Conecta de noche. Lee con claridad.</span></div></footer>
    </main>
  );
}
