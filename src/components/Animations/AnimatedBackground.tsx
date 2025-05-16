import React, { useEffect, useRef } from 'react';

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Circuit node class
    class Node {
      x: number;
      y: number;
      radius: number;
      color: string;
      connectedNodes: Node[];
      pulse: boolean;
      pulseOpacity: number;
      speed: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.radius = Math.random() * 1.5 + 0.5;
        this.color = Math.random() > 0.5 ? '#3b82f6' : '#8b5cf6';
        this.connectedNodes = [];
        this.pulse = false;
        this.pulseOpacity = 0;
        this.speed = Math.random() * 0.02 + 0.01;
      }

      startPulse() {
        this.pulse = true;
        this.pulseOpacity = 1;
        
        // Propagate pulse to connected nodes with delay
        setTimeout(() => {
          this.connectedNodes.forEach(node => {
            if (!node.pulse) {
              node.startPulse();
            }
          });
        }, Math.random() * 200 + 100);
      }

      update() {
        if (this.pulse) {
          this.pulseOpacity -= 0.02;
          if (this.pulseOpacity <= 0) {
            this.pulse = false;
            this.pulseOpacity = 0;
          }
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        // Draw node
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();

        // Draw pulse
        if (this.pulse) {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius + 5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(59, 130, 246, ${this.pulseOpacity * 0.3})`;
          ctx.fill();
        }

        // Draw connections
        this.connectedNodes.forEach(node => {
          ctx.beginPath();
          ctx.moveTo(this.x, this.y);
          ctx.lineTo(node.x, node.y);
          
          // Line color depends on pulse state
          if (this.pulse || node.pulse) {
            ctx.strokeStyle = `rgba(59, 130, 246, ${Math.max(this.pulseOpacity, node.pulseOpacity) * 0.7})`;
          } else {
            ctx.strokeStyle = 'rgba(59, 130, 246, 0.2)';
          }
          
          ctx.lineWidth = 0.5;
          ctx.stroke();
        });
      }
    }

    // Create nodes
    const nodeCount = Math.floor(window.innerWidth * window.innerHeight / 15000);
    const nodes: Node[] = [];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push(new Node(
        Math.random() * canvas.width,
        Math.random() * canvas.height
      ));
    }

    // Connect nodes
    nodes.forEach(node => {
      // Find 1-3 closest nodes to connect to
      const connectCount = Math.floor(Math.random() * 3) + 1;
      
      // Calculate distances to all other nodes
      const distances = nodes
        .filter(otherNode => otherNode !== node)
        .map(otherNode => {
          const distance = Math.sqrt(
            Math.pow(node.x - otherNode.x, 2) + 
            Math.pow(node.y - otherNode.y, 2)
          );
          return { node: otherNode, distance };
        })
        .sort((a, b) => a.distance - b.distance);
      
      // Connect to closest nodes within maximum distance
      const maxDistance = canvas.width / 10;
      distances
        .filter(d => d.distance < maxDistance)
        .slice(0, connectCount)
        .forEach(d => {
          node.connectedNodes.push(d.node);
        });
    });

    // Start random pulses
    const startRandomPulses = () => {
      if (nodes.length > 0) {
        const randomIndex = Math.floor(Math.random() * nodes.length);
        const randomNode = nodes[randomIndex];
        
        if (randomNode) {
          randomNode.startPulse();
        }
        
        // Schedule next pulse
        setTimeout(startRandomPulses, Math.random() * 2000 + 1000);
      }
    };

    startRandomPulses();

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw nodes
      nodes.forEach(node => {
        node.update();
        node.draw(ctx);
      });
      
      requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full z-0 bg-black"
    />
  );
};

export default AnimatedBackground;