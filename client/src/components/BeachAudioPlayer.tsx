import { Pause, Play, Waves } from "lucide-react";
import { useRef, useState } from "react";

const trackUrl = "/assets/beach-electro.mp3";

export default function BeachAudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = async () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
      return;
    }
    try {
      await audioRef.current.play();
      setPlaying(true);
    } catch {
      setPlaying(false);
    }
  };

  return (
    <div className={`beach-player${playing ? " beach-player--playing" : ""}`}>
      <audio ref={audioRef} src={trackUrl} preload="metadata" onEnded={() => setPlaying(false)} />
      <button type="button" className="beach-player__button" onClick={toggle} aria-label={playing ? "Pausar música" : "Reproducir música"}>
        {playing ? <Pause size={14} fill="currentColor" /> : <Play size={14} fill="currentColor" />}
      </button>
      <div className="beach-player__copy"><span><Waves size={12} /> MAREA ELÉCTRICA</span><small>{playing ? "Reproduciendo" : "Pista electrónica de playa"}</small></div>
      <div className="beach-player__bars" aria-hidden="true"><i /><i /><i /><i /><i /></div>
    </div>
  );
}
