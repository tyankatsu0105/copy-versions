#!/usr/bin/env node

const path = require('path')
const execa = require('execa');

const problemPackage = 'cowsay';

const execCommand = require('../util/execCommand')

const {devDependencies, dependencies} = require(path.resolve(process.cwd(), 'package.json'));
const problemPackageVersion = {...devDependencies, ...dependencies}[problemPackage]

const nodeVersion = execCommand('node -v', 'Can\'t find node\n');
const yarnVersion = execCommand('yarn -v', 'Can\'t find yarn\n');
const npmVersion =  execCommand('npm -v', 'Can\'t find npm\n');

const report = `package version : ${problemPackageVersion}\nnode version : ${nodeVersion}yarn version : ${yarnVersion}npm version : ${npmVersion}`

console.log(report);


// (async () => {
//   const {stdout} = await execa('echo', report);
//   console.log(stdout);
//   //=> 'unicorns'
// })();