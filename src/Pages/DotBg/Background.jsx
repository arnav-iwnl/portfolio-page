import React, { useEffect, useRef } from 'react';

const InteractiveTopography = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let mouseX = 0;
    let mouseY = 0;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    let time = 0;
    const animate = () => {
      time += 0.003;
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < 50; i++) {
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
        ctx.lineWidth = 1;

        for (let x = 0; x < canvas.width; x += 5) {
          const distX = (x - mouseX) / canvas.width;
          const distY = (i * 20 - mouseY) / canvas.height;
          const displacement = Math.sin(distX * 5 + time) * 50 * Math.exp(-distX * distX - distY * distY);
          
          const y = i * 20 + Math.sin(x * 0.01 + time + i * 0.5) * 20 + displacement;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
    ref={canvasRef}
    className="fixed inset-0 -z-10 bg-black"
    style={{ touchAction: 'none' }}
  />
  );
};

export default InteractiveTopography;