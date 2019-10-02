const {execSync} = require('child_process');

const execCommand = (command, fallback) => {
  try {
    return execSync(command)
  } catch  {
    return fallback;
  }
}

 module.exports = execCommand;