import orImg from './images/or.png';
import andImg from './images/and.png';

const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d')!

function loadImage(imgPath: string): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.addEventListener('load', () => resolve(img));
        img.addEventListener('error', reject);
        img.src = imgPath;
    });
}

async function main() {
    const or = await loadImage(orImg);
    const and = await loadImage(andImg)
    
    ctx.rotate(Math.PI / 180 * 15);
    ctx.translate(250, 0);
    ctx.drawImage(or, 0, 0, 120, 120);
    ctx.drawImage(and, 150, 0, 120, 120);
}

main();