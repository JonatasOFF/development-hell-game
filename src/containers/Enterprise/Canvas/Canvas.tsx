import React, { useEffect, useRef, useState } from 'react';

import { CanvasProps } from './interfaces';

export const Canvas = ({ containerRef }: CanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [c, setCanvas] = useState<CanvasRenderingContext2D>(
    {} as CanvasRenderingContext2D,
  );

  const background = () => {
    const canvas = canvasRef.current as HTMLCanvasElement;
    c.fillStyle = 'rgba(0,0,0,0.5)';
    c.fillRect(0, 0, canvas.width, canvas.height);
  };

  const drawCloud = (x: number, y: number) => {
    c.beginPath();
    c.arc(x, y, 30, Math.PI * 0.5, Math.PI * 1.5);
    c.arc(x + 75, y - 30, 70, Math.PI * 1, Math.PI * 1.85);
    c.arc(x + 152, y - 30, 50, Math.PI * 1.37, Math.PI * 1.91);
    c.arc(x + 200, y, 30, Math.PI * 1.5, Math.PI * 0.5);
    c.moveTo(x + 200, y + 30);
    c.lineTo(x, y + 30);
    c.strokeStyle = '#ace0de78';
    c.stroke();
    c.fillStyle = '#ace0de78';
    c.fill();
  };

  const windowBuilding = (
    x: number,
    y: number,
    height: number,
    width: number,
  ) => {
    c.beginPath();
    c.moveTo(x, y + 20);
    c.lineTo(x + width, y);
    c.lineTo(x + width, y + 10);
    c.lineTo(x, y + 30);
    c.fill();
    c.stroke();
  };

  const bodyBuilding = (
    x: number,
    y: number,
    height: number,
    width: number,
  ) => {
    const angule = 30;

    c.beginPath();
    c.moveTo(x, y);
    c.lineTo(x + width, y - angule);
    c.lineTo(x + width, y + height + angule);
    c.lineTo(x, y + height + angule);
    c.lineTo(x, y);
    c.strokeStyle = '#024b6c';
    c.fillStyle = '#014a6b';
    c.fill();
    c.stroke();
    c.beginPath();

    c.moveTo(x + width, y - angule);
    c.lineTo(x + width * 2, y);
    c.lineTo(x + width * 2, y + height + angule);
    c.lineTo(x + width, y + height + angule);
    c.fillStyle = '#0695d9';
    c.strokeStyle = '#0695d9';
    c.fill();
    c.stroke();

    c.strokeStyle = 'white';
    c.fillStyle = 'white';
    c.save();
    for (let lines = 1; lines < height / 55; lines++) {
      const distance = lines * 55;

      windowBuilding(x, y + distance, height, width);

      c.fillRect(x + width, y + distance, width - width / 2, 10);
    }
  };

  function drawStuff() {
    // const heightBuilding = 780;
    const widthBuilding = 250;
    const canvas = canvasRef.current as HTMLCanvasElement;
    background();
    bodyBuilding(
      canvas.width / 2 - widthBuilding,
      150,
      canvas.height,
      widthBuilding,
    );
    drawCloud(60, 170);
    drawCloud(canvas.width - 190, 170);
  }

  function resizeCanvas() {
    if (containerRef.current) {
      const canvas = canvasRef.current as HTMLCanvasElement;
      canvas.width = containerRef.current.clientWidth;
      canvas.height = containerRef.current.clientHeight;
      drawStuff();
    }
  }

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;

      setCanvas(canvas.getContext('2d') as CanvasRenderingContext2D);
    }
  }, [canvasRef]);

  useEffect(() => {
    if (c.canvas) {
      resizeCanvas();
      window.addEventListener('resize', resizeCanvas);
    }
  }, [c]);

  return <canvas ref={canvasRef} />;
};
