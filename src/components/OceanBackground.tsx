"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  fadeSpeed: number;
  baseOpacity: number;
}

export default function OceanBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, radius: 120 });
  const scrollRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const maxParticles = 60;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize particles
    const initParticles = () => {
      particles = [];
      for (let i = 0; i < maxParticles; i++) {
        const size = Math.random() * 2 + 0.5;
        const opacity = Math.random() * 0.4 + 0.1;
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size,
          speedX: (Math.random() - 0.5) * 0.15,
          speedY: -Math.random() * 0.25 - 0.05, // Float upwards slowly
          opacity,
          fadeSpeed: Math.random() * 0.002 + 0.001,
          baseOpacity: opacity,
        });
      }
    };
    initParticles();

    // Mouse movement listener
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    // Scroll listener to shift coordinates grid
    const handleScroll = () => {
      scrollRef.current = window.scrollY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Draw grid coordinates
    const drawGrid = (context: CanvasRenderingContext2D, w: number, h: number, scrollY: number) => {
      context.strokeStyle = "rgba(30, 41, 59, 0.08)";
      context.lineWidth = 1;
      context.fillStyle = "rgba(71, 85, 105, 0.2)";
      context.font = "9px var(--font-mono)";

      const gridSize = 120;
      const offset = (scrollY * 0.1) % gridSize;

      // Vertical lines (Longitude)
      for (let x = 0; x < w; x += gridSize) {
        context.beginPath();
        context.moveTo(x, 0);
        context.lineTo(x, h);
        context.stroke();

        // Degrees markings
        if (x % (gridSize * 2) === 0) {
          const longitude = Math.floor((x + 100) / 2) % 360;
          context.fillText(`${longitude}° E`, x + 5, 20);
          context.fillText(`${longitude}° E`, x + 5, h - 20);
        }
      }

      // Horizontal lines (Latitude)
      for (let y = -offset; y < h; y += gridSize) {
        context.beginPath();
        context.moveTo(0, y);
        context.lineTo(w, y);
        context.stroke();

        // Degrees markings
        if (Math.abs(y) % (gridSize * 2) === 0) {
          const latitude = Math.floor((y + scrollY + 400) / 3) % 90;
          context.fillText(`${latitude}° N`, 10, y - 5);
          context.fillText(`${latitude}° N`, w - 40, y - 5);
        }
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw Grid
      drawGrid(ctx, canvas.width, canvas.height, scrollRef.current);

      // Update and Draw Particles (Plankton / Stardust)
      particles.forEach((p) => {
        // Move particle
        p.x += p.speedX;
        p.y += p.speedY;

        // Mouse repelling interaction
        const dx = p.x - mouseRef.current.x;
        const dy = p.y - mouseRef.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouseRef.current.radius) {
          const force = (mouseRef.current.radius - distance) / mouseRef.current.radius;
          const angle = Math.atan2(dy, dx);
          p.x += Math.cos(angle) * force * 1.5;
          p.y += Math.sin(angle) * force * 1.5;
        }

        // Recirculate particle if it drifts off top or sides
        if (p.y < -10) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
        }
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;

        // Glow particle
        ctx.beginPath();
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3);
        
        // Gold glowing highlight vs standard bioluminescent silver
        const isGoldHighlight = p.size > 2.2;
        const color = isGoldHighlight 
          ? `rgba(251, 191, 36, ${p.opacity})` 
          : `rgba(148, 163, 184, ${p.opacity})`;

        grad.addColorStop(0, color);
        grad.addColorStop(1, "rgba(0, 0, 0, 0)");
        
        ctx.fillStyle = grad;
        ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 bg-transparent transition-opacity duration-1000"
    />
  );
}
