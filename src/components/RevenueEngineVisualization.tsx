import { useEffect, useRef } from "react";

export const RevenueEngineVisualization = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    // Node positions (normalized 0-1)
    const nodes = [
      { x: 0.5, y: 0.15, size: 12, label: "Data Input" },
      { x: 0.25, y: 0.35, size: 10, label: "Analysis" },
      { x: 0.75, y: 0.35, size: 10, label: "Targeting" },
      { x: 0.15, y: 0.55, size: 8 },
      { x: 0.5, y: 0.5, size: 16, label: "AI Core" },
      { x: 0.85, y: 0.55, size: 8 },
      { x: 0.3, y: 0.7, size: 9, label: "Optimization" },
      { x: 0.7, y: 0.7, size: 9, label: "Distribution" },
      { x: 0.5, y: 0.85, size: 14, label: "Revenue" },
    ];

    const connections = [
      [0, 1], [0, 2],
      [1, 3], [1, 4],
      [2, 4], [2, 5],
      [3, 6], [4, 6], [4, 7],
      [5, 7], [6, 8], [7, 8],
    ];

    let animationFrame: number;
    let time = 0;

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      ctx.clearRect(0, 0, width, height);

      // Draw connections
      connections.forEach(([from, to], index) => {
        const fromNode = nodes[from];
        const toNode = nodes[to];
        
        const x1 = fromNode.x * width;
        const y1 = fromNode.y * height;
        const x2 = toNode.x * width;
        const y2 = toNode.y * height;

        // Animated gradient on lines
        const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
        const pulse = (Math.sin(time * 0.02 + index * 0.5) + 1) / 2;
        
        gradient.addColorStop(0, `rgba(14, 165, 233, ${0.2 + pulse * 0.3})`);
        gradient.addColorStop(0.5, `rgba(14, 165, 233, ${0.4 + pulse * 0.4})`);
        gradient.addColorStop(1, `rgba(14, 165, 233, ${0.2 + pulse * 0.3})`);

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Data particles flowing along connections
        const particleProgress = ((time * 0.01 + index * 0.3) % 1);
        const px = x1 + (x2 - x1) * particleProgress;
        const py = y1 + (y2 - y1) * particleProgress;

        ctx.beginPath();
        ctx.arc(px, py, 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(14, 165, 233, ${0.8})`;
        ctx.fill();
      });

      // Draw nodes
      nodes.forEach((node, index) => {
        const x = node.x * width;
        const y = node.y * height;
        const pulse = (Math.sin(time * 0.03 + index) + 1) / 2;
        const size = node.size + pulse * 3;

        // Outer glow
        const glowGradient = ctx.createRadialGradient(x, y, 0, x, y, size * 3);
        glowGradient.addColorStop(0, `rgba(14, 165, 233, ${0.15 + pulse * 0.1})`);
        glowGradient.addColorStop(1, "rgba(14, 165, 233, 0)");

        ctx.beginPath();
        ctx.arc(x, y, size * 3, 0, Math.PI * 2);
        ctx.fillStyle = glowGradient;
        ctx.fill();

        // Node border
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(14, 165, 233, ${0.6 + pulse * 0.4})`;
        ctx.lineWidth = 2;
        ctx.stroke();

        // Node fill
        const fillGradient = ctx.createRadialGradient(x, y, 0, x, y, size);
        fillGradient.addColorStop(0, `rgba(14, 165, 233, ${0.3 + pulse * 0.2})`);
        fillGradient.addColorStop(1, `rgba(14, 165, 233, ${0.1})`);

        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = fillGradient;
        ctx.fill();

        // Inner core
        ctx.beginPath();
        ctx.arc(x, y, size * 0.3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${0.6 + pulse * 0.4})`;
        ctx.fill();
      });

      time++;
      animationFrame = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="relative w-full h-full float">
      {/* Glassmorphism backdrop */}
      <div className="absolute inset-8 lg:inset-4 rounded-3xl bg-secondary/30 backdrop-blur-sm border border-border/30 overflow-hidden">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-electric/5 via-transparent to-navy/5" />
        
        {/* Canvas */}
        <canvas
          ref={canvasRef}
          className="w-full h-full"
          style={{ display: "block" }}
        />
      </div>

      {/* Floating label */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 glass-card px-4 py-2 rounded-full">
        <span className="text-xs font-medium text-muted-foreground">
          Real-time Revenue Engine
        </span>
      </div>
    </div>
  );
};
