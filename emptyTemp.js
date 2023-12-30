const cron = require('node-cron');
const fs = require('fs');
const path = require('path');

// Planen Sie einen Task, der alle 2 Stunden ausgeführt wird
cron.schedule('0 */2 * * *', function () {
  const directory = path.join(__dirname, 'temp');

  fs.readdir(directory, (err, files) => {
    if (err) throw err;

    for (const file of files) {
      fs.unlink(path.join(directory, file), err => {
        if (err) throw err;
      });
    }
  });
});