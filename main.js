const vibes = [
  ['#e8c98b', 'A little golden hour.'],
  ['#b9d9aa', 'Fresh as a new deploy.'],
  ['#c5b6ed', 'A little out of this world.'],
  ['#f0b5a1', 'Well, that’s just peachy.'],
];
let clicks = 0;

document.querySelector('button').addEventListener('click', () => {
  const [color, message] = vibes[++clicks % vibes.length];
  document.documentElement.style.setProperty('--accent', color);
  document.querySelector('.spark').style.transform = `rotate(${clicks * 90}deg)`;
  document.querySelector('.hint').textContent = message;
});
