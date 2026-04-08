import { useState, useEffect, useRef } from "react";

const QUOTES = [
  { id: 1, text: "Love all, Serve all. Help ever, Hurt never." },
  { id: 2, text: "Start the day with love, fill the day with love, end the day with love — that is the way to God." },
  { id: 3, text: "The best way to love God is to love all and serve all." },
  { id: 4, text: "Do not give up; do not lose hope. I am with you always." },
  { id: 5, text: "Life is a challenge — meet it. Life is a dream — realize it. Life is a game — play it. Life is love — enjoy it." },
  { id: 6, text: "I am God. You too are God. The only difference is that I know it and you do not." },
  { id: 7, text: "Patience is all the strength that man needs." },
  { id: 8, text: "Whatever you do, do it as an offering to God." },
  { id: 9, text: "The mind is the cause of both bondage and liberation." },
  { id: 10, text: "Be in the world, but do not let the world be in you." },
  { id: 11, text: "See good, Do good, Be good — this is the way to God." },
  { id: 12, text: "Truth is my name. Love is my nature. Bliss is my form." },
  { id: 13, text: "A man without self-confidence is like a ship without a rudder." },
  { id: 14, text: "God is not to be found in temples or shrines. He is enshrined in every heart." },
  { id: 15, text: "Do not hate anyone. Do not hurt anyone. That is enough." },
  { id: 16, text: "Seva (service) is the highest spiritual practice." },
  { id: 17, text: "Your duty is your worship. Your work is your prayer." },
  { id: 18, text: "Surrender to me and I shall carry your burdens." },
  { id: 19, text: "Where there is faith, there is love. Where there is love, there is peace." },
  { id: 20, text: "Do not be discouraged by failures. Keep trying — I am guiding you." },
  { id: 21, text: "The secret of happiness is not in doing what you like, but in liking what you do." },
  { id: 22, text: "Every act of yours must be sanctified by the feeling that it is done for God." },
  { id: 23, text: "My grace is ever with you. Open your heart and receive it." },
  { id: 24, text: "When you step forward in faith, I shall hold your hand." },
  { id: 25, text: "Be pure in thought, word, and deed. That is the highest sadhana." },
  { id: 26, text: "I am above you, below you, beside you, around you, within you." },
  { id: 27, text: "Do not worry. Everything will happen for the best." },
  { id: 28, text: "The goal of life is to reach the source from which you have come." },
  { id: 29, text: "Character is the most precious thing in life." },
  { id: 30, text: "Silence is the speech of the spiritual seeker." },
  { id: 31, text: "Have firm faith that I am God, and that I shall protect you always." },
  { id: 32, text: "Do not run after name and fame. Run after the truth." },
  { id: 33, text: "God will not ask you what you have read, but what you have done." },
  { id: 34, text: "The heart that loves is always young." },
  { id: 35, text: "The universe is my home. All of humanity is my family." },
  { id: 36, text: "Dedicate everything to God and you will be free from all bondage." },
  { id: 37, text: "Every moment, pray. Every breath, remember me." },
  { id: 38, text: "Happiness is not outside you. It is within you." },
  { id: 39, text: "Let your life be your message." },
  { id: 40, text: "You are not this body. You are the immortal Self." },
  { id: 41, text: "Trust in my timing. I know what is best for you." },
  { id: 42, text: "See no evil, Hear no evil, Speak no evil, Think no evil, Do no evil." },
  { id: 43, text: "The greatest wealth is contentment." },
  { id: 44, text: "You are my own. I will never forsake you." },
  { id: 45, text: "Prayer is the most powerful force in the universe." },
  { id: 46, text: "Service to man is service to God." },
  { id: 47, text: "Where there is righteousness in the heart, there is beauty in character." },
  { id: 48, text: "When there is beauty in character, there is harmony in the home." },
  { id: 49, text: "When there is harmony in the home, there is order in the nation." },
  { id: 50, text: "When there is order in the nation, there is peace in the world." },
  { id: 51, text: "I have come to light the lamp of love in your hearts." },
  { id: 52, text: "You need not search for me far and wide. I am in your own heart." },
  { id: 53, text: "The divine is not far — it is nearer than your own breath." },
  { id: 54, text: "Do not fear. Do not waver. I am always with you." },
  { id: 55, text: "Every sunrise is God's invitation to make life beautiful today." },
  { id: 56, text: "Let your love flow to all — that is my greatest teaching." },
  { id: 57, text: "Difficulties are opportunities to demonstrate your faith." },
  { id: 58, text: "The only test I give you is the test of love." },
  { id: 59, text: "Give and forgive — that is the way to inner peace." },
  { id: 60, text: "I am the master of the universe, but I am the servant of my devotees." },
  { id: 61, text: "Your smile is the best flower you can offer God." },
  { id: 62, text: "Speak softly, act rightly, think purely — that is my way." },
  { id: 63, text: "The greatest miracle is a changed heart." },
  { id: 64, text: "Be firm in your faith and I shall firm up your path." },
  { id: 65, text: "There is only one religion — the religion of love." },
  { id: 66, text: "There is only one language — the language of the heart." },
  { id: 67, text: "There is only one caste — the caste of humanity." },
  { id: 68, text: "There is only one God — He is omnipresent." },
  { id: 69, text: "My hand is always stretched out to lift you when you fall." },
  { id: 70, text: "I am the indweller of all hearts. To see me, look within." },
  { id: 71, text: "Lose yourself in service — you will find yourself in God." },
  { id: 72, text: "The mind that is calm can hear the voice of God." },
  { id: 73, text: "Even a small step toward God is met with a thousand steps from His side." },
  { id: 74, text: "Do not look at others' faults. Look at your own." },
  { id: 75, text: "Forgiveness is the ornament of the brave." },
  { id: 76, text: "Whatever happens, remember — I am making it happen for your good." },
  { id: 77, text: "Offer me only one thing — a pure heart full of love." },
  { id: 78, text: "My love for you is unconditional and eternal." },
  { id: 79, text: "The day you hold my hand, all your burdens become mine." },
  { id: 80, text: "Keep your mind on the goal — God. Everything else will be taken care of." },
  { id: 81, text: "Discipline is the hallmark of the true devotee." },
  { id: 82, text: "Speak truth even if it is unpleasant. Never speak an untruth even if it is pleasant." },
  { id: 83, text: "The devotee who is pure in heart will always be protected by God." },
  { id: 84, text: "Your faith is your shield. Keep it polished and strong." },
  { id: 85, text: "Time wasted is life wasted. Use every moment for good." },
  { id: 86, text: "You did not come into this world by chance. You came with a purpose." },
  { id: 87, text: "I shall never give you more than you can bear. I am watching over you." },
  { id: 88, text: "Detachment is not indifference. It is the freedom to love all equally." },
  { id: 89, text: "Even in your darkest hour, my light is burning within you." },
  { id: 90, text: "Trust the process. Everything is unfolding exactly as it should." },
  { id: 91, text: "The sweetest name you can call God is 'Mother'." },
  { id: 92, text: "Be good, do good, see good — this leads to God." },
  { id: 93, text: "Soften the heart and you will feel my presence always." },
  { id: 94, text: "The devotee who surrenders fully has nothing more to fear." },
  { id: 95, text: "I am the truth behind all truths. Seek me and you find all." },
  { id: 96, text: "Your tears are not wasted — I collect every one of them." },
  { id: 97, text: "The easiest path to God is gratitude." },
  { id: 98, text: "What you give in love comes back to you multiplied." },
  { id: 99, text: "My grace falls like rain — equally on all. Open your umbrella of faith." },
  { id: 100, text: "The world is a bridge — cross it but do not build your house on it." },
  { id: 101, text: "Do your best and leave the rest to me." },
  { id: 102, text: "The seed of God's love is already planted in you. Water it with prayer." },
  { id: 103, text: "Come to me with an empty cup and I will fill it with bliss." },
  { id: 104, text: "I am the doer of all things. You are only an instrument. Act knowing this." },
  { id: 105, text: "Turn your ear inward — that is where my voice speaks loudest." },
  { id: 106, text: "The purpose of human life is to realize that you are divine." },
  { id: 107, text: "Worry not about tomorrow. I have already been there." },
  { id: 108, text: "You and I are one. The separation is only in your mind." },
];

