const {exec} = require('child_process');
const sh = require('shelljs');

const execCommand = (command) => {
  return sh.exec(command, {silent:true});
}

module.exports = execCommand;