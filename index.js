const fs = require('fs');
const path = require('path');
const childProcess = require('child_process');

let cnt = 0;

const dostuff = () => {
  const filename = `img/${(++cnt).toString().padStart(3, '0')}.png`;
  childProcess.spawn(path.join(__dirname, 'nircmd.exe'), [
    'savescreenshot',
    filename
  ]);
};

(async () => {
  if (!fs.existsSync('img')) {
    await fs.promises.mkdir('img');
  }
  dostuff();
  setInterval(() => dostuff(), 10 * 1000);
})();
