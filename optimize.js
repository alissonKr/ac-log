const sharp = require('sharp');
const path = require('path');

const imagens = [
  { input: 'assets/caminhao.png', output: 'assets/caminhao.png', width: 1920 },
  { input: 'assets/fachada.png', output: 'assets/fachada.png', width: 800 },
  { input: 'assets/van1.png', output: 'assets/van1.png', width: 800 },
  { input: 'assets/van2.png', output: 'assets/van2.png', width: 800 },
];

async function otimizar() {
  for (const img of imagens) {
    await sharp(img.input)
      .resize({ width: img.width, withoutEnlargement: true })
      .png({ quality: 80, compressionLevel: 9 })
      .toFile(img.output + '.tmp')
      .then(() => {
        require('fs').renameSync(img.output + '.tmp', img.output);
        console.log(`Otimizado: ${img.input}`);
      });
  }
}

otimizar();
