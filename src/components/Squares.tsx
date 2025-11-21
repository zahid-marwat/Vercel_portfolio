'use client'

import { useRef, useEffect, useState } from 'react';

interface SquaresProps {
  direction?: 'right' | 'left' | 'up' | 'down' | 'diagonal';
  speed?: number;
  borderColor?: string;
  squareSize?: number;
  hoverFillColor?: string;
  frameLimit?: number;
}

const Squares = ({
  direction = 'right',
  speed = 0.3, // Reduced from 1 for better performance
  borderColor = '#999',
  squareSize = 40,
  hoverFillColor = '#222',
  frameLimit = 30 // 30 FPS limit for better performance
}: SquaresProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestRef = useRef<number | null>(null);
  const numSquaresX = useRef(0);
  const numSquaresY = useRef(0);
  const gridOffset = useRef({ x: 0, y: 0 });
  const hoveredSquareRef = useRef<{ x: number; y: number } | null>(null);
  const lastFrameTime = useRef(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isTabVisible, setIsTabVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Fix 1: Visibility-Based Animation Control
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsTabVisible(!document.hidden);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  // Fix 2: Intersection Observer for Page-Specific Animations
  useEffect(() => {
    if (!canvasRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    observer.observe(canvasRef.current);
    return () => observer.disconnect();
  }, []);

  // Mobile detection for reduced quality
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !isVisible || !isTabVisible) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Fix 3: Reduce Animation Complexity on mobile
    const effectiveSquareSize = isMobile ? squareSize * 2 : squareSize; // Increased from 1.5
    const effectiveSpeed = isMobile ? speed * 0.5 : speed;

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio, isMobile ? 1 : 2); // Reduce DPR on mobile
      const rect = canvas.getBoundingClientRect();

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      ctx.scale(dpr, dpr);
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';

      numSquaresX.current = Math.ceil(rect.width / effectiveSquareSize) + 1;
      numSquaresY.current = Math.ceil(rect.height / effectiveSquareSize) + 1;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const drawGrid = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const startX = Math.floor(gridOffset.current.x / effectiveSquareSize) * effectiveSquareSize;
      const startY = Math.floor(gridOffset.current.y / effectiveSquareSize) * effectiveSquareSize;

      for (let x = startX; x < canvas.width + effectiveSquareSize; x += effectiveSquareSize) {
        for (let y = startY; y < canvas.height + effectiveSquareSize; y += effectiveSquareSize) {
          const squareX = x - (gridOffset.current.x % effectiveSquareSize);
          const squareY = y - (gridOffset.current.y % effectiveSquareSize);

          if (
            hoveredSquareRef.current &&
            Math.floor((x - startX) / effectiveSquareSize) === hoveredSquareRef.current.x &&
            Math.floor((y - startY) / effectiveSquareSize) === hoveredSquareRef.current.y
          ) {
            ctx.fillStyle = hoverFillColor;
            ctx.fillRect(squareX, squareY, effectiveSquareSize, effectiveSquareSize);
          }

          ctx.strokeStyle = borderColor;
          ctx.strokeRect(squareX, squareY, effectiveSquareSize, effectiveSquareSize);
        }
      }

      // Reduced gradient complexity on mobile
      if (!isMobile) {
        const gradient = ctx.createRadialGradient(
          canvas.width / 2,
          canvas.height / 2,
          0,
          canvas.width / 2,
          canvas.height / 2,
          Math.sqrt(canvas.width ** 2 + canvas.height ** 2) / 2
        );
        gradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
        gradient.addColorStop(1, '#060010');

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
    };

    // Fix 4: Frame Rate Limiting
    const updateAnimation = (currentTime: number) => {
      if (!isVisible || !isTabVisible) return;

      const deltaTime = currentTime - lastFrameTime.current;
      const effectiveFrameLimit = isMobile ? 15 : frameLimit; // Force 15fps on mobile
      const frameInterval = 1000 / effectiveFrameLimit;

      if (deltaTime >= frameInterval) {
        const adjustedSpeed = Math.max(effectiveSpeed, 0.1);

        switch (direction) {
          case 'right':
            gridOffset.current.x = (gridOffset.current.x - adjustedSpeed + effectiveSquareSize) % effectiveSquareSize;
            break;
          case 'left':
            gridOffset.current.x = (gridOffset.current.x + adjustedSpeed + effectiveSquareSize) % effectiveSquareSize;
            break;
          case 'up':
            gridOffset.current.y = (gridOffset.current.y + adjustedSpeed + effectiveSquareSize) % effectiveSquareSize;
            break;
          case 'down':
            gridOffset.current.y = (gridOffset.current.y - adjustedSpeed + effectiveSquareSize) % effectiveSquareSize;
            break;
          case 'diagonal':
            gridOffset.current.x = (gridOffset.current.x - adjustedSpeed + effectiveSquareSize) % effectiveSquareSize;
            gridOffset.current.y = (gridOffset.current.y - adjustedSpeed + effectiveSquareSize) % effectiveSquareSize;
            break;
          default:
            break;
        }

        drawGrid();
        lastFrameTime.current = currentTime;
      }

      requestRef.current = requestAnimationFrame(updateAnimation);
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (isMobile) return; // Disable hover effects on mobile for performance

      const rect = canvas.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;

      const startX = Math.floor(gridOffset.current.x / effectiveSquareSize) * effectiveSquareSize;
      const startY = Math.floor(gridOffset.current.y / effectiveSquareSize) * effectiveSquareSize;

      const hoveredSquareX = Math.floor((mouseX + gridOffset.current.x - startX) / effectiveSquareSize);
      const hoveredSquareY = Math.floor((mouseY + gridOffset.current.y - startY) / effectiveSquareSize);

      if (
        !hoveredSquareRef.current ||
        hoveredSquareRef.current.x !== hoveredSquareX ||
        hoveredSquareRef.current.y !== hoveredSquareY
      ) {
        hoveredSquareRef.current = { x: hoveredSquareX, y: hoveredSquareY };
      }
    };

    const handleMouseLeave = () => {
      hoveredSquareRef.current = null;
    };

    if (!isMobile) {
      canvas.addEventListener('mousemove', handleMouseMove);
      canvas.addEventListener('mouseleave', handleMouseLeave);
    }

    requestRef.current = requestAnimationFrame(updateAnimation);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      if (!isMobile) {
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [direction, speed, borderColor, hoverFillColor, squareSize, frameLimit, isVisible, isTabVisible, isMobile]);

  return <canvas ref={canvasRef} className="w-full h-full border-none block" />;
};

export default Squares;
