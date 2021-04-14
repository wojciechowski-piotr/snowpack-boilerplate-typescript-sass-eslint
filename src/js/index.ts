import confetti from 'canvas-confetti';
import hello from './hello';

confetti.create(document.getElementById('canvas') as HTMLCanvasElement, {
  resize: true,
  useWorker: true,
})({ particleCount: 200, spread: 200 });

console.log(hello('Pedro'));
