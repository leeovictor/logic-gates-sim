const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d')!

ctx.fillStyle = 'rgb(200, 3, 230)';
ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(200, 100)
ctx.lineTo(150, 200)
ctx.fill();