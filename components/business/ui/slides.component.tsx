"use client";

import { useEffect, useRef, useState } from "react";

const slides = [
  {
    cards: [
      { icon: "🩺", bg: "#e8f4fd", text: "Résume le parcours de cette patiente depuis 2021.", active: false },
      { icon: "🔬", bg: "#fce8f3", text: "Quels sont les marqueurs hormonaux à surveiller ?", active: true },
      { icon: "📋", bg: "#edf7ee", text: "Rédige une ordonnance pour ce traitement hormonal.", active: false },
      { icon: "🧬", bg: "#f3ecfd", text: "Analyse ce rapport de prédisposition génétique.", active: false },
    ],
  },
  {
    cards: [
      { icon: "🎙️", bg: "#fff3e0", text: "Transcris la consultation en cours en temps réel.", active: false },
      { icon: "🖼️", bg: "#fce8f3", text: "Analyse cette échographie pelvienne.", active: true },
      { icon: "📊", bg: "#e8f4fd", text: "Montre l'évolution du cycle sur 6 mois.", active: false },
      { icon: "💬", bg: "#edf7ee", text: "Explique ce diagnostic simplement à la patiente.", active: false },
    ],
  },
  {
    cards: [
      { icon: "🌐", bg: "#e8f4fd", text: "Trouve les dernières études sur l'endométriose.", active: false },
      { icon: "🔐", bg: "#f3ecfd", text: "Ce protocole respecte-t-il les normes RGPD santé ?", active: true },
      { icon: "📅", bg: "#fff3e0", text: "Planifie le prochain rendez-vous de suivi.", active: false },
      { icon: "💊", bg: "#edf7ee", text: "Interactions médicamenteuses pour ce traitement.", active: false },
    ],
  },
];

export default function FenasiusDemoAnimation() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = (index: number) => {
    setVisible(false);
    setTimeout(() => {
      setCurrent(index);
      setVisible(true);
    }, 200);
  };

  useEffect(() => {
    setVisible(true);
    timerRef.current = setTimeout(() => {
      goTo((current + 1) % slides.length);
    }, 3800);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current]);

  const slide = slides[current];

  return (
    <div className="fen-wrap">
      <div className="fen-cards">
        {slide.cards.map((card, i) => (
          <div
            key={i}
            className={`fen-card${card.active ? " fen-card--active" : ""} fen-card--anim-${i}`}
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="fen-icon" style={{ background: card.bg }}>
              {card.icon}
            </div>
            <p className="fen-text">{card.text}</p>
          </div>
        ))}
      </div>

      <div className="fen-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Slide ${i + 1}`}
            className={`fen-dot${i === current ? " fen-dot--active" : ""}`}
            onClick={() => {
              if (timerRef.current) clearTimeout(timerRef.current);
              goTo(i);
            }}
          />
        ))}
      </div>

      <style>{`
        .fen-wrap {
          font-family: var(--font-sans, system-ui, sans-serif);
          border-radius: 20px;
          padding: 48px 32px 40px;
          min-height: 420px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #d4e9f7 0%, #f0d6ed 40%, #c8edd9 80%, #e8daf8 100%);
          background-size: 300% 300%;
          animation: fen-bg-shift 8s ease infinite;
        }

        @keyframes fen-bg-shift {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .fen-cards {
          width: 100%;
          max-width: 480px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }

        .fen-card {
          background: rgba(255, 255, 255, 0.88);
          border-radius: 16px;
          border: 0.5px solid rgba(255, 255, 255, 0.7);
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 22px;
          width: 100%;
          opacity: 0;
          transform: translateY(16px);
          animation: fen-float-in 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.07);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .fen-card--active {
          background: rgba(255, 255, 255, 0.97);
          border: 0.5px solid rgba(255, 255, 255, 0.95);
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.10);
          animation: fen-float-in 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards,
                     fen-pulse 3s ease-in-out 0.6s infinite;
        }

        @keyframes fen-float-in {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes fen-pulse {
          0%, 100% { transform: scale(1) translateY(0); }
          50%       { transform: scale(1.012) translateY(-2px); }
        }

        .fen-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          flex-shrink: 0;
        }

        .fen-text {
          font-size: 15px;
          color: #1a1a1a;
          font-weight: 400;
          line-height: 1.4;
          margin: 0;
        }

        .fen-card--active .fen-text {
          font-size: 17px;
          font-weight: 500;
        }

        .fen-dots {
          display: flex;
          gap: 8px;
          margin-top: 28px;
        }

        .fen-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.45);
          border: none;
          cursor: pointer;
          padding: 0;
          transition: background 0.4s;
        }

        .fen-dot--active {
          background: rgba(255, 255, 255, 0.92);
        }

        @media (prefers-reduced-motion: reduce) {
          .fen-wrap { animation: none; }
          .fen-card { animation: none; opacity: 1; transform: none; }
          .fen-card--active { animation: none; }
        }
      `}</style>
    </div>
  );
}