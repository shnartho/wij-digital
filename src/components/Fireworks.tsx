import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  color: string;
  size: number;
  angle: number;
  trail: { x: number; y: number }[];
}

interface Rocket {
  x: number;
  y: number;
  vy: number;
  color: string;
  targetY: number;
  trail: { x: number; y: number; opacity: number }[];
}

const Fireworks = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const rockets = useRef<Rocket[]>([]);
  const animationFrameId = useRef<number>();
  const startTime = useRef<number>(Date.now());

  const colors = [
    "#FFD700", // Gold
    "#FF6B6B", // Red
    "#4ECDC4", // Cyan
    "#45B7D1", // Blue
    "#FFA07A", // Light Salmon
    "#98D8C8", // Mint
    "#F7DC6F", // Yellow
    "#BB8FCE", // Purple
    "#85C1E2", // Sky Blue
  ];

  const launchRocket = (x: number) => {
    const color = colors[Math.floor(Math.random() * colors.length)];
    rockets.current.push({
      x,
      y: window.innerHeight,
      vy: -8 - Math.random() * 4,
      color,
      targetY: window.innerHeight * 0.2 + Math.random() * window.innerHeight * 0.3,
      trail: [],
    });
  };

  const createExplosion = (x: number, y: number, color: string) => {
    const numParticles = 80 + Math.random() * 40;

    for (let i = 0; i < numParticles; i++) {
      const angle = (Math.PI * 2 * i) / numParticles + (Math.random() - 0.5) * 0.2;
      const velocity = 3 + Math.random() * 5;
      
      particles.current.push({
        x,
        y,
        vx: Math.cos(angle) * velocity,
        vy: Math.sin(angle) * velocity,
        life: 0,
        maxLife: 60 + Math.random() * 40,
        color,
        size: 2 + Math.random() * 2,
        angle,
        trail: [],
      });
    }
  };

  const updateRockets = () => {
    rockets.current = rockets.current.filter((r) => {
      // Update trail
      r.trail.push({ x: r.x, y: r.y, opacity: 1 });
      if (r.trail.length > 10) r.trail.shift();
      r.trail.forEach((t, i) => {
        t.opacity = i / r.trail.length;
      });

      r.y += r.vy;
      
      // Explode when reaching target height
      if (r.y <= r.targetY) {
        createExplosion(r.x, r.y, r.color);
        return false;
      }
      return true;
    });
  };

  const updateParticles = () => {
    particles.current = particles.current.filter((p) => {
      // Store trail
      p.trail.push({ x: p.x, y: p.y });
      if (p.trail.length > 8) p.trail.shift();

      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.15; // Gravity
      p.vx *= 0.98; // Air resistance
      p.vy *= 0.98;
      p.life++;
      return p.life < p.maxLife;
    });
  };

  const drawRockets = (ctx: CanvasRenderingContext2D) => {
    rockets.current.forEach((r) => {
      // Draw trail
      r.trail.forEach((t) => {
        ctx.fillStyle = r.color;
        ctx.globalAlpha = t.opacity * 0.6;
        ctx.beginPath();
        ctx.arc(t.x, t.y, 2, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw rocket
      ctx.fillStyle = r.color;
      ctx.globalAlpha = 1;
      ctx.beginPath();
      ctx.arc(r.x, r.y, 3, 0, Math.PI * 2);
      ctx.fill();
    });
  };

  const drawParticles = (ctx: CanvasRenderingContext2D) => {
    particles.current.forEach((p) => {
      const opacity = 1 - p.life / p.maxLife;
      
      // Draw sparkle trail
      if (p.trail.length > 1) {
        ctx.strokeStyle = p.color;
        ctx.lineWidth = p.size;
        ctx.globalAlpha = opacity * 0.5;
        ctx.beginPath();
        ctx.moveTo(p.trail[0].x, p.trail[0].y);
        for (let i = 1; i < p.trail.length; i++) {
          ctx.lineTo(p.trail[i].x, p.trail[i].y);
        }
        ctx.stroke();
      }

      // Draw main sparkle as a small star-like shape
      ctx.fillStyle = p.color;
      ctx.globalAlpha = opacity;
      
      // Draw cross/star shape for sparkle effect
      const len = p.size * 2;
      ctx.lineWidth = p.size;
      ctx.strokeStyle = p.color;
      
      ctx.beginPath();
      ctx.moveTo(p.x - len, p.y);
      ctx.lineTo(p.x + len, p.y);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.moveTo(p.x, p.y - len);
      ctx.lineTo(p.x, p.y + len);
      ctx.stroke();
      
      // Add diagonal lines for more sparkle
      ctx.beginPath();
      ctx.moveTo(p.x - len * 0.7, p.y - len * 0.7);
      ctx.lineTo(p.x + len * 0.7, p.y + len * 0.7);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.moveTo(p.x - len * 0.7, p.y + len * 0.7);
      ctx.lineTo(p.x + len * 0.7, p.y - len * 0.7);
      ctx.stroke();
    });

    ctx.globalAlpha = 1;
  };

  const animate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    updateRockets();
    updateParticles();
    drawRockets(ctx);
    drawParticles(ctx);

    // Launch rockets at intervals for the first 3 seconds
    const elapsed = Date.now() - startTime.current;
    if (elapsed < 3000 && Math.random() < 0.08) {
      const x = window.innerWidth * 0.2 + Math.random() * window.innerWidth * 0.6;
      launchRocket(x);
    }

    // Continue animation if there are particles, rockets, or if we're still in the firework period
    if (particles.current.length > 0 || rockets.current.length > 0 || elapsed < 3000) {
      animationFrameId.current = requestAnimationFrame(animate);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Set canvas size
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);

    // Start the fireworks show
    setTimeout(() => {
      animationFrameId.current = requestAnimationFrame(animate);
    }, 500);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      window.removeEventListener("resize", updateCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{ mixBlendMode: "screen" }}
    />
  );
};

export default Fireworks;