const MAX_DAILY = 3;
const STORAGE_KEY = "askSwami_v1";

function getTodayStr() {
  return new Date().toISOString().slice(0, 10);
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { date: getTodayStr(), count: 0, history: [] };
    const s = JSON.parse(raw);
    if (s.date !== getTodayStr()) return { date: getTodayStr(), count: 0, history: [] };
    return s;
  } catch { return { date: getTodayStr(), count: 0, history: [] }; }
}

function saveState(s) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
}

// ── Particle field ──────────────────────────────────────────────────────────
function Particles() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let W, H, particles = [], raf;
    function resize() {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    }
    resize();
    window.addEventListener("resize", resize);
    for (let i = 0; i < 55; i++) {
      particles.push({
        x: Math.random() * W, y: Math.random() * H,
        r: Math.random() * 2.5 + 0.5,
        vx: (Math.random() - 0.5) * 0.3,
        vy: -Math.random() * 0.4 - 0.1,
        alpha: Math.random() * 0.5 + 0.2,
      });
    }
    function draw() {
      ctx.clearRect(0, 0, W, H);
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 200, 100, ${p.alpha})`;
        ctx.fill();
        p.x += p.vx; p.y += p.vy;
        p.alpha -= 0.001;
        if (p.y < -5 || p.alpha <= 0) {
          p.x = Math.random() * W; p.y = H + 5;
          p.alpha = Math.random() * 0.5 + 0.2;
          p.vx = (Math.random() - 0.5) * 0.3;
          p.vy = -Math.random() * 0.4 - 0.1;
        }
      });
      raf = requestAnimationFrame(draw);
    }
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }} />;
}

// ── Mandir SVG Silhouette ────────────────────────────────────────────────────
function MandirSilhouette() {
  return (
    <svg viewBox="0 0 900 320" style={{ width: "100%", maxWidth: 900, display: "block", margin: "0 auto" }} aria-hidden="true">
      <defs>
        <linearGradient id="sg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c2185b" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#880e4f" stopOpacity="0.4" />
        </linearGradient>
      </defs>
      {/* ground */}
      <rect x="0" y="290" width="900" height="30" fill="url(#sg)" opacity="0.3" />
      {/* flanking towers left */}
      <rect x="60" y="200" width="40" height="90" fill="url(#sg)" />
      <polygon points="60,200 80,170 100,200" fill="url(#sg)" />
      <rect x="70" y="163" width="20" height="10" fill="#ff8f00" opacity="0.7" />
      <rect x="120" y="220" width="30" height="70" fill="url(#sg)" />
      <polygon points="120,220 135,197 150,220" fill="url(#sg)" />
      {/* flanking towers right */}
      <rect x="800" y="200" width="40" height="90" fill="url(#sg)" />
      <polygon points="800,200 820,170 840,200" fill="url(#sg)" />
      <rect x="810" y="163" width="20" height="10" fill="#ff8f00" opacity="0.7" />
      <rect x="750" y="220" width="30" height="70" fill="url(#sg)" />
      <polygon points="750,220 765,197 780,220" fill="url(#sg)" />
      {/* main plinth */}
      <rect x="200" y="255" width="500" height="35" rx="2" fill="url(#sg)" />
      <rect x="230" y="240" width="440" height="20" rx="2" fill="url(#sg)" />
      {/* colonnaded corridor */}
      {[260,310,360,410,460,510,560,610].map((x,i) => (
        <rect key={i} x={x} y="200" width="12" height="45" fill="url(#sg)" />
      ))}
      <rect x="248" y="195" width="400" height="12" rx="2" fill="url(#sg)" />
      {/* main tower body */}
      <rect x="330" y="130" width="240" height="115" rx="4" fill="url(#sg)" />
      {/* arches on tower */}
      {[350,400,450,500].map((x,i)=>(
        <path key={i} d={`M${x},240 Q${x+20},205 ${x+40},240`} fill="none" stroke="#ff8f00" strokeWidth="1.5" opacity="0.5" />
      ))}
      {/* dome base */}
      <rect x="355" y="80" width="190" height="55" rx="6" fill="url(#sg)" />
      {/* main dome — iconic lotus shape */}
      <ellipse cx="450" cy="75" rx="110" ry="65" fill="url(#sg)" />
      {/* lotus petal ridges on dome */}
      {[-70,-45,-20,0,20,45,70].map((dx,i)=>(
        <ellipse key={i} cx={450+dx} cy={75} rx="18" ry="58" fill="none" stroke="#ff8f00" strokeWidth="0.8" opacity="0.4" />
      ))}
      {/* dome highlight band */}
      <ellipse cx="450" cy="62" rx="80" ry="18" fill="#ff8f00" opacity="0.12" />
      {/* secondary dome */}
      <ellipse cx="450" cy="25" rx="38" ry="28" fill="url(#sg)" />
      {/* finial stem */}
      <rect x="446" y="-10" width="8" height="40" rx="3" fill="#ff8f00" opacity="0.8" />
      {/* star of Sai at top */}
      <g transform="translate(450,−15)" opacity="0.9">
        <polygon points="450,-18 453,-8 463,-8 455,-2 458,8 450,3 442,8 445,-2 437,-8 447,-8" fill="#FFD54F" />
      </g>
      {/* Om symbol subtle */}
      <text x="450" y="178" textAnchor="middle" fontSize="22" fill="#ff8f00" opacity="0.25" fontFamily="serif">ॐ</text>
      {/* windows */}
      {[380,430,480,530].map((x,i)=>(
        <rect key={i} x={x} y="155" width="20" height="28" rx="10" fill="#ff8f00" opacity="0.2" />
      ))}
      {/* reflection glow on ground */}
      <ellipse cx="450" cy="292" rx="200" ry="10" fill="#ff8f00" opacity="0.08" />
    </svg>
  );
}

// ── Lotus decorative ────────────────────────────────────────────────────────
function Lotus({ size = 48, opacity = 0.5 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" style={{ opacity }} aria-hidden="true">
      {[0,45,90,135,180,225,270,315].map((deg,i)=>(
        <ellipse key={i} cx="24" cy="24" rx="7" ry="16"
          transform={`rotate(${deg} 24 24)`}
          fill="none" stroke="#e91e8c" strokeWidth="0.8" />
      ))}
      <circle cx="24" cy="24" r="5" fill="#e91e8c" opacity="0.4" />
    </svg>
  );
}

// ── Chit animation ──────────────────────────────────────────────────────────
function ChitReveal({ quote, image, onClose }) {
  const [phase, setPhase] = useState("glow"); // glow → unfold → show
  useEffect(() => {
    const t1 = setTimeout(() => setPhase("unfold"), 800);
    const t2 = setTimeout(() => setPhase("show"), 2000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 100,
      background: "rgba(10,0,20,0.92)",
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      padding: "2rem",
    }}>
      {/* glow ring */}
      <div style={{
        position: "relative",
        width: phase === "show" ? 340 : 80,
        height: phase === "show" ? "auto" : 80,
        transition: "width 0.8s cubic-bezier(0.34,1.56,0.64,1)",
      }}>
        {/* golden glow circle */}
        {phase === "glow" && (
          <div style={{
            width: 80, height: 80, borderRadius: "50%",
            background: "radial-gradient(circle, #FFD54F 0%, #ff8f00 40%, transparent 70%)",
            animation: "pulse 0.8s ease-in-out infinite alternate",
            margin: "0 auto",
          }} />
        )}
        {phase !== "glow" && (
          <div style={{
            background: "linear-gradient(145deg, #fff8e1, #fff3e0)",
            borderRadius: 16,
            border: "2px solid #FFD54F",
            boxShadow: "0 0 40px rgba(255, 213, 79, 0.5), 0 0 80px rgba(233,30,140,0.2)",
            padding: "2rem",
            transformOrigin: "top center",
            animation: phase === "unfold" ? "unfold 1.2s cubic-bezier(0.34,1.56,0.64,1) forwards" : "none",
            opacity: phase === "show" ? 1 : 0.7,
            transition: "opacity 0.5s",
            textAlign: "center",
          }}>
            {image && (
              <div style={{ marginBottom: "1.2rem" }}>
                <img
                  src={image}
                  alt="Swami"
                  style={{
                    width: 140, height: 140, objectFit: "cover",
                    borderRadius: "50%",
                    border: "3px solid #FFD54F",
                    boxShadow: "0 0 24px rgba(255,213,79,0.4)",
                  }}
                  onError={e => { e.target.style.display = "none"; }}
                />
              </div>
            )}
            <div style={{ fontSize: 28, marginBottom: 8, color: "#e91e8c" }}>ॐ</div>
            <p style={{
              fontSize: "1.1rem",
              fontFamily: "'Playfair Display', Georgia, serif",
              color: "#4a0e2c",
              lineHeight: 1.7,
              fontStyle: "italic",
              margin: "0 0 1.2rem",
            }}>
              "{quote.text}"
            </p>
            <p style={{ fontSize: "0.8rem", color: "#b06090", marginBottom: "1.5rem" }}>
              — Sri Sathya Sai Baba &nbsp;·&nbsp; Chit #{quote.id}
            </p>
            <button onClick={onClose} style={{
              background: "linear-gradient(135deg, #c2185b, #e91e8c)",
              color: "#fff",
              border: "none",
              borderRadius: 50,
              padding: "0.7rem 2.2rem",
              fontSize: "0.95rem",
              cursor: "pointer",
              letterSpacing: "0.06em",
              fontFamily: "'Playfair Display', serif",
            }}>
              🙏 &nbsp; Sai Ram
            </button>
          </div>
        )}
      </div>
      <style>{`
        @keyframes pulse { from { transform: scale(1); opacity: 0.8; } to { transform: scale(1.3); opacity: 1; } }
        @keyframes unfold { from { transform: scaleY(0.05) scaleX(0.6); opacity: 0; } to { transform: scaleY(1) scaleX(1); opacity: 1; } }
      `}</style>
    </div>
  );
}

// ── Login Screen ─────────────────────────────────────────────────────────────
function LoginScreen({ onLogin }) {
  return (
    <div style={{ textAlign: "center", padding: "3rem 1.5rem", maxWidth: 420, margin: "0 auto" }}>
      <div style={{ marginBottom: "1.5rem" }}>
        <Lotus size={56} opacity={0.7} />
      </div>
      <h2 style={{
        fontFamily: "'Playfair Display', Georgia, serif",
        fontSize: "1.6rem", fontWeight: 700,
        color: "#FFD54F", marginBottom: "0.5rem",
        textShadow: "0 0 20px rgba(255,213,79,0.4)",
      }}>
        Sai Ram 🙏
      </h2>
      <p style={{
        color: "#ffb3d9", fontSize: "0.95rem",
        lineHeight: 1.7, marginBottom: "2.5rem",
        fontFamily: "'Playfair Display', Georgia, serif",
        fontStyle: "italic",
      }}>
        "Surrender to Him before you seek.<br />He who knocks with love, finds the door open."
      </p>
      <p style={{ color: "#d48fb0", fontSize: "0.85rem", marginBottom: "2rem" }}>
        Please sign in to seek Swami's blessings
      </p>
      <button onClick={() => onLogin("google")} style={{
        display: "flex", alignItems: "center", gap: "0.8rem",
        background: "rgba(255,255,255,0.08)",
        border: "1px solid rgba(255,213,79,0.4)",
        borderRadius: 50, padding: "0.8rem 2rem",
        color: "#fff", fontSize: "0.95rem",
        cursor: "pointer", margin: "0 auto 1rem",
        width: "100%", maxWidth: 280,
        justifyContent: "center",
        transition: "all 0.3s",
        fontFamily: "sans-serif",
      }}
        onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.15)"}
        onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.08)"}
      >
        <svg width="20" height="20" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
        Continue with Google
      </button>
      <button onClick={() => onLogin("apple")} style={{
        display: "flex", alignItems: "center", gap: "0.8rem",
        background: "rgba(255,255,255,0.08)",
        border: "1px solid rgba(255,213,79,0.4)",
        borderRadius: 50, padding: "0.8rem 2rem",
        color: "#fff", fontSize: "0.95rem",
        cursor: "pointer", margin: "0 auto",
        width: "100%", maxWidth: 280,
        justifyContent: "center",
        transition: "all 0.3s",
        fontFamily: "sans-serif",
      }}
        onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.15)"}
        onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.08)"}
      >
        <svg width="18" height="20" viewBox="0 0 814 1000" fill="white">
          <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46 680.7-.5 605.6-.5 534.1c0-159.5 104.8-243.4 209.5-243.4 55.4 0 101.5 36.4 135.5 36.4 32.6 0 83.8-38.9 148.7-38.9 23.8 0 108.1 2.2 167.2 80.4z"/>
          <path d="M554.1 116.1c26.3-31.1 44.6-74.9 44.6-118.7 0-6.1-.5-12.2-1.6-17.2-42.3 1.6-93.4 28.3-123.9 63.9-23.3 26.3-44.6 70.5-44.6 114.3 0 6.7 1.1 13.4 1.6 15.5 2.7.5 7.2 1.1 11.6 1.1 37.9 0 86.2-25.2 112.3-58.9z"/>
        </svg>
        Continue with Apple
      </button>
      <p style={{ color: "rgba(255,179,217,0.4)", fontSize: "0.72rem", marginTop: "2rem" }}>
        Only for those who believe in the divine form of Sri Sathya Sai Baba
      </p>
    </div>
  );
}

// ── Main Chit Picker ─────────────────────────────────────────────────────────
function ChitPicker({ user, state, onAsk, onLogout }) {
  const [mode, setMode] = useState("swami"); // "swami" | "choose"
  const [chosenNum, setChosenNum] = useState(0);
  const attemptsLeft = MAX_DAILY - state.count;

  return (
    <div style={{ maxWidth: 520, margin: "0 auto", padding: "2rem 1.5rem", textAlign: "center" }}>
      {/* user pill */}
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "1.5rem" }}>
        <div style={{
          display: "flex", alignItems: "center", gap: "0.5rem",
          background: "rgba(255,255,255,0.07)",
          border: "1px solid rgba(255,213,79,0.25)",
          borderRadius: 50, padding: "0.4rem 1rem",
        }}>
          <div style={{
            width: 26, height: 26, borderRadius: "50%",
            background: "linear-gradient(135deg,#c2185b,#ff8f00)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 13, color: "#fff", fontWeight: 700,
          }}>
            {user.name[0].toUpperCase()}
          </div>
          <span style={{ color: "#ffb3d9", fontSize: "0.8rem" }}>{user.name}</span>
          <button onClick={onLogout} style={{
            background: "none", border: "none", color: "rgba(255,179,217,0.5)",
            cursor: "pointer", fontSize: "0.75rem", padding: 0,
          }}>✕</button>
        </div>
      </div>

      <Lotus size={44} opacity={0.6} />

      <h2 style={{
        fontFamily: "'Playfair Display', Georgia, serif",
        fontSize: "1.5rem", color: "#FFD54F",
        margin: "1rem 0 0.5rem",
        textShadow: "0 0 20px rgba(255,213,79,0.3)",
      }}>
        Seek Swami's Blessings
      </h2>

      <p style={{
        fontFamily: "'Playfair Display', Georgia, serif",
        color: "#d48fb0", fontSize: "0.9rem",
        fontStyle: "italic", lineHeight: 1.8,
        marginBottom: "2rem",
      }}>
        Close your eyes. Think of Swami.<br />
        Hold your situation gently in your heart.<br />
        Then ask.
      </p>

      {/* mode toggle */}
      <div style={{
        display: "flex", background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,213,79,0.2)",
        borderRadius: 50, padding: 4, marginBottom: "1.8rem",
        maxWidth: 320, margin: "0 auto 1.8rem",
      }}>
        {["swami","choose"].map(m => (
          <button key={m} onClick={() => setMode(m)} style={{
            flex: 1, padding: "0.55rem 1rem",
            borderRadius: 50, border: "none",
            background: mode === m ? "linear-gradient(135deg,#c2185b,#e91e8c)" : "transparent",
            color: mode === m ? "#fff" : "#d48fb0",
            cursor: "pointer", fontSize: "0.85rem",
            transition: "all 0.3s",
            fontFamily: "'Playfair Display', serif",
          }}>
            {m === "swami" ? "🙏 Let Swami Decide" : "🔢 Choose a Number"}
          </button>
        ))}
      </div>

      {mode === "choose" && (
        <div style={{ marginBottom: "1.5rem" }}>
          <p style={{
            color: "#d48fb0", fontSize: "0.88rem",
            fontStyle: "italic", marginBottom: "1rem", lineHeight: 1.7,
          }}>
            Close your eyes. Let a number arise in your heart.<br />
            Then enter it below.
          </p>
          <input
            type="number" min="1" max="108"
            value={chosenNum === 0 ? "" : chosenNum}
            onChange={e => {
              const v = parseInt(e.target.value);
              if (!e.target.value) { setChosenNum(0); return; }
              if (v >= 1 && v <= 108) setChosenNum(v);
            }}
            placeholder="1 – 108"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1.5px solid rgba(255,213,79,0.4)",
              borderRadius: 12,
              color: "#FFD54F",
              fontSize: "2rem",
              fontFamily: "'Playfair Display', serif",
              textAlign: "center",
              width: 130,
              padding: "0.6rem 0.5rem",
              outline: "none",
              boxShadow: "0 0 16px rgba(255,213,79,0.15)",
            }}
          />
          {chosenNum > 0 && (
            <p style={{ color: "rgba(255,143,0,0.6)", fontSize: "0.75rem", marginTop: "0.6rem" }}>
              Chit #{chosenNum} selected
            </p>
          )}
        </div>
      )}

      {/* ask button */}
      {attemptsLeft > 0 ? (
        <button
          onClick={() => onAsk(mode === "swami" ? null : chosenNum)}
          disabled={mode === "choose" && chosenNum === 0}
          style={{
          background: (mode === "choose" && chosenNum === 0)
            ? "rgba(255,255,255,0.08)"
            : "linear-gradient(135deg, #880e4f, #c2185b, #e91e8c)",
          border: "none", borderRadius: 50,
          padding: "1rem 3rem", fontSize: "1.05rem",
          color: (mode === "choose" && chosenNum === 0) ? "#a06080" : "#fff",
          cursor: (mode === "choose" && chosenNum === 0) ? "not-allowed" : "pointer",
          fontFamily: "'Playfair Display', serif",
          letterSpacing: "0.06em",
          boxShadow: (mode === "choose" && chosenNum === 0) ? "none" : "0 0 30px rgba(233,30,140,0.4), 0 0 60px rgba(233,30,140,0.1)",
          transition: "all 0.3s",
          marginBottom: "1.5rem",
        }}>
          🌸 Ask Swami
        </button>
      ) : (
        <div style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,213,79,0.2)",
          borderRadius: 16, padding: "1.5rem",
          marginBottom: "1.5rem",
        }}>
          <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>🙏</div>
          <p style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            color: "#FFD54F", fontSize: "1rem",
            fontStyle: "italic", lineHeight: 1.8,
          }}>
            "Swami has blessed you enough for today.<br />
            Return tomorrow with a fresh heart."
          </p>
          <p style={{ color: "#d48fb0", fontSize: "0.8rem", marginTop: "0.8rem" }}>
            You have received all 3 blessings for today
          </p>
        </div>
      )}

      {/* attempt dots */}
      <div style={{ display: "flex", gap: 8, justifyContent: "center", marginBottom: "0.5rem" }}>
        {[1,2,3].map(i => (
          <div key={i} style={{
            width: 10, height: 10, borderRadius: "50%",
            background: i <= state.count
              ? "linear-gradient(135deg,#c2185b,#e91e8c)"
              : "rgba(255,255,255,0.15)",
            border: "1px solid rgba(255,213,79,0.3)",
            transition: "all 0.4s",
          }} />
        ))}
      </div>
      <p style={{ color: "rgba(212,143,176,0.6)", fontSize: "0.75rem" }}>
        {attemptsLeft > 0
          ? `${attemptsLeft} blessing${attemptsLeft > 1 ? "s" : ""} remaining today`
          : "Blessings reset at midnight"}
      </p>

      {/* recent history */}
      {state.history.length > 0 && (
        <div style={{ marginTop: "2rem", textAlign: "left" }}>
          <p style={{ color: "rgba(212,143,176,0.5)", fontSize: "0.75rem", marginBottom: "0.8rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>
            Today's Answers
          </p>
          {state.history.map((h, i) => (
            <div key={i} style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,213,79,0.1)",
              borderRadius: 10, padding: "0.8rem 1rem",
              marginBottom: "0.5rem",
            }}>
              <span style={{ color: "#ff8f00", fontSize: "0.75rem" }}>#{h.id} &nbsp;</span>
              <span style={{
                color: "#d48fb0", fontSize: "0.82rem",
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
              }}>
                "{h.text.length > 80 ? h.text.slice(0,77)+"…" : h.text}"
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Root App ─────────────────────────────────────────────────────────────────
export default function AskSwami() {
  const [user, setUser] = useState(null);
  const [state, setState] = useState(loadState);
  const [reveal, setReveal] = useState(null); // { quote, image }
  const [screen, setScreen] = useState("landing"); // landing | login | main

  function handleLogin(provider) {
    const name = provider === "google" ? "Sai Devotee" : "Sai Devotee";
    setUser({ name, provider });
    setScreen("main");
  }

  function handleAsk(num) {
    if (state.count >= MAX_DAILY) return;
    const id = num || Math.floor(Math.random() * 108) + 1;
    const quote = QUOTES.find(q => q.id === id) || QUOTES[id - 1];
    const imgExts = ["jpg","jpeg","jfif","png"];
    // Try the numbered image — user will place in /images/ folder
    const imageUrl = `images/${id}.jpg`;
    const newState = {
      date: getTodayStr(),
      count: state.count + 1,
      history: [quote, ...state.history].slice(0, 3),
    };
    setState(newState);
    saveState(newState);
    setReveal({ quote, image: imageUrl });
  }

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(160deg, #1a0010 0%, #2d0030 30%, #1a000d 60%, #0d0005 100%)",
      color: "#fff",
      fontFamily: "'Playfair Display', Georgia, serif",
      position: "relative",
      overflow: "hidden",
    }}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />

      <Particles />

      {/* ambient glow orbs */}
      <div style={{
        position: "absolute", top: "10%", left: "5%",
        width: 300, height: 300, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(233,30,140,0.12) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", top: "30%", right: "5%",
        width: 400, height: 400, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(255,143,0,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* ── Landing ── */}
        {screen === "landing" && (
          <div>
            {/* header */}
            <div style={{ textAlign: "center", padding: "3rem 1rem 0" }}>
              <p style={{ color: "#ff8f00", fontSize: "0.8rem", letterSpacing: "0.25em", marginBottom: "0.5rem" }}>
                ✦ &nbsp; PRASANTHI NILAYAM &nbsp; · &nbsp; PUTTAPARTHI &nbsp; ✦
              </p>
              <h1 style={{
                fontSize: "clamp(2.2rem, 6vw, 4rem)",
                fontWeight: 700, letterSpacing: "0.04em",
                background: "linear-gradient(135deg, #FFD54F, #ff8f00, #e91e8c)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                marginBottom: "0.3rem", lineHeight: 1.15,
              }}>
                Ask Swami
              </h1>
              <p style={{
                color: "#d48fb0", fontSize: "1rem",
                fontStyle: "italic", marginBottom: "0.5rem",
              }}>
                "I am above you, below you, beside you, around you, in you"
              </p>
              <p style={{ color: "rgba(212,143,176,0.5)", fontSize: "0.8rem", letterSpacing: "0.1em" }}>
                — Sri Sathya Sai Baba
              </p>
            </div>

            {/* mandir */}
            <div style={{ padding: "1rem 0", opacity: 0.9 }}>
              <MandirSilhouette />
            </div>

            {/* description */}
            <div style={{
              maxWidth: 480, margin: "0 auto",
              padding: "0 1.5rem 2rem",
              textAlign: "center",
            }}>
              <p style={{
                color: "#d48fb0", lineHeight: 1.9,
                fontSize: "0.92rem", marginBottom: "2rem",
              }}>
                An adaptation of the sacred <em>"Answers from Swamy"</em> booklet,
                available at Sri Sathya Sai Baba Ashrams worldwide.
                Think of Swami. Hold your situation in your heart.
                Let Him answer through the chit.
              </p>

              <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", marginBottom: "2.5rem" }}>
                {[["🌸","108 Divine Answers"],["🙏","3 Blessings Daily"],["✨","Swami Decides"]].map(([icon, label]) => (
                  <div key={label} style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "1.4rem", marginBottom: "0.3rem" }}>{icon}</div>
                    <div style={{ color: "#ff8f00", fontSize: "0.72rem", letterSpacing: "0.05em" }}>{label}</div>
                  </div>
                ))}
              </div>

              <button onClick={() => setScreen("login")} style={{
                background: "linear-gradient(135deg, #880e4f, #c2185b, #e91e8c)",
                border: "none", borderRadius: 50,
                padding: "1rem 3rem", fontSize: "1.05rem",
                color: "#fff", cursor: "pointer",
                letterSpacing: "0.08em",
                boxShadow: "0 0 40px rgba(233,30,140,0.4)",
                fontFamily: "'Playfair Display', serif",
              }}>
                🌸 &nbsp; Enter the Sanctuary
              </button>

              <div style={{ marginTop: "3rem", padding: "1.2rem", background: "rgba(255,255,255,0.03)", borderRadius: 12, border: "1px solid rgba(255,213,79,0.1)" }}>
                <p style={{ color: "rgba(212,143,176,0.6)", fontSize: "0.75rem", lineHeight: 1.8 }}>
                  This website is only for those who believe in the divine form of<br />
                  Sri Sathya Sai Baba and seek His blessings.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ── Login ── */}
        {screen === "login" && (
          <div>
            <div style={{ textAlign: "center", padding: "2rem 1rem 1rem" }}>
              <button onClick={() => setScreen("landing")} style={{
                background: "none", border: "none",
                color: "#d48fb0", cursor: "pointer", fontSize: "0.85rem",
              }}>← Back</button>
            </div>
            <MandirSilhouette />
            <LoginScreen onLogin={handleLogin} />
          </div>
        )}

        {/* ── Main ── */}
        {screen === "main" && user && (
          <div>
            <div style={{ textAlign: "center", padding: "1.5rem 1rem 0" }}>
              <p style={{ color: "#ff8f00", fontSize: "0.72rem", letterSpacing: "0.2em" }}>
                ✦ &nbsp; PRASANTHI NILAYAM &nbsp; ✦
              </p>
              <h1 style={{
                fontSize: "2rem", fontWeight: 700,
                background: "linear-gradient(135deg, #FFD54F, #ff8f00, #e91e8c)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                marginBottom: 0,
              }}>Ask Swami</h1>
            </div>
            <div style={{ maxHeight: 140, overflow: "hidden", opacity: 0.6 }}>
              <MandirSilhouette />
            </div>
            <ChitPicker
              user={user}
              state={state}
              onAsk={handleAsk}
              onLogout={() => { setUser(null); setScreen("landing"); }}
            />
          </div>
        )}
      </div>

      {/* chit reveal overlay */}
      {reveal && (
        <ChitReveal
          quote={reveal.quote}
          image={reveal.image}
          onClose={() => setReveal(null)}
        />
      )}
    </div>
  );
}
